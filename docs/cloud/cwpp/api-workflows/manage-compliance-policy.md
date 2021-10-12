---
id: manage-compliance-policy
title: Manage Compliance Policy
sidebar_label: Manage Compliance Policy
---

The Compute API can automate all aspects of the product.
Here we discuss how to automate the management of compliance policies.

For example, you may want to create different compliance policies for different parts of your environment, but build them all out from a common baseline.
Alternatively, you may have a central security or internal audit team that needs to be able to assess compliance across multiple environments.
In both cases, the API helps to manage 'fanned out' compliance policies.


## Creating and editing policies

The Compute API takes a single object that updates all rules in a compliance policy in a single shot.
This makes it easy to keep a strict order between rules in a policy..
The process of adding, editing, or removing a policy is:

1. Get the policy (returns a JSON object).

1. Modify the JSON response object according to your needs.
Add new rules, modify current rules, or delete current rules.

1. Update the policy by pushing the new JSON payload.

The following example shows how to update your container compliance policy, which maps to **Defend > Compliance > Containers and Images** in the Console UI.

1. Get the current policy.

  ```
  $ curl -k \
    -u user \ 
    'https://<CONSOLE>/api/v1/policies/compliance/container'
  ```

1. Modify the JSON output.

  See explanatory notes in the comments (`//`)  inline in the following response:

  ```
  {
    "modified": "2020-07-24T02:02:19.224Z", // see 1
    "owner": "jfalgout", // see 2
    "name": "my policy", // see 3
    "previousName": "", // see 4
    "disabled": false, // see 5
    "effect": "alert, block", //see 4 
    "resources": { // see 6
      "hosts": ["*"],
      "images": ["nginx:latest"],
      "labels": ["*"],
      "containers": ["*"],
      "namespaces": ["*"],
      "accountIDs": ["*"]
    },
    "action": ["*"], // see 4
    "condition": {
      "readonly": false, // see 4
      "device": "", // see 4
      "vulnerabilities": [ // see 7
        {
          "id": 4000, // see 8
          "block": false, // see 9
          "minSeverity": 1 // see 4
        }, [...]
      ]
    },
    "group": ["*"], // see 4
    "verbose": true, // see 10
    "allCompliance": true, // see 4
    "alertThreshold": { "disabled": false,"value": 0}, // see 4
    "blockThreshold": { "enabled": false,"value": 0}, // see 4
    "graceDays": 0 // see 4
  } [...]
  ```

  Where:

  * *1* -- Last Modified Date.

  * *2* -- User who created the rule.

  * *3* -- Name of the rule.

  * *4* -- Obsolete.

  * *5* -- Set to false to enable the policy.

  * *6* -- Resources targeted by this policy.

  * *7* -- Compliance rules are called vulnerabilities as well.

  * *8* -- Compliance rule ID.

  * *9* -- Blocking on this compliance rule enabled or disabled.

  * *10* -- Blocking message verbosity.

  :::note
  If any policy is modified or deleted here, this will replace the existing policies in Console when uploaded.
  For any policy to remain unchanged / undeleted, please keep it as is in the file.
  :::

1. Update policies, where *policy_upload.txt* contains the JSON payload.

  ```
  $ curl -k \ 
    -u user \
    -X PUT \
    -H "Content-Type:application/json" \
    'https://<CONSOLE>/api/v1/policies/compliance/container' \
    --data-binary "@policy_upload.txt"
  ```


## Getting compliance results

Compliance results can also be retrieved via the API.

For example, to get the compliance status of containers:

  ```
  $ curl -k \
    -u user \ 
    'https://<CONSOLE>/api/v1/containers'
  ```

To filter results, use the `id` parameter:

  ```
  $ curl -k \
    -u user \
    'https://<CONSOLE>/api/v1/containers?id=4cba*'
  ```

Or, use the `name` parameter (`offset` and `limit` must also be specified):

  ```
  $ curl -k \
    -u user \ 
    'https://<CONSOLE>/api/v1/containers?offset=0&limit=10&search=distracted_yona'
  ```

Use the `scan_time` property of the scan result to determine if the scan is completed.
The scan request returns the time the scan started.
Repeat the request until the scan time of the result is greater than the one you received from scan request.
We recommend checking every 10 seconds; few scans should take more than 20-30 seconds to complete.

  ```
  $ curl -k \
    -u user \
    'https://<CONSOLE>/api/v1/containers/scan'
  ```

