/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

function NotFound() {
  const location = useLocation();
  console.log(location);
  const newLocation = location
    ? "https://pan.dev" + location.pathname
    : "https://pan.dev";

  useEffect(() => {
    window.location.href = newLocation;
  }, []);

  return (
    <span>
      Redirecting to pan.dev... click{" "}
      <a target="_self" href={newLocation}>
        here
      </a>{" "}
      if the redirect fails or is taking too long.
    </span>
  );
}

export default NotFound;
