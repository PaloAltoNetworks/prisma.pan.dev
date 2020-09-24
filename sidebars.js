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
      id: "_index"
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
                "cloud/rql/aws/aws_ec2"
              ],
            },
            {
              type: "category",
              label: "GCP",
              items: [
                "cloud/rql/aws/aws_ec2"
              ],
            },
            {
              type: "category",
              label: "Azure",
              items: [
                "cloud/rql/aws/aws_ec2"
              ],
            },
          ],
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
