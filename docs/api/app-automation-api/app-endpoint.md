# App endpoint

Use the `/app` endpoint to automate creating and updating new apps.

## Actions

::::{dropdown} /app POST
:color: primary

Create a new app using settings from your template app. If your app already exists, you can update it with new settings using the `force_update` parameter.

```text
https://settings.adjust.com/api/app
```

:::{list-table} Parameters
:header-rows: 1
:name: app-post-params

* - Parameter
   - Data type
   - In
   - Description
* - `store_id`*
   - String
   - Body
   - 
      * Bundle ID for Android
      * Store ID for Apple
* - `platform`*
   - String
   - Body
   - `android` or `ios`.
* - `name`*
   - String
   - Body
   - The name of your app.
* - `bundle_id`*
   - String
   - Body
   - Bundle ID for Android or iOS app.
* - `android_signature_hash`
   - String
   - Body
   - SHA1 hash, generated from the keystore file to build the SDK signature.
* - `channel_setup`
   - Object
   - Body
   - Required to set up partner modules for your app. See the Channel setup article for more information.
* - `editors`
   - String
   - Body
   - List of emails of users who should have access to the app.
* - `template_app_token`
   - String
   - Body
   - Adjust app token to use as a template. Required if you aren't using a template app.
* - `force_update`
   - Boolean
   - Body
   - Pass this value as true to update an existing app's settings.
:::

:::{rubric} Example
:::

```console
$ curl \
--header "AdjustAuthorization: Token <adjust api token>" \
--header "Content-Type: application/json" \
--data '{ "name":"Test App Name", "bundle_id":"test.bundle.app", "store_id":"test.bundle.app", "platform":"android", "channel_setup": { "facebook": {"app_id": "123456789"} } }' \
-X POST https://settings.adjust.com/api/app
```

```{code-block} json
:caption: Success response

{
    "adjust_app_token": "p77yk727r18g",
    "name": "Test App Name",
    "sk_app_id": null,
    "store_id": "test.bundle.app",
    "bundle_id": "test.bundle.app",
    "ticket_token": "af7702a9-ba95-6ba2-bdac-3f83e55ed8d3"
}
```

:::{list-table} Response parameters
:header-rows: 1

* - Parameter
   - Data type
   - Description
* - `adjust_app_token`
   - String
   - Adjust App Token to be used in SDK integration and other API requests.
* - `name`
   - String
   - The name of your app.
* - `sk_app_id`
   - Integer
   - The StoreKit app ID for your iOS app.
* - `store_id`
   - String	
   - 
      * Bundle ID for Android
      * Store ID for Apple
* - `bundle_id`
   - String
   - Bundle ID for Android or iOS app
* - `ticket_token`
   - UUID
   - Ticket ID to check the current job status. See the Status endpoint document for more information.
:::

::::

::::{dropdown} /app GET
:color: success

Retrieve details about an app using the app store ID and platform name.

```text
https://settings.adjust.com/api/app?store_id={}&platform={}
```

:::{list-table} Parameters
:header-rows: 1

* - Name
   - Data type
   - In
   - Description
* - `store_id`*
   - String
   - Query
   - 
      * Bundle ID for Android
      * Store ID for Apple
* - `platform`*
   - String
   - Query
   - `android` or `ios`
:::

:::{rubric} Example
:::

```console
$ curl \
--header "AdjustAuthorization: Token <adjust api token>" \
-L -X GET 'https://settings.adjust.com/api/app?store_id=test.bundle.app&platform=android'
```

```{code-block} json
:caption: Success response

{
    "name": "Test App Name",
    "platform": "android",
    "store_id": "test.bundle.app"
    "adjust_app_token": "p77yk727r18g",
    "additional_info": { "overrides": {} },
    "channel_setup": {
       "facebook": { "app_id": "123456789" },
       "snapchat": { "app_id": "test.bundle.app" }
    },
    "cross_promo_token": "hgj3li1",
    "android_signature_hash":
        "FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF",
}
```

:::{list-table} Success response
:header-rows: 1

* - Name
   - Type
   - Description
* - `name`
   - String
   - The name of the app
* - `platform`
   - String
   - `android` or `ios`
