import React, { useRef, version } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

function Version() {
  const { siteConfig, siteMetadata } = useDocusaurusContext();
  return (
    <div>
      {siteConfig.customFields.api_versions.map((Ver, i) => (
        <Link
          className={
            "button button--outline button--secondary button--md " +
            (typeof window !== "undefined" &&
            window.location.pathname.split("/")[2] ==
              useBaseUrl(Ver.to).split("/")[2]
              ? "button--active--tab shadow--lw"
              : "")
          }
          style={{
            borderRadius: "0 0 0 0",
            borderColor: "var(--ifm-contents-border-color)",
            borderWidth: "0",
            padding:
              "calc( var(--ifm-button-padding-vertical) * 1.5  ) calc( var(--ifm-button-padding-horizontal) * .65 )",
          }}
          key={i}
          to={useBaseUrl(Ver.to)}
        >
          {Ver.label}
        </Link>
      ))}
    </div>
  );
}

export default Version;
