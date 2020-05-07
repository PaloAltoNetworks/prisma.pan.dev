---
id: iac_api
title: Prisma Public Cloud IaC Scan API (BETA)
sidebar_label: IaC Scan API
---

### Scan CloudFormation, Terraform, Kubernetes deployment YAML files for security issues.

> Prisma Public Cloud IaC Scan API requires authentication from Prisma Cloud. We offer full functionality 30 day trial for Prisma Cloud product here - https://marketplace.paloaltonetworks.com/s/product-rdl

Prisma Public Cloud IaC Scan API is a public service that helps DevOps and security teams identify insecure configuration in their IaC so they can fix them before deploying the infrastructure to runtime. The service accepts IaC templates and provides scan results with details about the insecure configurations in the templates. You can use this service to scan popular formats such as AWS CloudFormation Templates, HashiCorp Terraform templates and Kubernetes App Deployment YAML files.

## Quickstart

Here is a quick example to get started using the Prisma Public Cloud IaC Scan API. Run the following command on your terminal with your AWS CFT in a file named cft.json and obtain the results of the scanner. Further examples such as YAML and HCL formats for various template types including Terraform and Kubernetes are detailed in the FAQs section below.
``` bash 
curl --data-binary @cft.json  -X POST https://scanapi.redlock.io/v1/iac
```

If cft.json contains any misconfigurations that are detected by the scanner, a response similar to the one below will be returned. If no misconfigurations are detected, a simple message confirming that the scanner successfully operated on the template will be returned. In the case of invalid input or any other failure an error message will be returned.

``` json
{
    "result": {
        "rules_matched": [
            {
                "severity": "medium",
                "name": "$.Type equals 'AWS::RDS::DBInstance' and $.Properties.multiAZ is false or $.Properties.multiAZ does not exist",
                "id": "e92b04d6-d32a-4e28-b13c-d809e1c45009"
            }
        ],
        "severity_stats": {
            "high": 0,
            "low": 0,
            "medium": 1
        },
        "is_successful": "true"
    }
}
```

## FAQs
1. **What is Infrastructure-as-Code?**
 Infrastructure-as-Code was invented out of the need to automate the deployment of infrastructure and to make it faster, repeatable, consistent and error free. Due to the proliferation of cloud technologies and increasingly complex hybrid environments, DevOps teams are increasingly challenged to configure, maintain and replicate these infrastructures with more efficiency and greater ease. IaC meets this need with a collection of modern representation formats that describe and deploy infrastructure, which has virtual components, physical components, or a combination of both.

IaC scripts can be developed for several widely used cloud and hybrid platforms, provided by several entities, each requiring their own distinct structure to be parsed by their respective engines, and their supported formats (whether they be JSON, YAML, or other proprietary formats). Commonly used IaC tools are:

* CloudFormation Templates (CFT) for AWS.
* Terraform (TF) by HashiCorp for single and multi cloud, and hybrid environments.
* Azure Resource Manager Templates (ARM) for Azure.
* Google Cloud Deployment Manager for GCP.
* Kubernetes (K8s) App Deployment YAML files.

2. **Where does security fit into IaC?**

Many security vulnerabilities that exist on infrastructure within physical data centers, also exist on the cloud and on hybrid platforms, along with additional vulnerabilities that each cloud platform may expose. Since the responsibility of deploying secure infrastructure remains with you as the user of the cloud or hybrid service, the Prisma Public Cloud IaC Scan API allows you to check your infrastructure templates against security best practices and ensure that security is not an afterthought. The service aims to help you build a strong security foundation, where you can find and fix issues before you deploy the infrastructure.

3. **How does the Prisma Public Cloud IaC Scan API work?**

Misconfigurations when designing and deploying infrastructure that are known to lead to security issues are formalized into logical rules, and each rule is stored into a large dataset that Palo Alto Networks maintains and continuously updates. The IaC Scan API scans a given IaC script against these rules to detect misconfigurations based on the script’s infrastructure topologies, components and values. Each misconfiguration rule is assigned a severity level that commensurates with the severity of the potential damage should the misconfiguration be exploited, and each rule has a unique ID.

