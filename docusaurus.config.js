/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Prisma Developer Docs | Palo Alto Networks",
  url: process.env.CI_PAGES_URL
    ? process.env.CI_PAGES_URL
    : "https://prisma.pan.dev",
  baseUrl: process.env.CI_MERGE_REQUEST_IID
    ? `/-/${process.env.CI_PROJECT_NAME}/-/jobs/${process.env.CI_JOB_ID}/artifacts/public/`
    : "/",
  favicon: "img/prisma_favicon.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "prisma.pan.dev", // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: "caddcc77123a6dff437a768f47b785c3",
      indexName: "prisma_pan",
      searchParameters: {}, // Optional, if provided by Algolia
    },
    navbar: {
      title: "",
      logo: {
        alt: "Prisma for Developers",
        src: "/img/PAN_Prisma_Light.svg",
        srcDark: "/img/PAN_Prisma_Dark.svg",
      },
      items: [
        {
          to: "/docs/cloud/",
          label: "Docs",
          position: "left",
        },
        {
          label: "API Reference",
          items: [
            {
              to: "/api/cloud/",
              label: "Prisma Cloud Platform",
            },
          ],
          position: "left",
        },
        {
          label: "Products",
          items: [
            {
              href: "https://cortex.pan.dev",
              label: "Cortex Data Lake",
              className: "cortexItem",
              target: "_self",
            },
            {
              href: "https://xsoar.pan.dev",
              label: "Cortex XSOAR",
              className: "xsoarItem",
              target: "_self",
            },
            {
              href: "https://panos.pan.dev",
              label: "Strata",
              className: "strataItem",
              target: "_self",
            },
          ],
          position: "right",
        },
        {
          href: "https://medium.com/palo-alto-networks-developer-blog",
          position: "right",
          className: "header-medium-link",
          "aria-label": "Palo Alto Networks Developer Blog",
        },
        {
          href: "https://github.com/PaloAltoNetworks",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              to: "/api/cloud/",
              label: "API Docs",
            },
            {
              to: "docs/cloud",
              label: "Docs Homepage",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://medium.com/palo-alto-networks-developer-blog",
            },
          ],
        },
      ],
      logo: {
        alt: "PAN-OS® for Developers",
        src: "/img/PANW_Parent_Brand_Primary_Logo_RGB_KO.svg",
        href: "https://pan.dev",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`,
    },
  },
  themes: [
    require.resolve("@docusaurus/theme-live-codeblock"),
    require.resolve("./docusaurus-plugin-panw"),
  ],
  presets: [
    [
      require.resolve("@docusaurus/preset-classic"),
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/PaloAltoNetworks/prisma.pan.dev/tree/master/",
          routeBasePath: "docs",
          include: ["**/*.md", "**/*.mdx"], // Extensions to include.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/DocItem",
          remarkPlugins: [],
          rehypePlugins: [],
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-sitemap",
      {
        id: "prisma-sitemap",
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        sidebarPath: require.resolve("./api.sidebars.js"),
        editUrl:
          "https://github.com/PaloAltoNetworks/prisma.pan.dev/tree/master/",
        routeBasePath: "api",
        include: ["**/*.md", "**/*.mdx"], // Extensions to include.
        docLayoutComponent: "@theme/DocPage",
        docItemComponent: "@theme/APIDocItem",
        remarkPlugins: [],
        rehypePlugins: [],
        path: "api",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      require.resolve("./docusaurus-plugin-gtm/index.js"),
      {
        gtm: "GTM-P2DTTFC", //GTM-XXXXXX
      },
    ],
  ],
  customFields: {
    sites: [
      {
        label: "Products",
        items: [
          {
            href: "https://cortex.pan.dev",
            label: "Cortex",
            logo: "/img/cortex_favicon.png",
          },
          {
            href: "https://xsoar.pan.dev",
            label: "Cortex XSOAR",
            logo: "/img/xsoar_favicon.png",
          },
          {
            href: "https://panos.pan.dev",
            label: "PAN-OS",
            logo: "/img/strata_favicon.png",
          },
          {
            href: "https://prisma.pan.dev",
            label: "Prisma",
            logo: "/img/prisma_favicon.png",
          },
        ],
        position: "products",
      },
    ],
    issueUrl:
      "https://github.com/PaloAltoNetworks/prisma.pan.dev/issues/new?assignees=&labels=&template=developer-documentation-issue.md&title=%5BDOCUMENTATION%5D",
  },
  onBrokenLinks: "warn",
  onDuplicateRoutes: "warn",
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};
