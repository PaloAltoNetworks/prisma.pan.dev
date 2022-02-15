/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css";
import isInternalUrl from "@docusaurus/isInternalUrl";

function CardContainer({ href, children }) {
  const className = clsx(
    "card margin-bottom--lg padding--lg",
    styles.cardContainer,
    href && styles.cardContainerLink
  );
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}

export default function CardLayout({ href, title, description }) {
  return (
    <CardContainer href={href}>
      <h2 className={clsx(styles.cardTitle)} title={title}>
        {title}
      </h2>
      <div className={clsx(styles.cardDescription)} title={description}>
        {description}
      </div>
    </CardContainer>
  );
}
