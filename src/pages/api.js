import { RedocStandalone } from "redoc";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import classnames from "classnames";
import React, { useRef } from "react";
import ScrollUpButton from "react-scroll-up-button";
import styles from "./styles.module.css";

function API() {
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
      description="All things related to automation and development with Demisto"
    >
      <main>
          <RedocStandalone
  specUrl="https://raw.githubusercontent.com/Redocly/redoc/master/demo/openapi.yaml"
  options={{
    requiredPropsFirst: true,
    noAutoAuth: true,
    hideDownloadButton: true,
    onlyRequiredInSamples: true,
    nativeScrollbars: true,
    scrollYOffset: 60,
    theme: { colors: { primary: { main: "#00C0E8" } } },
  }}
/>;
      </main>
    </Layout>
  );
}

export default API;
