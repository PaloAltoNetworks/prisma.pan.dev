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
  favicon: "img/prismafavicon.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "prisma.pan.dev", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["markdown"],
    },
    algolia: {
      apiKey: "6869800b232f5f8362e83901d79110ee",
      appId: "XC7919KOX3",
      indexName: "pan",
      searchParameters: {
        typoTolerance: false,
        facetFilters: ["tags:prisma"],
      }, // Optional, if provided by Algolia
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
          label: "Docs",
          position: "left",
          to: "/docs/cloud/",
        },
        {
          label: "API Reference",
          items: [
            {
              to: "#",
              label: "Prisma Cloud",
              className: "section__docs",
            },
            {
              to: "/api/cloud/cspm",
              label: "Cloud Security Posture Management",
            },
            {
              to: "/api/cloud/cwpp",
              label: "Cloud Workload Protection",
            },
            {
              to: "/api/cloud/code",
              label: "Cloud Code Security",
            },
            {
              to: "#",
              label: "SASE",
              className: "section__docs",
            },
            {
              to: "/api/sase/config",
              label: "Config API (beta)",
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
      logo: {
        alt: "PAN-OS® for Developers",
        src: "/img/PANW_Parent_Brand_Primary_Logo_RGB_KO.svg",
        href: "https://pan.dev",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`,
    },
  },
  themes: [require.resolve("@docusaurus/theme-live-codeblock")],
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
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/api/cloud/cspm", // string
            from: "/api/cloud/cspm/cspm-api",
          },
        ],
      },
    ],
  ],
  themes: [require.resolve("./docusaurus-plugin-webpack/src/index.cjs")],
  customFields: {
    sites: [
      {
        label: "Products",
        items: [
          {
            href: "https://cortex.pan.dev",
            label: "Cortex",
            logo: "/img/cortexfavicon.png",
          },
          {
            href: "https://xsoar.pan.dev",
            label: "Cortex XSOAR",
            logo: "/img/Cortex-XSOAR-product-green.svg",
          },
          {
            href: "https://panos.pan.dev",
            label: "PAN-OS",
            logo: "/img/strata_favicon.png",
          },
          {
            href: "https://prisma.pan.dev",
            label: "Prisma",
            logo: "/img/prismafavicon.png",
          },
        ],
        position: "products",
      },
    ],
    api_versions: [
      {
        label: "22.01 (Latest)",
        to: "/api/cloud/cwpp/",
        version: "22-01",
      },
      {
        label: "21.08",
        to: "/api/cloud/cwpp/21-08/",
        version: "21-08",
      },
      {
        label: "21.04",
        to: "/api/cloud/cwpp/21-04/",
        version: "21-04",
      },
    ],
  },
  onBrokenLinks: "error",
  onDuplicateRoutes: "error",
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};
