

export interface DataFormatter {

    contentType?: string;

    parse<T>(data: string): T;

    serialize(data: any): string;

}
