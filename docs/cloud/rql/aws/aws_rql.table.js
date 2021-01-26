import React from "react";
import CodeBlock from "@theme/CodeBlock";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const queries = [
  {
    description: "List all AWS Security Groups that have Internet Access and exclude certain ports.",
    rql: "config from cloud.resource where cloud.type = 'aws' AND api.name = 'aws-ec2-describe-security-groups' AND json.rule = (ipPermissions[*].ipv4Ranges[*].cidrIp contains 0.0.0.0/0 or ipPermissions[*].ipv6Ranges[*].cidrIpv6 contains ::/0) and ipPermissions[*].fromPort does not intersect (443, 500, 4500, 9021, 9092, 8083, 8088, 8090, 8082, 8081, 2181, 2888, 3888, 3780, 3781, 40815, 40814) and ipPermissions[*].toPort does not intersect (443, 500, 4500, 9021, 9092, 8083, 8088, 8090, 8082, 8081, 2181, 2888, 3888, 3780, 3781, 40815, 40814)",

  },
  {
    description: "List all EC2 instances that have a connection open for RDP (public or specific) and that has a public ip address.",
    rql: "config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' AND json.rule = (((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipRanges[*] contains 0.0.0.0/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipRanges[*] contains 0.0.0.0/0)) or ((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0))) and isShared is false as X; config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = publicIpAddress exists as Y; filter '$.Y.securityGroups[*].groupId contains $.X.groupId'; show X; ",
  },
  {
    description: "Handling Missing Instances when Looping with RQL",
    rql: "config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = publicIpAddress exists and publicIpAddress is not empty as X; config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' AND json.rule = ipPermissions[*].ipRanges[*] contains 0.0.0.0/0 or ipPermissions[*].ipv6Ranges[*].cidrIpv6 contains ::/0 as Y; filter '$.X.securityGroups[*].groupName == $.Y.groupName' ; show X;",
  },
  {
    description: "List all security groups that are open to the public on port 3389 that are on a VPC that contains an IGW",
    rql: "config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' AND json.rule = (((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipRanges[*] contains 0.0.0.0/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipRanges[*] contains 0.0.0.0/0)) or ((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0))) and isShared is false as X; config from cloud.resource where api.name = 'aws-ec2-describe-internet-gateways' as Y; filter '$.Y.attachments[*].vpcId contains $.X.vpcId'; show X; ",
  },
  {
    description: "List all security groups that are open to the public on port 22 that are on a VPC that contains an IGW with an EC2 instance attached.",
    rql: "'aws-ec2-describe-security-groups' AND json.rule = (((ipPermissions[?(@.toPort > 22 && @.fromPort < 22)].ipRanges[*] contains 0.0.0.0/0) or (ipPermissions[?(@.toPort == 22 || @.fromPort == 22)].ipRanges[*] contains 0.0.0.0/0)) or ((ipPermissions[?(@.toPort > 22 && @.fromPort < 22)].ipv6Ranges[*].cidrIpv6 contains ::/0) or (ipPermissions[?(@.toPort == 22 || @.fromPort == 22)].ipv6Ranges[*].cidrIpv6 contains ::/0))) and isShared is false as X; config from cloud.resource where api.name = 'aws-ec2-describe-internet-gateways' as Y; config from cloud.resource where api.name = 'aws-ec2-describe-instances' as Z; filter '$.Z.securityGroups[*].groupId contains $.X.groupId and $.Y.attachments[*].vpcId contains $.X.vpcId'; show X;",
  },
  {
    description: "Detect EC2 instances that have been existing longer than 30 dates(via the block device attachTime), where the volume isn't encrypted.",
    rql: "config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = \"blockDeviceMappings[?(@.deviceName=='/dev/xvda'||@.deviceName=='/dev/sda1')].ebs.attachTime exists and (( _DateTime.ageInDays(blockDeviceMappings[?(@.deviceName=='/dev/xvda')].ebs.attachTime) < 30) or ( _DateTime.ageInDays(blockDeviceMappings[?(@.deviceName=='/dev/sda1')].ebs.attachTime) < 30))\" as X; config from cloud.resource where api.name = 'aws-ec2-describe-volumes' AND json.rule = encrypted is false as Y; filter ' $.X.instanceId equals $.Y.attachments[*].instanceId '; show X;",
  },
  {
    description: "Detect AMI images older than 90 days",
    rql: "config from cloud.resource where cloud.type = 'aws' AND cloud.service = 'EC2' AND api.name = 'aws-ec2-describe-images' AND json.rule = \"_DateTime.ageInDays(image.creationDate) > 90\"",
  },
  {
    description: "Detect EC2 instances running AMIs older than 30 days",
    rql: "config from cloud.resource where api.name = 'aws-ec2-describe-instances' as X; config from cloud.resource where api.name = 'aws-ec2-describe-images' AND json.rule = \"_DateTime.ageInDays(image.creationDate) > 30\" as Y; filter ' $.X.imageId==$.Y.image.imageId '; show X;"
  },
  {
    description: "Detect EC2 instances running for more than 1 day but less than 3 days",
    rql: "config from cloud.resource where api.name = 'aws-ec2-describe-instances' and json.rule = \"_DateTime.ageInDays(launchTime) > 1 and state.code equals 16 and _DateTime.ageInDays(launchTime) < 3\""
  },
  {
    description: "Detect CFT's that created public SecurityGroups",
    rql: "config from cloud.resource where api.name = 'aws-cloudformation-describe-stacks' as X; config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' AND json.rule = ipPermissions[*].ipv6Ranges[*].cidrIpv6 contains ::/0 or ipPermissions[*].ipRanges[*] contains 0.0.0.0/0 as Y; filter '$.X.stackResources[*].physicalResourceId == $.Y.groupId'; show X; "
  },
  {
    description: "Find flow logs of VPCs that have EC2 instances attached to verify if network flowlogs exist",
    rql: "config from cloud.resource where api.name = 'aws-ec2-describe-flow-logs' as X; config from cloud.resource where api.name = 'aws-ec2-describe-instances' as Y; filter '$.X.resourceId==$.Y.vpcId'; show X;"
  },
  {
    description: "Find VPCs where Flow Logs are NOT enabled ",
    rql: "config from cloud.resource where api.name = 'aws-ec2-describe-vpcs' as X; config from cloud.resource where api.name = 'aws-ec2-describe-flow-logs' as Y; filter ' not ($.Y.resourceId equals $.X.vpcId)'; show X;"
  },
  {
    description: "List unattached security groups (in respect to EC2 instances)",
    rql: "config from cloud.resource where cloud.type = 'aws' AND api.name = 'aws-ec2-describe-security-groups' as X; config from cloud.resource where api.name = 'aws-ec2-describe-instances' as Y; filter ' not ($.Y.securityGroups[*].groupId contains $.X.groupId) '; show X;"
  },
  {
    description: "Unattached security groups (in respect to network interfaces)",
    rql: "config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' and json.rule = \"groupName does not equal default\" as X; config from cloud.resource where api.name = 'aws-ec2-describe-network-interfaces' as Y; filter 'not ($.Y.groups[*].groupId contains $.X.groupId) '; show X;"
  },
  {
    description: "ECR has images with vulnerabilities ",
    rql: "config from cloud.resource where api.name = 'aws-ecr-image' AND json.rule = imageScanFindingsSummary exists "
  },
  {
    description: "Internet-Facing ELB that is not behind a WAF",
    rql: "config from cloud.resource where api.name = 'aws-elbv2-describe-load-balancers' as X; config from cloud.resource where api.name = 'aws-waf-classic-web-acl-resource' as Y; config from cloud.resource where api.name = 'aws-waf-v2-web-acl-resource' as Z; filter ' not ( ( $.Z.resources.applicationLoadBalancer[*] contains $.X.loadBalancerArn ) or ( $.Y.resources.applicationLoadBalancer[*] contains $.X.loadBalancerArn ))'; show X;"
  },
  {
    description: "CloudFormation Template does not contain termination protection for EC2 Instances",
    rql: "config from cloud.resource where api.name = 'aws-cloudformation-describe-stacks' AND json.rule = \" cloudFormationTemplate.Resources.*.[?(@.Type=='AWS::EC2::Instance')] size > 0 and (cloudFormationTemplate.Resources.*.[?(@.Type=='AWS::EC2::Instance')].Properties.DisableApiTermination is false or cloudFormationTemplate.Resources.*.[?(@.Type=='AWS::EC2::Instance')].Properties.DisableApiTermination does not exist)\""
  },
  {
    description: "CloudFormation Stack Has Drifted from Template",
    rql: "config from cloud.resource where api.name = 'aws-cloudformation-describe-stacks' AND json.rule = stackResources[*].driftInformation.stackResourceDriftStatus equals DRIFTED"
  },
  {
    description: "Ensure Cognito Identity Pool exists",
    rql: "config from cloud.resource where cloud.type = 'aws' AND cloud.service = 'AWS Cognito' AND api.name = 'aws-cognito-identity-pool' AND json.rule = identityPoolName exists"
  },
  {
    description: "PublicIPs associated with ECS",
    rql: "config from cloud.resource where api.name = 'aws-ecs-service' as X; config from cloud.resource where api.name = 'aws-ec2-describe-network-interfaces' as Y; filter \" $.Y.tagSet[?(@.key=='aws:ecs:serviceName')].value contains $.X.serviceName and $.X.networkConfiguration.awsvpcConfiguration.assignPublicIp equals ENABLED\"; show X;"
  },
  {
    description: "AWS Guardduty Host looking for Trojan using Blackholed DNS traffic",
    rql: "config from cloud.resource where finding.type = 'AWS GuardDuty Host' AND finding.name = 'Trojan:EC2/BlackholeTraffic!DNS'"
  },
  {
    description: "Unprotected (without a Compute Defender) Internet-accessible active AWS Lambda functions",
    rql: "config from cloud.resource where resource.status = Active AND api.name = 'aws-lambda-list-functions' AND json.rule = vpcConfig does not exist and handler does not equal \"twistlock.handler\" and environment.variables does not contain \"TW_POLICY\""
  },
  {
    description: "RDS Parameter group settings doesn't have the parameter: rds.force_ssl set",
    rql: "config from cloud.resource where api.name = 'aws-rds-describe-db-parameter-groups' AND json.rule = ['parameters'].['rds.force_ssl'] does not exist"
  },
  {
    description: "RDS Aurora PostgreSQL is publicly accessible",
    rql: "config from cloud.resource where api.name = 'aws-rds-db-cluster' AND json.rule = 'engine contains \"aurora-postgresql\" and publiclyAccessible is true'"
  },
  {
    description: "S3 public bucket and exclude buckets with tag key is \"DataClassification\" and tag value is \"Public\"",
    rql: "config from cloud.resource where cloud.type = 'aws' AND api.name='aws-s3api-get-bucket-acl' AND json.rule = \"((((acl.grants[?(@.grantee=='AllUsers')] size > 0) or policyStatus.isPublic is true) and publicAccessBlockConfiguration does not exist and accountLevelPublicAccessBlockConfiguration does not exist) or ((acl.grants[?(@.grantee=='AllUsers')] size > 0) and ((publicAccessBlockConfiguration.ignorePublicAcls is false and accountLevelPublicAccessBlockConfiguration does not exist) or (publicAccessBlockConfiguration does not exist and accountLevelPublicAccessBlockConfiguration.ignorePublicAcls is false) or (publicAccessBlockConfiguration.ignorePublicAcls is false and accountLevelPublicAccessBlockConfiguration.ignorePublicAcls is false))) or (policyStatus.isPublic is true and ((publicAccessBlockConfiguration.restrictPublicBuckets is false and accountLevelPublicAccessBlockConfiguration does not exist) or (publicAccessBlockConfiguration does not exist and accountLevelPublicAccessBlockConfiguration.restrictPublicBuckets is false) or (publicAccessBlockConfiguration.restrictPublicBuckets is false and accountLevelPublicAccessBlockConfiguration.restrictPublicBuckets is false)))) and websiteConfiguration does not exist and tagSets.DataClassification != Public\""
  },
  {
    description: "S3 buckets connected to Cloudfront distribution",
    rql: "config from cloud.resource where api.name = 'aws-cloudfront-list-distributions' as X; config from cloud.resource where api.name = 'aws-s3api-get-bucket-acl' as Y; filter '$.X.origins.items[*].id contains $.Y.bucketName'; show Y;"
  },
  {
    description: "Security Groups allows internet traffic to ports which are not commonly used AND WITH IGW attached to VPC",
    rql: "config from cloud.resource where cloud.type = 'aws' AND api.name='aws-ec2-describe-security-groups' as X; config from cloud.resource where api.name = 'aws-ec2-describe-internet-gateways' as Y; filter \"$.X.vpcId == $.Y.attachments[*].vpcId and ($.X.ipPermissions[?(@.toPort != 80 && @.toPort != 443 && @.toPort != 22 && @.toPort != 23 && @.toPort != 3389 && @.toPort != 20 && @.toPort != 21 && @.toPort != 25 && @.toPort != 53 && @.toPort != 135 && @.toPort != 137 && @.toPort != 138 && @.toPort != 139 && @.toPort != 445 && @.toPort !=3306 && @.toPort != 1433 && @.toPort != 1434 && @.toPort != 4333 && @.toPort != 5432 && @.fromPort != 80 && @.fromPort != 443 && @.fromPort != 22 && @.fromPort != 23 && @.fromPort != 3389 && @.fromPort != 20 && @.fromPort != 21 && @.fromPort != 25 && @.fromPort != 53 && @.fromPort != 135 && @.fromPort != 137 && @.fromPort != 138 && @.fromPort != 139 && @.fromPort != 445 && @.fromPort !=3306 && @.fromPort != 1433 && @.fromPort != 1434 && @.fromPort != 4333 && @.fromPort != 5432 && @.ipProtocol=='tcp' || @.ipProtocol=='icmp' || @.ipProtocol=='icmpv6' || @.ipProtocol=='udp')].ipv6Ranges[*].cidrIpv6 contains ::/0) or ($.X.ipPermissions[?(@.toPort != 80 && @.toPort != 443 && @.toPort != 22 && @.toPort != 23 && @.toPort != 3389 && @.toPort != 20 && @.toPort != 21 && @.toPort != 25 && @.toPort != 53 && @.toPort != 135 && @.toPort != 137 && @.toPort != 138 && @.toPort != 139 && @.toPort != 445 && @.toPort !=3306 && @.toPort != 1433 && @.toPort != 1434 && @.toPort != 4333 && @.toPort != 5432 && @.fromPort != 80 && @.fromPort != 443 && @.fromPort != 22 && @.fromPort != 23 && @.fromPort != 3389 && @.fromPort != 20 && @.fromPort != 21 && @.fromPort != 25 && @.fromPort != 53 && @.fromPort != 135 && @.fromPort != 137 && @.fromPort != 138 && @.fromPort != 139 && @.fromPort != 445 && @.fromPort !=3306 && @.fromPort != 1433 && @.fromPort != 1434 && @.fromPort != 4333 && @.fromPort != 5432 && @.ipProtocol=='tcp' || @.ipProtocol=='icmp' || @.ipProtocol=='icmpv6' || @.ipProtocol=='udp')].ipRanges[*] contains 0.0.0.0/0)\"; show X;"
  },
];

// ----------------------------------------------------------------------------
// RQLDataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
  {
    Header: "Description",
    accessor: "description",
    className: "rql-data-table left",
  },
  {
    Header: "RQL",
    accessor: "rql",
    className: "rql-data-table right pre-wrap",
    Cell: ({ cell: { value }, row: { original } }) => (
      <CodeBlock className="sql">{value}</CodeBlock>
    ),
  },
];
