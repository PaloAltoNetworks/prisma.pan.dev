---
id: api-headers
title: Prisma Cloud API Headers
sidebar_label: Prisma Cloud API Headers
hide_table_of_contents: false
keywords:
  - Developer
  - Prisma
  - Prisma Cloud
  - Reference
  - API
---

The following table lists the HTTP headers required for a Prisma Cloud API request.

| HTTP Header    | Value                                                                                                                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x-redlock-auth | Your JWT authentication token string. <p>To interact with any of your own data, the authentication token returned by the /login endpoint must be included for almost all requests.</p>                                                                                                                         |
| Content-Type   | This header is required for some but not all Prisma Cloud requests. For many requests, the value for this header is **application/json**, but see each request for the proper value.<p>The IaC Scan requires a Content-Type header value of **application/vnd.api+json**. See the [IaC Scan V2 API Overview](/api/cloud/cspm/iac-scan) for more information.</p> |
