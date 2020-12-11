---
id: azure_cosmos_db
title: Azure Cosmos DB
sidebar_label: Cosmos DB
description: Cosmos DB
---

# Sample RQL Queries

:::note
The following guide will walk you through Azure Cosmos DB RQL Query Examples
:::

## Cosmos DB doesn't have an IP Range filter
:::note
Azure Cosmos DB Firewall Lock down your database to a subset of resources / limit accessibility
:::
```bash
config where cloud.type = 'azure' AND api.name = 'azure-cosmos-db' AND json.rule = properties.ipRangeFilter is empty
```

## Cosmos DB doesn't have a service endpoint in the form of network filter

```bash
config where api.name = 'azure-cosmos-db' AND json.rule = properties.isVirtualNetworkFilterEnabled is false
```