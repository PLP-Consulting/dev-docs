# Overview metrics endpoint

Use these endpoints to retrieve metrics for your app.

:::{tip}
These endpoints return JSON by default. You can return CSV by adding the following header to your call:

```text
Accept: text/csv
```
:::

## App overview endpoint

```text
https://api.adjust.com/kpis/v1/{app_token}
```

### GET request

Returns metrics associated with an app. Metrics are returned in a `kpi_values` array in the same order as the metrics in your request.

::::{dropdown} Parameters

:::{list-table}
:header-rows: 1

* - Parameter
   - Format
   - In
   - Description
* - `app_token`*
   - String
   - Path
   - Your app's 10 character identifier.
* - `start_date`
   - Date
   - Query
   - The start date of the selected period. `YYYY-MM-DD` format.
* - `end_date`
   - Date
   - Query
   - The end date of the selected period. `YYYY-MM-DD` format.
* - `utc_offset`
   - Time
   - Query
   - UTC offset for timezones. `[+-]HH:MM` format.
* - `kpis`
   - String
   - Query
   - Comma-separated list of metrics. Available options are:
      * App metrics
      * Fraud metrics (requires the Fraud Prevention Suite)
      * Ad spend metrics
* - `event_kpis`
   - String
   - Query
   - Comma-separated list of Event metrics. Prepend your event token to each metric. Example: `token1_revenue`.
* - `reattributed`
   - String
   - Query
   - Filter metrics by:
      * installed users (`false`)
      * reattributed users (`true`)
      * all users (`default`)
* - `sandbox`
   - Boolean
   - Query
   - Whether results come from sandbox or production data. Defaults to production (`false`).
* - `attribution_type`
   - String
   - Query
   - The type of attribution to include in the results. Available options:
      * `click`
      * `impression`
      * `all`
* - `attribution_source`
   - String
   - Query
   - Determines whether in-app activity is assigned to the user’s install source (`first`) or divided among the install source and subsequent sources of reattribution (`dynamic`). The default setting is `dynamic`.
* - `countries`
   - String
   - Query
   - Comma-separated list of ISO 3166 alpha-2 country names.
* - `os_names`
   - String
   - Query
   - Comma-separated list of OS names.
* - `device_types`
   - String
   - Query
   - Comma-separated list of device types.
* - `regions`
   - String
   - Query
   - Comma-separated list of standard or account-specific business regions. Add `+` or `-` before the region name to include (default) or exclude it.
* - `grouping`
   - String
   - Query
   - Grouping parameters. [See Result grouping](/api/kpi-service/grouping.md) for more information.
* - `tracker_filter`
   - String
   - Query
   - The tracker tokens of any trackers you want to include in your results. Only metrics relating to these trackers are returned.                                                                              |
* - `cohort_revenue_period`
   - String
   - Query
   - The number of days following reattribution to sum up revenue for.
* - `human_readable_kpis`
   - Boolean
   - Query
   - Replace metrics with human readable alternatives (for example "Lifetime Value" instead of `lifetime_value`).
:::

::::

### Example

::::{tab-set}
:::{tab-item} JSON
:sync: tabcode-json

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions,installs&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}'
```

```json
{
   "result_parameters": {
      "kpis": ["sessions", "installs"],
      "start_date": "2022-05-01",
      "end_date": "2022-05-31",
      "sandbox": false,
      "countries": ["de", "gb"],
      "trackers": [
         {
            "token": "12djsk",
            "name": "Network 1",
            "has_subtrackers": true
         },
         {
            "token": "15jvui",
            "name": "Network 2",
            "has_subtrackers": true
         }
      ],
      "grouping": ["trackers"]
   },
   "result_set": {
      "token": "2eb2na2w54c3",
      "name": "app name",
      "currency": "USD",
      "trackers": [
         {
            "token": "12djsk",
            "kpi_values": [39629, 39629]
         },
         {
            "token": "15jvui",
            "kpi_values": [557, 880]
         }
      ]
   }
}
```

:::

:::{tab-item} CSV
:sync: tabcode-csv

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions,installs&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}' \
--header 'Accept: text/csv'
```

```csv
tracker_token,tracker_name,sessions,installs
12djsk,Network 1,39629,39629
15jvui,Network 2,557,880
```

:::

::::

## Multiple apps overview endpoint

```text
https://api.adjust.com/kpis/v1/{app_tokens}
```

### GET request

Returns metrics associated with multiple apps. Metrics are returned in a `kpi_values` array in the same order as the metrics in your request.

