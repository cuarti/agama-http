
import {IS_NODEJS} from '@agama/platform';

import {Response} from '../Response';
import {RequestPromise} from '../RequestPromise';


export interface PlatformRequestConfig {
    body?: string;
    headers: Object;
}

export interface platformRequest {
    <T>(method: string, url: string, options: PlatformRequestConfig): RequestPromise<T>;
}

export function getPlatformRequest(): platformRequest {
    return IS_NODEJS ? require('./nodejs') : require('./browser');
}
