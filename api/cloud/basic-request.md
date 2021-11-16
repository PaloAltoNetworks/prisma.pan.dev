---
id: basic-request
title: CSPM API Request Basics
sidebar_label: CSPM API Request Basics
hide_table_of_contents: false
keywords:
  - Developer
  - Prisma
  - Prisma Cloud
  - Reference
  - API
---


Use the following guidelines to ensure that your CSPM API request is successful.

## Prerequisites of a Request

Before you can make a CSPM API request, you need to make sure you have the right privileges and authorization for the request.

### Roles

To make an API request, you must have a [Prisma Cloud role](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin/manage-prisma-cloud-administrators/prisma-cloud-administrator-roles.html) with sufficient permissions.

### Authentication/Authorization

Almost all CSPM API endpoints use JSON Web Tokens (JWT) to authorize requests.
[Log in](/api/cloud/cspm/login#operation/app-login) to obtain a valid JWT.

Note that for security, a JWT is valid for only ten minutes. If your session must be active beyond that limit, you can [extend a session](/api/cloud/cspm/login#operation/extend-session).

See [Getting Started](/docs/cloud/cspm/cspm-gs) for steps to obtain access keys and use them when you [log in](/api/cloud/cspm/login#operation/app-login).

## Components of a Single Request

The sections below describe the components of a successful CSPM API request.

### URL

The base URL of your CSPM API request depends on the region of your Prisma Cloud tenant and is similar to your Prisma Cloud administrative console URL. See [URLs](/api/cloud/api-urls) for a list of Prisma Cloud console URLs and corresponding CSPM API base URLs.

### Methods

The CSPM API uses standard HTTP methods `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

Certain resources are available through either a `GET` or a `POST` request. Examples include but are not limited to alert lists, compliance posture, and some asset inventory lists. While both options result in the same response, as a best practice, use `POST` if:

* You don’t want to include your request parameters in the request URL
* Your request parameters are complex and, therefore, easier to define in the request body parameters of a `POST` request

### Request Headers

See [Headers](/api/cloud/api-headers) for information about required request headers.

### Request Parameters

Both query and request body parameters can include certain data models in CSPM. The following sections provide details about their use:

* The [Time Range Model](/api/cloud/api-time-range-model) enables you to specify windows of time.

* The [Integration Configurations](/api/cloud/api-integration-config) are specific to API requests that [add](/api/cloud/cspm/integrations#operation/save-integration), [update](/api/cloud/cspm/integrations#operation/update-integration), or [test](/api/cloud/cspm/integrations#operation/test-integration) a third-party integration with Prisma Cloud.

### Errors

See [Error Responses](/api/cloud/api-errors) for information about error handling.
