/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Next-gen Automation',
  tagline: 'with the only next-gen security platform',
  url: process.env.CI_PAGES_URL ? process.env.CI_PAGES_URL : 'https://prisma.pan.dev',
  baseUrl: process.env.CI_MERGE_REQUEST_IID
    ? `/-/${process.env.CI_PROJECT_NAME}/-/jobs/${process.env.CI_JOB_ID}/artifacts/public/`
    : '/',
  favicon: 'img/prismafavicon.png',
  organizationName: 'PaloAltoNetworks', // Usually your GitHub org/user name.
  projectName: 'prisma.pan.dev', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'caddcc77123a6dff437a768f47b785c3',
      indexName: 'prisma_pan',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    sidebarCollapsible: true,
    navbar: {
      title: '',
      logo: {
        alt: 'Prisma for Developers',
        src: '/img/Prisma_Light.svg',
        srcDark: '/img/Prisma_Dark.svg',
      },
      items: [
        {
          to: '/docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://medium.com/palo-alto-networks-developer-blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/PaloAltoNetworks',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              to: 'docs/whatisprisma',
              label: 'About Prisma',
            },
            {
              to: 'docs/index',
              label: 'Docs Homepage',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/palo-alto-networks-developer-blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'PAN-OS® for Developers',
        src: '/img/PANW_Parent_Brand_Primary_Logo_RGB_KO.svg',
        href: 'https://pan.dev',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`,
    },
  },
  themes: [require.resolve('@docusaurus/theme-live-codeblock')],
  presets: [
    [
      require.resolve('@docusaurus/preset-classic'),
      {
        docs: {
          homePageId: '_index',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/PaloAltoNetworks/prisma.pan.dev/tree/master/',
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'], // Extensions to include.
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
          remarkPlugins: [],
          rehypePlugins: [],
          path: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'prisma-sitemap',
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
  ],
  customFields: {
    sites: [
      {
        label: 'Products',
        items: [
          {
            href: 'https://cortex.pan.dev',
            label: 'Cortex',
            logo: '/img/cortexfavicon.png',
          },
          {
            href: 'https://xsoar.pan.dev',
            label: 'Cortex XSOAR',
            logo: '/img/Cortex-XSOAR-product-green.svg',
          },
          {
            href: 'https://panos.pan.dev',
            label: 'PAN-OS',
            logo: '/img/strata_favicon.png',
          },
          {
            href: 'https://prisma.pan.dev',
            label: 'Prisma',
            logo: '/img/prismafavicon.png',
          },
        ],
        position: 'products',
      },
    ],
    onBrokenLinks: 'warn',
    onDuplicateRoutes: 'warn',
  },
};
