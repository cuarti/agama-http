
import {QueryStringParser} from './QueryStringParser';


export class SimpleQueryStringParser implements QueryStringParser {

    public parse<T>(qs: string): T {

        let data = {};
        let match = qs.match(/[^=&]*=[^&]*&?/g);

        if(match) {
            match.forEach(i => {

                let [k, v] = i.split('=');
                let d = data[k];
                let lastIndex = v.length - 1;

                if(v[lastIndex] === '&') {
                    v = v.substring(0, lastIndex);
                }

                if(!d) {
                    return data[k] = v;
                }

                if(!(d instanceof Array)) {
                    d = data[k] = [d];
                }

                d.push(v);
            });
        }

        return data as T;
    }

    public serialize(data: Object): string {

        return Object.keys(data).map(k => {

            let v = data[k];

            if(v instanceof Array) {
                return v.map(i => k + '=' + i).join('&');
            }

            if(v === undefined || v === null || typeof v === 'object') {
                v = '';
            }

            return k + '=' + v;
        }).join('&');
    }

}
