
import {IS_NODEJS} from '@agama/platform';

import {Headers} from '../Headers';
import {RequestPromise} from '../RequestPromise';


export interface PlatformRequestConfig {
    body?: string;
    headers: Headers;
}

export interface platformRequest {
    <T>(method: string, url: string, options: PlatformRequestConfig): RequestPromise<T>;
}

export function getPlatformRequest(): platformRequest {
    return IS_NODEJS ? require('./nodejs') : require('./browser');
}