* - `store_id`
   - String	
   - 
      * Bundle ID for Android
      * Store ID for iOS
* - `adjust_app_token`
   - String
   - The token of the requested app.
* - `additional_info`
   - Object
   - All app details previously received by the endpoint.
* - `channel_setup`
   - Object
   - Partner-specific parameters, see Channel Setup
* - `cross_promo_token`
   - String
   - Adjust Tracker token to be used for CrossPromotion (once available)
* - `android_signature_hash`
   - String
   - SHA1 hash, generated from the keystore file to build the SDK signature
:::

::::

::::{dropdown} /app/{adjust_app_token} GET
:color: success

Retrieve details about an app using the adjust app token.

```text
https://settings.adjust.com/api/app/{adjust_app_token}
```

:::{list-table} Parameters
:header-rows: 1
:name: app-token-parameters

* - Name
   - Data type
   - In
   - Description
* - `adjust_app_token`*
   - String
   - Path
   - The Adjust app token. You can find this in the Adjust dashboard or in your /app POST response.
:::

:::{rubric} Example
:::

```console
$ curl \
--header "AdjustAuthorization: Token <adjust api token>" \
-X GET https://settings.adjust.com/api/app/p77yk727r18g/
```

```{code-block} json
:caption: Success response

{
    "name": "Test App Name",
    "platform": "android",
    "store_id": "test.bundle.app"
    "adjust_app_token": "p77yk727r18g",
    "additional_info": { "overrides": {} },
    "channel_setup": {
       "facebook": { "app_id": "123456789" },
       "snapchat": { "app_id": "test.bundle.app" }
    },
    "cross_promo_token": "hgj3li1",
    "android_signature_hash":
        "FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF",
}
```

:::{list-table} Response parameters
:header-rows: 1

* - Name
   - Type
   - Description
* - `name`
   - String
   - The name of the app
* - `platform`
   - String
   - `android` or `ios`
* - `store_id`
   - String	
   - 
      * Bundle ID for Android
      * Store ID for iOS
* - `adjust_app_token`
   - String
   - The token of the requested app.
* - `additional_info`
   - Object
   - All app details previously received by the endpoint.
* - `channel_setup`
   - Object
   - Partner-specific parameters, see Channel Setup
* - `cross_promo_token`
   - String
   - Adjust Tracker token to be used for CrossPromotion (once available)
* - `android_signature_hash`
   - String
   - SHA1 hash, generated from the keystore file to build the SDK signature
:::

::::

::::{dropdown} /app/{adjust_app_token}/channels GET
:color: success

Retrieve a list of channels that have active trackers for an app.

```text
https://settings.adjust.com/api/app/{adjust_app_token}/channels
```

:::{list-table} Parameters
:header-rows: 1

* - Name
   - Data type
   - In
   - Description
* - `adjust_app_token`*
   - String
   - Path
   - The Adjust app token. You can find this in the Adjust dashboard or in your /app POST response.
:::

:::{rubric} Example
:::

```console
$ curl \ 
--header 'AdjustAuthorization: Token <adjust api token>' \
--header "SignatureAuthorization: Token <adjust signature token>" \
--X GET 'https://settings.adjust.com/api/app/927t3s86rzsw/channels'
```

```{code-block} json
:caption: Success response

[
    "unityads",
    "digitalturbine",
    "jetfuel_api",
    "jetfuel",
    "criteo",
    "tapjoy",
    "bytedance",
    "moloco",
    "adikteev",
    "pinsightmedia",
    "applovin",
    "aura_ironsource",
    "freakout",
    "tradedoubler"
]
```

:::{list-table} Response parameters
:header-rows: 1

* -  Parameter
   -  Data type
   -  Description
* -  `channels`
   -  Array \<String\>
   -  A list of network slugs for active channels for this app.
:::

Here is a list of available slugs:

:::{hlist}

* `apple_search_ads`
* `applovin`
* `chartboost`
* `crossinstall`
* `crosspromotion`
* `digitalturbine`
* `facebook`
* `gameanalytics`
* `google`
* `ironsource`
* `snapchat`
* `tapjoy`
* `unityads`
* `vungle`
* `inmobi`

:::

::::