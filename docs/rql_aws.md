---
id: rql_aws
title: AWS RQL Queries
sidebar_label: AWS RQL Queries
description: AWS RQL Queries
---

# Sample RQL Queries

:::note
The following guide will walk you AWS RQL Query Examples.
:::

## List all AWS Security Groups that have Internet Access and exclude certain ports.

```bash
config where cloud.type = 'aws' AND api.name = 'aws-ec2-describe-security-groups' AND json.rule = (ipPermissions[*].ipv4Ranges[*].cidrIp contains 0.0.0.0/0 or ipPermissions[*].ipv6Ranges[*].cidrIpv6 contains ::/0) and ipPermissions[*].fromPort does not intersect (443, 500, 4500, 9021, 9092, 8083, 8088, 8090, 8082, 8081, 2181, 2888, 3888, 3780, 3781, 40815, 40814) and ipPermissions[*].toPort does not intersect (443, 500, 4500, 9021, 9092, 8083, 8088, 8090, 8082, 8081, 2181, 2888, 3888, 3780, 3781, 40815, 40814)
```

## List all Ec2 instances that have a connection open for RDP (public or specific) and that has a public ip address.

```bash
config where api.name = 'aws-ec2-describe-security-groups' as X; config where api.name = 'aws-ec2-describe-instances' as Y; filter '$.Y.securityGroups[*].groupId contains $.X.groupId and $.Y.publicIpAddress exists and ($.X.ipPermissions[?(@.toPort==3389||@.fromPort== 3389)] size > 0 or $.X.ipPermissions[?(@.toPort== 3389||@.fromPort== 3389)] size > 0 or $.X.ipPermissions[?(@.toPort>3389&&@.fromPort<3389)] size > 0 or $.X.ipPermissions[?(@.toPort>3389&&@.fromPort<3389)] size > 0)'; show X;
```
