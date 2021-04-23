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
      id: "cloud/api-reference-home",
    },
    {
      type: "category",
      label: "Cloud Security Posture Management",
      items: require("./static/oas/cspm/sidebar").sidebar,
    },
    {
      type: "category",
      label: "Cloud Workload Protection",
      items: require("./static/oas/cwpp/sidebar").sidebar,
    },
  ],
};
