
import {equal} from 'assert';

import {get} from '..';


describe('helpers', () => {

    describe('get()', () => {

        it('should return 200 http status code', done => {
            get('https://httpbin.org/status/200').then(() => done()).catch(err => done(err))
        });

        describe('user-agent', () => {

            it('should have same user-agent', done => {
                get('https://httpbin.org/user-agent', {userAgent: 'AgamaBot'}).then(data => {
                    data = JSON.parse(data as string);
                    console.log(data['user-agent']);
                    equal(data['user-agent'], 'AgamaBot');
                    done();
                }).catch(err => done(err))
            })

        });

    });

});
