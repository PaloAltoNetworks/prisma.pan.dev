/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  cloud: [
    {
      type: "doc",
      id: "cloud/home",
    },
    {
      type: "category",
      label: "Cloud Security Posture Management",
      collapsed: false,
      items: [
        "cloud/cspm/cspm-gs",
        "cloud/cspm/rql_library",
        {
          type: "category",
          label: "Terraform Provider",
          items: ["cloud/cspm/tf/provider_doc", "cloud/cspm/tf/tf_example1"],
        },
        "cloud/cspm/cspm_postman_collection",
        {
          type: "category",
          label: "Other Documentation",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href:
                "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin.html",
            },
            {
              type: "link",
              label: "Release Information",
              href:
                "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/prisma-cloud-release-notes/prisma-cloud-release-information.html",
            },
            {
              type: "link",
              label: "Resource Query Language (RQL)",
              href:
                "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-rql-reference/rql-reference.html",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Cloud Workload Protection Platform",
      collapsed: false,
      items: [
        "cloud/cwpp/cwpp-gs",
        "cloud/cwpp/policy_samples",
        "cloud/cwpp/twistcli_gs",
        "cloud/cwpp/custom_compliance_samples",
        {
          type: "link",
          label: "Compute API Reference",
          href: "https://cdn.twistlock.com/docs/api/twistlock_api.html",
        },
        "cloud/cwpp/cwpp_postman_collection",
        {
          type: "category",
          label: "Other Documentation",
          items: [
            {
              type: "category",
              label: "Version Self-Hosted 20.09",
              items: [
                {
                  type: "link",
                  label: "Administrator's Guide",
                  href:
                    "https://docs.paloaltonetworks.com/prisma/prisma-cloud/20-09/prisma-cloud-compute-edition-admin.html",
                },
                {
                  type: "link",
                  label: "Release Notes",
                  href:
                    "https://docs.paloaltonetworks.com/prisma/prisma-cloud/20-09/prisma-cloud-compute-edition-release-notes/release-information.html",
                },
              ],
            },
            {
              type: "category",
              label: "Version Self-Hosted 20.04",
              items: [
                {
                  type: "link",
                  label: "Administrator's Guide",
                  href:
                    "https://docs.paloaltonetworks.com/prisma/prisma-cloud/20-04/prisma-cloud-compute-edition-admin.html",
                },
                {
                  type: "link",
                  label: "Release Notes",
                  href:
                    "https://docs.paloaltonetworks.com/prisma/prisma-cloud/20-04/prisma-cloud-compute-edition-release-notes/release-information.html",
                },
              ],
            },
            {
              type: "category",
              label: "Version Self-Hosted 19.11",
              items: [
                {
                  type: "link",
                  label: "Administrator's Guide",
                  href:
                    "https://docs.paloaltonetworks.com/prisma/prisma-cloud/19-11/prisma-cloud-compute-edition-admin.html",
                },
                {
                  type: "link",
                  label: "Release Notes",
                  href:
                    "https://docs.paloaltonetworks.com/prisma/prisma-cloud/19-11/prisma-cloud-compute-edition-release-notes/release-information.html",
                },
              ],
            },
            {
              type: "category",
              label: "Version SaaS",
              items: [
                {
                  type: "link",
                  label: "Administrator's Guide",
                  href:
                    "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-compute.html",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
