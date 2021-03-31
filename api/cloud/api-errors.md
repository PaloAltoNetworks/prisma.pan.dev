---
id: api-errors
title: Prisma Cloud API Error Responses
sidebar_label: API Error Responses
hide_table_of_contents: false
---

The Prisma Cloud REST APIs return standard
[HTTP response codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). In addition, 
the Prisma Cloud APIs that don't return error information in a response object provide a hint about the error in the response header field **x-redlock-status**.
