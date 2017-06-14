
import {equal, deepEqual} from 'assert';

import {get} from '..';


describe('helpers', () => {

    describe('get()', () => {

        it('should return 200 http status code', done => {
            get('https://httpbin.org/status/200').then(() => done()).catch(err => done(err))
        });

        describe('user-agent', () => {

            let userAgent = 'AgamaBot';

            it('should have same user-agent', done => {
                get<string>('https://httpbin.org/user-agent', {userAgent: userAgent}).then(res => {
                    let data = JSON.parse(res);
                    equal(data['user-agent'], userAgent);
                    done();
                }).catch(done);
            });

        });

        describe('query-string', () => {

            let query = {text: 'Hello World', num: 27}

            it('should have same query string', done => {
                get<string>('https://httpbin.org/get', {query: query}).then(res => {
                    let data = JSON.parse(res);
                    deepEqual(data.args, query);
                    done();
                }).catch(done);
            });

        });

    });

});
