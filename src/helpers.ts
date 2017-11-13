
import {Config} from './Config';
import {Methods} from './Methods';
import {platformRequest, getPlatformRequest, PlatformRequestConfig} from './platforms/request';
import {QueryStringFormatter} from './formatters/QueryStringFormatter';
import {RequestPromise} from './RequestPromise';


const req: platformRequest = getPlatformRequest();


export function get<T>(url: string, config?: Config): RequestPromise<T> {
    return request(Methods.GET, url, null, config);
}

export function post<T>(url: string, data?: any, config?: Config): RequestPromise<T> {
    return request(Methods.POST, url, data, config);
}

export function put<T>(url: string, data?: any, config?: Config): RequestPromise<T> {
    return request(Methods.PUT, url, data, config);
}

export function del<T>(url: string, config?: Config): RequestPromise<T> {
    return request(Methods.DELETE, url, null, config);
}

export function request<T>(method: string, url: string, data?: any, config: Config = {}): RequestPromise<T> {

    //TODO: Preparar params de url (a lo route params de express o sentencias preparadas de SQL)

    data || (data = config.body);

    config.queryFormatter || (config.queryFormatter = new QueryStringFormatter());

    let cfg: PlatformRequestConfig = {
        headers: config.headers || {}
    };

    if(config.userAgent) {
        cfg.headers['User-Agent'] = config.userAgent;
    }

    if(config.query) {
        url += '?' + config.queryFormatter.serialize(config.query);
    }

    if(data) {

        if(!cfg.headers['Content-Type']) {
            cfg.headers['Content-Type'] = config.bodyFormatter  && config.bodyFormatter.contentType
                ? config.bodyFormatter.contentType : 'text/plain';
        }

        cfg.body = config.bodyFormatter ? config.bodyFormatter.serialize(data) : data;

        if(!cfg.headers['Content-Length']) {
            cfg.headers['Content-Length'] = cfg.body.length;
        }

    }

    //TODO: Usar adapter
    return req<T>(method, url, cfg);
}
