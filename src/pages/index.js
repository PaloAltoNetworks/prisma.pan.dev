/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import classnames from "classnames";
import React, { useRef } from "react";
import ScrollUpButton from "react-scroll-up-button";
import styles from "./styles.module.css";

const features = [
  {
    title: <>What is Prisma?</>,
    imageUrl: "img/prismalogo.png",
    description: (
      <>
        Prisma is a comprehensive cloud security suite that allows organizations to protect their users, 
        applications and data, regardless of where they’re located.
      </>
    ),
    button: (
      <div className={styles.buttons}>
        <Link
          className={classnames(
            "button button--outline button--primary button--md",
            styles.getStarted
          )}
          href="/docs/whatisprisma"
        >
          Learn More
        </Link>
      </div>
    )
  },
  {
    title: <>APIs and SDKs</>,
    imageUrl: "img/prisma_api.png",
    description: (
      <>
        Our APIs and SDKs provide a collection of open, feature-rich automation
        opportunities for configuration and management.
      </>
    ),
    button: (
      <div className={styles.buttons}>
        <Link
          className={classnames(
            "button button--outline button--primary button--md",
            styles.getStarted
          )}
          href="/docs/cloud_api"
        >
          Learn More
        </Link>
      </div>
    )
  }
];

function Feature({ imageUrl, title, description, button }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--6", styles.features)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {button}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth" });
  const vertificalsRef = useRef(null);
  const toolsRef = useRef(null);
  const scrollToVerticals = () => scrollToRef(vertificalsRef);
  const scrollToTools = () => scrollToRef(toolsRef);
  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="All things related to automation and development with PAN-OS®"
    >
      <ScrollUpButton />
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
        <div className={styles.hero}>
            <div className={styles.heroInner}>
              <h1 className={styles.heroProjectTagline}>
                <img
                  alt="Prisma"
                  className={styles.heroLogo}
                  src={useBaseUrl("img/prismalogo.png")}
                />
                Develop for the{" "}
                <span className={styles.heroProjectKeywords}>journey</span>{" "}
                to the{" "}
                <span className={styles.heroProjectKeywords}>
                  cloud
                </span>{" "}
                with Prisma
              </h1>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    "button button--outline button--info button--lg",
                    styles.getStarted
                  )}
                  onClick={scrollToTools}
                >
                  Explore Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features} ref={vertificalsRef}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.tools} ref={toolsRef}>
          <div className="container">
            <div className="row">

              {/* Twistlock */}
              <div className={classnames("col col--12", styles.tools)}>
                <div className="text text--center">
                  <img
                    className={styles.toolImage}
                    src="img/twistlocklogo.png"
                    alt="PAN Device Framework"
                  />
                </div>
                <h4 className={styles.text__blue}>twistcli</h4>
                <p className={styles.text__gray}>
                  Scan container images with twistcli
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.quickstart
                    )}
                    href="/docs/twistcli_gs"
                  >
                    Quickstart
                  </Link>
                  <Link
                    className={classnames(
                      "button button--outline button--primary button--md",
                      styles.github
                    )}
                    href="https://github.com/PaloAltoNetworks/pandevice"
                  >
                    <img
                      src="/img/GitHub_Logo_White.png"
                      width="auto"
                      height="19"
                    />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
