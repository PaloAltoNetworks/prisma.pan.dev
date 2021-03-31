---
id: cspm-gs
title: Cloud Security Posture Management
sidebar_label: Getting Started
hide_table_of_contents: true
---

These instructions assume Prisma Cloud is already
[activated](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin/get-started-with-prisma-cloud/access-prisma-cloud.html), and
that your administrator has already 
[added you to the tenant](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin/manage-prisma-cloud-administrators.html).

Prisma Cloud requires an API access key to enable programmatic access to the REST API. By default,
only the System Admin has API access and can enable API access for other administrators. If you are
not the System Admin, request API access from that person.

1. **Settings > Access Keys+ > Add New** to create an access key. This creates an Access Key ID and
   Secret Key. Be sure to record it. 

   For details, see [Create and Manage Access Keys](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin/manage-prisma-cloud-administrators/create-access-keys.html).

2. Use the [proper base URI](/api/cloud/api-urls) for all your API calls.

3. Obtain a JWT that you will use to authenticate subsequent API calls. Using `api.prismacloud.io`
   as the base URI:
```bash
        curl -X POST https://api.prismacloud.io/login \
        -H 'Content-Type: application/json' \
        -d '{"username":"<Access Key ID>","password":"<Secret Key>"}'
```
```json
    Example response:

        {
          "token": "<JWT>",
          "message": "login_successful",
          "customerNames": [
            {
               "customerName": "Test",
               "tosAccepted": true
            }
          ]
        }
```
4. Use the `x-redlock-auth` HTTP Header to present the JWT on the API request.

5. For `Content-Type` you usually use `application/json` but check the documentation for each
   endpoint to be sure.

6. To refresh your JWT:
```bash
        curl -H 'Content-Type: application/json' \
        -H 'x-redlock-auth:<current JWT>' \
        https://api.prismacloud.io/auth_token/extend 
```
Example API call with the JWT:
```bash
        curl -H 'Content-Type: application/json' \
        -H 'x-redlock-auth: <JWT Token>' \
        https://api.prismacloud.io/filter/policy/suggest 
```
