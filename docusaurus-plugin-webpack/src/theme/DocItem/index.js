import React from "react";
import DocItem from "@theme-original/DocItem";
var OpenAPISampler = require("openapi-sampler");

export default function DocItemWrapper(props) {
  console.log(props);
  const oas = OpenAPISampler.sample(
  );
  console.log(oas);
  return (
    <>
      <div className="row">
        <div className="col col--7">
          <DocItem {...props} />
        </div>
        <div className="col col--5">
          <h1> I am a column</h1>
        </div>
      </div>
    </>
  );
}
