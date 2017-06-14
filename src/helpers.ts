
import {Config} from './Config';
import {Methods} from './Methods';
import {platformRequest, getPlatformRequest, PlatformRequestConfig} from './platforms/request';
import {SimpleQueryStringParser} from './SimpleQueryStringParser';


const req: platformRequest = getPlatformRequest();


export function get<T>(url: string, config?: Config): Promise<T> {
    return request(Methods.GET, url, null, config);
}

export function post<T>(url: string, data?: Object, config?: Config): Promise<T> {
    return request(Methods.POST, url, data, config);
}

export function put<T>(url: string, data?: Object, config?: Config): Promise<T> {
    return request(Methods.PUT, url, data, config);
}

export function del<T>(url: string, config?: Config): Promise<T> {
    return request(Methods.DELETE, url, null, config);
}

export function request<T>(method: string, url: string, data?: Object, config: Config = {}): Promise<T> {

    //TODO: Preparar query string de data y config
    //TODO: Preparar body de data y config con adapter
    //TODO: Preparar params de url (a lo route params de express o sentencias preparadas de SQL)

    config.queryStringParser || (config.queryStringParser = new SimpleQueryStringParser());

    let cfg: PlatformRequestConfig = {
        headers: config.headers || {}
    };

    if(config.userAgent) {
        cfg.headers['User-Agent'] = config.userAgent;
    }

    if(config.query) {
        url += '?' + config.queryStringParser.serialize(config.query);
    }

    if(config.body) {
        cfg.body = config.body;
    }

    //TODO: Usar adapter
    return req<T>(method, url, cfg).then(res => res.data);
}
