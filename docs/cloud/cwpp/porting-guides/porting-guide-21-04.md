---
id: porting-guide-21-04
title: 21.04 Porting Guide
sidebar_label: 21.04 Porting Guide
---

This article outlines important differences in the Compute API between 21.04 and 20.12.


## Compliance stats

A new version of Compliance Explorer has been introduced in 21.04.
It simplifies compliance visibility across regulations, CIS benchmarks, and policy rules.

As a result of this enhancement, the endpoint that provides the compliance statistics for the dashboard has changed to include new metrics and data.
The impacted endpoint is `/api/v1/stats/compliance`.
The data provided by this endpoint in 20.12 is no longer available.
This endpoint now provides the following data:

* Compliance rate by each regulation, CIS benchmark, and policy rule.
* Trend of failed compliance checks over time.
* List of all compliance checks with their compliance rate.

In addition, a new endpoint has been added: `api/v1/stats/compliance/download`.
This endpoint retrieves a list of all compliance checks, and their compliance rate, in CSV format.


## Serverless scanning scope settings

The mechanism for specifying the serverless scanning scope has been improved.
You can now set scopes more broadly on a per-account basis, rather than per-region per-account basis.

As a result of this enhancement, the ServerlessScanSpecification schema has changed as follows:

* Region and Pattern have been removed.
* Multiple credential IDs are supported.

In addition, the method for `POST api/v1/settings/serverless-scan` has changed from `POST` (in 20.12) to `PUT` (in 21.04) to align with the way PUT works for other similar endpoints in the product.
The `POST` method in 20.12 completely replaced all scanning scopes.
The `PUT` method in 21.04 similarly replaces all scanning scopes.
A new `POST` method has been added.
The `POST` method lets you add a single serverless scan spec without sending an aggregated list of all specs each time you add a new spec.


## Custom rules

The route path for managing custom rules has changed from `api/v1/policies/runtime/custom-rules` to `api/v1/custom-rules`.


## twistcli output file

The schema of the JSON output file exported from twistcli images scanning has been stabilized.
The purpose of this enhancement is to ensure backward compatibility of the schema in future releases.

Some new fields have been added to the schema, and some existing fields have been adjusted, as follows:

* `results.vulnerabilities.riskFactors` - Changed from key:value array to strings array.
* `results.vulnerabilities.publishedDays` - Changed from number of days since published date to the published date itself.
The new name of the field is `publishedDate`.
* `results.vulnerabilities.discoveredDays` - Changed from number of days since discovered date to the discovered date itself.
The new name of the field is `discoveredDate`.


## Parameter rename

For better consistency and clarity across the product, the terms `protect` and `protected` have been replaced with the terms `defend` and `defended`.
The terms indicate that a Defender is protecting a resource.

The impacted endpoints are:

* `/api/v1/serverless`
* `/api/v1/cloud/discovery`
* `/api/v1/statuses`

### /api/v1/serverless

The changes in `/api/v1/serverless` are:

*GET /api/v1/serverless/download*:

* Query parameter `protected` was deprecated and replaced with `defended`.
* Column header in the downloaded CSV file has changed from `protected` to `defended`.

*GET /api/v1/serverless/names*:

* Query parameter `protected` was deprecated and replaced with `defended`.

*GET /api/v1/serverless*:

* Query param `protected` was deprecated and replaced with `defended`.
* Key name `protected` in the response object was deprecated and replaced with `defended`.


### /api/v1/cloud

The changes in `/api/v1/cloud` are:

*GET /api/v1/cloud/discovery/download*:

* Column header in the downloaded CSV file has changed from `protected` to `defended`.

*GET /api/v1/cloud/discovery*:

* Key name `protected` in the response objected was deprecated and replaced with `defended`.


### /api/v1/statuses

The changes in `/api/v1/statuses` are:

*GET /api/v1/statuses/serverless-auto-deploy*

* Key name `serverlessAutoDeploy.specs.protected` in the response object was deprecated and replaced with `serverlessAutoDeploy.specs.defended`.

*GET /api/v1/statuses/host-auto-deploy*

* Key name `hostAutoDeploy.status.protected` in the response object was deprecated and replaced with `hostAutoDeploy.status.defended`.


## Deprecated field in image scan reports

In 20.12, image scan reports returned from `GET /api/v1/images` contained the `binaries[].layerTime` field.
In 21.04, the `layerTime` field in objects in the `binaries[]` array has been deprecated.

In it's place, there is a new top-level object named `applications` which contains an equivalent `layerTime` field.
The following table summarizes the change in `GET /api/v1/images`.

| 20.12                           | 21.04                               |
| ---                             | ---                                 |
| *Field:* `binaries[].layerTime` | *Field:* `applications[].layerTime` |

As a reminder, software is typically added to an image with a package manager.
Sometimes, however, a binary might be added directly to an image with the Dockerfile `ADD` instruction (for example, when software is built from source).
The `binaries[].layerTime` field maps a binary added to an image to a layer in the image.
In practice, this field is rarely populated.
As such, we expect the impact of this change on any automation you've built around image scan reports to be negligible.

In 21.04, we extended the number of binaries that we can identify and assess for vulnerabilities.
As part of this extended capability, 21.04 introduces the `applications` object with an associated `layerTime` field, and we deprecated `binaries[].layerTime`.
Any data you previously found in `binaries[].layerTime` can now be found in `applications[].layerTime`.


## Runtime audits

Runtime audits are no longer grouped by profile.
They're now a flat list.
The impacted endpoints are:

* `GET /api/v1/audits/runtime/container`
* `GET /api/v1/audits/runtime/host`
* `GET /api/v1/audits/runtime/serverless`


## Serverless function audits

The query parameter for retrieving audits for a specific serverless function from `GET /api/v1/audits/runtime/serverless` has changed from `functionName` to `function`.