For instance, if a CFT, that has the misconfiguration of Amazon RDS not having multiple availability zones setup, were passed to the scanner, the API would return the rule that has been violated by the misconfiguration:
``` bash
 $.Type equals 'AWS::RDS::DBInstance' and $.Properties.multiAZ is false or $.Properties.multiAZ does not exist
```

4. **Can I see the list of supported policies?** 

<a href="/docs/content" target="_blank">Supported policies can be found here.</a>

5. **How to use the Prisma Public Cloud IaC Scan API?**

The IaC Scan API can be used by querying a REST API. Users may simply choose to call the REST API before deployment or even as part of a CICD build. The REST API URL is `https://scanapi.redlock.io/v1/iac` and below are detailed examples for various use cases of the REST API.

```bash
POST https://scanapi.redlock.io/v1/iac
```
Scans a valid CFT, TF or Kubernetes App Deployment YAML file provided in either JSON or YAML format. Returns a list of known misconfiguration rules matched if any are found.

**CFT in JSON format**
Example request where cft.json contains a CFT in JSON format and is located in the same directory:

```bash
curl --data-binary @cft.json  -X POST https://scanapi.redlock.io/v1/iac
```
```json
Example response:

{
    "result": {
        "rules_matched": [
            {
                "severity": "medium",
                "name": "$.Type equals 'AWS::RDS::DBInstance' and $.Properties.multiAZ is false or $.Properties.multiAZ does not exist",
                "id": "e92b04d6-d32a-4e28-b13c-d809e1c45009"
            }
        ],
        "severity_stats": {
            "high": 0,
            "low": 0,
            "medium": 1
        },
        "is_successful": "true"
    }
}
```

**TF in JSON format**
Example request where tf.json contains a Terraform script in JSON format and is located in the same directory:
```bash
curl --data-binary @tf.json  -X POST https://scanapi.redlock.io/v1/iac
```
```json
Example response:

{
    "result": {
    "rules_matched": [
        {
        "severity": "medium",
        "name": "$.resource[*].aws_elb[*].web[*].listener[*].lb_protocol equals http",
        "id": "3ee20808-111e-403c-9dec-abfc0f96ff77"
        }
    ],
    "severity_stats": {
        "high": 0,
        "low": 0,
        "medium": 1
    },
    "is_successful": "true"
    }
}
```

**K8s in JSON format**
Example request where k8s.json contains a Kubernetes configuration script in JSON format and is located in the same directory:
```bash
    curl -k --data-binary @K8s.json -X POST https://scanapi.redlock.io/v1/iac
```
```json
Example response:

{
    "result": {
    "rules_matched": [
        {
        "severity": "high",
        "name": "$.metadata.name equals rss-site",
        "id": "599085be-7c52-4f1b-80f9-16b913063851"
        }
    ],
    "severity_stats": {
        "high": 1,
        "low": 0,
        "medium": 0
    },
    "is_successful": "true"
    }
}
```

**CFT in YAML format**
Example request where cft.yaml contains a CFT in YAML format and is located in the same directory:
```bash
curl --data-binary @cft.yaml  -X POST https://scanapi.redlock.io/v1/iac
```
Example response:
```json
{
    "result": {
    "rules_matched": [
        {
        "severity": "medium",
        "name": "$.Type equals 'AWS::RDS::DBInstance' and $.Properties.multiAZ is false or $.Properties.multiAZ does not exist",
        "id": "e92b04d6-d32a-4e28-b13c-d809e1c45009"
        }
    ],
    "severity_stats": {
        "high": 0,
        "low": 0,
        "medium": 1
    },
    "is_successful": "true"
    }
}
```

