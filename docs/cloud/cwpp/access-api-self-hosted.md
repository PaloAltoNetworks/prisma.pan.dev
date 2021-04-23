---
id: access-api-self-hosted
title: Access the API (Self-Hosted)
sidebar_label: Access the API (Self-Hosted)
---

The Prisma Cloud API is exposed on the host that runs Console on port 8083 (HTTPS).
The port is specified at install time in _twistlock.cfg_.

All example commands specify a variable called `CONSOLE`, which represents the address for your Console.
The address for your Console depends on how you installed it.

For Onebox installs, where you install Console on a stand-alone host, the value for `CONSOLE` is the IP address or DNS name of the host.
HTTPS access to Console is servered on port 8083, so the full address would be:

```
CONSOLE = https://<IPADDR>:8083
```

For the default Kubernetes installation procedure, the Console service is exposed by a LoadBalancer, and so the address for `CONSOLE` is

```
CONSLE = https://<LOAD_BALANCER>:8083
```

Access to the API requires authentication.
You can either:

* Retrieve a token, then pass the token in the Authorization field of all subsequent requests.
* Use Basic HTTP authentication for each request.

:::note
The default install of Prisma Cloud Compute Edition uses self-signed certificates.
By default, curl validates the server's certificate.
Because the certificate for the CA that signed the server's cert isn't in your CA store, curl can't validate the server's cert.

You've got two options:

* Pass the --insecure flag to curl.
With this flag, validation that the server is who it claims to be is bypassed.
The connection is still encrypted.

* Configure Prisma Cloud Compute to use your own custom certs.
:::


## Accessing the API using Basic authentication

The basic token is a Base64 encoded string of type username:password.

1. Generate the Base64 encoding of your username and password.
Assume your username is api, and your password is api.

  ```
  $ echo -n "api:api" | openssl base64
  YXBpOmFwaQ==
  ```

1. To access any other endpoint, set the Authorization field of your HTTP header to Basic and add the encoded string.
For example, to get all your runtime container policies:

  ```
  $ curl --insecure \
    -H 'Authorization: Basic YWRtaW46YWRtaW4=' \
    https://<CONSOLE>:8083/api/v1/policies/runtime/container
  ```

:::note
The curl command can handle basic auth for you with the `--user` option.
:::


## Accessing the API using token authentication

To access the API using a token:

1. Retrieve a token from the api/v1/authenticate endpoint with your user credentials.
Tokens are valid for 24 hours.
You can also retrieve tokens using client certificates.

  ```
  $ curl \
    -H "Content-Type: application/json" \
    -d '{"username":"admin", "password":"admin"}' \
    https://<CONSOLE>:8083/api/v1/authenticate
  {
   "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  }
  ```

  If you integrated Prisma Cloud Console with Active Directory, and you're using the sAMAccountName _user identifier_, escape the backslash in the `DOMAIN\sAMAccountName` username value.
  For example:

  ```
  $ curl \
    -H "Content-Type: application/json" \
    -d '{"username":"DOMAIN\\admin", "password":"admin"}' \
    https://<CONSOLE>:8083/api/v1/authenticate
  {
   "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  }
  ```

1. Call the Prisma Cloud API, submitting the token in the Authorization field in the HTTP header of your request.
For example, test connection to the API using the _/api/v1/policies_ endpoint:

  ```
  $ curl --insecure \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." \
    https://<CONSOLE>:8083/api/v1/policies/runtime/container
  ```

## Accessing the API using a client certificate

You can retrieve a token using client certificates issued by your public key infrastructure.

**Prerequisites:**

* You have configured Prisma Cloud Console with your server certificate.
Go to **Manage > Authentication > Certificates > TLS certificate for Console**, and upload your certificate (cat the cert and private key into a single file).

1. Install your client certificate on your local machine.

1. Request a token using your client certificate.

  ```
  $ curl --insecure \
    -X POST \
    --cert cert.pem \
    https://<CONSOLE>:8083/api/v1/authenticate-client
  {
   "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  }
  ```

1. Call the Prisma Cloud API, submitting the token in the Authorization field in the HTTP header of your request.
For example, to get all policies:

  ```
  $ curl --insecure \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." \
    https://<CONSOLE>:8083/api/v1/policies/runtime/container
  ```

