import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "current",
    "accessor": "Current",
    "op": "load",
    "method": "GET",
    "path": "/current.json",
    "args": [],
    "select": {
      "key": "YOUR_API_KEY",
      "q": "London",
      "aqi": "no",
      "current_field": "v1",
      "lang": "fr",
      "pollen": "no"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "key",
      "q",
      "aqi",
      "pollen",
      "lang",
      "current_fields"
    ],
    "queryArgs": [
      {
        "name": "aqi",
        "wire": "aqi"
      },
      {
        "name": "current_field",
        "wire": "current_fields"
      },
      {
        "name": "key",
        "wire": "key"
      },
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "pollen",
        "wire": "pollen"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [
      [
        {
          "in": "query",
          "name": "key"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1613896955,
        "localtime": "2021-02-21 8:42"
      },
      "current": {
        "last_updated": "2021-02-21 08:30",
        "temp_c": 11,
        "temp_f": 51.8,
        "is_day": 1,
        "condition": {
          "text": "Partly cloudy",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
          "code": 1003
        },
        "wind_mph": 3.8,
        "wind_kph": 6.1,
        "humidity": 82,
        "uv": 1
      }
    },
    "idField": "id",
    "ownQuery": "key"
  },
  {
    "entity": "forecast",
    "accessor": "Forecast",
    "op": "load",
    "method": "GET",
    "path": "/forecast.json",
    "args": [],
    "select": {
      "day": "v1",
      "key": "YOUR_API_KEY",
      "q": "London",
      "alert": "no",
      "aqi": "no",
      "day_field": "v1",
      "dt": "v1",
      "et0": "v1",
      "hour": "v1",
      "hour_field": "v1",
      "lang": "fr",
      "pollen": "no",
      "tp": "v1",
      "unixdt": 1490227200
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "key",
      "q",
      "days",
      "dt",
      "unixdt",
      "hour",
      "alerts",
      "aqi",
      "pollen",
      "tp",
      "lang",
      "day_fields",
      "hour_fields",
      "et0"
    ],
    "queryArgs": [
      {
        "name": "alert",
        "wire": "alerts"
      },
      {
        "name": "aqi",
        "wire": "aqi"
      },
      {
        "name": "day",
        "wire": "days"
      },
      {
        "name": "day_field",
        "wire": "day_fields"
      },
      {
        "name": "dt",
        "wire": "dt"
      },
      {
        "name": "et0",
        "wire": "et0"
      },
      {
        "name": "hour",
        "wire": "hour"
      },
      {
        "name": "hour_field",
        "wire": "hour_fields"
      },
      {
        "name": "key",
        "wire": "key"
      },
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "pollen",
        "wire": "pollen"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "tp",
        "wire": "tp"
      },
      {
        "name": "unixdt",
        "wire": "unixdt"
      }
    ],
    "auth": [
      [
        {
          "in": "query",
          "name": "key"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "location": {
        "country": "x",
        "lat": 1,
        "localtime": "x",
        "localtime_epoch": 1,
        "lon": 1,
        "name": "x",
        "region": "x",
        "tz_id": "x"
      },
      "current": {
        "air_quality": {
          "co": 1,
          "gb-defra-index": 1,
          "no2": 1,
          "o3": 1,
          "pm10": 1,
          "pm2_5": 1,
          "so2": 1,
          "us-epa-index": 1
        },
        "cloud": 1,
        "condition": {
          "code": 1,
          "icon": "x",
          "text": "x"
        },
        "dewpoint_c": 1,
        "dewpoint_f": 1,
        "diff_rad": 1,
        "feelslike_c": 1,
        "feelslike_f": 1,
        "gust_kph": 1,
        "gust_mph": 1,
        "heatindex_c": 1,
        "heatindex_f": 1,
        "humidity": 1,
        "is_day": 1,
        "last_updated": "x",
        "last_updated_epoch": 1,
        "pollen": {
          "Alder": 1,
          "Birch": 1,
          "Grass": 1,
          "Hazel": 1,
          "Mugwort": 1,
          "Oak": 1,
          "Ragweed": 1
        },
        "precip_in": 1,
        "precip_mm": 1,
        "pressure_in": 1,
        "pressure_mb": 1,
        "short_rad": 1,
        "temp_c": 1,
        "temp_f": 1,
        "uv": 1,
        "vis_km": 1,
        "vis_miles": 1,
        "wind_degree": 1,
        "wind_dir": "x",
        "wind_kph": 1,
        "wind_mph": 1,
        "windchill_c": 1,
        "windchill_f": 1
      },
      "forecast": {
        "forecastday": [
          {
            "astro": {
              "is_moon_up": 1,
              "is_sun_up": 1,
              "moon_illumination": 1,
              "moon_phase": "x",
              "moonrise": "x",
              "moonset": "x",
              "sunrise": "x",
              "sunset": "x"
            },
            "date": "2026-01-01",
            "date_epoch": 1,
            "day": {
              "air_quality": {
                "co": 1,
                "gb-defra-index": 1,
                "no2": 1,
                "o3": 1,
                "pm10": 1,
                "pm2_5": 1,
                "so2": 1,
                "us-epa-index": 1
              },
              "avghumidity": 1,
              "avgtemp_c": 1,
              "avgtemp_f": 1,
              "avgvis_km": 1,
              "avgvis_miles": 1,
              "condition": {
                "code": 1,
                "icon": "x",
                "text": "x"
              },
              "daily_chance_of_rain": 1,
              "daily_chance_of_snow": 1,
              "daily_will_it_rain": 1,
              "daily_will_it_snow": 1,
              "maxtemp_c": 1,
              "maxtemp_f": 1,
              "maxwind_kph": 1,
              "maxwind_mph": 1,
              "mintemp_c": 1,
              "mintemp_f": 1,
              "totalprecip_in": 1,
              "totalprecip_mm": 1,
              "totalsnow_cm": 1,
              "uv": 1
            },
            "hour": [
              {
                "air_quality": {},
                "chance_of_rain": 1,
                "chance_of_snow": 1,
                "cloud": 1,
                "condition": {},
                "dewpoint_c": 1,
                "dewpoint_f": 1,
                "diff_rad": 1,
                "et0": 1,
                "feelslike_c": 1,
                "feelslike_f": 1,
                "gust_kph": 1,
                "gust_mph": 1,
                "heatindex_c": 1,
                "heatindex_f": 1,
                "humidity": 1,
                "is_day": 1,
                "pollen": {},
                "precip_in": 1,
                "precip_mm": 1,
                "pressure_in": 1,
                "pressure_mb": 1,
                "short_rad": 1,
                "snow_cm": 1,
                "temp_c": 1,
                "temp_f": 1,
                "time": "x",
                "time_epoch": 1,
                "uv": 1,
                "vis_km": 1,
                "vis_miles": 1,
                "will_it_rain": 1,
                "will_it_snow": 1,
                "wind_degree": 1,
                "wind_dir": "x",
                "wind_kph": 1,
                "wind_mph": 1,
                "windchill_c": 1,
                "windchill_f": 1
              }
            ]
          }
        ]
      },
      "alerts": {
        "alert": [
          {
            "areas": "x",
            "category": "x",
            "certainty": "x",
            "desc": "x",
            "effective": "x",
            "event": "x",
            "expires": "x",
            "headline": "x",
            "instruction": "x",
            "msgtype": "x",
            "note": "x",
            "severity": "x",
            "urgency": "x"
          }
        ]
      }
    },
    "idField": "id",
    "ownQuery": "key"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/search.json",
    "args": [],
    "select": {
      "key": "YOUR_API_KEY",
      "q": "lond"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "key",
      "q"
    ],
    "queryArgs": [
      {
        "name": "key",
        "wire": "key"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [
      [
        {
          "in": "query",
          "name": "key"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "region": "x",
        "country": "x",
        "lat": 1,
        "lon": 1,
        "url": "x"
      }
    ],
    "idField": "id",
    "ownQuery": "key"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
