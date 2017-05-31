
import {request} from 'http';
import {parse} from 'url';
import {PlatformRequestConfig} from './request';
import {Response} from '../Response';


export = function(method: string, url: string, config: PlatformRequestConfig): Promise<Response<string>> {

    return new Promise((resolve, reject) => {

        let u = parse(url);

        let opts = {
            hostname: u.host,
            port: parseInt(u.port) || 80,
            method: method,
            path: u.path,
            headers: config.headers
        };

        let req = request(opts, res => {

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

        req.on('error', reject);

        if(config.body) {
            config.headers['Content-Length'] = Buffer.byteLength(config.body);
            req.write(config.body);
        }

        req.end();
    });

}
