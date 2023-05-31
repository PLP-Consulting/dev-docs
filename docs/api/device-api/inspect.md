# Inspect device endpoint

Use the Inspect device endpoint to see information about a device. Provide your app ID and your device's advertising ID to return device and tracker information relating to the app.

## Endpoint

```text
https://api.adjust.com/device_service/api/v1/inspect_device
```

### GET request

Return device information as a JSON object.

:::{list-table} Parameters
:header-rows: 1

* - Parameter
   - Data type
   - In
   - Description
* - `app_token`*
   - String
   - Query
   - Your app's 12 digit identifier
* - `advertising_id`*
   - String
   - Query
   - The device's unique advertising ID:
      * `idfa` (iOS devices)
      * `gps_adid` (Google advertising ID)
      * `android_id` (Android ID)
      * `fire_adid` (Amazon Fire ID)
      * `win_adid` (Windows advertising ID)
:::

```{code-block} json
:caption: Success response

{
     "Adid": "string",
     "AdvertisingId": "string",
     "Tracker": "string",
     "TrackerName": "string",
     "ClickTime": "date-time",
     "InstallTime": "date-time",
     "LastSessionTime": "date-time",
     "LastEventTimes": {
           "string": "date-time",
           "string": "date-time",
           "string": "date-time",
           "string": "date-time"},
     "State": "string"
}
```

## Example

```console
$ curl --location --request GET "https://api.adjust.com/device_service/api/v1/inspect_device?advertising_id=1234-5678-9012-3456&app_token=gwzpeepw8uf8" \
--header "Authorization: Bearer ask43jskdp2tg2hg87"
```

```json
{
     "Adid": "acf8534f2f052395e617a38730682ccc",
     "AdvertisingId": "1234-5678-9012-3456",
     "Tracker": "abc123",
     "TrackerName": "Organic",
     "ClickTime": "0001-01-01T00:00:00Z",
     "InstallTime": "2015-08-19T03:42:03Z",
     "LastSessionTime": "2017-07-29T17:29:17Z",
     "LastEventTimes": {
           "a1a1a1": "2017-07-29T17:29:55Z",
           "b2b2b2": "2017-07-29T17:29:21Z",
           "c3c3c3": "2017-07-29T17:29:38Z",
           "4d4d4d": "2017-07-29T17:29:58Z"},
     "State": "installed"
}
```