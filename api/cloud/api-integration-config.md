---
id: api-integration-config
title: Prisma Cloud Intergation API Configurations 
sidebar_label: API Integration Configurations
hide_table_of_contents: false
---

With the multiple out-of-the-box integration options that Prisma Cloud offers, you can integrate Prisma Cloud into your organization's existing security workflows and technologies.

## Integration Configuration

The model for an integration between Prisma Cloud and an external system includes an **integrationConfig** parameter that is a map of key/value pairs. The type of integration defines the content of these key/value pairs.

### Azure Service Bus Queue

Prisma Cloud can send alerts to an Azure Service Bus messaging service. To authorize access, you can either (1) use a Shared Access Signature for limiting access permissions to the Service Bus namespace or queue or (2) use the service principal credentials associated with the Azure Cloud account you've onboarded to Prisma Cloud. If you plan to use the service principal that uses Azure Active Directory to authorize requests, you must include the additional role Azure Service Bus Data Sender and enable send access to the Service Bus namespace and queues.

#### Add, Update, or Test an Azure Service Bus Queue Integration

To add an Azure Service Bus queue integration, invoke the API with the corresponding request body described in [Add Integration](/api/cloud/cspm/integrations#operation/save-integration). As part of that request body, the **integrationType** parameter for an Azure Service Bus queue integration is **azure_service_bus_queue**.

If you want to use the service principal-based access provided when the Azure cloud account was onboarded to Prisma Cloud, then the **integrationConfig** parameter contains the following key/value pairs.

Key | Value Description | Value Type | Default Value or Required
-----| ------------------ | ---------- | -------------
accountId | Azure account ID with service principal to which the Azure Service Bus queue belongs | string | _required_
queueUrl | The URL configured in the Azure Service Bus queue where Prisma sends alerts | string | _required_

If you want to use a role with limited permissions, then the **integrationConfig** parameter contains the following key/value pairs.

Key  |  Value Description | Value Type | Default Value or Required
-----| ------------------ | ---------- | -------------
connectionString | Azure Shared Access String connection string | string | _required_
queueUrl | The URL configured in the Azure Service Bus queue where Prisma sends alerts | string | _required_

To update an Azure Service Bus queue integration, invoke the API with the corresponding request body described in [Update Integration](/api/cloud/cspm/integrations#operation/update-integration). The **queueUrl** in **integrationConfig** is editable.

To test an Azure Service Bus queue integration, invoke the API with the corresponding request body described in [Test Integration](/api/cloud/cspm/integrations#operation/test-integration).

##### Example Request Body to Add or Test an Azure Service Bus Queue with Azure Account ID

```
{
    "description": "",
    "enabled": true,
    "integrationConfig":
    {
        "accountId": "",
        "queueUrl": ""
    },
    "integrationType": "azure_service_bus_queue",
    "name": ""
}
```

##### Example Request Body to Add or Test an Azure Service Bus Queue with a Shared Access String

```
{
    "description": "",
    "enabled": true,
     "integrationConfig":
    {
        "accountId": "",
        "queueUrl": ""
    },
    "integrationType": "azure_service_bus_queue",
    "name": ""
}
```

### Amazon SQS

Prisma Cloud supports Amazon Simple Queue Service (SQS) to send alerts to customers, who can consume these alerts through a Splunk add-on or through the AWS CloudFormation service to enable custom workflows. Once you configure Amazon SQS to receive Prisma Cloud alerts, including enabling required permissions, you can use the REST API to set up the Amazon SQS integration in Prisma Cloud.

#### Add, Update, or Test an Amazon SQS Integration

To add an Amazon SQS integration, invoke the API with the corresponding request body described  in [Add Integration](/api/cloud/cspm/integrations#operation/save-integration). As part of that request body, the **integrationType** parameter for an SQS integration is **amazon_sqs**.

The **integrationConfig** parameter contains the following key/value pairs when you are using IAM access keys:

Key  |  Value Description | Value Type | Default Value or Required
-----| ------------------ | ---------- | -------------
queueUrl | The Queue URL you used when you configured Prisma Cloud in Amazon SQS | string | _required_
moreInfo | true=specific IAM credentials are specified for SQS queue access | boolean | false
accessKey | AWS access key belonging to AWS IAM credentials meant for SQS queue access | string | Access provided during onboarding of AWS cloud account to which SQS queue belongs
secretKey | AWS secret key for the given access key | string | Access provided during onboarding of AWS cloud account to which SQS queue belongs

The **integrationConfig** parameter contains the following key/value pairs when you are using the IAM Role associated with Prisma Cloud:

Key  |  Value Description | Value Type | Default Value or Required
        -----| ------------------ | ---------- | -------------
queueUrl | The Queue URL you used when you configured Prisma Cloud in Amazon SQS | string | _required_
moreInfo | true=specific IAM credentials are specified for SQS queue access | boolean | false
roleArn | Role ARN associated with the IAM role on Prisma Cloud | string |  _required_
externalId | External ID associated with the IAM role on Prisma Cloud. New or updated value must be a unique 128-bit UUID | string | _required_

To update an Amazon SQS integration, invoke the API with the corresponding request body described in [Update Integration](/api/cloud/cspm/integrations#operation/update-integration). The **queueUrl** in **integrationConfig** is editable.

To test an Amazon SQS integration, invoke the API with the corresponding request body described  in [Test Integration](/api/cloud/cspm/integrations#operation/test-integration).

##### Example Request Body to Add or Test an Amazon SQS Integration with IAM Access Keys

```
{
    "description": "",
    "enabled": true,
    "integrationConfig":
    {
        "queueUrl": "",
        "moreInfo": true,
        "accessKey": "",
        "secretKey": ""
    },
    "integrationType": "amazon_sqs",
    "name": ""
}
```

##### Example Request Body to Add or Test an Amazon SQS Integration with IAM Role

```
{
    "description": "",
    "enabled": true,
    "integrationConfig":
    {
        "queueUrl": "",
        "moreInfo": true,
        "roleArn": "",
        "externalId": ""
    },
    "integrationType": "amazon_sqs",
    "name": ""
}
```

### Qualys

Prisma Cloud integrates with the Qualys platform to ingest and visualize vulnerability data for your resources that are deployed on the AWS and Azure cloud platforms. You need to get the API URL from your Qualys account and configure settings in Qualys, like Qualys user privileges, before you can use the REST API to set up the Qualys integration in Prisma Cloud.

#### Add, Update, or Test a Qualys Integration

To add a Qualys integration, invoke the API with the corresponding request body described in
[Add Integration](/api/cloud/cspm/integrations#operation/save-integration). As part of that request body, the integrationType parameter for an SQS integration is **qualys**, and the **integrationConfig** parameter contains the following key/value pairs.

Key  |  Value Description | Value Type | Default Value or Required
-----| ------------------ | ---------- | -------------
login | Qualys login | string | _required_
baseUrl | Qualys Security Operations Center server API URL (without **http(s)**) | string | _required_
password | Qualys password | string |  _required_

To update a Qualys integration, invoke the API with the corresponding request body described in
[Update Integration](/api/cloud/cspm/integrations#operation/update-integration). The values of the **integrationConfig** key/value pairs are updatable.

To test a Qualys integration, invoke the API with the corresponding request body described in
[Test Integration](/api/cloud/cspm/integrations#operation/test-integration).

##### Example Request Body to Add or Test a Qualys Integration

```
{
  "description": "",
  "enabled": true,
  "integrationConfig":
  {
    "baseUrl": "",
    "login": "",
    "password": ""
  },
  "integrationType": "qualys",
  "name": ""
}
```

### ServiceNow

Integrate Prisma Cloud with ServiceNow and get automatically notified about Prisma Cloud alerts through ServiceNow tickets to prioritize incidents and vulnerabilities that impact your business. Prisma Cloud integrates with the ITSM module (incident table), the Security Incident Response module (sn_si_incident table), and the Event Management modules (em_event table) on ServiceNow to generate alerts in the form of ITSM Incident, Security Incident, and Event tickets.

#### Add, Update, or Test a ServiceNow Integration

To add a ServiceNow integration, invoke the API with the corresponding request body described in
[Add Integration](/api/cloud/cspm/integrations#operation/save-integration). As part of that request body, the **integrationType** parameter for an SQS integration is **service_now**, and the **integrationConfig** parameter contains the following key/value pairs.

Key  |  Value Description | Value Type | Default Value or Required
-----| ------------------ | ---------- | -------------
hostUrl | ServiceNow Url | string | _required_
login | ServiceNow login | string | _required_
password | ServiceNow password for login | string |  _required_
tables | Array of key/value pairs that identify the ServiceNow module tables with which to integrate. The possible keys are: **incident**, **sn_si_incident**, **em_event**.<br/>The possible values for each key are: **true**, **false** | string |  _required_

To update a ServicNow integration, invoke the API with the corresponding request body described in
[Update Integration](/api/cloud/cspm/integrations#operation/update-integration). The values of the **integrationConfig** key/value pairs are updatable.

To test a ServiceNow integration, invoke the API with the corresponding request body described in
[Test Integration](/api/cloud/cspm/integrations#operation/test-integration).

##### Example Request Body to Add a ServiceNow Integration

```
{
  "description": "",
  "enabled": true,
  "integrationConfig":
  {
    "hostUrl": "",
    "login": "",
    "password": "",
    "tables":[
      {"incident": false},
      {"sn_si_incident": false},
      {"em_event": false}
      ]
  },
  "integrationType": "service_now",
  "name": ""
}
```

##### Example Request Body to Test a ServiceNow Integration

```
{
  "description": "",
  "enabled": true,
  "integrationConfig": 
  {
    "hostUrl": "", 
    "login": "",
    "password": "",
    "tables": [
      {"incident": false},
      {"sn_si_incident": false},
      {"em_event": false}
      ]
  },
  "integrationType": "service_now",
  "name": ""
}
```

### Webhook

The webhook integration enables you to pass information in a JSON format to any third-party integrations that are not natively supported on the Prisma Cloud service. With a webhook integration, you can configure the Prisma Cloud service to send alerts to the webhook URL as an HTTP POST request, so that any services or applications that subscribe to the webhook URL can receive alert notifications in real time.

#### Add, Update, or Test a Webhook Integration

To add a webhook integration, invoke the API with the corresponding request body described in
[Add Integration](/api/cloud/cspm/integrations#operation/save-integration). As part of that request body, the **integrationType** parameter for a webhook integration is **webhook**, and the **integrationConfig** parameter contains the following key/value pairs.

Key  |  Value Description | Value Type | Default Value or Required
-----| ------------------ | ---------- | -------------
url | Webhook URL | string | _required_
authToken | The authentication token for the event collector | string | _required_

To update a webhook integration, invoke the API with the corresponding request body described in
[Update Integration](/api/cloud/cspm/integrations#operation/update-integration). The values of the **integrationConfig** key/value pairs are updatable.

To test a webhook integration, invoke the API with the corresponding request body described in
[Test Integration](/api/cloud/cspm/integrations#operation/test-integration). You must also include the **integrationConfig.url** parameter in your request body.

##### Example Request Body to Add a Webhook Integration

```
{
  "description": "",
  "enabled": true,
  "integrationConfig": 
  {
    "authToken": "", 
    "url": ""
  },
  "integrationType": "webhook",
  "name": ""
}
```

##### Example Request Body to Test a Webhook Integration

```
{
    "name": "",
    "integrationType": "webhook",
    "integrationConfig": {
        "url": ""
    }
}
```

### PagerDuty

Integration with PagerDuty aids alerting, on-call scheduling, escalation policies and incident tracking to increase uptime of your apps, servers, websites and databases. The Prisma Cloud alerts are sent to the PagerDuty service. Your incident response teams are notified to investigate and remediate the security incidents.

#### Add, Update, or Test a PagerDuty Integration

To add a PagerDuty integration, invoke the API with the corresponding request body described in
[Add Integration](/api/cloud/cspm/integrations#operation/save-integration). As part of that request body, the **integrationType** parameter for a PagerDuty integration is **pager_duty**, and the **integrationConfig** parameter contains the following key/value pairs.

Key  |  Value Description | Value Type | Default Value or Required
-----| ------------------ | ---------- | -------------
integrationKey | PagerDuty integration key | string | _required_

To update a PagerDuty integration, invoke the API with the corresponding request body described in
[Update Integration](/api/cloud/cspm/integrations#operation/update-integration). The values of the **integrationConfig** key/value pairs are updatable.

To test a PagerDuty integration, invoke the API with the corresponding request body described in
[Test Integration](/api/cloud/cspm/integrations#operation/test-integration).

##### Example Request Body to Add a PagerDuty Integration

```
{
  "description": "",
  "enabled": true,
  "integrationConfig": 
  {
    "integrationKey": ""
  },
  "integrationType": "pager_duty",
  "name": ""
}
```

##### Example Request Body to Test a PagerDuty Integration

```
{
    "name": "",
    "integrationType": "pager_duty",
    "integrationConfig": {
        "integrationKey": ""
    }
}
```

