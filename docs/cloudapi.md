---
id: cloud_api
title: Prisma Public Cloud Scanning API
sidebar_label: Overview
---

> ### Free Security Scanning APIs to secure your docker images, VMs, infrastructure-as-code templates.

Prisma Public Cloud Scanning API are public API services designed to help developers, DevOps and security teams detect and address security issues with their containerized applications as early as possible in their software development lifecycle to reduce the overall attack surface of their applications and potential runtime security issues.

#### There are two types of services:

1. <a href="/docs/twistcli_gs" target="_self">twistcli</a> - This service identifies vulnerabilities in packages used in container images as well as VMs.

2. Prisma Public Cloud Infrastructure-as-Code (IaC) Scan API - This service identifies insecure configurations in common Infrastructure-as-Code (e.g. AWS Cloud Formation Templates, HashiCorp Terraform templates, Kubernetes App Deployment YAML files)

## FAQs
#### Will you be keeping these scanning services up to date with the latest security research of Palo Alto Networks as well as other public threat intelligence?

Yes, absolutely. Not only will we continuously leverage all public cybersecurity resources such as NVD, but we will also incorporate the latest security research, threat intelligence and feedback from our 60,000+ customers worldwide into these scanning services.

#### What is the targeted audience for these services?

Typically, developers would use our Vulnerability Scan API to detect vulnerabilities in their Dockerfiles while still in development while DevOps and Security would use it to identify and address security issues during the CICD process. DevOps and Security would use our IaC Scan API to detect insecure configurations of their containerized applications in the CICD pipeline.

#### How do I get help on these services? 

You can contact us at prisma-scanapi-support@paloaltonetworks.com