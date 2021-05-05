/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import IconArrow from "@theme/IconArrow";
import clsx from "clsx";
import queryString from "query-string";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RQLLibrarySidebar from "../../theme/RQLLibrarySidebar";
import styles from "./styles.module.css";
import CodeBlock from "../../theme/CodeBlock";

const TITLE = "Prisma Cloud RQL Library";
const DESCRIPTION = "Prisma Cloud RQL Query Examples";

function RQLLibrary() {
  const location = useLocation();
  console.log(location);
  const params = queryString.parse(location.search);
  const { siteConfig } = useDocusaurusContext();
  const QueryLibrary = siteConfig.customFields.QueryLibrary;
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    setHiddenSidebarContainer(!hiddenSidebarContainer);
  }, [hiddenSidebar]);

  const [provider, setProvider] = useState(false);
  const [service, setService] = useState(false);
  const [value, setValue] = useState("");

  // Parse URL query params
  useEffect(() => {
    if (!provider && params.provider) setProvider(params.provider);
    if (!service && params.service) setService(params.service);
  }, []);

  const filters = {
    ...(provider && { providers: provider }),
    ...(service && { services: service }),
  };

  const preFilteredRQLQueries = QueryLibrary.filter((rql_query) => {
    for (var key in filters) {
      if (key == "providers" && rql_query[key].includes(provider)) {
        return true;
      }
      if (key == "services" && rql_query[key].includes(service)) return true;
      if (rql_query[key] === undefined || rql_query[key] != filters[key])
        return false;
    }
    return true;
  });

  // Keyword input filter
  const filteredRQLQueries = preFilteredRQLQueries.filter((rql_query) => {
    if (!value) return true;
    if (
      rql_query.query.toLowerCase().includes(value.toLowerCase()) ||
      rql_query.description.toLowerCase().includes(value.toLowerCase())
    ) {
      return true;
    }
  });

  const totalFilteredRQLQueries = filteredRQLQueries.length;
  console.log(filteredRQLQueries);

  function generateProviders() {
    const dictionary = {};
    let providers = [];
    let combinedProviders = [];
    filteredRQLQueries.map((rql_query) => {
      combinedProviders.push(rql_query.providers);
    });
    const flattenedProviders = () => {
      var flat = [];
      for (var i = 0; i < combinedProviders.length; i++) {
        flat = flat.concat(combinedProviders[i]);
      }
      return flat;
    };
    const allProviders = flattenedProviders();
    allProviders.map((provider) => {
      dictionary[provider] = {
        name: provider,
        count: dictionary[provider] ? dictionary[provider]["count"] + 1 : 1,
      };
    });
    const uniqueProviders = new Set(allProviders);
    uniqueProviders.forEach((provider) => {
      providers.push({
        label: dictionary[provider]
          ? `${provider} (${dictionary[provider]["count"]})`
          : provider,
        value: provider,
      });
    });
    return providers;
  }

  function generateServices() {
    const dictionary = {};
    let services = [];
    let combinedServices = [];
    filteredRQLQueries.map((rql_query) => {
      combinedServices.push(rql_query.services);
    });
    const flattenedServices = () => {
      var flat = [];
      for (var i = 0; i < combinedServices.length; i++) {
        flat = flat.concat(combinedServices[i]);
      }
      return flat;
    };
    const allServices = flattenedServices();
    allServices.map((service) => {
      dictionary[service] = {
        name: service,
        count: dictionary[service] ? dictionary[service]["count"] + 1 : 1,
      };
    });
    const uniqueServices = new Set(allServices);
    uniqueServices.forEach((service) => {
      services.push({
        label: dictionary[service]
          ? `${service} (${dictionary[service]["count"]})`
          : service,
        value: service,
      });
    });
    return services;
  }

  return (
    <div className="row">
      <div className={"col col--8"}>
        <main
          className={clsx(styles.docMainContainer, {
            [styles.docMainContainerEnhanced]: hiddenSidebarContainer,
          })}
        >
          <div
            className={clsx(
              "container padding-vert--lg",
              styles.docItemWrapper,
              {
                [styles.docItemWrapperEnhanced]: hiddenSidebarContainer,
              }
            )}
          >
            <div className="row">
              {filteredRQLQueries.map((rql_query) => (
                <div
                  key={rql_query.id}
                  className={"col col--12 margin-bottom--md"}
                >
                  <div className={clsx("card", styles.queryContent)}>
                    <div className="card__header">
                      <h4
                        className={clsx(
                          "text text--primary",
                          styles.queryDescription
                        )}
                        title={rql_query.description}
                      >
                        {rql_query.description}
                      </h4>
                    </div>
                    <div className="card__body">
                      <div className="queryCode">
                        <CodeBlock className="bash">
                          {rql_query.query}
                        </CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <div className={"col col--4"}>
        <div
          className={clsx(styles.docSidebarContainer, {
            [styles.docSidebarContainerHidden]: hiddenSidebarContainer,
          })}
          onTransitionEnd={(e) => {
            if (
              !e.currentTarget.classList.contains(styles.docSidebarContainer)
            ) {
              return;
            }

            if (hiddenSidebarContainer) {
              setHiddenSidebar(true);
            }
          }}
          role="complementary"
        >
          <RQLLibrarySidebar
            sidebar={[
              {
                type: "select",
                label: "Cloud Provider",
                action: setProvider,
                options: generateProviders(),
                state: provider,
              },
              {
                type: "select",
                label: "Service",
                action: setService,
                options: generateServices(),
                state: service,
              },
            ]}
            path="/docs/cloud/cspm/rql_library"
            sidebarCollapsible={
              siteConfig.themeConfig?.sidebarCollapsible ?? true
            }
            onCollapse={toggleSidebar}
            isHidden={hiddenSidebar}
            search={setValue}
            totalRQLQueries={QueryLibrary.length}
            totalFilteredRQLQueries={totalFilteredRQLQueries}
          />

          {hiddenSidebar && (
            <div
              className={styles.collapsedDocSidebar}
              title={translate({
                id: "theme.docs.sidebar.expandButtonTitle",
                message: "Expand sidebar",
                description:
                  "The ARIA label and title attribute for expand button of doc sidebar",
              })}
              aria-label={translate({
                id: "theme.docs.sidebar.expandButtonAriaLabel",
                message: "Expand sidebar",
                description:
                  "The ARIA label and title attribute for expand button of doc sidebar",
              })}
              tabIndex={0}
              role="button"
              onKeyDown={toggleSidebar}
              onClick={toggleSidebar}
            >
              <IconArrow className={styles.expandSidebarButtonIcon} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RQLLibrary;