::::{dropdown} Parameters

:::{list-table}
:header-rows: 1

* - Parameter
   - Format
   - In
   - Description
* - `app_tokens`*
   - String
   - Query
   - A comma-separated list of app tokens.
* - `start_date`
   - Date
   - Query
   - The start date of the selected period. `YYYY-MM-DD` format.
* - `end_date`
   - Date
   - Query
   - The end date of the selected period. `YYYY-MM-DD` format.
* - `utc_offset`
   - Time
   - Query
   - UTC offset for timezones. `[+-]HH:MM` format.
* - `kpis`
   - String
   - Query
   - Comma-separated list of metrics. Available options are:
      * App metrics
      * Fraud metrics (requires the Fraud Prevention Suite)
      * Ad spend metrics
* - `sandbox`
   - Boolean
   - Query
   - Whether results come from sandbox or production data. Defaults to production (`false`).
* - `countries`
   - String
   - Query
   - Comma-separated list of ISO 3166 alpha-2 country names.
* - `os_names`
   - String
   - Query
   - Comma-separated list of OS names.
* - `device_types`
   - String
   - Query
   - Comma-separated list of device types.
* - `grouping`	
   - String
   - Query
   - Grouping parameters. [See Result grouping](/api/kpi-service/grouping.md) for more information.
* - `tracker_filter`	
   - String
   - Query
   - The tracker tokens of any trackers you want to include in your results. Only metrics relating to these trackers are returned.
* - `human_readable_kpis`	
   - Boolean
   - Query
   - Replace metrics with human readable alternatives (for example "Lifetime Value" instead of `lifetime_value`).
:::

::::

### Example

::::{tab-set}
:::{tab-item} JSON
:sync: tabcode-json

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3,3fdwnag4ecf2?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions&countries=de,gb&human_readable_kpis=true' \
--header 'Authorization: Token token={your_app_token}' \
```

```json
{
   "result_parameters": {
      "kpis": ["Sessions"],
      "start_date": "2022-05-01",
      "end_date": "2022-05-31",
      "sandbox": false,
      "countries": ["de", "gb"],
      "grouping": ["apps"],
      "attribution_type": "click",
      "utc_offset": "00:00",
      "attribution_source": "dynamic"
   },
   "result_set": {
      "apps": [
         {
            "token": "2eb2na2w54c3",
            "name": "app name",
            "currency": "EUR",
            "kpi_values": [3]
         },
         {
            "token": "3fdwnag4ecf2",
            "name": "test app",
            "currency": "EUR",
            "kpi_values": [40149]
         }
      ]
   }
}
```

:::

:::{tab-item} CSV
:sync: tabcode-csv

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3,3fdwnag4ecf2?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions&countries=de,gb&human_readable_kpis=true' \
--header 'Authorization: Token token={your_app_token}' \
--header 'Accept: text/csv'
```

#### Response

```csv
App Token,App Name,Sessions
2eb2na2w54c3,app name,3
3fdwnag4ecf2,test app,40149
```

:::

::::

## Tracker overview endpoint

```text
https://api.adjust.com/kpis/v1/{app_token}/trackers/{tracker_token}
```

### GET request

Returns metrics associated with a specific tracker. Metrics are returned in a `kpi_values` array in the same position the KPIs in your request.

::::{dropdown} Parameters

:::{list-table}
:header-rows: 1

* - Parameter
   - Format
   - In
   - Description
* - `app_token`
   - String
   - Path
   - Your app's 10 character identifier.
* - `tracker_token`
   - String
   - Path
   - Your tracker's 6 character identifier.
* - `start_date`
   - Date
   - Query
   - The start date of the selected period. `YYYY-MM-DD` format.
* - `end_date`
   - Date
   - Query
   - The end date of the selected period. `YYYY-MM-DD` format.
* - `utc_offset`
   - Time
   - Query
   - UTC offset for timezones. `[+-]HH:MM` format.
* - `kpis`
   - String
   - Query
   - Comma-separated list of metrics. Available options are:
      * App metrics
      * Fraud metrics (requires the Fraud Prevention Suite)
      * Ad spend metrics
* - `event_kpis`
   - String
   - Query
   - Comma-separated list of Event metrics. Prepend your event token to each metric. for example `token1_revenue`
* - `reattributed`
   - String
   - Query
   - Filter metrics by:
      * installed users (`false`)
      * reattributed users (`true`)
      * all users (`default`)
* - `sandbox`
   - Boolean
   - Query
   - Whether results come from sandbox or production data. Defaults to production (`false`).
* - `attribution_type`
   - String
   - Query
   - The type of attribution to include in the results. Available options:
      * `click`
      * `impression`
      * `all`
* - `attribution_source`
   - String
   - Query
   - Determines whether in-app activity is assigned to the user’s install source (`first`) or divided among the install source and subsequent sources of reattribution (`dynamic`). The default setting is `dynamic`.
* - `countries`
   - String
   - Query
   - Comma-separated list of ISO 3166 alpha-2 country names.
* - `os_names`
   - String
   - Query
   - Comma-separated list of OS names.
* - `device_types`
   - String
   - Query
   - Comma-separated list of device types.
* - `regions`
   - String
   - Query
   - Comma-separated list of standard or account-specific business regions. Add `+` or `-` before the region name to include (default) or exclude it.
* - `grouping`
   - String
   - Query
   - Grouping parameters. [See Result grouping](/api/kpi-service/grouping.md) for more information.
* - `tracker_filter`
   - String
   - Query
   - The tracker tokens of any trackers you want to include in your results. Only metrics relating to these trackers are returned.
* - `cohort_revenue_period`
   - String
   - Query
   - The number of days following reattribution to sum up revenue for.
* - `human_readable_kpis`
   - Boolean
   - Query
   - Replace metrics with human readable alternatives (for example: "Lifetime Value" instead of `lifetime_value`).
:::

::::

### Example

::::{tab-set}
:::{tab-item} JSON
:sync: tabcode-json

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/trackers/12djsk?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions,installs&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}'
```

