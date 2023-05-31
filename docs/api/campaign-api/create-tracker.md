# Create new tracker

Use this endpoint to create new trackers and subtrackers for your app.

## Endpoint

```text
https://api.adjust.com/public/v1/apps/{app_token}/trackers
```

### POST request

Create a new tracker or subtracker associated to your app.

:::{list-table} Parameters

* - Parameter
   - Data type
   - In
   - Description
* - `app_token` *
   - String
   - Path
   - Your app's 12 digit identifier.
* - `name`*
   - String
   - Body
   - The new tracker's name.
* - `parent_token`
   - String
   - Body
   - The name of the parent tracker. Only required if you are creating a subtracker.
:::

```{code-block} json
:caption: Success response

{
  "name": "String",
  "token": "String",
  "label": "String",
  "level": 1,
  "archived": false,
  "has_subtrackers": false,
  "partner_id": 3,
  "cost_data_enabled": false,
  "url": "String",
  "click_url": "String",
  "impression_url": "String",
}
```

:::{list-table} Response parameters
:header-rows: 1

* - Field
   - Data type
   - Description
   - Example
* - `name`
   - String
   - The tracker's name.
   - `Adroll`
* - `label`
   - String
   - The last level part of the name of the tracker.
   - `Adroll`
* - `level`
   - Integer
   - The level of the tracker.
      * Network = `1`
      * Campaign = `2`
      * Adgroup = `3`
      * Creative = `4`
   - `1`
* - `archived`
   - Boolean
   - Whether the tracker is archived.
   - `true`
* - `has_subtrackers`
   - Boolean
   - Whether the tracker has subtrackers.
   - `true`
* - `partner_id`
   - Integer
   - The ID of the partner attached to the tracker.
   - `3`
* - `cost_data_enabled`
   - Boolean
   - Whether the tracker has cost_data enabled.
   - `false`
* - `impression_url`
   - String
   - URL of the tracker for impression tracking.
   - `https://view.adjust.com/impression/abc123`
* - `url`
   - String
   - URL of the tracker for tracking.
   - `https://app.adjust.com/abc123`
* - `click_url`
   - String
   - URL of the tracker for click tracking.
   - `https://app.adjust.com/abc123`
:::

## Example

::::{tab-set}
:::{tab-item} Tracker

```console
$ curl --location --request POST 'https://api.adjust.com/public/v1/apps/gwzpeepw8uf8/trackers' \
--header 'Authorization: Token token={API_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{"name": "Adroll"}'
```

```json
{
  "data": {
    "api_version": "1",
    "request_id": "FcK55-tdJUDOWQIAABsB",
    "timestamp": "2019-09-09T09:07:06Z",
    "items": [
      {
        "name": "Adroll",
        "token": "abc123",
        "label": "Adroll",
        "level": 1,
        "archived": false,
        "has_subtrackers": false,
        "partner_id": 3,
        "cost_data_enabled": false,
        "url": "https://app.adjust.com/abc123",
        "click_url": "https://app.adjust.com/abc123?campaign={campaign_name}&idfa={idfa}&deeplink=http%3A%2F%2Fa.b%2Fc%3Fd%3D1%26e%3D%%MACROS%%",
        "impression_url": "https://s2s.adjust.com/impression/abc123?campaign={campaign_name}&idfa={idfa}&s2s=1",
      }
    ]
  }
}
```

:::

:::{tab-item} Subtracker

```console
$ curl --location --request POST 'https://api.adjust.com/public/v1/apps/gwzpeepw8uf8/trackers' \
--header 'Authorization: Token token={API_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{"parent_tracker": "Adroll", "name": "SpringCampaign"}'
```

```json
{
  "data": {
    "api_version": "1",
    "request_id": "FcK55-tdJUDOWQIAABsB",
    "timestamp": "2019-09-09T09:07:06Z",
    "items": [
      {
        "name": "Adroll::SpringCampaign",
        "token": "xyz456",
        "label": "SpringCampaign",
        "level": 2,
        "archived": false,
        "has_subtrackers": false,
        "partner_id": 3,
        "cost_data_enabled": false,
        "url": "https://app.adjust.com/xyz456",
        "click_url": "https://app.adjust.com/xyz456?campaign={campaign_name}&idfa={idfa}&deeplink=http%3A%2F%2Fa.b%2Fc%3Fd%3D1%26e%3D%%MACROS%%",
        "impression_url": "https://s2s.adjust.com/impression/xyz456?campaign={campaign_name}&idfa={idfa}&s2s=1",
      }
    ]
  }
}
```

:::

::::