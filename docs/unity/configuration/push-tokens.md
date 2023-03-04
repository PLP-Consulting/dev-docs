# Set up push tokens

Push tokens are used for [Audience Builder](hc:audience-builder) and client callbacks. They're also required for [Uninstall and reinstall tracking](hc:uninstalls-reinstalls).

Your config object contains a string `pushToken` property that you can use to store your push token. You can update this property at any time by calling the [`setDeviceToken` method](#unity-setdevicetoken-invocation) and passing your token as an argument.

:::{include} /unity/reference/Adjust/config.md
:start-after: setDeviceToken snippet
:end-before: Snippet end
:::

## Example

This example demonstrates how to set a new push token with the value _`HrFmrcq96tj723aWFfrw`_ to track your app's retention rates. You can update this value at any time by passing a new token to the `setDeviceToken` method as an argument:

```c#
Adjust.setDeviceToken("HrFmrcq96tj723aWFfrw");
```