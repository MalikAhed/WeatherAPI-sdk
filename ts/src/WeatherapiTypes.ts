// Typed models for the Weatherapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Current {
  current?: Record<string, any>
  location?: Record<string, any>
}

export interface CurrentLoadMatch {
  aqi?: string
  current_field?: string
  key: string
  lang?: string
  pollen?: string
  q: string
}

export interface Forecast {
  alerts?: Record<string, any>
  current?: Record<string, any>
  forecast?: Record<string, any>
  location?: Record<string, any>
}

export interface ForecastLoadMatch {
  alert?: string
  aqi?: string
  day: number
  day_field?: string
  dt?: string
  et0?: string
  hour?: number
  hour_field?: string
  key: string
  lang?: string
  pollen?: string
  q: string
  tp?: number
  unixdt?: number
}

export interface Search {
  country?: string
  id?: number
  lat?: number
  lon?: number
  name?: string
  region?: string
  url?: string
}

export interface SearchListMatch {
  key: string
  q: string
}

