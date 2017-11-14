
import {get} from '../src/helpers';


let req = get('https://www.google.cat');

req.then(res => {
    console.log('this should sometimes be printed');
    return 'go to second then';
}).then(r => {
    console.log('R', r);
}).catch(err => {
    console.error(err);
});

console.log(req.toString());

setTimeout(() => {
    req.cancel();
}, Math.floor(Math.random()*400));

