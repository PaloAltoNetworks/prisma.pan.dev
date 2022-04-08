const globby = require("globby");
const yaml = require("js-yaml");
const fs = require("fs");
// Use the following to frontload docs
var docs = [
  {
    type: "link",
    label: "22-01",
    href: "/api/cloud/cwpp/",
    customProps: {
      versioned: "versioned",
    },
  },
  {
    type: "doc",
    id: "cloud/cwpp/cwpp-home",
  },
  {
    type: "doc",
    id: "cloud/cwpp/stable-endpoints",
  },
  {
    type: "doc",
    id: "cloud/cwpp/curl-examples",
  },
  {
    type: "doc",
    id: "cloud/cwpp/how-to-eval-console",
  },
  {
    type: "doc",
    id: "cloud/cwpp/api-limits",
  },
];

// Change these variables to match your doc path
const relativePath = "cloud/cwpp";
const absolutePath = "/api/cloud/cwpp";
function genEndpoints() {
  const endpoints = [];
  const css_overrides = [];
  // Absolute path from project root
  specs = globby.sync(["./static/oas/cwpp/*.json"], {
    absolute: false,
    objectMode: true,
    deep: 1,
    onlyDirectories: false,
  });
  specs.map((spec) => {
    const specContents = fs.readFileSync(spec.path, "utf8");
    const data = yaml.load(specContents);
    const categoryLabel = data.tags[0].name;
    const docId = categoryLabel
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
    const paths = data.paths;
    var category = {
      type: "category",
      label: categoryLabel,
    };
    var items = [`${relativePath}/${docId}`];
    for ([path, methods] of Object.entries(paths)) {
      for ([method, attributes] of Object.entries(methods)) {
        const operationId = attributes.operationId;
        const linkLabel = attributes.summary;
        const item = {
          type: "link",
          label: linkLabel,
          href: `${absolutePath}/${docId}#operation/${operationId}`,
          customProps: {
            method: method,
          },
        };
        items.push(item);
      }
    }
    category.items = items;
    endpoints.push(category);
  });
  return endpoints;
}
const endpoints = genEndpoints();
const sidebar = docs.concat(endpoints);
module.exports = {
  sidebar: sidebar,
};
