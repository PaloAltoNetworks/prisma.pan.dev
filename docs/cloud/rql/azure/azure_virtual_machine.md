---
id: azure_virtual_machine
title: Virtual Machine
sidebar_label: Virtual Machine 
description: Virtual Machine
---

# Sample RQL Queries

:::note
The following guide will walk you through Azure RQL Query Examples
:::

## Azure virtual machine looking for Linux OS type in storage profile

```bash
config where AND api.name = 'azure-vm-list' AND json.rule = ['properties.storageProfile'].osDisk.osType contains "Linux"
```