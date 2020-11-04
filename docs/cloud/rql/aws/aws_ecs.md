---
id: aws_ecs
title: ECS
sidebar_label: ECS
description: AWS ECS Queries
---

# Sample RQL Queries

:::note
The following guide will walk you through AWS ECS RQL Query Examples
:::

## PublicIPs associated with ECS

```bash
config where api.name = 'aws-ecs-service' as X; config where api.name = 'aws-ec2-describe-network-interfaces' as Y; filter " $.Y.tagSet[?(@.key=='aws:ecs:serviceName')].value contains $.X.serviceName and $.X.networkConfiguration.awsvpcConfiguration.assignPublicIp equals ENABLED"; show X; 
```