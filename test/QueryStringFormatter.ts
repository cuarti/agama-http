
import {equal, deepEqual} from 'assert';
import {stringify, parse} from 'querystring';

import {QueryStringFormatter} from '..';


//TODO: Tests with special symbols, like dot, ampersand, etc, in key and value
//TODO: Tests with encodedURI symbols
describe('QueryStringFormatter', () => {

    let parser = new QueryStringFormatter();

    describe('#parse()', () => {

        let qs = 'a=123&b=3.14&c=foo&d=true&e=false&f=1&f=bar&f=9';

        let data = {
            a: '123',
            b: '3.14',
            c: 'foo',
            d: 'true',
            e: 'false',
            f: ['1', 'bar', '9']
        };

        it('should be as NodeJS querystring.parse()', () => deepEqual(parser.parse(qs), parse(qs)));

        it('should be as expected', () => deepEqual(parser.parse(qs), data));

    });

    describe('#serialize()', () => {

        let data = {
            a: 123,
            b: 3.14,
            c: 'foo',
            d: true,
            e: false,
            f: undefined,
            g: null,
            h: {},
            i: [1, 'bar', 9]
        };

        let qs = 'a=123&b=3.14&c=foo&d=true&e=false&f=&g=&h=&i=1&i=bar&i=9';

        it('should be as NodeJS querystring.stringify()', () => equal(parser.serialize(data), stringify(data)));

        it('should be as expected', () => equal(parser.serialize(data), qs));

    });

});
