# Set up privacy features

The Adjust SDK contains features that you can use to handle user privacy in your app.

## GDPR right to be forgotten

Article 17 of the European Union's {abbr}`GDPR (General Data Protection Regulation)` grants users the right to be forgotten. When Adjust's servers receive an {abbr}`RTBF (Right to be Forgotten)` request, Adjust erases the user's data. The SDK also stops sending requests from the device for the app in question.

You can send the user's RTBF request to Adjust by calling the [`gdprForgetMe` method](ios-gdprForgetMe-invocation).

```{include} /ios/fragments/Adjust.md
:start-after: gdprForgetMe
:end-before: methodEnd
```

## Third-party sharing for specific users

You can use the Adjust SDK to record when a user changes their third-party sharing settings.

### Disable third-party sharing

Some users may want to opt-out of sharing their data with third-parties. To communicate this to Adjust, call the [`trackThirdPartySharing` method](ios-trackThirdPartySharing-invocation) with an [`ADJThirdPartySharing` object](/ios/reference/ADJThirdPartySharing) initialized with a `false` value. When Adjust's servers receive this information, Adjust stops sharing the user's data with third-parties. The Adjust SDK continues to work as expected.

```{include} /ios/fragments/ADJThirdPartySharing.md
:start-after: initWithIsEnabledNumberBool false
:end-before: methodEnd
```

### Enable third-party sharing

If a user opts into sharing with third-parties, call the [`trackThirdPartySharing` method](ios-trackThirdPartySharing-invocation) with an [`ADJThirdPartySharing` object](/ios/reference/ADJThirdPartySharing) initialized with a `true` value. This updates the user's preferences.

```{include} /ios/fragments/ADJThirdPartySharing.md
:start-after: initWithIsEnabledNumberBool true
:end-before: methodEnd
```

### Send granular information

You can attach granular information when a user updates their third-party sharing preferences. Use this information to communicate more detail about a user's decision. To do this, call the [`addGranularOption` method](ios-addGranularOption-invocation) with your partner name and your options.

```{include} /ios/fragments/ADJThirdPartySharing.md
:start-after: addGranularOption
:end-before: methodEnd
```

### Update partner settings

```{versionadded} 4.32.0
You can use the Adjust SDK to update your third party sharing settings on a per-partner basis. To do this, call the [`addPartnerSharingSetting` method](ios-addPartnerSharingSetting-invocation) with your partner name and your options.
```

```{include} /ios/fragments/ADJThirdPartySharing.md
:start-after: addPartnerSharingSetting
:end-before: methodEnd
```

```{list-table} Available partners
:header-rows: 1

* - Partner name
   - String value
* - AppleAds
   - `apple_ads`
* - Facebook
   - `facebook`
* - GoogleAds
   - `adwords`
* - GoogleMarketingPlatform
   - `google_marketing_platform`
* - Snapchat
   - `snapchat`
* - Tencent
   - `tencent`
* - TikTokSan
   - `tiktok_san`
* - Twitter
   - `twitter`
* - YahooGemini
   - `yahoo_gemini`
* - YahooJapanSearch
   - `yahoo_japan_search`
```

### Manage Facebook Limited Data Use

:::{important}
The Adjust SDK sends information to Facebook as soon as the app is installed. You need to make sure you call this method **before** initializing the SDK.
:::

Facebook provides a feature called Limited Data Use (LDU) to comply with the {abbr}`CCPA (California Consumer Privacy Act)`. This feature enables you to notify Facebook when a California-based user is opted out of the sale of data. You can also use it if you want to opt all users out by default.

You can update the Facebook LDU status by passing arguments to the [`addGranularOption` method](ios-addGranularOption-invocation).

```{include} /ios/fragments/ADJThirdPartySharing.md
:start-after: addGranularOption Facebook
:end-before: methodEnd
```

```{list-table} Parameters
:header-rows: 1

* - Parameter	
   - Description
* - `partner_name`
   - Use `facebook` to toggle LDU.
* - `data_processing_options_country`
   - The user is located in.
      * `0`: Request that Facebook use geolocation.
      * `1`: United States of America.
* - `data_processing_options_state`
   - Notifies Facebook which state the user is located in.
      * `0`: Request that Facebook use geolocation.
      * `1000`: California.

```

:::{note}
If you call this method with a `0` value for **either** `data_processing_options_country` or `data_processing_options_state`, the Adjust SDK passes **both** fields back as `0`.
:::

## Disable third-party sharing

To disable third-party sharing for all users, call the [`disableThirdPartySharing` method](ios-disableThirdPartySharing-invocation). When Adjust's servers receive this information, Adjust stops sharing the user's data with third-parties. The Adjust SDK continues to work as expected.

```{include} /ios/fragments/Adjust.md
:start-after: disableThirdPartySharing
:end-before: methodEnd
```

## Data residency

The data residency feature allows you to choose the country in which Adjust stores your data. This is useful if you're operating in a country with strict privacy requirements. When you set up data residency, Adjust stores your data in a data center located in the region your have chosen.

To set your country of data residency, call the [setUrlStrategy method](ios-setUrlStrategy-invocation) on your `ADJConfig` instance.

```{include} /ios/fragments/ADJConfig.md
:start-after: setUrlStrategy
:end-before: methodEnd
```

```{list-table} Available URL strategies
:header-rows: 1

* - Value
   - Description
* - `AdjustDataResidencyEU`
   - Sets the area of data residency to the EU
* - `AdjustDataResidencyTR`
   - Sets the area of data residency to Turkey
* - `AdjustDataResidencyUS`
   - Sets the area of data residency to the USA
* - `AdjustUrlStrategyChina`
   - Sets the area of data residency to China
* - `AdjustUrlStrategyIndia`
   - Sets the area of data residency to India

```

## Consent measurement for specific users

If you are using [Data Privacy settings](https://help.adjust.com/en/article/manage-data-collection-and-retention) in your Adjust dashboard, you need to set up the Adjust SDK to work with them. This includes settings such as consent expiry period and user data retention period. To toggle this feature, call the [`trackMeasurementConsent` method](ios-trackMeasurementConsent-invocation). When enabled, the SDK communicates the data privacy settings to Adjust's servers. Adjust's servers then applies your data privacy rules to the user. The Adjust SDK continues to work as expected.

```{include} /ios/fragments/Adjust.md
:start-after: trackMeasurementConsent
:end-before: methodEnd
```