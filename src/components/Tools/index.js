import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import React, { useRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Button from "../../theme/Button";
import { useMediaQuery } from "react-responsive";

const toolList = [
  {
    title: <>RQL Library</>,
    imageUrl: "img/book.svg",
    toPage: "/docs/cloud/cspm/rql/aws/aws_ec2",
    description: <>Sample RQL Queries</>,
  },
  {
    title: <>Cloud Policies</>,
    imageUrl: "/img/policies-white.svg",
    description: (
      <>
        JSON policies for Config, Network, Audit Event, and IAM on GitHub.
        <img className={styles.gh} src="/img/octocat.svg"></img>
      </>
    ),
    toSite: "https://github.com/PaloAltoNetworks/prisma-cloud-policies",
  },
  {
    title: <>Cloud Compute API</>,
    imageUrl: "img/open_api.svg",
    toPage: "/api/cloud/cwpp",
    description: <>Learn more about our Cloud Compute API.</>,
  },
  {
    title: <>Terraform Provider</>,
    imageUrl: "/img/terraform.svg",
    toSite:
      "https://registry.terraform.io/providers/PaloAltoNetworks/prismacloud/latest/docs",
    description: <>See our Prisma Cloud docs in the terraform registry.</>,
  },
  {
    title: <>Checkov</>,
    imageUrl: "/img/checkov.svg",
    toSite: "https://www.checkov.io/1.Introduction/Getting%20Started.html",
    description: (
      <>Prevent cloud misconfigurations during build time with Checkov.</>
    ),
  },
];

function Tool({ imageUrl, title, description, toPage, toSite }) {
  const imgUrl = useBaseUrl(imageUrl);
  const toUrl = toPage ? useBaseUrl(toPage) : toSite;
  const isBreakpoint = useMediaQuery({ query: "(max-width: 1200px)" });
  return (
    <div className={isBreakpoint ? "col col--4" : "col col--2"}>
      <Button
        className={clsx(styles.toolsButton)}
        variant="tool"
        href={toUrl}
        target="_self"
        uppercase={false}
        newTab={false}
      >
        <div className={clsx("card", styles.tools)}>
          <div className="card__header">
            <div className={styles.imageContainer}>
              {imgUrl && <img className={styles.toolsImage} src={imgUrl} />}
              <img className={styles.toolsBorder} src="img/prisma_circle.png" />
            </div>
          </div>
          <div className="card__body">
            <div className={styles.toolsTitle}>{title}</div>
            <div className={styles.toolsSummary}>{description}</div>
          </div>
        </div>
      </Button>
    </div>
  );
}

function Tools() {
  return (
    <div>
      <h1 className={styles.toolSection}> Popular Resources </h1>
      {toolList && toolList.length && (
        <div className={classnames("row centRow")}>
          {toolList.map((props, idx) => (
            <Tool key={idx} {...props} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tools;
