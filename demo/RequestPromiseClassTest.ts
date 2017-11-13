
import {get} from '../src/helpers';


let req = get('https://www.google.cat');

req.then(res => {
    console.log('this should sometimes be printed');
}).catch(err => {
    console.error(err);
});

setTimeout(() => {
    req.cancel();
}, Math.floor(Math.random()*400));

