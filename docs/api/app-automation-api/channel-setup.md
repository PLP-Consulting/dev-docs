# Channel setup

You need to pass partner-specific IDs for some partner modules. The App Automation API enables you to do this by passing an object of channel information in your `/app` POST call. You can pass information for many partners in this object using key-value pairs.

:::{note}
Channel setup is optional when setting up your app. This is because these details may not be available until after you have created the app.
:::

If you've added partner settings to your template app, the API doesn't copy these by default. You need to populate the corresponding parameter in your [`/app` POST call](app-endpoint.md#app-post-params) to populate them.

## Workflow

You can add partner-specific information when you create your app. You can also add it later by passing the information in a POST call. Once the API receives this information, it attempts to complete the partner setup. Click and impression URLs aren't available in the API until you have set up the partner.

1. Create your app using the [`/app` POST endpoint](app-endpoint.md#app-post-params).
2. Call this endpoint with the `channel_setup` parameter once you have your partner IDs.
3. Include all `channel_setup` information each time you call the `/app` endpoint.

## Parameters

:::{important} Optional title
All parameters need to be passed as a key-value pair inside the `channel_setup` object.
:::

:::{list-table}
:header-rows: 1

* - Partner	
   - Required parameters
   - Description
* - `snapchat`
   - `snap_app_id`
   - Your app's Snapchat ID.
* - `facebook`
   - `app_id`
   - Your app's Facebook ID.
* - `google`
   - `link_id`
   - Your Google Ads link ID.
* - `gameanalytics`
   - `key`
   - Your unique GameAnalytics game key.
* - `tapjoy`
   - `app_id`
   - Your app's Tapjoy ID.
* - `unityads`
   - `game_id`
   - Your app's Unity Ads ID.
* - `vungle`
   - `app_id`
   - Your app's Vungle ID.
* - `chartboost`	
  - 
      * `app_id`
      * `token`
  - 
      * `app_id`: Your app's Chartboost ID.
      * `token`: Your app's signature.
* - `inmobi`	
   - 
      * `property_id`
      * `advertiser_id`
   - 
      * `property_id`: Your app's ID in Inmobi.
      * `advertiser_id`: Your Inmobi advertiser ID.
:::

## Example

The following example shows all available partners.

```json
"channel_setup": {
  "snapchat": { "snap_app_id": "snapchat app id" }
  "facebook": { "app_id": "facebook_app_id" },
  "google": { "link_id": "adwords_link_id" },
  "gameanalytics": { "key": "unique game key" },
  "tapjoy": { "app_id": "tapjoy_app_id" },
  "unityads": { "game_id": "unity_game_id" },
  "vungle": { "app_id": "vungle_app_id" },
  "chartboost": { "app_id": "chartboost_app_id", "token": "app_signature" },
  "inmobi": { "property_id": "inmobi_gmp_id", "advertiser_id": "adv_id" }
}
```