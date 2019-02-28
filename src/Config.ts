
import {Headers} from './Headers';
import {DataFormatter} from './formatters/DataFormatter';
import {QueryStringFormatter} from './formatters/QueryStringFormatter';


export interface Config {
    url?: string;
    method?: number;
    query?: Object;
    body?: any;
    // params?: Object;
    headers?: Headers;
    userAgent?: string;
    queryFormatter?: QueryStringFormatter;
    bodyFormatter?: DataFormatter;
}