**Terraform Module sent as a zip file.**
Example request where terraform.zip is a zip file containing compressed terraform files with relevant standard variable files (variables.tf or variables.tf.json):
```bash
curl --data-binary @terraform.zip  -X POST https://scanapi.redlock.io/v1/iac
```
Example response:
```json
{  
    "result":{  
    "is_successful":true,  
    "rules_matched":[  
    {  
        "severity":"medium",  
        "name":"AWS S3 object versioning is disabled",  
        "rule":"$.resource[*].aws_s3_bucket exists and ($.resource[*].aws_s3_bucket.*[*].*.versioning does not exist or ($.resource[*].aws_s3_bucket.*[*].*.versioning exists and $.resource[*].aws_s3_bucket.*[*].*.versioning[*].enabled any equal false))",  
        "files":[  
        "test2.tf.json",  
        "test.tf.json"  
        ],  
        "id":"1914c65c-2406-4261-88cd-fbeb684a15dc"  
        },  
    {  
        "severity":"high",  
        "name":"AWS S3 buckets are accessible to public",  
        "rule":"$.resource[*].aws_s3_bucket exists and ($.resource[*].aws_s3_bucket.*[*].*.acl does not exist or ($.resource[*].aws_s3_bucket.*[*].*.acl equals public-read-write or $.resource[*].aws_s3_bucket.*[*].*.acl equals public-read))",  
        "files":[  
        "test.tf.json"  
        ],  
        "id":"ded75b65-7ef6-4239-a08f-d4d9a4eb218b"  
        }  
        ],  
        "severity_stats":{  
        "high":1,  
        "low":0,  
        "medium":1  
        }  
    },  
    "response_id":"79a7747a-7283-4b01-993b-4f588709555b"  
    }	
```

**Terraform Module sent as a zip file with custom variable files.**
Example request where terraform.zip is a zip file containing compressed terraform files with custom variable files (standard variable files including variables.tf and variables.tf.json will still be scanned).
```bash
curl --data-binary @terraform.zip -H 'rl-variable-file-names: ["vars.tf.json"]' -X POST https://scanapi.redlock.io/v1/iac
```
Example response:
```json
{  
    "result":{  
    "is_successful":true,  
    "rules_matched":[  
    {  
        "severity":"medium",  
        "name":"AWS S3 object versioning is disabled",  
        "rule":"$.resource[*].aws_s3_bucket exists and ($.resource[*].aws_s3_bucket.*[*].*.versioning does not exist or ($.resource[*].aws_s3_bucket.*[*].*.versioning exists and $.resource[*].aws_s3_bucket.*[*].*.versioning[*].enabled any equal false))",  
        "files":[  
        "test2.tf.json",  
        "test.tf.json"  
        ],  
        "id":"1914c65c-2406-4261-88cd-fbeb684a15dc"  
        },  
    {  
        "severity":"high",  
        "name":"AWS S3 buckets are accessible to public",  
        "rule":"$.resource[*].aws_s3_bucket exists and ($.resource[*].aws_s3_bucket.*[*].*.acl does not exist or ($.resource[*].aws_s3_bucket.*[*].*.acl equals public-read-write or $.resource[*].aws_s3_bucket.*[*].*.acl equals public-read))",  
        "files":[  
        "test.tf.json"  
        ],  
        "id":"ded75b65-7ef6-4239-a08f-d4d9a4eb218b"  
        }  
        ],  
        "severity_stats":{  
        "high":1,  
        "low":0,  
        "medium":1  
        }  
    },  
    "response_id":"79a7747a-7283-4b01-993b-4f588709555b"  
    }
```

6. **How do I interpret the HTTP status codes?**

An error has an HTTP status code along with an error_detail string that provides more information to help you resolve the error.

* **200 - Success**. The request has completed successfully.

* **400 - Bad Request**. An invalid request has been sent, possibly due to invalid JSON/YAML in the body, an empty body or invalid headers**.

* **500 - Internal Server Error**. There was an error processing the request.

6. **How do I get help on these services?**
You can contact us at prisma-scanapi-support@paloaltonetworks.com
