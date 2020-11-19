---
id: azure_event
title: Azure event
sidebar_label: Event queries
description: Event queries
---

# Sample RQL Queries

:::note
The following guide will walk you through Azure Event RQL Query Examples
:::

## Azure RQL that alerts on suspicious RDP login events

```bash
event where cloud.type = 'azure' AND operation IN ( 'Activate Alert (Suspicious incoming RDP network activity from multiple sources)', 'Activate Alert ((Preview) Remote Desktop Login from unusual location)' )
```