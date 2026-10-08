# WeatherAPI SDK project guide

This repository contains one generated TypeScript SDK for WeatherAPI.com.

## Source and generated output

- `openapi.json` is the small assessment surface used by the generator.
- `openapi.source.json` is the complete provider snapshot.
- `.sdk/` contains the Voxgig model, templates and generator setup.
- `ts/` is generated TypeScript output.

The current model exposes three entities: `Current`, `Forecast` and `Search`. Change the OpenAPI input or `.sdk/model/project.aontu`, then regenerate. Do not hand-edit files under `ts/src/`.

## Commands

```sh
cd .sdk
npm ci --legacy-peer-deps
npm run generate
npx voxgig-sdkgen doctor

cd ../ts
npm ci
npm run build
npm test
```

The generated tests use an offline transport. A live request is optional and is run by `node scripts/live-smoke.mjs` from the repository root after setting `WEATHERAPI_APIKEY`.
