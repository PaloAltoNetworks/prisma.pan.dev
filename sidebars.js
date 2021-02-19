/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  home: [
    {
      type:"doc",
      id: "home"
    }
  ],
  prisma_cloud: [
    {
      type: "category",
      label: "Prisma Cloud",
      items: [
        {
          type: "category",
          label: "RQL",
          items: [
            {
              type: "category",
              label: "AWS",
              items: [
                "cloud/rql/aws/aws_rql",
                "cloud/rql/aws/aws_ec2",
                "cloud/rql/aws/aws_ecr",
                "cloud/rql/aws/aws_elb",
                "cloud/rql/aws/aws_cloudformation",
                "cloud/rql/aws/aws_cloudfront",
                "cloud/rql/aws/aws_cognito",
                "cloud/rql/aws/aws_ecs",
                "cloud/rql/aws/aws_guardduty",
                "cloud/rql/aws/aws_lambda",
                "cloud/rql/aws/aws_rds",
                "cloud/rql/aws/aws_s3",
                "cloud/rql/aws/aws_vpc",
                //"cloud/rql/aws/aws_iam",
                //"cloud/rql/aws/aws_kms",
                //"cloud/rql/aws/aws_sns",
              ],
            },
            {
              type: "category",
              label: "GCP",
              items: [
                "cloud/rql/gcp/gcp_compute",
                "cloud/rql/gcp/gcp_cloudstorage",
                "cloud/rql/gcp/gcp_gke"
              ],
            },
            {
              type: "category",
              label: "Azure",
              items: [
                "cloud/rql/azure/azure_acr",
                "cloud/rql/azure/azure_aks",
                "cloud/rql/azure/azure_alb",
                "cloud/rql/azure/azure_app_svc",
                "cloud/rql/azure/azure_cosmos_db",
                "cloud/rql/azure/azure_storage",
                "cloud/rql/azure/azure_sql_db",
                "cloud/rql/azure/azure_sql_server",
                "cloud/rql/azure/azure_virtual_machine",
              ],
            },
            {
              type: "category",
              label: "Network",
              items: [
                "cloud/rql/network/network_vpc_flows",
              ],
            },
            {
              type: "category",
              label: "Event",
              items: [
                "cloud/rql/event/aws_event",
                "cloud/rql/event/azure_event",
              ],
            },
            {
              type: "category",
              label: "IAM Security",
              items: [
                "cloud/rql/iam/iam_gen",
                "cloud/rql/iam/iam_aws",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Terraform Provider",
            items: [
                "cloud/tf/provider_doc",
                "cloud/tf/tf_example1",
              ]
        },
      ],
    },
  ],
  cloud_compute :[
    {
      type: "category",
      label: "Prisma Cloud Compute",
      items: [
        "cloud_compute/compute_api",
        "cloud_compute/policy_samples",
        "cloud_compute/twistcli_gs"
      ],
    },
  ]
};
