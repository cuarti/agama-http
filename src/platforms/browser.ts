
import {PlatformRequestConfig} from './request';
import {RequestPromise} from '../RequestPromise';


const UNSAFE_HEADERS = ['Connection', 'Content-Length'];

export = function(method: string, url: string, config: PlatformRequestConfig): RequestPromise<string> {

    let xhr = new XMLHttpRequest();
    let params = {req: xhr};

    return new RequestPromise((resolve, reject) => {

        xhr.open(method, url);

        //TODO: Abstract this part into a function of agama-types
        Object.keys(config.headers).forEach(k => {

            if(UNSAFE_HEADERS.indexOf(k) < 0) {
                let v = config.headers[k];
                xhr.setRequestHeader(k, v !== undefined && v !== null ? v.toString() : '');
            }

        });

        xhr.onreadystatechange = () => {

            if(xhr.readyState !== 4 || xhr.status === 0) {
                return;
            }

            // if(xhr.status < 300) {
            //     return reject(new Error(`HttpError ${xhr.status}: ${xhr.statusText}`));
            // }

            return resolve({
                status: xhr.status,
                statusText: xhr.statusText,
                data: xhr.responseText,
                //TODO: Recojer header
                header: null
            });
        };

        xhr.send(config.body);
    }, params);

};
