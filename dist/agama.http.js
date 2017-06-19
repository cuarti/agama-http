(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["http"] = factory();
	else
		root["agama"] = root["agama"] || {}, root["agama"]["http"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@agama/platform/src/OS.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OSType_1 = __webpack_require__("../node_modules/@agama/platform/src/OSType.ts");
/**
 * Operating system representation
 */
class OS {
    /**
     * If operating system is Linux
     */
    isLinux() {
        return this.type === OSType_1.OSType.LINUX;
    }
    /**
     * If operating system is windows
     */
    isWindows() {
        return this.type === OSType_1.OSType.WINDOWS;
    }
    /**
     * If operating system is OSX
     */
    isOSX() {
        return this.type === OSType_1.OSType.OSX;
    }
    /**
     * If operating system is FreeBSD
     */
    isFreeBSD() {
        return this.type === OSType_1.OSType.FREEBSD;
    }
    /**
     * If operating system is SunOS
     */
    isSunOS() {
        return this.type === OSType_1.OSType.SUNOS;
    }
}
exports.OS = OS;


/***/ }),

/***/ "../node_modules/@agama/platform/src/OSType.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type of operating system
 */
var OSType;
(function (OSType) {
    OSType[OSType["LINUX"] = 0] = "LINUX";
    OSType[OSType["WINDOWS"] = 1] = "WINDOWS";
    OSType[OSType["OSX"] = 2] = "OSX";
    OSType[OSType["FREEBSD"] = 3] = "FREEBSD";
    OSType[OSType["SUNOS"] = 4] = "SUNOS";
})(OSType = exports.OSType || (exports.OSType = {}));


/***/ }),

/***/ "../node_modules/@agama/platform/src/Platform.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PlatformType_1 = __webpack_require__("../node_modules/@agama/platform/src/PlatformType.ts");
/**
 * Platform representation
 */
class Platform {
    /**
     * If platform type is Browser
     */
    isBrowser() {
        return this.type === PlatformType_1.PlatformType.BROWSER
            || this.type === PlatformType_1.PlatformType.ELECTRON
            || this.type === PlatformType_1.PlatformType.NWJS;
    }
    /**
     * If platform type is NodeJS
     */
    isNodeJS() {
        return this.type === PlatformType_1.PlatformType.NODEJS
            || this.type === PlatformType_1.PlatformType.ELECTRON
            || this.type === PlatformType_1.PlatformType.NWJS;
    }
    /**
     * If platform is Electron
     */
    isElectron() {
        return this.type === PlatformType_1.PlatformType.ELECTRON;
    }
    /**
     * If platform is NWJS
     */
    isNWJS() {
        return this.type === PlatformType_1.PlatformType.NWJS;
    }
    /**
     * If platform is Rhino
     */
    isRhino() {
        return this.type === PlatformType_1.PlatformType.RHINO;
    }
}
exports.Platform = Platform;


/***/ }),

/***/ "../node_modules/@agama/platform/src/PlatformType.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type of platform
 */
var PlatformType;
(function (PlatformType) {
    PlatformType[PlatformType["BROWSER"] = 0] = "BROWSER";
    PlatformType[PlatformType["NODEJS"] = 1] = "NODEJS";
    PlatformType[PlatformType["ELECTRON"] = 2] = "ELECTRON";
    PlatformType[PlatformType["NWJS"] = 3] = "NWJS";
    PlatformType[PlatformType["RHINO"] = 4] = "RHINO";
})(PlatformType = exports.PlatformType || (exports.PlatformType = {}));


/***/ }),

/***/ "../node_modules/@agama/platform/src/helpers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const PlatformType_1 = __webpack_require__("../node_modules/@agama/platform/src/PlatformType.ts");
const Platform_1 = __webpack_require__("../node_modules/@agama/platform/src/Platform.ts");
/**
 * Current platform
 *
 * TODO: Implement NWJS and Rhino
 */
exports.platform = new Platform_1.Platform();
if (typeof process === 'object' && process.versions['electron']) {
    exports.platform.type = PlatformType_1.PlatformType.ELECTRON;
    // } else if(typeof module === 'object' && module.exports) {
}
else if (typeof process === 'object' && typeof process.versions === 'object' && process.versions.node) {
    exports.platform.type = PlatformType_1.PlatformType.NODEJS;
}
else if (typeof window === 'object') {
    exports.platform.type = PlatformType_1.PlatformType.BROWSER;
}
exports.platform.os = exports.platform.isNodeJS() ? __webpack_require__(0) : __webpack_require__("../node_modules/@agama/platform/src/platforms/browser.ts");
/**
 * If current platform is Browser
 */
exports.IS_BROWSER = exports.platform.isBrowser();
/**
 * If current platform is NodeJS
 */
exports.IS_NODEJS = exports.platform.isNodeJS();
/**
 * If current platform is Electron
 */
exports.IS_ELECTRON = exports.platform.isElectron();
/**
 * If current platform is NWJS
 */
exports.IS_NWJS = exports.platform.isNWJS();
/**
 * If current platform is Rhino
 */
exports.IS_RHINO = exports.platform.isRhino();
/**
 * If current operating system is Linux
 */
exports.IS_LINUX = exports.platform.os.isLinux();
/**
 * If current operating system is Windows
 */
exports.IS_WINDOWS = exports.platform.os.isWindows();
/**
 * If current operating system is OSX
 */
exports.IS_OSX = exports.platform.os.isOSX();
/**
 * If current operating system is FreeBSD
 */
exports.IS_FREEBSD = exports.platform.os.isFreeBSD();
/**
 * If current operating system is SunOS
 */
