
import {DataFormatter} from './DataFormatter';


//TODO: abstraer metodos creando nuevos metodos protegidos para parsear cada propiedad del objeto
//      de esta manera se pueden crear subclases de QueryStringFormatter para formatters propios (AdvancedQueryStringFormatter)
export class QueryStringFormatter implements DataFormatter {

    public static readonly CONTENT_TYPE: string = 'application/x-www-form-urlencoded';

    public contentType: string;

    public constructor() {
        this.contentType = QueryStringFormatter.CONTENT_TYPE;
    }

    public parse<T>(data: string): T {

        let parsed = {};
        let match = data.match(/[^=&]*=[^&]*&?/g);

        if(match) {
            match.forEach(i => {

                let [k, v] = i.split('=');
                let d = parsed[k];
                let lastIndex = v.length - 1;

                if(v[lastIndex] === '&') {
                    v = v.substring(0, lastIndex);
                }

                if(!d) {
                    return parsed[k] = v;
                }

                if(!(d instanceof Array)) {
                    d = parsed[k] = [d];
                }

                d.push(v);
            });
        }

        return parsed as T;
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
