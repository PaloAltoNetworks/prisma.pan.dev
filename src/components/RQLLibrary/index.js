/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import IconArrow from "@theme/IconArrow";
import Layout from "@theme/Layout";
import clsx from "clsx";
import queryString from "query-string";
import React, { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import Button from "../../theme/Button";
import RQLLibrarySidebar from "../../theme/RQLLibrarySidebar";
import styles from "./styles.module.css";
import CodeBlock from "../../theme/CodeBlock";

const TITLE = "Prisma Cloud RQL Library";
const DESCRIPTION = "Prisma Cloud RQL Query Examples";

function RQLLibrary() {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const { siteConfig } = useDocusaurusContext();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    setHiddenSidebarContainer(!hiddenSidebarContainer);
  }, [hiddenSidebar]);
  const RQLLibrary = [
    {
      id: "cft-ec2",
      description:
        "CloudFormation Template does not contain termination protection for EC2 Instances",
      provider: ["aws", "gcp"],
      service: ["iam"],
      query: "join people testing int float 10",
      votes: 1,
    },
    {
      id: "test-this",
      description: "Test2",
      provider: ["azure"],
      service: ["iam", "legend"],
      query: "Will Smith but make it code",
      votes: 1,
    },
  ];

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

  const preFilteredRQLQueries = RQLLibrary.filter((rql_query) => {
    for (var key in filters) {
      if (key == "providers" && rql_query[key].includes(provider)) return true;

      if (key == "services" && rql_query[key].includes(services)) return true;
    }
    return true;
  });

  // Keyword input filter
  const filteredRQLQueries = preFilteredRQLQueries.filter((rql_query) => {
    if (!value) return true;
    if (
      rql_query.name.toLowerCase().includes(value.toLowerCase()) ||
      rql_query.description.toLowerCase().includes(value.toLowerCase())
    ) {
      return true;
    }
  });

  const totalFilteredRQLQueries = filteredRQLQueries.length;

  // Generate Provider options
  function generateProviders() {
    const dictionary = {};
    let categories = [];
    let combinedProviders = [];
    filteredRQLQueries.map((pack) => {
      combinedProviders.push(pack.categories);
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
      categories.push({
        label: dictionary[provider]
          ? `${provider} (${dictionary[provider]["count"]})`
          : provider,
        value: provider,
      });
    });
    return categories;
  }

  // Generate Service Options
  function generateServices() {
    const dictionary = {};
    let categories = [];
    let combinedServices = [];
    filteredRQLQueries.map((rql_query) => {
      combinedServices.push(rql_query.categories);
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
      categories.push({
        label: dictionary[service]
          ? `${service} (${dictionary[service]["count"]})`
          : service,
        value: service,
      });
    });
    return categories;
  }

  return (
    <Layout
      title={TITLE}
      description={DESCRIPTION}
      wrapperClassName="main-docs-wrapper"
    >
      <div
        className={clsx(styles.docSidebarContainer, {
          [styles.docSidebarContainerHidden]: hiddenSidebarContainer,
        })}
        onTransitionEnd={(e) => {
          if (!e.currentTarget.classList.contains(styles.docSidebarContainer)) {
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
          path="/RQLLibrary/"
          sidebarCollapsible={
            siteConfig.themeConfig?.sidebarCollapsible ?? true
          }
          onCollapse={toggleSidebar}
          isHidden={hiddenSidebar}
          search={setValue}
          totalRQLQueries={RQLLibrary.length}
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

      <main
        className={clsx(styles.docMainContainer, {
          [styles.docMainContainerEnhanced]: hiddenSidebarContainer,
        })}
      >
        <div
          className={clsx("container padding-vert--lg", styles.docItemWrapper, {
            [styles.docItemWrapperEnhanced]: hiddenSidebarContainer,
          })}
        >
          <div className="row">
            {filteredRQLQueries.map((rql_query) => (
              <div
                key={rql_query.id}
                className={"col col--12 margin-bottom--lg"}
              >
                <div
                  className={clsx("card shadow--md", styles.contentRQLQuery)}
                >
                  <div className="card__body">
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <h4
                          className={clsx(
                            "avatar__name",
                            "text text--primary",
                            styles.rql_queryDescription,
                            styles.ellipsis
                          )}
                          title={rql_query.description}
                        >
                          {rql_query.description}
                        </h4>
                        <CodeBlock className="bash">
                          {rql_query.query}
                        </CodeBlock>
                      </div>
                    </div>
                  </div>
                  <div className="card__footer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default RQLLibrary;
