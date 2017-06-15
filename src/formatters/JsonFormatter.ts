
import {DataFormatter} from './DataFormatter';


export class JsonFormatter implements DataFormatter {

    public static readonly CONTENT_TYPE: string = 'application/json';

    public contentType: string;

    public constructor() {
        this.contentType = JsonFormatter.CONTENT_TYPE;
    }

    public parse<T>(data: string): T {
        return JSON.parse(data);
    }

    public serialize(data: any): string {
        return JSON.stringify(data);
    }

}
