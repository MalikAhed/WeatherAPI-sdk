import { CurrentEntity } from './entity/CurrentEntity';
import { ForecastEntity } from './entity/ForecastEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './WeatherapiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WeatherapiEntityBase } from './WeatherapiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class WeatherapiSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Current(entopts?: Record<string, any>): CurrentEntity;
    Forecast(entopts?: Record<string, any>): ForecastEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WeatherapiSDK;
    tester(testopts?: any, sdkopts?: any): WeatherapiSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WeatherapiSDK;
export { stdutil, config, BaseFeature, WeatherapiEntityBase, WeatherapiSDK, SDK, };
export type { DirectResult };
