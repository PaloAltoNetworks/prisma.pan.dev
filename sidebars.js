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
      items: [
        "cloud/cspm/cspm-gs",
        {
          type: "category",
          label: "RQL",
          items: [
            {
              type: "category",
              label: "AWS",
              items: [
                "cloud/cspm/rql/aws/aws_ec2",
                "cloud/cspm/rql/aws/aws_ecr",
                "cloud/cspm/rql/aws/aws_elb",
                "cloud/cspm/rql/aws/aws_cloudformation",
                "cloud/cspm/rql/aws/aws_cloudfront",
                "cloud/cspm/rql/aws/aws_cognito",
                "cloud/cspm/rql/aws/aws_ecs",
                "cloud/cspm/rql/aws/aws_guardduty",
                "cloud/cspm/rql/aws/aws_lambda",
                "cloud/cspm/rql/aws/aws_rds",
                "cloud/cspm/rql/aws/aws_s3",
                "cloud/cspm/rql/aws/aws_vpc",
                "cloud/cspm/rql/aws/aws_event",
                "cloud/cspm/rql/aws/network_vpc_flows",
                "cloud/cspm/rql/aws/aws_iam",
                "cloud/cspm/rql/aws/aws_route53",
                //"cloud/cspm/rql/aws/aws_kms",
                //"cloud/cspm/rql/aws/aws_sns",
              ],
            },
            {
              type: "category",
              label: "GCP",
              items: [
                "cloud/cspm/rql/gcp/gcp_compute",
                "cloud/cspm/rql/gcp/gcp_cloudstorage",
                "cloud/cspm/rql/gcp/gcp_gke",
                "cloud/cspm/rql/gcp/gcp_project",
              ],
            },
            {
              type: "category",
              label: "Azure",
              items: [
                "cloud/cspm/rql/azure/azure_acr",
                "cloud/cspm/rql/azure/azure_aks",
                "cloud/cspm/rql/azure/azure_alb",
                "cloud/cspm/rql/azure/azure_app_svc",
                "cloud/cspm/rql/azure/azure_cosmos_db",
                "cloud/cspm/rql/azure/azure_storage",
                "cloud/cspm/rql/azure/azure_sql_db",
                "cloud/cspm/rql/azure/azure_sql_server",
                "cloud/cspm/rql/azure/azure_virtual_machine",
                "cloud/cspm/rql/azure/azure_event",
              ],
            },
            "cloud/cspm/rql/general/iam_gen",
            "cloud/cspm/rql/general/network_vpc_flows",
          ],
        },
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
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin.html",
            },
            {
              type: "link",
              label: "Release Information",
              href: "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/prisma-cloud-release-notes/prisma-cloud-release-information.html",
            },
            {
              type: "link",
              label: "Resource Query Language (RQL)",
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-rql-reference/rql-reference.html",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Cloud Workload Protection Platform",
      items: [
        "cloud/cwpp/cwpp-gs",
        "cloud/cwpp/access-api-self-hosted",
        "cloud/cwpp/access-api-saas",
        "cloud/cwpp/policy_samples",
        "cloud/cwpp/twistcli_gs",
        "cloud/cwpp/custom_compliance_samples",
        "cloud/cwpp/cwpp_postman_collection",
        {
          type: "category",
          label: "API workflows",
          items: [
            "cloud/cwpp/api-workflows/set-up-console",
            "cloud/cwpp/api-workflows/manage-compliance-policy",
          ],
        },
        {
          type: "category",
          label: "Porting guides",
          items: [
            "cloud/cwpp/porting-guides/porting-guide-21-08",
            "cloud/cwpp/porting-guides/porting-guide-21-04",
          ],
        },
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
                  href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/20-09/prisma-cloud-compute-edition-admin.html",
                },
                {
                  type: "link",
                  label: "Release Notes",
                  href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/20-09/prisma-cloud-compute-edition-release-notes/release-information.html",
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
                  href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/20-04/prisma-cloud-compute-edition-admin.html",
                },
                {
                  type: "link",
                  label: "Release Notes",
                  href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/20-04/prisma-cloud-compute-edition-release-notes/release-information.html",
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
                  href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/19-11/prisma-cloud-compute-edition-admin.html",
                },
                {
                  type: "link",
                  label: "Release Notes",
                  href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/19-11/prisma-cloud-compute-edition-release-notes/release-information.html",
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
                  href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-compute.html",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        {
          type: "category",
          label: "APIs",
          items: ["cloud/tutorials/rest-api-basics"],
        },
      ],
    },
  ],
  contrib: [
    "contributing/contributing",
    {
      type: "category",
      label: "Create a Doc",
      collapsed: false,
      items: [
        "contributing/create-doc-reqs",
        "contributing/create-doc-git",
        "contributing/create-doc-add",
        "contributing/create-doc-md",
        "contributing/create-doc-publish",
      ],
    },
    "contributing/create-doc-tldr",
    "contributing/git-basics",
  ],
};
