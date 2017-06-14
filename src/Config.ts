
import {QueryStringParser} from './QueryStringParser';


export interface Config {
    url?: string;
    method?: number;
    query?: Object;
    body?: any;
    // params?: Object;
    headers?: Object;
    userAgent?: string;
    queryStringParser?: QueryStringParser;
}
