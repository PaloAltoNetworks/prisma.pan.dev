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
import styles from "./styles.module.css";

function Docs() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth" });
  const vertificalsRef = useRef(null);
  const toolsRef = useRef(null);
  const scrollToVerticals = () => scrollToRef(vertificalsRef);
  const scrollToTools = () => scrollToRef(toolsRef);
  return (
    <Layout>
      <main>
        <section className={styles.doc}>
          <div className="container">
            <h1>Prisma For Developers</h1>
            <description>
               Secure your cloud with a comprehensive quite of security services to effectively predict, 
               prevent, detect, and automatically respond to security and compliance risks without creating 
               friction for users, developers, and security and network administrators.
            </description>
            <br></br>
            <br></br>
            <div className="row minheight">
              <div className="col col--6">
                <div class="card shadow--md">
                  <div class="card__header">
                    <h3>Prisma Cloud Compute</h3>
                    <description>
                    Cloud native security for hosts, containers and serverless workloads and runs 
                    in any cloud or datacenter including fully air-gapped environments.
                    </description>
                  </div>
                  <div class="card__body">
                    <Link href={useBaseUrl("docs/twistcli_gs")}>
                      twistcli
                    </Link>
                    <br></br>
                    <Link href={useBaseUrl("docs/policy_samples")}>
                      Policy Samples
                    </Link>
                  </div>
                  <div class="card__footer">
                    <Link
                      className={classnames(
                        "button button--primary stretch",
                        styles.docs
                      )}
                      href={useBaseUrl("/docs/cloud_api")}
                    >
                      GO
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row"></div>
            <div className="col col--12">
              <h3>Want to contribute? See something missing?</h3>
              <description>
                Visit our{" "}
                <a href={useBaseUrl("docs/contributing")}>Contributing Guide</a>{" "}
                to learn how easy it is to help make Prisma for Developers
                better!
              </description>
              <br></br>
              <br></br>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Docs;