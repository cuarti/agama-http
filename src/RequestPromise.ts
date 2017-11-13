
import {Response} from './Response';


export interface Cancellable {
    abort(): void;
}

export interface RequestPromiseParams {
    req: Cancellable;
}

export class RequestPromise<T> extends Promise<Response<T>> {

    private params: RequestPromiseParams;

    constructor(executor: (resolve: (value?: Response<T> | PromiseLike<Response<T>>) => void,
                           reject: (reason?: any) => void) => void, params: RequestPromiseParams) {
        super(executor);

        this.params = params;
    }

    public cancel(): void {
        this.params.req.abort();
    }
}
