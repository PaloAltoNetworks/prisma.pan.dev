---
id: stable-endpoints
title: Stable Endpoints
sidebar_label: Stable Endpoints
---

API calls are essential for developing scripts that automate reporting, deployment and configuration.
New releases can introduce breaking changes in the API, which forces you to adapt scripts every time you upgrade.
API versioning lets you call fixed, stable endpoints, which are supported and available for some guaranteed window of time.

Starting in 21.08, Prisma Cloud Compute offers a versioned API.
Each version will be supported for the subsequent two major releases.

For example, today we ship 21.08, which is codenamed Iverson.
After Iverson, we'll ship Joule.
After Joule, we'll ship Kepler.
And after Kepler, we'll ship Lagrange
The 21.08 versioned API will be supported while Iverson, Joule, and Kepler are active.
When Langrage ships, Iverson will be end-of-lifed, and the 21.08 API will longer be supported or available.


## Versioning

The Compute API is versioned as follows:

`/api/vX/route`

Where:

* `v1` - Always points to the latest API.
* `vVersion` - Points to a version-specific API, where `Version` specifies the major and minor parts of a release's version string.

For example, the following endpoint points to a 21.08 endpoint:

`api/v21.08/images`


## Supported Endpoints

For the most part, Prisma Cloud Compute supports versioned endpoints only (see exceptions below).
The official documentation for the Compute APIs shows supported endpoints only.

Prisma Cloud Compute Console lets you download a copy of the OpenAPI spec file for the API.
This file lists all available endpoints, including unsupported endpoints.
We offer no guarantees for unsupported endpoints.
They can change, they could change frequently, and they could be deprecated without advanced notice.

In the OpenAPI spec, supported endpoints are tagged as supported.
For example, the `POST /api/vX/authenticate` endpoint is tagged as follows:

```
"tags": [
  "Authenticate",
  "Supported API"
]
```

A few endpoints have a special status.
They're supported, but not versioned.
These endpoints are shown in the documentation, and their status is clearly marked.


## Supported Endpoint Categories

Supported endpoints tend to fall in one of the following categories:

* Reporting endpoints
* Config-as-code
* Deployment and config


### Reporting Endpoints

Reporting API calls are the ones used to download health or scan data such as vulnerabilities/compliance/runtime.   
Access to the underlying data in JSON and CSV formats allows customers to easily access and transform data into business intelligence in the forms that meet their needs.  
The output may be human-readable reports or, in other cases, the reporting data may feed automated decisions and processes.

These are mostly under **Monitor** section in the Compute Console.


### Config-as-Code

Configuration as code is the formal migration of config between environments, backed by a version control system. 
Customers who want to programmatically store and manage the configuration of infrastructure components, can utilize these to automate these components using the same approaches that they've used for production code and services. 


### Deployment and Config

Deployment and config endpoints are essential for properly being able to automate the installation of Console, Defenders, as well as any configuration that deals with integrations.  
These are useful to those who base their management of environments on automation, using tools such as Ansible, Puppet, Terraform etc to define desired configurations.
