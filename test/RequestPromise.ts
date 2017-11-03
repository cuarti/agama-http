
import {get} from '..';


describe('RequestPromise', () => {

    describe('cancel()', () => {

        let rp = get('https://www.google.cat');
        rp.then(res => {
            console.log(res, 'this should never be printed');
        });

        rp.cancel()

    });

});
