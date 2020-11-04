---
id: aws_elb
title: ELB
sidebar_label: ELB
description: AWS ELB rql
---

# Sample RQL Queries

:::note
The following guide will walk you through AWS RQL Query Examples
:::

## Internet-Facing ELB that is not behind a WAF

```bash
config where api.name = 'aws-elbv2-describe-load-balancers' as X; config where api.name = 'aws-waf-classic-web-acl-resource' 
as Y; config where api.name = 'aws-waf-v2-web-acl-resource' as Z; 
filter ' not ( ( $.Z.resources.applicationLoadBalancer[*] contains $.X.loadBalancerArn ) or 
( $.Y.resources.applicationLoadBalancer[*] contains $.X.loadBalancerArn ))'; show X;
```

