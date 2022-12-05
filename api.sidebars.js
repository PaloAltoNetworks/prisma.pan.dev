/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  cspm: require("./static/oas/cspm/sidebar").sidebar,
  cwpp1: require("./static/oas/cwpp/sidebar").sidebar,
  cwpp2: require("./static/oas/cwpp/22-06/sidebar").sidebar,
  cwpp3: require("./static/oas/cwpp/22-01/sidebar").sidebar,
  code: require("./static/oas/code/sidebar").sidebar,
};