```json
{
   "result_parameters": {
      "kpis": ["sessions", "installs"],
      "start_date": "2022-05-01",
      "end_date": "2022-05-31",
      "sandbox": false,
      "countries": ["de", "gb"],
      "trackers": [
         {
            "token": "12djsk",
            "name": "Network 1",
            "has_subtrackers": true
         }
      ],
      "grouping": ["trackers"]
   },
   "result_set": {
      "token": "2eb2na2w54c3",
      "name": "app name",
      "currency": "USD",
      "trackers": [
         {
            "token": "12djsk",
            "kpi_values": [39629, 39629]
         }
      ]
   }
}
```

:::

:::{tab-item} CSV
:sync: tabcode-csv

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/trackers/12djsk?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions,installs&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}' \
--header 'Accept: text/csv'
```

```csv
tracker_token,tracker_name,sessions,installs
12djsk,Network 1,39629,39629
```

:::

::::

## Response format

:::{tab-set-code}

```json
{
  "result_parameters": {
    "kpis": [
       "string",
       "string"
    ],
    "start_date": "2022-01-01",
    "end_date": "2022-01-31",
    "sandbox": false,
    "countries": [
       "string"
    ],
    "trackers": [
      {
        "token": "string",
        "name": "string",
        "has_subtrackers": true
      },
      {
        "token": "string",
        "name": "string",
        "has_subtrackers": true
      }
    ],
    "grouping": [
       "string"
    ]
  },
  "result_set": {
    "token": "string",
    "name": "string",
    "currency": "string",
    "apps": [
      {
         "token": "string",
         "name": "string",
         "currency": "string",
         "kpi_values": [
            3
         ]
      },
    "trackers": [
      {
        "token": "string",
        "kpi_values": [
           100,
           130.24
        ]
      },
      {
        "token": "string",
        "kpi_values": [
           557, 
           0.802
        ]
      }
    ]
  }
}
```

```csv
tracker_token,tracker_name,kpi1,kpi2
string,string,39623,39623
```

:::

## Default parameters

:::{list-table}
:header-rows: 1

* - Parameter
   - Default values
* - `kpis`
   - 
      * clicks
      * installs
      * click_conversion_rate
      * reattributions
      * sessions
      * revenue_events
      * revenue
      * daus
      * waus
      * maus
:::

## Parameter values

::::{dropdown} OS names

:::{hlist}

* `android`
* `bada`
* `blackberry`
* `ios`
* `linux`
* `macos`
* `server`
* `symbian`
* `unknown`
* `webos`
* `windows`
* `windows-phone`
:::

::::

::::{dropdown} Device types

:::{hlist}

* `bot`
* `console`
* `ipod`
* `mac`
* `pc`
* `phone`
* `server`
* `simulator`
* `tablet`
* `tv`
* `unknown`

:::

::::