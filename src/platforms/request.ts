
import {IS_NODEJS} from '@agama/platform';
import {Response} from '../Response';


export interface PlatformRequestConfig {
    body?: string;
    headers: Object;
}

export interface platformRequest {
    <T>(method: string, url: string, options: PlatformRequestConfig): Promise<Response<T>>;
}

export function getPlatformRequest(): platformRequest {
    return require('./' + (IS_NODEJS ? 'nodejs' : 'browser'));
}
