

export interface Response<T> {

    status: number;
    statusText: string;
    header: Object;
    data: T;

}
