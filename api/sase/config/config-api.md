---
id: config-api
title: SASE Configuration API (beta)
sidebar_label: SASE Configuration APIs
slug: /sase/config
keywords:
  - SASE
  - Reference
  - API
---

## Overview ##

Welcome to the Secure Access Service Edge (SASE) Configuration APIs. These APIs are currently in beta,
They offer limited functionality for configuring a Prisma Access instance programmatically.

This API documentation is in early-access preview state. It is subject to change without notice.

These beta APIs can be used to perform configuration of a Prisma Access instance, but these APIs lack
the functionality to push the configuration into production.

All of the functionality exposed by these APIs can also be performed using the 
[Prisma Access user interface](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-cloud-managed-admin.html).

## Authentication ##

As a beta customer, you will receive an access token from your Palo Alto Networks SE when you join
the beta program. When you make an API call, provide this access token on the request using the
`Authorization` HTTP header using the `Bearer` keyword. For example, if you are making your request using `curl`:

    -H "Authorization: Bearer <ACCESS_TOKEN>"

## API Requests ##

For customers participating in this beta, you can test these APIs against your Prisma Access
instance once you have an access token. Send all API requests to the following base URL:

    https://api.sase.paloaltonetworks.com

For example, using curl:

    curl -o --location "https://api.sase.paloaltonetworks.com/config/v1/snapshots" \
    -H "Authorization: Bearer <ACCESS_TOKEN>" \
    -H "Content-Type: application/json"
