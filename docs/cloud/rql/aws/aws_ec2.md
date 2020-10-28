---
id: aws_ec2
title: AWS EC2 Queries
sidebar_label: AWS EC2 Queries
description: AWS EC2 Queries
---

# Sample RQL Queries

:::note
The following guide will walk you through AWS EC2 RQL Query Examples
:::

## List all AWS Security Groups that have Internet Access and exclude certain ports.

```bash
config where cloud.type = 'aws' AND api.name = 'aws-ec2-describe-security-groups' AND json.rule = (ipPermissions[*].ipv4Ranges[*].cidrIp contains 0.0.0.0/0 or ipPermissions[*].ipv6Ranges[*].cidrIpv6 contains ::/0) and ipPermissions[*].fromPort does not intersect (443, 500, 4500, 9021, 9092, 8083, 8088, 8090, 8082, 8081, 2181, 2888, 3888, 3780, 3781, 40815, 40814) and ipPermissions[*].toPort does not intersect (443, 500, 4500, 9021, 9092, 8083, 8088, 8090, 8082, 8081, 2181, 2888, 3888, 3780, 3781, 40815, 40814)
```

## List all Ec2 instances that have a connection open for RDP (public or specific) and that has a public ip address.

```bash
config where api.name = 'aws-ec2-describe-security-groups' AND json.rule = (((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipRanges[*] contains 0.0.0.0/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipRanges[*] contains 0.0.0.0/0)) or ((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0))) and isShared is false as X; config where api.name = 'aws-ec2-describe-instances' AND json.rule = publicIpAddress exists as Y; filter '$.Y.securityGroups[*].groupId contains $.X.groupId'; show X; 
```

## List all instances that have a Public IP assigned, and are associated to an NSG that is open to the public.

```bash
config where api.name = 'aws-ec2-describe-instances' AND json.rule = publicIpAddress exists and publicIpAddress is not empty as X; config where api.name = 'aws-ec2-describe-security-groups' AND json.rule = ipPermissions[*].ipRanges[*] contains 0.0.0.0/0 or ipPermissions[*].ipv6Ranges[*].cidrIpv6 contains ::/0 as Y; filter '$.X.securityGroups[*].groupName == $.Y.groupName' ; show X;
```

## List all security groups that are open to the public on port 3389 that are on a VPC that contains an IGW

```bash
config where api.name = 'aws-ec2-describe-security-groups' AND json.rule = (((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipRanges[*] contains 0.0.0.0/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipRanges[*] contains 0.0.0.0/0)) or ((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0))) and isShared is false as X; config where api.name = 'aws-ec2-describe-internet-gateways' as Y; filter '$.Y.attachments[*].vpcId contains $.X.vpcId'; show X; 
```

## List all security groups that are open to the public on port 22 that are on a VPC that contains an IGW with an EC2 instance attached.

```bash
config where api.name = 'aws-ec2-describe-security-groups' AND json.rule = (((ipPermissions[?(@.toPort > 22 && @.fromPort < 22)].ipRanges[*] contains 0.0.0.0/0) or (ipPermissions[?(@.toPort == 22 || @.fromPort == 22)].ipRanges[*] contains 0.0.0.0/0)) or ((ipPermissions[?(@.toPort > 22 && @.fromPort < 22)].ipv6Ranges[*].cidrIpv6 contains ::/0) or (ipPermissions[?(@.toPort == 22 || @.fromPort == 22)].ipv6Ranges[*].cidrIpv6 contains ::/0))) and isShared is false as X; config where api.name = 'aws-ec2-describe-internet-gateways' as Y; config where api.name = 'aws-ec2-describe-instances' as Z; filter '$.Z.securityGroups[*].groupId contains $.X.groupId and $.Y.attachments[*].vpcId contains $.X.vpcId'; show X;
```
## 

```bash

```