# WeatherAPI SDK

A TypeScript client for [WeatherAPI.com](https://www.weatherapi.com/docs/), built with [Voxgig SDKGen](https://voxgig.com/sdk). This is an unofficial client and has not been published to npm.

## Quickstart

Use Node 24. Clone the repository, then install and build the client:

```sh
git clone https://github.com/MalikAhed/weatherapi-sdk.git
cd weatherapi-sdk/ts
npm ci
npm run build
```

From the repository root, try the client in a Node script:

```ts
import { WeatherapiSDK } from './ts/dist/WeatherapiSDK.js'

const apiKey = 'YOUR_WEATHERAPI_APIKEY'
const client = new WeatherapiSDK({ apikey: apiKey })
const weather = await client.Current().load({ key: apiKey, q: 'Gaza' })
console.log(weather.data())
```

`Current().load()` returns an entity. Call `.data()` to read its weather response. The generated match type currently requires `key` as well as the constructor's `apikey`; this duplication is recorded in the report.

For the supplied smoke script, load your key into `WEATHERAPI_APIKEY` privately in your shell, then run:

```sh
node scripts/live-smoke.mjs
```

The script uses the generated SDK. It prints a short weather summary and exits with a failure code if the request fails. No key was available during this assessment, so a successful authenticated live call remains unverified.

## Checks

```sh
cd ts
npm ci
npm test
```

The generated tests run offline. The focused SDK passes 218 tests, with 0 failures and 11 skipped checks for features that were not selected. See [the report](REPORT.md) for the full-spec bulk failure and live-testing limitation. CI runs the complete suite and reports failures.

## Files

| Path | Purpose |
| --- | --- |
| `.sdk/def/openapi.json` | Official provider input, downloaded on 8 October 2026 |
| `.sdk/model/project.aontu` | Repository, author and package decisions |
| `.sdk/` | Generator, model, templates and components |
| `ts/src/` | Generated TypeScript client |
| `ts/test/` | Generated offline tests |
| `scripts/live-smoke.mjs` | Short example using the generated client |
| `REPORT.md` | Findings, test results and recommendations |

Start with `Current`, `Forecast` or `Search`. The assessment surface contains three entities: `Current`, `Forecast`, and `Search`. The complete provider snapshot is kept in `openapi.source.json` for reference. Read [the TypeScript reference](ts/REFERENCE.md) for their arguments.

## Regenerate

The toolchain currently needs a peer-dependency workaround:

```sh
cd .sdk
npm ci --legacy-peer-deps
npm run generate
npx voxgig-sdkgen doctor
```

Edit the input or model and regenerate; keep the TypeScript output generated. The project overlay disables generated root files so this README and CI remain project-owned.

## License

MIT. Original project contributions are copyright Malik Abuallatta. Voxgig templates and bundled third-party code retain their notices; the provider specification retains its original terms. See [third-party notices](THIRD_PARTY_NOTICES.md). AI assisted research, generation and verification; its use is described in the report.
