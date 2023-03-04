# ADJAdRevenue class

Use this class to store ad revenue information. You can pass this to Adjust's servers using the [`trackAdRevenue` method](#unity-trackadrevenue-invocation).


% Class method AdjustAdRevenue

:::::{function} AdjustAdRevenue (source)
:noindex:

Creates an ad revenue object initialized with an external ad revenue source

{#unity-AdjustAdRevenue-invocation}
```c#
public AdjustAdRevenue(string source)
```

:param source: The source of the ad revenue. See table below for available options
:type source: string

% AdjustAdRevenue snippet

:::{tab-set-code}

```c#
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

::::{dropdown} Sources

:::{list-table}
:header-rows: 1

* - Parameter
   - Source
* - `AdjustConfig.AdjustAdRevenueSourceAppLovinMAX`
   - AppLovin MAX
* - `AdjustConfig.AdjustAdRevenueSourceMopub`
   - Mopub
* - `AdjustConfig.AdjustAdRevenueSourceAdMo`
   - AdMob
* - `AdjustConfig.AdjustAdRevenueSourceIronSource`
   - ironSource
* - `AdjustConfig.AdjustAdRevenueSourceAdmost`
   - AdMost
* - `AdjustConfig.AdjustAdRevenueSourceUnity`
   - Unity
* - `AdjustConfig.AdjustAdRevenueSourceHeliumChartboost`
   - Helium Chartboost
* - `AdjustConfig.AdjustAdRevenueSourcePublisher`
   - Generic source
:::
::::

% Snippet end

:::::

% Class method end

% Class method setRevenue

::::{function} setRevenue (amount, currency)
:noindex:

Creates an event object initialized with an Adjust event token

{#unity-adjustadrevenue-setrevenue-invocation}
```c#
public void setRevenue(double amount, string currency)
```

:param amount: The amount of currency units associated with the ad
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: string

% setRevenue snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setRevenue(1.00, "EUR");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::

% Snippet end

::::

% Class method end

% Class method setAdImpressionsCount

::::{function} setAdImpressionsCount (adImpressionsCount)
:noindex:

Sets the number of impressions received for an ad

{#unity-setadimpressionscount-invocation}
```c#
public void setAdImpressionsCount(int adImpressionsCount)
```

:param adImpressionsCount: The number of impressions associated with the ad
:type adImpressionsCount: int

% setAdImpressionsCount snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setAdImpressionsCount(10);
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method setAdRevenueNetwork

::::{function} setAdRevenueNetwork (adRevenueNetwork)
:noindex:

Sets the number of impressions received for an ad

{#unity-setadrevenuenetwork-invocation}
```c#
public void setAdRevenueNetwork(string adRevenueNetwork)
```

:param adRevenueNetwork: The network associated with the ad revenue
:type adRevenueNetwork: string

% setAdRevenueNetwork snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setAdRevenueNetwork("network1");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method setAdRevenueUnit

::::{function} setAdRevenueUnit (adRevenueUnit)
:noindex:

Sets the ad unit ID associated with the ad revenue

{#unity-setadrevenueunit-invocation}
```c#
public void setAdRevenueUnit(string adRevenueUnit)
```

:param adRevenueUnit: The ad unit ID associated with the ad revenue
:type adRevenueUnit: string

% setAdRevenueUnit snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setAdRevenueUnit("unit1");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method setAdRevenuePlacement

::::{function} setAdRevenuePlacement (adRevenuePlacement)
:noindex:

Sets the placement of the ad associated with the ad revenue

{#unity-setadrevenueplacement-invocation}
```c#
public void setAdRevenuePlacement(string adRevenuePlacement)
```

:param adRevenuePlacement: The placement of the ad associated with the revenue
:type adRevenuePlacement: string

% setAdRevenuePlacement snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setAdRevenuePlacement("banner");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method addCallbackParameter

::::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the ad revenue object. You can add multiple parameters by calling this method multiple times.

Event callback parameters override session callback parameters that have the same key.

{#unity-adjustadrevenue-addcallbackparameter-invocation}
```c#
public void addCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addCallbackParameter snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.addCallbackParameter("key", "value");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method addPartnerParameter

::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the ad revenue object. You can add multiple parameters by calling this method multiple times.

{#unity-adjustadrevenue-addpartnerparameter-invocation}
```c#
public void addPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addPartnerParameter snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.addPartnerParameter("key", "value");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end