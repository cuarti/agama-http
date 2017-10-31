
import {PlatformRequestConfig} from './request';
import {Response} from '../Response';


export = function(method: string, url: string, config: PlatformRequestConfig): Promise<Response<string>> {

    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();

        xhr.open(method, url);

        //TODO: Abstract this part into a function of agama-types
        Object.keys(config.headers).forEach(k => {
            xhr.setRequestHeader(k, config.headers[k]);
        });

        xhr.onreadystatechange = () => {

            if(xhr.readyState !== 4) {
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
    });

}
