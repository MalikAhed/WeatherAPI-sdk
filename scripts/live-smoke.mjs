import assert from 'node:assert/strict'
import { WeatherapiSDK } from '../ts/dist/WeatherapiSDK.js'

const apiKey = process.env.WEATHERAPI_APIKEY

if (!apiKey) {
  console.error('Set WEATHERAPI_APIKEY before running this check.')
  process.exit(1)
}

try {
  const client = new WeatherapiSDK({ apikey: apiKey })
  const weather = await client.Current().load({
    key: apiKey,
    q: process.env.WEATHERAPI_LOCATION || 'Gaza',
  })
  const data = weather.data()

  assert.ok(data.location?.name, 'Missing location name')
  assert.equal(typeof data.current?.temp_c, 'number', 'Missing temperature')

  console.log({
    location: data.location.name,
    temperatureC: data.current.temp_c,
    condition: data.current.condition?.text,
  })
} catch {
  // SDK errors may contain request details. Keep the credential out of output.
  console.error('Weather check failed. Check your key, location and API plan.')
  process.exitCode = 1
}
