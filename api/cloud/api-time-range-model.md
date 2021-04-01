---

id: api-time-range-model

title: Prisma Cloud API Time Range Model

sidebar_label: API Time Range Model

hide_table_of_contents: false

---

## Time Range Model for Most Prisma Cloud APIs

​The following time model descriptions apply to all public Prisma Cloud REST APIs that use a time range model except for compliance report, compliance posture, asset inventory, and alert dismissal APIs.

* [Absolute  time](#absolute-time)
* [Relative  time](#relative-time)
* [Time  to  now](#time-to-now)

### Absolute Time

Time type **absolute** enables you to  specify an exact Unix timestamp (milliseconds) for both start time and end time. The **Absolute  Time** example below shows the start time and end time timestamps. This is used when the start and end unix timestamps are available (in ms). In the JSON example the **startTime** is 1504448933000 and the **endTime** is 1504794533000.

```
 {
    "timeRange": {
         "type": "absolute",
         "value": {
             "startTime": 1504448933000,
             "endTime": 1504794533000
        }
    }
}
```

For equivalent APIs with GET methods and query parameters, the time range query parameters make up a query string that is appended
to the endpoint URL. An example of a query string is: ``&timeType=absolute&startTime=1504448933000&endTime=1504794533000``

### Relative Time

Time type **relative** defines a window of time between a given  point of time in the past until now. You should specify both an amount and a time unit for time type **relative**.  The **Relative  Time** example below shows JSON with the relative value of 3, and the unit of days. Valid values for **unit** are **hour**, **day**, **week**, **month**, and **year**.

```
{
    "timeRange": {
        "type": "relative",
        "value": {
           "amount": 3,
           "unit": "day" 
        }
    }
}
```

For equivalent APIs with GET methods and query parameters, the time range query parameters make up a query string that is appended
to the endpoint URL. An example of a query string is: ``&timeType=relative&timeAmount=3&timeUnit=day``

### Time To Now

Like time type **relative**, time type **to_now** represents a windows of time until now, but the time window starting point is the start of the current year, month, week, or day, depending on the **unit** you specify. In addition, a unit of **login** indicates a period from the time of your last login until now, and a unit of **epoch** indicates a period from the time of your account onboarding until now. In the **Time  To  Now** example below, the period of time starts at your last login. Valid values for **unit** are:

* **login** - from last login
* **epoch** - from account onboarding
* **day** - from beginning of the day
* **week** - from beginning of the week
* **month** - from beginning of the month
* **year** - from beginning of the year

```
{
    "timeRange": {
        "type": "to_now",
        "value": {
            "unit": "login"
        }
    }
}
```

​For equivalent APIs with GET methods and query parameters, the time range query parameters make up a query string that is appended
to the endpoint URL. An example of a query string is: ``&timeType=to_now&timeUnit=login``

## Compliance Report, Posture, and Asset Inventory Time Range Model

The following time model descriptions apply only to compliance report, compliance posture, asset inventory, and resource (asset) explorer APIs.

- [Time Range Model for Most Prisma Cloud APIs](#time-range-model-for-most-prisma-cloud-apis)
  - [Absolute Time](#absolute-time)
  - [Relative Time](#relative-time)
  - [Time To Now](#time-to-now)
- [Compliance Report, Posture, and Asset Inventory Time Range Model](#compliance-report-posture-and-asset-inventory-time-range-model)
  - [Absolute Time for Compliance and Asset Inventory](#absolute-time-for-compliance-and-asset-inventory)
  - [Relative Time for Compliance and Asset Inventory](#relative-time-for-compliance-and-asset-inventory)
  - [Time To Now for Compliance and Asset Inventory](#time-to-now-for-compliance-and-asset-inventory)
- [Alert Dismissal Time Range Model](#alert-dismissal-time-range-model)
  - [Absolute Time for Alert Dismissal](#absolute-time-for-alert-dismissal)
  - [Relative Time for Alert Dismissal](#relative-time-for-alert-dismissal)

For all APIs that use these time range models, when you send a request body (POST / PUT), you represent the time range models as objects. When you're sending time ranges through query parameters (GET), though, you use a flattened version of the model.

### Absolute Time for Compliance and Asset Inventory

​Time type **absolute** enables you to  specify an exact Unix timestamp (milliseconds) just for an end time. The resulting time window is one with a start time equal to the time of account on-boarding and an end time equal to the **endTime** you specified. In the JSON example below, the value for **endTime** is 1504794533000.

```
 {
    "timeRange": {
         "type": "absolute",
         "value": {
             "endTime": 1504794533000
        }
    }
}

```

For equivalent APIs with GET methods and query parameters, the time range query parameters make up a query string that is appended
to the endpoint URL. An example of a query string is: ``&timeType=absolute&startTime=1504448933000&endTime=1504794533000``

### Relative Time for Compliance and Asset Inventory

Time type **relative** enables you to describe a  point in time relative to the present. You should specify both an amount and a time unit for time type **relative**.  For example, an amount of 3 with a unit of day designates three days ago. The relative window of time for compliance report, compliance posture, and asset inventory APIs is from the time of account on-boarding until the specified relative point in time. In the JSON example, the time window is from account on-boarding time until three days ago. The various units of time that's supported are **hour**, **day**, **week**, **month**, and **year**.

```
{
    "timeRange": {
        "type": "relative",
        "value": {
           "amount": 3,
           "unit": "day" 
        }
    }
}
```

For equivalent APIs with GET methods and query parameters, the time range query parameters make up a query string that is appended
to the endpoint URL. An example of a query string is: ``&timeType=relative&timeAmount=3&timeUnit=day``

### Time To Now for Compliance and Asset Inventory

For time type **to_now**, the only valid value for **unit** is **epoch**, so **to_now** defines a time window between the  time of account on-boarding and the current time.

```
{
    "timeRange": {
        "type": "to_now",
        "value": {
            "unit": "epoch"
        }
    }
}
```

For equivalent APIs with GET methods and query parameters, the time range query parameters make up a query string that is appended
to the endpoint URL. An example of a query string is: ``&timeType=to_now&timeUnit=epoch``

## Alert Dismissal Time Range Model

The time range model for alert dismissal is special because it denotes a point of time in the future. The following time model descriptions apply only to [Dismiss  Alerts](/api/cloud/cspm/alerts#operation/dismiss-alerts).

* [Absolute  Time  for  Alert  Dismissal](#absolute-time-for-alert-dismissal)
* [Relative  Time  for  Alert  Dismissal](#relative-time-for-alert-dismissal)

### Absolute Time for Alert Dismissal

Time type **absolute** enables you to  specify an exact Unix timestamp (milliseconds) just for an **endTime**. The **endTime** identifies a future point in time. In the JSON example below, **endTime** is set to 1504794533000.

```
{
    "timeRange": {
        "type": "absolute",
        "value": {
            "endTime": 1504794533000
        }
    }
}
```

### Relative Time for Alert Dismissal

Time type **relative** enables you to describe a future point in time in relative terms. You should specify both an amount and a time unit for time type **relative**.  For example, an **amount** of 3 with a **unit** of day means three days from now. The values for **unit** can be **hour**, **day**, **week**, **month**, or **year**.

```
{
    "timeRange": {
        "type": "relative",
        "value": {
           "amount": 3,
           "unit": "day"
        }
    }
}
```
