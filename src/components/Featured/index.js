import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import React, { useRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Button from "../../theme/Button";
import { useMediaQuery } from "react-responsive";

const features = [
  {
    title: <>Get Started</>,
    imageUrl: "img/rocket.svg",
    description: (
      <>
        Get started developing with Prisma.
        <br />
        <a
          target="_self"
          href="/docs/cloud/cspm/cspm-gs"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Cloud Security Posture Management
        </a>
        <br />
        <a
          target="_self"
          href="/docs/cloud/cwpp/cwpp-gs"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Cloud Workload Protection
        </a>
      </>
    ),
  },
  {
    title: <>API Reference</>,
    imageUrl: "/img/api.svg",
    toPage: "/api/cloud/",
    description: (
      <>
        Browse through interactive API Documentation for Prisma Cloud.
        <br />
        <a
          target="_self"
          href="/api/cloud/cspm"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Cloud Security Posture Management
        </a>
        <br />
        <a
          target="_self"
          href="/api/cloud/cwpp"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Cloud Workload Protection
        </a>
        <br />
        <a
          target="_self"
          href="/api/cloud/code"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Cloud Code Security
        </a>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description, toPage }) {
  const imgUrl = useBaseUrl(imageUrl);
  const toUrl = toPage ? useBaseUrl(toPage) : null;
  const isBreakpoint = useMediaQuery({ query: "(max-width: 1200px)" });
  /*
  if (toUrl) {
    return (
      <div className={isBreakpoint ? 'col col--6 margin-bottom--md' : 'col col--4 margin-bottom--md'}>
        <Button
          className={clsx(styles.featuredButton)}
          variant="plain"
          href={toUrl}
          target="_self"
          uppercase={false}
          newTab={false}
        >
          <div className={clsx('card shadow--lw', styles.featured)}>
            <div className="card__body">
              {imgUrl && <img className={styles.featuredImage} src={imgUrl} />}
              <div className={styles.featuredTitle}>{title}</div>
              <div className={styles.featuredSummary}>{description}</div>
            </div>
          </div>
        </Button>
      </div>
    );
  } 
  */
  return (
    <div
      className={
        isBreakpoint
          ? "col col--6 margin-bottom--md"
          : "col col--4 margin-bottom--md"
      }
    >
      <div className={styles.featuredLinks}>
        <div className={clsx("card shadow--lw", styles.featured)}>
          <div className="card__body">
            {imgUrl && <img className={styles.featuredImage} src={imgUrl} />}
            <div className={styles.featuredTitle}>{title}</div>
            <div className={styles.featuredSummary}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Featured() {
  return (
    <div>
      {features && features.length && (
        <div className={classnames("row centRow")}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Featured;
