---
id: aws_ecr
title: Amazon Elastic Container Registry
sidebar_label: ECR
description: Amazon Elastic Container Registry Queries
---

# Sample RQL Queries

:::note
The following guide will walk you through Amazon Elastic Container Registry RQL Query Examples
:::

## ECR has images with vulnerabilities 

```bash
config from cloud.resource where api.name = 'aws-ecr-image' AND json.rule = imageScanFindingsSummary does not exist 
```