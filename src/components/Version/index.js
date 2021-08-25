import React, { useRef, version } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const versions = [
  {
    title: "21.08 (Latest)",
    to: "/api/cloud/cwpp",
  },
  {
    title: "21.04",
    to: "/api/cloud/cwpp/21-04/",
  },
];

function Version(docVer) {
  return (
    <div>
      <div class="dropdown dropdown--hoverable">
        <button class="button button--secondary button--version">
          Choose Version
        </button>
        <ul class="dropdown__menu">
          {versions.map((props, i) => (
            <li key={i}>
              <a class="dropdown__link" href={useBaseUrl(props.to)}>
                {props.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Version;
