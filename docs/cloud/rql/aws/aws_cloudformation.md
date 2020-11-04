---
id: aws_cloudformation
title: CloudFormation
sidebar_label: CloudFormation
description: AWS CloudFormation Queries
---

# Sample RQL Queries

:::note
The following guide will walk you through AWS CloudFormation RQL Query Examples
:::

## CloudFormation Template does not contain termination protection for EC2 Instances

```bash
config where api.name = 'aws-cloudformation-describe-stacks' AND json.rule = " cloudFormationTemplate.Resources.*.[?(@.Type=='AWS::EC2::Instance')] size > 0 and (cloudFormationTemplate.Resources.*.[?(@.Type=='AWS::EC2::Instance')].Properties.DisableApiTermination is false or cloudFormationTemplate.Resources.*.[?(@.Type=='AWS::EC2::Instance')].Properties.DisableApiTermination does not exist)"
```