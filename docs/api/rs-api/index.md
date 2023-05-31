# Report service API

The Report Service API enables you to query Adjust's reporting dataset to retrieve aggregated data. Use these endpoints to filter, sort, and retrieve your Adjust data with ease.

## 1. Authenticate your calls

To use the Report Service API endpoints, you first need to get your Adjust API token. Follow the instructions in the Authentication article to find out how to use this token with the API.

## 2. Find your metrics

Adjust supports a lot of metrics that you can use to filter your reports. Many of these metrics exist on a per-app or per-event basis.

A full list of metrics is available in the [Datascape metrics glossary](https://help.adjust.com/en/article/datascape-metrics-glossary). You can also use the Filters Data endpoint to search for KPIs. You can also use the Events endpoint to return the machine-generated slugs of your events for use in CSV reports.

## 3. Choose your response format

The Report Service API contains endpoints for three different report formats. Choose the endpoint that matches the format you want to receive:

* Reports endpoint: returns data as JSON.
* CSV reports endpoint: returns data as CSV.
* Pivot reports endpoint: returns data as JSON with a field that breaks down totals by dimension.