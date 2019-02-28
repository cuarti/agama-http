!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.http=t():(e.agama=e.agama||{},e.agama.http=t())}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./index.ts")}({"../node_modules/@agama/platform/src/OS.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r("../node_modules/@agama/platform/src/OSType.ts");t.OS=class{isLinux(){return this.type===o.OSType.LINUX}isWindows(){return this.type===o.OSType.WINDOWS}isOSX(){return this.type===o.OSType.OSX}isFreeBSD(){return this.type===o.OSType.FREEBSD}isSunOS(){return this.type===o.OSType.SUNOS}}},"../node_modules/@agama/platform/src/OSType.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.LINUX=0]="LINUX",e[e.WINDOWS=1]="WINDOWS",e[e.OSX=2]="OSX",e[e.FREEBSD=3]="FREEBSD",e[e.SUNOS=4]="SUNOS"}(t.OSType||(t.OSType={}))},"../node_modules/@agama/platform/src/Platform.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r("../node_modules/@agama/platform/src/PlatformType.ts");t.Platform=class{isBrowser(){return this.type===o.PlatformType.BROWSER||this.type===o.PlatformType.ELECTRON||this.type===o.PlatformType.NWJS}isNodeJS(){return this.type===o.PlatformType.NODEJS||this.type===o.PlatformType.ELECTRON||this.type===o.PlatformType.NWJS}isElectron(){return this.type===o.PlatformType.ELECTRON}isNWJS(){return this.type===o.PlatformType.NWJS}isRhino(){return this.type===o.PlatformType.RHINO}}},"../node_modules/@agama/platform/src/PlatformType.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.BROWSER=0]="BROWSER",e[e.NODEJS=1]="NODEJS",e[e.ELECTRON=2]="ELECTRON",e[e.NWJS=3]="NWJS",e[e.RHINO=4]="RHINO"}(t.PlatformType||(t.PlatformType={}))},"../node_modules/@agama/platform/src/helpers.ts":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const o=r("../node_modules/@agama/platform/src/PlatformType.ts"),n=r("../node_modules/@agama/platform/src/Platform.ts");t.platform=new n.Platform,"object"==typeof e&&e.versions.electron?t.platform.type=o.PlatformType.ELECTRON:"object"==typeof e&&"object"==typeof e.versions&&e.versions.node?t.platform.type=o.PlatformType.NODEJS:"object"==typeof window&&(t.platform.type=o.PlatformType.BROWSER),t.platform.os=t.platform.isNodeJS()?r(0):r("../node_modules/@agama/platform/src/platforms/browser.ts"),t.IS_BROWSER=t.platform.isBrowser(),t.IS_NODEJS=t.platform.isNodeJS(),t.IS_ELECTRON=t.platform.isElectron(),t.IS_NWJS=t.platform.isNWJS(),t.IS_RHINO=t.platform.isRhino(),t.IS_LINUX=t.platform.os.isLinux(),t.IS_WINDOWS=t.platform.os.isWindows(),t.IS_OSX=t.platform.os.isOSX(),t.IS_FREEBSD=t.platform.os.isFreeBSD(),t.IS_SUNOS=t.platform.os.isSunOS()}).call(this,r("../node_modules/process/browser.js"))},"../node_modules/@agama/platform/src/index.js":function(e,t,r){"use strict";function o(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),o(r("../node_modules/@agama/platform/src/PlatformType.ts")),o(r("../node_modules/@agama/platform/src/Platform.ts")),o(r("../node_modules/@agama/platform/src/OSType.ts")),o(r("../node_modules/@agama/platform/src/OS.ts")),o(r("../node_modules/@agama/platform/src/helpers.ts"))},"../node_modules/@agama/platform/src/platforms/browser.ts":function(e,t,r){"use strict";let o=new(r("../node_modules/@agama/platform/src/OS.ts").OS);e.exports=o},"../node_modules/process/browser.js":function(e,t){var r,o,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var u,l=[],c=!1,f=-1;function p(){c&&u&&(c=!1,u.length?l=u.concat(l):f=-1,l.length&&m())}function m(){if(!c){var e=i(p);c=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,c=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new d(e,t)),1!==l.length||c||i(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=y,n.addListener=y,n.once=y,n.off=y,n.removeListener=y,n.removeAllListeners=y,n.emit=y,n.prependListener=y,n.prependOnceListener=y,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},"./Methods.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Methods={GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE"}},"./RequestPromise.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RequestPromise=class{constructor(e,t){this.params=t,this.promise=new Promise(e)}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}finally(e){return this.promise.finally(e)}cancel(){this.params.req.abort()}}},"./formatters/JsonFormatter.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class o{constructor(){this.contentType=o.CONTENT_TYPE}parse(e){return JSON.parse(e)}serialize(e){return JSON.stringify(e)}}o.CONTENT_TYPE="application/json",t.JsonFormatter=o},"./formatters/QueryStringFormatter.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class o{constructor(){this.contentType=o.CONTENT_TYPE}parse(e){let t={},r=e.match(/[^=&]*=[^&]*&?/g);return r&&r.forEach(e=>{let[r,o]=e.split("="),n=t[r],s=o.length-1;if("&"===o[s]&&(o=o.substring(0,s)),!n)return t[r]=o;n instanceof Array||(n=t[r]=[n]),n.push(o)}),t}serialize(e){return Object.keys(e).map(t=>{let r=e[t];return r instanceof Array?r.map(e=>t+"="+e).join("&"):(null!=r&&"object"!=typeof r||(r=""),t+"="+r)}).join("&")}}o.CONTENT_TYPE="application/x-www-form-urlencoded",t.QueryStringFormatter=o},"./helpers.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r("./Methods.ts"),n=r("./platforms/request.ts"),s=r("./formatters/QueryStringFormatter.ts"),a=n.getPlatformRequest();function i(e,t,r,o={}){r||(r=o.body),o.queryFormatter||(o.queryFormatter=new s.QueryStringFormatter);let n={headers:o.headers||{}};return o.userAgent&&(n.headers["User-Agent"]=o.userAgent),o.query&&(t+="?"+o.queryFormatter.serialize(o.query)),r&&(n.headers["Content-Type"]||(n.headers["Content-Type"]=o.bodyFormatter&&o.bodyFormatter.contentType?o.bodyFormatter.contentType:"text/plain"),n.body=o.bodyFormatter?o.bodyFormatter.serialize(r):r,n.headers["Content-Length"]||(n.headers["Content-Length"]=n.body.length)),a(e,t,n)}t.get=function(e,t){return i(o.Methods.GET,e,null,t)},t.post=function(e,t,r){return i(o.Methods.POST,e,t,r)},t.put=function(e,t,r){return i(o.Methods.PUT,e,t,r)},t.del=function(e,t){return i(o.Methods.DELETE,e,null,t)},t.request=i},"./index.ts":function(e,t,r){"use strict";function o(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),o(r("./Methods.ts")),o(r("./helpers.ts")),o(r("./formatters/QueryStringFormatter.ts")),o(r("./formatters/JsonFormatter.ts"))},"./platforms/browser.ts":function(e,t,r){"use strict";const o=r("./RequestPromise.ts"),n=["Connection","Content-Length"];e.exports=function(e,t,r){let s=new XMLHttpRequest,a={req:s};return new o.RequestPromise((o,a)=>{s.open(e,t),Object.keys(r.headers).forEach(e=>{if(n.indexOf(e)<0){let t=r.headers[e];s.setRequestHeader(e,void 0!==t?t.toString():"")}}),s.onreadystatechange=(()=>{if(4===s.readyState&&0!==s.status)return o({status:s.status,statusText:s.statusText,data:s.responseText,header:null})}),s.send(r.body)},a)}},"./platforms/request.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r("../node_modules/@agama/platform/src/index.js");t.getPlatformRequest=function(){return o.IS_NODEJS?r(1):r("./platforms/browser.ts")}},0:function(e,t){},1:function(e,t){}})});
//# sourceMappingURL=agama.http.js.map