exports.IS_SUNOS = exports.platform.os.isSunOS();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/@agama/platform/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../node_modules/@agama/platform/src/PlatformType.ts"));
__export(__webpack_require__("../node_modules/@agama/platform/src/Platform.ts"));
__export(__webpack_require__("../node_modules/@agama/platform/src/OSType.ts"));
__export(__webpack_require__("../node_modules/@agama/platform/src/OS.ts"));
__export(__webpack_require__("../node_modules/@agama/platform/src/helpers.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@agama/platform/src/platforms/browser.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const OS_1 = __webpack_require__("../node_modules/@agama/platform/src/OS.ts");
/*
 * TODO: Implement os from UserAgent
 */
let os = new OS_1.OS();
module.exports = os;


/***/ }),

/***/ "../node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./Methods.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};


/***/ }),

/***/ "./formatters/JsonFormatter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class JsonFormatter {
    constructor() {
        this.contentType = JsonFormatter.CONTENT_TYPE;
    }
    parse(data) {
        return JSON.parse(data);
    }
    serialize(data) {
        return JSON.stringify(data);
    }
}
JsonFormatter.CONTENT_TYPE = 'application/json';
exports.JsonFormatter = JsonFormatter;


/***/ }),

/***/ "./formatters/QueryStringFormatter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//TODO: abstraer metodos creando nuevos metodos protegidos para parsear cada propiedad del objeto
//      de esta manera se pueden crear subclases de QueryStringFormatter para formatters propios (AdvancedQueryStringFormatter)
class QueryStringFormatter {
    constructor() {
        this.contentType = QueryStringFormatter.CONTENT_TYPE;
    }
    parse(data) {
        let parsed = {};
        let match = data.match(/[^=&]*=[^&]*&?/g);
        if (match) {
            match.forEach(i => {
                let [k, v] = i.split('=');
                let d = parsed[k];
                let lastIndex = v.length - 1;
                if (v[lastIndex] === '&') {
                    v = v.substring(0, lastIndex);
                }
                if (!d) {
                    return parsed[k] = v;
                }
                if (!(d instanceof Array)) {
                    d = parsed[k] = [d];
                }
                d.push(v);
            });
        }
        return parsed;
    }
    serialize(data) {
        return Object.keys(data).map(k => {
            let v = data[k];
            if (v instanceof Array) {
                return v.map(i => k + '=' + i).join('&');
            }
            if (v === undefined || v === null || typeof v === 'object') {
                v = '';
            }
            return k + '=' + v;
        }).join('&');
    }
}
QueryStringFormatter.CONTENT_TYPE = 'application/x-www-form-urlencoded';
exports.QueryStringFormatter = QueryStringFormatter;


/***/ }),

/***/ "./helpers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Methods_1 = __webpack_require__("./Methods.ts");
const request_1 = __webpack_require__("./platforms/request.ts");
const QueryStringFormatter_1 = __webpack_require__("./formatters/QueryStringFormatter.ts");
const req = request_1.getPlatformRequest();
function get(url, config) {
    return request(Methods_1.Methods.GET, url, null, config);
}
exports.get = get;
function post(url, data, config) {
    return request(Methods_1.Methods.POST, url, data, config);
}
exports.post = post;
function put(url, data, config) {
    return request(Methods_1.Methods.PUT, url, data, config);
}
exports.put = put;
function del(url, config) {
    return request(Methods_1.Methods.DELETE, url, null, config);
}
exports.del = del;
function request(method, url, data, config = {}) {
    //TODO: Preparar params de url (a lo route params de express o sentencias preparadas de SQL)
    data || (data = config.body);
    config.queryFormatter || (config.queryFormatter = new QueryStringFormatter_1.QueryStringFormatter());
    let cfg = {
        headers: config.headers || {}
    };
    if (config.userAgent) {
        cfg.headers['User-Agent'] = config.userAgent;
    }
    if (config.query) {
        url += '?' + config.queryFormatter.serialize(config.query);
    }
    if (data) {
        if (!cfg.headers['Content-Type']) {
            cfg.headers['Content-Type'] = config.bodyFormatter && config.bodyFormatter.contentType
                ? config.bodyFormatter.contentType : 'text/plain';
        }
        cfg.body = config.bodyFormatter ? config.bodyFormatter.serialize(data) : data;
        if (!cfg.headers['Content-Length']) {
            cfg.headers['Content-Length'] = cfg.body.length;
        }
    }
    //TODO: Usar adapter
    return req(method, url, cfg).then(res => res.data);
}
exports.request = request;


/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./Methods.ts"));
__export(__webpack_require__("./helpers.ts"));
__export(__webpack_require__("./formatters/QueryStringFormatter.ts"));
__export(__webpack_require__("./formatters/JsonFormatter.ts"));


/***/ }),

/***/ "./platforms/browser.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (method, url, config) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            // if(xhr.status < 300) {
            //     return reject(new Error(`HttpError ${xhr.status}: ${xhr.statusText}`));
            // }
            return resolve({
                status: xhr.status,
                statusText: xhr.statusText,
                data: xhr.responseText,
                //TODO: Recojer header
                header: null
            });
        };
        xhr.send(config.body);
    });
};


/***/ }),

/***/ "./platforms/request.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const platform_1 = __webpack_require__("../node_modules/@agama/platform/src/index.js");
function getPlatformRequest() {
    return platform_1.IS_NODEJS ? __webpack_require__(1) : __webpack_require__("./platforms/browser.ts");
}
exports.getPlatformRequest = getPlatformRequest;


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});
//# sourceMappingURL=agama.http.js.map