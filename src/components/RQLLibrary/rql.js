const rql_query = [
  {
    id: "cft-ec2",
    description:
      "CloudFormation Template does not contain termination protection for EC2 Instances",
    provider: ["aws", "gcp"],
    service: ["iam"],
    query: "join people testing int float 10",
    votes: 1,
  },
  {
    id: "test-this",
    description: "Test2",
    provider: ["azure"],
    service: ["iam", "legend"],
    query: "Will Smith but make it code",
    votes: 1,
  },
];
