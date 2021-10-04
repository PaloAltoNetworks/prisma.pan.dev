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
      <div className="dropdown dropdown--hoverable">
        <button className="button button--secondary button--version">
          Choose Version
        </button>
        <ul className="dropdown__menu">
          {versions.map((props, i) => (
            <li key={i}>
              <a className="dropdown__link" href={useBaseUrl(props.to)}>
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
