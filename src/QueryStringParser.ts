

export interface QueryStringParser {

    parse<T>(qs: string): T;

    serialize(props: Object): string;

}
