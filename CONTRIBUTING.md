# Contributing

Thanks for improving the WeatherAPI SDK.

## Before opening a pull request

Run the offline generated-client checks:

```sh
cd ts
npm ci
npm test
```

Keep generated TypeScript changes reproducible. If you change the provider input or generator model, regenerate from `.sdk` and include the relevant source change in the same pull request. Do not commit API keys; use `WEATHERAPI_APIKEY` only in your local shell when running `scripts/live-smoke.mjs`.

## Reporting provider limitations

The SDK is generated from a focused provider specification. If an endpoint or field is missing, open an issue with the WeatherAPI documentation link, the expected request or response shape, and a minimal example. Live requests require your own API key and should not be included in issues or pull requests.

See [REPORT.md](REPORT.md) for known scope and verification limits.
