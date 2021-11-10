[![Deploy Live](https://github.com/PaloAltoNetworks/prisma.pan.dev/actions/workflows/deploy-live.yml/badge.svg)](https://github.com/PaloAltoNetworks/prisma.pan.dev/actions/workflows/deploy-live.yml) [![CodeQL](https://github.com/PaloAltoNetworks/prisma.pan.dev/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/PaloAltoNetworks/prisma.pan.dev/actions/workflows/codeql-analysis.yml)

# Prisma Cloud 

This website is built using Docusaurus 2, a modern static website generator.

> URL: https://prisma.pan.dev

### Installation

```shell-session
yarn
```

### Local Development

```shell-session
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell-session
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The `upstream/master` branch is linked to a Netlify site and will auto-deploy when changes are merged into `master`.

Build previews will be automatically generated for merges into the `upstream/develop` branch and pull requests. Build previews can be used to review changes to determine if they are ready to be merged into `upstream/develop` or `upstream/master`.

### Contributing

Contributing guidelines can be found [here](https://panos.pan.dev/docs/contributing).

### Support
See [SUPPORT.md](SUPPORT.md). 
