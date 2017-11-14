
import {Response} from './Response';


export interface Cancellable {
    abort(): void;
}

export interface RequestPromiseParams {
    req: Cancellable;
}

export class RequestPromise<T> implements Promise<Response<T>> {

    [Symbol.toStringTag];

    private promise: Promise<Response<T>>;
    private params: RequestPromiseParams;

    constructor(executor: (resolve: (value?: Response<T> | PromiseLike<Response<T>>) => void,
                           reject: (reason?: any) => void) => void, params: RequestPromiseParams) {
        this.params = params;
        this.promise = new Promise(executor);
    }

    public then<TResult1 = Response<T>, TResult2 = never>(onfulfilled?: ((value: Response<T>) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2> {
        return this.promise.then(onfulfilled, onrejected);
    }

    public catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<Response<T> | TResult> {
        return this.promise.catch(onrejected);
    }

    public cancel(): void {
        this.params.req.abort();
    }
}
