"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Weatherapi',
        slug: "weatherapi",
        version: "0.1.0",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
    };
    options = {
        base: "https://api.weatherapi.com/v1",
        auth: {
            prefix: '',
            in: 'query',
            name: 'key',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            current: {},
            forecast: {},
            search: {},
        }
    };
    entity = {
        "current": {
            "fields": [
                {
                    "name": "current",
                    "title": "Current",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "location",
                    "title": "Location",
                    "type": "`$OBJECT`",
                    "short": "Location metadata returned with every weather response."
                }
            ],
            "name": "current",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/current.json",
                            "segments": [
                                {
                                    "lit": "current.json"
                                }
                            ],
                            "parts": [
                                "current.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "aqi",
                                        "orig": "aqi",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "no"
                                    },
                                    {
                                        "name": "current_field",
                                        "orig": "current_fields",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "key",
                                        "orig": "key",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "YOUR_API_KEY"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "fr"
                                    },
                                    {
                                        "name": "pollen",
                                        "orig": "pollen",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "no"
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "London"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "key",
                                    "q"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "forecast": {
            "fields": [
                {
                    "name": "alerts",
                    "title": "Alerts",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "current",
                    "title": "Current",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "forecast",
                    "title": "Forecast",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "location",
                    "title": "Location",
                    "type": "`$OBJECT`",
                    "short": "Location metadata returned with every weather response."
                }
            ],
            "name": "forecast",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/forecast.json",
                            "segments": [
                                {
                                    "lit": "forecast.json"
                                }
                            ],
                            "parts": [
                                "forecast.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "alert",
                                        "orig": "alerts",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "no"
                                    },
                                    {
                                        "name": "aqi",
                                        "orig": "aqi",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "no"
                                    },
                                    {
                                        "name": "day",
                                        "orig": "days",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": 3
                                    },
                                    {
                                        "name": "day_field",
                                        "orig": "day_fields",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "dt",
                                        "orig": "dt",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "et0",
                                        "orig": "et0",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "hour",
                                        "orig": "hour",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "hour_field",
                                        "orig": "hour_fields",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "key",
                                        "orig": "key",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "YOUR_API_KEY"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "fr"
                                    },
                                    {
                                        "name": "pollen",
                                        "orig": "pollen",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "no"
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "London"
                                    },
                                    {
                                        "name": "tp",
                                        "orig": "tp",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "unixdt",
                                        "orig": "unixdt",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1490227200
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "day",
                                    "key",
                                    "q"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "search": {
            "fields": [
                {
                    "name": "country",
                    "title": "Country",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "lat",
                    "title": "Lat",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "lon",
                    "title": "Lon",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "region",
                    "title": "Region",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "short": "URL-safe location slug"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search.json",
                            "segments": [
                                {
                                    "lit": "search.json"
                                }
                            ],
                            "parts": [
                                "search.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "key",
                                        "orig": "key",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "YOUR_API_KEY"
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "lond"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "key",
                                    "q"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map