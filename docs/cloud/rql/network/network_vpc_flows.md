---
id: network_vpc_flows
title: Network from VPC Flows
sidebar_label: VPC Flows
description: Network VPC Flows Queries
---

# Sample RQL Queries

:::note
The following guide will walk you through Network based on VPC Flows RQL Examples
:::

## Map all suspicious and internet traffic to resources that have discovered vulnerabilities
> This query excludes resources that are expected to intercept internet and suspicious traffic from all sources

```bash
network from vpc.flow_record where source.publicnetwork IN ( 'Internet IPs', 'Suspicious IPs' ) 
AND dest.resource IN ( resource where role NOT IN ( 'AWS ELB', 'AWS NAT Gateway', 'AZURE ELB', 'GCP ELB' ) 
AND finding.type IN ( 'Host Vulnerability', 'Prisma Cloud Alert', 'Serverless Vulnerability' ) ) AND bytes > 0
```

