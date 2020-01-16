---
id: compute_api
title: Prisma Cloud Compute API
sidebar_label: Compute API
---

To access the Compute API, you must first get your Compute Console’s address. Retrieve your Compute Console’s address directly from the UI. Go to **Compute > Manage > System > Downloads** and copy the Path to Console. All example commands specify a variable called `COMPUTE_CONSOLE`, which represents the address for your Console.

You can access the Compute API with your Prisma Cloud user credentials. Note that only Prisma Cloud users with the System Admin role can access Compute. By default, the Prisma Cloud System Admin role is mapped to the Prisma Cloud Compute Administrator role.
For automated workflows, you’ll want to provision a service account with the minimum required permissions.

## Accessing the API using Basic authentication
Get your Compute Console’s address and then use basic auth to access the API.

1. Get the path to your Console.
Go to **Compute > Manage > System > Downloads**.
Under **Path to Console**, click **Copy**.

2. Access an API endpoint.
In this example, retrieve the rules in your compliance policy. The Auditor role has permission to see this data.
```bash
$ curl \
  -u <PRISMA_CLOUD_USER> \
  https://<COMPUTE_CONSOLE>/api/v1/policies/compliance/container
```

## Accessing the API using token authentication
Get your Compute Console’s address, retrieve an token, then use the token to access the API.
1. Get the path to your Console.
Go to **Compute > Manage > System > Downloads.**
2. Under **Path to Console**, click **Copy**.
Retrieve a token from the api/v1/authenticate endpoint with your user credentials. Tokens are valid for 24 hours.
```bash
$ curl \
  -H "Content-Type: application/json" \
  -d '{"username":"<PRISMA_CLOUD_USER>", "password":"<PASSWD>"}' \
  https://<COMPUTE_CONSOLE>/api/v1/authenticate
{
 "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```
If you integrated Prisma Cloud with Active Directory, and you’re using the sAMAccountName user identifier, escape the backslash in DOMAIN\sAMAccountName. For example:
```bash
$ curl \
  -H "Content-Type: application/json" \
  -d '{"username":"DOMAIN\\<USERNAME>", "password":"<PASSWORD>"}' \
  <COMPUTE_CONSOLE>/api/v1/authenticate
{
 "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```
3. Call the Prisma Cloud API, submitting the token in the Authorization field of the HTTP header of your request.
For example, test the connection by retrieving your compliance policies.
```bash
$ curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." \
  <COMPUTE_CONSOLE>/api/v1/policies/compliance/container
  ```