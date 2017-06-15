
import {equal, deepEqual} from 'assert';

import {get, post} from '..';
import {QueryStringFormatter} from '../src';
import {JsonFormatter} from '../src/formatters/JsonFormatter';


describe('helpers', () => {

    describe('get()', () => {

        it('should return 200 http status code', done => {
            get('https://httpbin.org/status/200').then(() => done()).catch(err => done(err))
        });

        describe('user-agent', () => {

            let userAgent = 'AgamaBot';

            it('should have same user-agent', done => {
                get<string>('https://httpbin.org/user-agent', {userAgent: userAgent}).then(body => {
                    let res = JSON.parse(body);
                    equal(res['user-agent'], userAgent);
                    done();
                }).catch(done);
            });

        });

        describe('query-string', () => {

            let query = {text: 'Hello World', num: 27};

            it('should have same query string', done => {
                get<string>('https://httpbin.org/get', {query: query}).then(body => {
                    let res = JSON.parse(body);
                    deepEqual(res.args, query);
                    done();
                }).catch(done);
            });

        });

    });

    describe('post()', () => {

        describe('body', () => {

            it('text/plain body', done => {

                let data = 'Hello World';

                post<string>('https://httpbin.org/post', data).then(body => {
                    let res = JSON.parse(body);
                    equal(res.data, data);
                    done();
                }).catch(done);
            });

            it('application/x-www-form-urlencoded body', done => {

                let data = {text: 'Hello World', num: '27'};
                let config = {bodyFormatter: new QueryStringFormatter()};

                post<string>('https://httpbin.org/post', data, config).then(body => {
                    let res = JSON.parse(body);
                    deepEqual(res.form, data);
                    done();
                }).catch(done);
            });

            it('application/json body', done => {

                let data = {text: 'Hello World', num: '27'};
                let config = {bodyFormatter: new JsonFormatter()};

                post<string>('https://httpbin.org/post', data, config).then(body => {
                    let res = JSON.parse(body);
                    res.data = JSON.parse(res.data);
                    deepEqual(res.data, data);
                    done();
                }).catch(done);
            });

        });

    });

});
