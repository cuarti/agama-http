
import {ClientRequest, request as http} from 'http';
import {request as https} from 'https';
import {parse} from 'url';

import {PlatformRequestConfig} from './request';
import {RequestPromise, RequestPromiseParams} from '../RequestPromise';


export = function(method: string, url: string, config: PlatformRequestConfig): RequestPromise<string> {

    let params: RequestPromiseParams = {req: null};

    return new RequestPromise((resolve, reject) => {

        let u = parse(url);
        let ssl = u.protocol === 'https:';
        let func = ssl ? https : http;

        let opts = {
            hostname: u.hostname,
            port: parseInt(u.port) || (ssl ? 443 : 80),
            method: method,
            path: u.path,
            headers: config.headers
        };

        let req: ClientRequest = params.req = func(opts, res => {

            let data = '';
            res.setEncoding('utf8');
            res.on('data', chunk => data += chunk);

            res.on('end', () => resolve({
                status: res.statusCode,
                statusText: res.statusMessage,
                data: data,
                //TODO: Recojer header
                header: null
            }));

        });

        //TODO: just temporarily to see that is really aborting the request
        req.on('abort', () => {
            console.log('aborting node request');
        });

        req.on('error', (err) => {
            // This is because if you abort the request, this event gets called,
            // but there is no need to call reject if you decided to abort the request
            if((req as any).aborted) {
                return;
            }

            reject(err);
        });

        if(config.body) {
            config.headers['Content-Length'] = Buffer.byteLength(config.body);
            req.write(config.body);
        }

        req.end();

    }, params);

}
