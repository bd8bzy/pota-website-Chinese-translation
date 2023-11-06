(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function fa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ia=fa(this);function v(a,b){if(b)a:{var c=ia;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ea(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ea(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ia[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ea(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}})}return a});
function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ka(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||oa});
var pa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=pa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;
function x(a,b){a.prototype=pa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function wa(){this.s=!1;this.m=null;this.i=void 0;this.h=1;this.G=this.l=0;this.B=this.j=null}
function xa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
wa.prototype.ga=function(a){this.i=a};
function ya(a,b){a.j={exception:b,md:!0};a.h=a.l||a.G}
wa.prototype.return=function(a){this.j={return:a};this.h=this.G};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.v=function(a){this.h=a};
function za(a,b,c){a.l=b;void 0!=c&&(a.G=c)}
function Aa(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.B.splice(0)[0];(b=a.j=a.j||b)?b.md?a.h=a.l||a.G:void 0!=b.v&&a.G<b.v?(a.h=b.v,a.j=null):a.h=a.G:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.s=!1,e;var f=e.value}catch(g){return a.h.m=null,ya(a.h,g),Fa(a)}a.h.m=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.s=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.md)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m.next,b,a.h.ga):(a.h.ga(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m["throw"],b,a.h.ga):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return qa});
v("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ia.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.S(g):this.G(g)}};
b.prototype.S=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.G(g)};
b.prototype.m=function(g){this.ga(2,g)};
b.prototype.G=function(g){this.ga(1,g)};
b.prototype.ga=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.B()};
b.prototype.Y=function(){var g=this;e(function(){if(g.R()){var h=ia.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.R=function(){if(this.s)return!1;var g=ia.CustomEvent,h=ia.Event,k=ia.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ia.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.Yb(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(u){try{l(t(u))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Yb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Yb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),n=l.next();!n.done;n=l.next())d(n.value).Yb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(u){return function(y){t[u]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Yb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!na(k,g)){var l=new c;ea(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ja(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&na(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||va});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
v("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
v("globalThis",function(a){return a||ia});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},B=this||self;function C(a,b,c){a=a.split(".");c=c||B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ma(a,b){var c=D("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function D(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(){return Date.now()}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Ya($a,Error);$a.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=B.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){B.console&&B.console.error(c.message)}xb=a}else xb=a}return xb}
;function zb(){}
function Ab(a){return new zb(Bb,a)}
var Bb={};Ab("");var Cb={};function Db(a){this.h=a}
Db.prototype.toString=function(){return this.h.toString()};function Eb(a){this.h=a}
Eb.prototype.toString=function(){return this.h+""};
function Fb(a){if(a instanceof Eb&&a.constructor===Eb)return a.h;Na(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Hb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Eb(a,Gb)}
;var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Jb(a){this.h=a}
Jb.prototype.toString=function(){return this.h.toString()};
var Kb={},Lb=new Jb("about:invalid#zClosurez",Kb);var Mb=Ma(610401301,!1),Nb=Ma(572417392,Ma(1,!0));function Ob(){var a=B.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=B.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Mb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Ob().indexOf(a)}
;function Sb(){return Mb?!!Pb&&0<Pb.brands.length:!1}
function Tb(){return Sb()?!1:E("Opera")}
function Ub(){return Sb()?!1:E("Trident")||E("MSIE")}
function Vb(){return E("Firefox")||E("FxiOS")}
function Wb(){return Sb()?Rb("Chromium"):(E("Chrome")||E("CriOS"))&&!(Sb()?0:E("Edge"))||E("Silk")}
;function Xb(a){this.h=a}
Xb.prototype.toString=function(){return this.h.toString()};function Yb(){a:{var a=B.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Zb.test(a))break a;a=""}return a}
var Zb=/^[\w+/_-]+[=]{0,2}$/;function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a,b){return b.match(ac)[a]||null}
function dc(a){return bc(cc(3,a))}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function hc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function jc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)ic(a[b],a[b+1],c);return c.join("&")}
function kc(a){var b=[],c;for(c in a)ic(c,a[c],b);return b.join("&")}
function lc(a,b){var c=2==arguments.length?jc(arguments[1],0):jc(arguments,1);return hc(a,c)}
function mc(a,b){b=kc(b);return hc(a,b)}
function nc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return hc(a,b+c)}
function oc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var pc=/#|$/,qc=/[?&]($|#)/;function rc(a,b){for(var c=a.search(pc),d=0,e,f=[];0<=(e=oc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(qc,"$1")}
;function sc(a){this.h=a}
;function tc(a,b,c){this.i=a;this.l=b;this.h=c||[];this.pb=new Map}
m=tc.prototype;m.Ld=function(a){var b=Ia.apply(1,arguments),c=this.zc(b);c?c.push(new sc(a)):this.yd(a,b)};
m.yd=function(a){var b=this.getKey(Ia.apply(1,arguments));this.pb.set(b,[new sc(a)])};
m.zc=function(){var a=this.getKey(Ia.apply(0,arguments));return this.pb.has(a)?this.pb.get(a):void 0};
m.ce=function(){var a=this.zc(Ia.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.pb.clear()};
m.getKey=function(){var a=Ia.apply(0,arguments);return a?a.join(","):"key"};function uc(a,b){tc.call(this,a,3,b)}
x(uc,tc);uc.prototype.j=function(a){var b=Ia.apply(1,arguments),c=0,d=this.ce(b);d&&(c=d.h);this.yd(c+a,b)};function vc(a,b){tc.call(this,a,2,b)}
x(vc,tc);vc.prototype.record=function(a){this.Ld(a,Ia.apply(1,arguments))};function wc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function xc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?xc.apply(null,d):wc(d)}}
;function F(){this.ga=this.ga;this.G=this.G}
F.prototype.ga=!1;F.prototype.Z=function(){return this.ga};
F.prototype.dispose=function(){this.ga||(this.ga=!0,this.P())};
function yc(a,b){zc(a,Wa(wc,b))}
function zc(a,b){a.ga?b():(a.G||(a.G=[]),a.G.push(b))}
F.prototype.P=function(){if(this.G)for(;this.G.length;)this.G.shift()()};function Ac(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ac.prototype.stopPropagation=function(){this.j=!0};
Ac.prototype.preventDefault=function(){this.defaultPrevented=!0};function Bc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Cc(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Dc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ec[c])c=Ec[c];else{c=String(c);if(!Ec[c]){var f=/function\s+([^\(]+)/m.exec(c);Ec[c]=f?f[1]:"[Anonymous]"}c=Ec[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Dc(a,b){b||(b={});b[Fc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Fc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Dc(a,b));return c}
function Fc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ec={};var Gc=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
B.addEventListener("test",c,b);B.removeEventListener("test",c,b)}catch(d){}return a}();function Hc(){return Mb?!!Pb&&!!Pb.platform:!1}
function Ic(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function Jc(a){Jc[" "](a);return a}
Jc[" "]=function(){};var Kc=Tb(),Lc=Ub(),Mc=E("Edge"),Qc=E("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),Rc=-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge");Rc&&E("Mobile");Hc()||E("Macintosh");Hc()||E("Windows");(Hc()?"Linux"===Pb.platform:E("Linux"))||Hc()||E("CrOS");var Sc=Hc()?"Android"===Pb.platform:E("Android");Ic();E("iPad");E("iPod");Ic()||E("iPad")||E("iPod");Ob().toLowerCase().indexOf("kaios");
function Tc(){var a=B.document;return a?a.documentMode:void 0}
var Uc;a:{var Vc="",Wc=function(){var a=Ob();if(Qc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Mc)return/Edge\/([\d\.]+)/.exec(a);if(Lc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Rc)return/WebKit\/(\S+)/.exec(a);if(Kc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wc&&(Vc=Wc?Wc[1]:"");if(Lc){var Xc=Tc();if(null!=Xc&&Xc>parseFloat(Vc)){Uc=String(Xc);break a}}Uc=Vc}var Yc=Uc,Zc;if(B.document&&Lc){var $c=Tc();Zc=$c?$c:parseInt(Yc,10)||void 0}else Zc=void 0;var ad=Zc;function bd(a,b){Ac.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(bd,Ac);var cd={2:"touch",3:"pen",4:"mouse"};
bd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Qc){a:{try{Jc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:cd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&bd.Aa.preventDefault.call(this)};
bd.prototype.stopPropagation=function(){bd.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
bd.prototype.preventDefault=function(){bd.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dd="closure_listenable_"+(1E6*Math.random()|0);var ed=0;function fd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.dc=e;this.key=++ed;this.Qb=this.Xb=!1}
function gd(a){a.Qb=!0;a.listener=null;a.proxy=null;a.src=null;a.dc=null}
;function hd(a){this.src=a;this.listeners={};this.h=0}
hd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=id(a,b,d,e);-1<g?(b=a[g],c||(b.Xb=!1)):(b=new fd(b,this.src,f,!!d,e),b.Xb=c,a.push(b));return b};
hd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=id(e,b,c,d);return-1<b?(gd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function jd(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(gd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function id(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qb&&f.listener==b&&f.capture==!!c&&f.dc==d)return e}return-1}
;var kd="closure_lm_"+(1E6*Math.random()|0),ld={},md=0;function nd(a,b,c,d,e){if(d&&d.once)od(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):qd(a,b,c,!1,d,e)}
function qd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=rd(a);h||(a[kd]=h=new hd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=sd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Gc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(td(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");md++}}
function sd(){function a(c){return b.call(a.src,a.listener,c)}
var b=ud;return a}
function od(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):qd(a,b,c,!0,d,e)}
function vd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)vd(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=pd(c),a&&a[dd])?a.h.remove(String(b),c,d,e):a&&(a=rd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=id(b,c,d,e)),(c=-1<a?b[a]:null)&&wd(c))}
function wd(a){if("number"!==typeof a&&a&&!a.Qb){var b=a.src;if(b&&b[dd])jd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(td(c),d):b.addListener&&b.removeListener&&b.removeListener(d);md--;(c=rd(b))?(jd(c,a),0==c.h&&(c.src=null,b[kd]=null)):gd(a)}}}
function td(a){return a in ld?ld[a]:ld[a]="on"+a}
function ud(a,b){if(a.Qb)a=!0;else{b=new bd(b,this);var c=a.listener,d=a.dc||a.src;a.Xb&&wd(a);a=c.call(d,b)}return a}
function rd(a){a=a[kd];return a instanceof hd?a:null}
var xd="__closure_events_fn_"+(1E9*Math.random()>>>0);function pd(a){if("function"===typeof a)return a;a[xd]||(a[xd]=function(b){return a.handleEvent(b)});
return a[xd]}
;function yd(){F.call(this);this.h=new hd(this);this.Ka=this;this.ea=null}
Ya(yd,F);yd.prototype[dd]=!0;m=yd.prototype;m.addEventListener=function(a,b,c,d){nd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){vd(this,a,b,c,d)};
function zd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Ka;c=b.type||b;"string"===typeof b?b=new Ac(b,a):b instanceof Ac?b.target=b.target||a:(e=b,b=new Ac(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ad(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ad(g,c,!0,b)&&e,b.j||(e=Ad(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ad(g,c,!1,b)&&e}
m.P=function(){yd.Aa.P.call(this);this.removeAllListeners();this.ea=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,gd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Ad(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Qb&&g.capture==c){var h=g.listener,k=g.dc||g.src;g.Xb&&jd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Bd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Bd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Cd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Dd(a,b){return a+Math.random()*(b-a)}
;function Ed(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Ed.prototype;m.clone=function(){return new Ed(this.x,this.y)};
m.equals=function(a){return a instanceof Ed&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Fd(a,b){this.width=a;this.height=b}
m=Fd.prototype;m.clone=function(){return new Fd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.Lb=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Gd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Hd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Id(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Jd;function Kd(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Hd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Zc;c.Zc=null;e()}};
return function(e){d.next={Zc:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Ld(a){B.setTimeout(function(){throw a;},0)}
;function Md(){this.i=this.h=null}
Md.prototype.add=function(a,b){var c=Nd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Md.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Nd=new Bd(function(){return new Od},function(a){return a.reset()});
function Od(){this.next=this.scope=this.h=null}
Od.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Od.prototype.reset=function(){this.next=this.scope=this.h=null};var Pd,Qd=!1,Rd=new Md;function Sd(a,b){Pd||Td();Qd||(Pd(),Qd=!0);Rd.add(a,b)}
function Td(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Pd=function(){a.then(Ud)}}else Pd=function(){var b=Ud;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&(Sb()||!E("Edge"))&&B.Window.prototype.setImmediate==B.setImmediate?(Jd||(Jd=Kd()),Jd(b)):B.setImmediate(b)}}
function Ud(){for(var a;a=Rd.remove();){try{a.h.call(a.scope)}catch(b){Ld(b)}Cd(Nd,a)}Qd=!1}
;function Vd(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.G=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){Wd(b,2,c)},function(c){Wd(b,3,c)})}catch(c){Wd(this,3,c)}}
function Xd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Xd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Yd=new Bd(function(){return new Xd},function(a){a.reset()});
function Zd(a,b,c){var d=Yd.get();d.i=a;d.h=b;d.context=c;return d}
function $d(a){return new Vd(function(b,c){c(a)})}
Vd.prototype.then=function(a,b,c){return ae(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Vd.prototype.$goog_Thenable=!0;m=Vd.prototype;m.qc=function(a,b){return ae(this,null,a,b)};
m.catch=Vd.prototype.qc;m.cancel=function(a){if(0==this.h){var b=new be(a);Sd(function(){ce(this,b)},this)}};
function ce(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ce(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):de(c),ee(c,e,3,b)))}a.j=null}else Wd(a,3,b)}
function fe(a,b){a.i||2!=a.h&&3!=a.h||ge(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ae(a,b,c,d){var e=Zd(null,null,null);e.child=new Vd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof be?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;fe(a,e);return e.child}
m.bf=function(a){this.h=0;Wd(this,2,a)};
m.cf=function(a){this.h=0;Wd(this,3,a)};
function Wd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.bf,f=a.cf;if(d instanceof Vd){fe(d,Zd(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){he(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,ge(a),3!=b||c instanceof be||ie(a,c))}}
function he(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ge(a){a.G||(a.G=!0,Sd(a.Xd,a))}
function de(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.Xd=function(){for(var a;a=de(this);)ee(this,a,this.h,this.s);this.G=!1};
function ee(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,je(b,c,d);else try{b.j?b.i.call(b.context):je(b,c,d)}catch(e){ke.call(null,e)}Cd(Yd,b)}
function je(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ie(a,b){a.m=!0;Sd(function(){a.m&&ke.call(null,b)})}
var ke=Ld;function be(a){$a.call(this,a)}
Ya(be,$a);be.prototype.name="cancel";function le(a,b){yd.call(this);this.j=a||1;this.i=b||B;this.l=Va(this.Ze,this);this.m=Xa()}
Ya(le,yd);m=le.prototype;m.enabled=!1;m.Ga=null;m.setInterval=function(a){this.j=a;this.Ga&&this.enabled?(this.stop(),this.start()):this.Ga&&this.stop()};
m.Ze=function(){if(this.enabled){var a=Xa()-this.m;0<a&&a<.8*this.j?this.Ga=this.i.setTimeout(this.l,this.j-a):(this.Ga&&(this.i.clearTimeout(this.Ga),this.Ga=null),zd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ga||(this.Ga=this.i.setTimeout(this.l,this.j),this.m=Xa())};
m.stop=function(){this.enabled=!1;this.Ga&&(this.i.clearTimeout(this.Ga),this.Ga=null)};
m.P=function(){le.Aa.P.call(this);this.stop();delete this.i};
function me(a,b,c){if("function"===typeof a)c&&(a=Va(a,c));else if(a&&"function"==typeof a.handleEvent)a=Va(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:B.setTimeout(a,b||0)}
;function ne(a){F.call(this);this.B=a;this.i=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.h=new le(this.flushInterval);this.h.listen("tick",this.mb,!1,this);yc(this,this.h);this.m=!1}
x(ne,F);m=ne.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function oe(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.mb()}
m.mb=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.pb.size});
a.length&&this.B.flush(a,this.m);pe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.vc=function(a){var b=Ia.apply(1,arguments);this.i.has(a)||this.i.set(a,new uc(a,b))};
m.Vc=function(a){var b=Ia.apply(1,arguments);this.i.has(a)||this.i.set(a,new vc(a,b))};
function qe(a,b){return a.s.has(b)?void 0:a.i.get(b)}
m.Ub=function(a){this.Kd.apply(this,[a,1].concat(ma(Ia.apply(1,arguments))))};
m.Kd=function(a,b){var c=Ia.apply(2,arguments),d=qe(this,a);d&&d instanceof uc&&(d.j(b,c),oe(this))};
m.record=function(a,b){var c=Ia.apply(2,arguments),d=qe(this,a);d&&d instanceof vc&&(d.record(b,c),oe(this))};
function pe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function re(a){this.h=a;this.h.vc("/client_streamz/bg/fic",{Da:3,Ca:"ke"})}
function se(a){this.h=a;this.h.vc("/client_streamz/bg/fiec",{Da:3,Ca:"rk"},{Da:3,Ca:"ke"},{Da:2,Ca:"ec"},{Da:3,Ca:"em"})}
function te(a,b,c,d,e){a.h.Ub("/client_streamz/bg/fiec",b,c,d,e)}
function ue(a){this.h=a;this.h.Vc("/client_streamz/bg/fil",{Da:3,Ca:"rk"},{Da:3,Ca:"ke"})}
ue.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function ve(a){this.h=a;this.h.vc("/client_streamz/bg/fsc",{Da:3,Ca:"rk"},{Da:3,Ca:"ke"})}
function we(a){this.h=a;this.h.Vc("/client_streamz/bg/fsl",{Da:3,Ca:"rk"},{Da:3,Ca:"ke"})}
we.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var xe={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function ye(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ze(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Ae(a,h),d+=Ae(a,h+4),e+=Ae(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return xe.toString(e)}
function ze(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Ae(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Vb();var Be=Ic()||E("iPod"),Ce=E("iPad");!E("Android")||Wb()||Vb()||Tb()||E("Silk");Wb();var De=E("Safari")&&!(Wb()||(Sb()?0:E("Coast"))||Tb()||(Sb()?0:E("Edge"))||(Sb()?Rb("Microsoft Edge"):E("Edg/"))||(Sb()?Rb("Opera"):E("OPR"))||Vb()||E("Silk")||E("Android"))&&!(Ic()||E("iPad")||E("iPod"));var Ee={},Fe=null;function Ge(a,b){Oa(a);void 0===b&&(b=0);He();b=Ee[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ie(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Je(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Je(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Fe[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
He();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function He(){if(!Fe){Fe={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ee[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Fe[f]&&(Fe[f]=e)}}}}
;var Ke="undefined"!==typeof Uint8Array,Le=!Lc&&"function"===typeof btoa;function Me(a){if(!Le)return Ge(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ne=/[-_.]/g,Oe={"-":"+",_:"/",".":"="};function Pe(a){return Oe[a]||""}
function Qe(a){return Ke&&null!=a&&a instanceof Uint8Array}
var Re={};var Se;function Te(a){if(a!==Re)throw Error("illegal external caller");}
function Ue(a,b){Te(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Ue.prototype.Lb=function(){return null==this.value_};
Ue.prototype.sizeBytes=function(){Te(Re);var a=this.value_;if(null!=a&&!Qe(a))if("string"===typeof a)if(Le){Ne.test(a)&&(a=a.replace(Ne,Pe));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ie(a);else Na(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Ve(){return"function"===typeof BigInt}
var We=!Nb,Xe=!Nb;function Ye(a){return Array.prototype.slice.call(a)}
;var Ze="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ma(Object.values({Ff:1,Df:2,Cf:4,If:8,Hf:16,Gf:32,tf:64,Kf:128,Bf:256,Af:512,Ef:1024,yf:2048,Jf:4096,zf:8192})));var $e=Ze?function(a,b){a[Ze]|=b}:function(a,b){void 0!==a.Ta?a.Ta|=b:Object.defineProperties(a,{Ta:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function af(a){var b=bf(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Ye(a)),cf(a,b|1))}
function df(a,b,c){return c?a|b:a&~b}
var bf=Ze?function(a){return a[Ze]|0}:function(a){return a.Ta|0},ef=Ze?function(a){return a[Ze]}:function(a){return a.Ta},cf=Ze?function(a,b){a[Ze]=b}:function(a,b){void 0!==a.Ta?a.Ta=b:Object.defineProperties(a,{Ta:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function ff(){var a=[];$e(a,1);return a}
function gf(a,b){cf(b,(a|0)&-14591)}
function hf(a,b){cf(b,(a|34)&-14557)}
function jf(a){a=a>>14&1023;return 0===a?536870912:a}
;var kf={},lf={};function mf(a){return!(!a||"object"!==typeof a||a.Zf!==lf)}
function nf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var of,pf=!Nb;function qf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Ue(a,Re):Se||(Se=new Ue(null,Re));else if(a.constructor!==Ue)if(Qe(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Ue(new Uint8Array(a),Re):Se||(Se=new Ue(null,Re));else throw Error();return a}
function rf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=bf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;cf(a,d|1);return!0}
var sf,tf=[];cf(tf,55);sf=Object.freeze(tf);function uf(a){if(a&2)throw Error();}
;var vf=0,wf=0;function xf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(yf(c,a)),b=c.next().value,a=c.next().value,c=b);vf=c>>>0;wf=a>>>0}
function zf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Ve()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Af(c)+Af(a));return c}
function Af(a){a=String(a);return"0000000".slice(a.length)+a}
function Bf(){var a=vf,b=wf;b&2147483648?Ve()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(yf(a,b)),a=b.next().value,b=b.next().value,a="-"+zf(a,b)):a=zf(a,b);return a}
function yf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Cf(){var a=Error();Bc(a,"incident");Ld(a)}
function Df(a){a=Error(a);Bc(a,"warning");return a}
;function Ef(a){return a.displayName||a.name||"unknown type name"}
function Ff(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Na(a)+": "+a);a=!!a}return a}
var Gf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Hf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Gf.test(a)}
function If(a){if(null!=a){if("number"!==typeof a)throw Df("int32");Number.isFinite(a)||Cf()}return a}
function Jf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}
function Kf(a){if(null!=a){var b=!!b;if(!Hf(a))throw Df("int64");a="string"===typeof a?Lf(a,b):b?Mf(a,b):Nf(a,!1)}return a}
function Nf(a,b){Hf(a);if(!b)return a;a=Math.trunc(a);if(b&&!Number.isSafeInteger(a)){xf(a);b=vf;var c=wf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Mf(a,b){Hf(a);if(!b)return String(a);a=Math.trunc(a);!b||Number.isSafeInteger(a)?a=String(a):(xf(a),a=Bf());return a}
function Lf(a,b){Hf(a);if(!b)return a;var c=Math.trunc(Number(a));if(Number.isSafeInteger(c))return String(c);c=a.indexOf(".");-1!==c&&(a=a.substring(0,c));if(b){if(16>a.length)xf(Number(a));else if(Ve())a=BigInt(a),vf=Number(a&BigInt(4294967295))>>>0,wf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);wf=vf=0;c=a.length;for(var d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),wf*=1E6,vf=1E6*vf+d,4294967296<=vf&&(wf+=Math.trunc(vf/4294967296),wf>>>=0,vf>>>=0);b&&(b=w(yf(vf,wf)),
a=b.next().value,b=b.next().value,vf=a,wf=b)}a=Bf()}return a}
function Of(a){if("string"!==typeof a)throw Error();return a}
function Pf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Qf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ef(b)+" but got "+(a&&Ef(a.constructor)));}
function Rf(a,b,c){if(null!=a&&"object"===typeof a&&a.Jc===kf)return a;if(Array.isArray(a)){var d=bf(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&cf(a,e);return new b(a)}}
;var Sf;function Tf(a,b){bf(b);Sf=b;a=new a(b);Sf=void 0;return a}
function Uf(a,b,c){null==a&&(a=Sf);Sf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=bf(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(nf(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Vf(c,b,g),e=1023);d=d&-16760833|(e&1023)<<14;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Vf(c,g,{}),d|=256,b=1023),d=d&-16760833|(b&1023)<<14)}}cf(a,d);return a}
function Vf(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Wf(a,b){return Xf(b)}
function Xf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return pf||!rf(a,void 0,9999)?a:void 0;if(Qe(a))return Me(a);if(a instanceof Ue){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Me(b)}}}return a}
;function Yf(a,b,c){a=Ye(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Zf(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&bf(a)&1?void 0:f&&bf(a)&2?a:$f(a,b,c,void 0!==d,e,f);else if(nf(a)){var g={},h;for(h in a)g[h]=Zf(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function $f(a,b,c,d,e,f){var g=d||c?bf(a):0;d=d?!!(g&32):void 0;a=Ye(a);for(var h=0;h<a.length;h++)a[h]=Zf(a[h],b,c,d,e,f);c&&c(g,a);return a}
function ag(a){return a.Jc===kf?a.toJSON():Xf(a)}
;function bg(a,b,c){c=void 0===c?hf:c;if(null!=a){if(Ke&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=bf(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(cf(a,(d|34)&-12293),a):$f(a,bg,d&4?hf:c,!0,!1,!0)}a.Jc===kf&&(c=a.A,d=ef(c),a=d&2?a:Tf(a.constructor,cg(c,d,!0)));return a}}
function cg(a,b,c){var d=c||b&2?hf:gf,e=!!(b&32);a=Yf(a,b,function(f){return bg(f,e,d)});
$e(a,32|(c?2:0));return a}
function dg(a){var b=a.A,c=ef(b);return c&2?Tf(a.constructor,cg(b,c,!1)):a}
;Object.freeze({});function eg(a,b){a=a.A;return fg(a,ef(a),b)}
function fg(a,b,c,d){if(-1===c)return null;if(c>=jf(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function G(a,b,c){var d=a.A,e=ef(d);uf(e);gg(d,e,b,c);return a}
function gg(a,b,c,d,e){nf(d);var f=jf(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&cf(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function hg(a){return void 0!==ig(a,jg,11,!1)}
function kg(a,b,c,d){var e=a.A,f=ef(e);uf(f);if(null==c)return gg(e,f,b),a;var g=bf(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g)){g=21;k&&(c=Ye(c),h=0,g=lg(g,f,!0));k=!!(4&g)&&!!(4096&g);for(var n=0;n<c.length;n++)c[n]=d(c[n],k)}l&&(g=df(g,2,!0));g!==h&&cf(c,g);l&&Object.freeze(c);gg(e,f,b,c);return a}
function mg(a,b,c,d){a=a.A;var e=ef(a);uf(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=fg(a,f,k)&&(0!==g&&(f=gg(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=gg(a,e,c));gg(a,e,b,d)}
function ig(a,b,c,d){a=a.A;var e=ef(a),f=fg(a,e,c,d);b=Rf(f,b,e);b!==f&&null!=b&&gg(a,e,c,b,d);return b}
function ng(a,b,c,d){d=void 0===d?!1:d;b=ig(a,b,c,d);if(null==b)return b;a=a.A;var e=ef(a);if(!(e&2)){var f=dg(b);f!==b&&(b=f,gg(a,e,c,b,d))}return b}
function og(a,b,c,d){null!=d?Qf(d,b):d=void 0;return G(a,c,d)}
function pg(a,b,c,d){var e=a.A,f=ef(e);uf(f);if(null==d)return gg(e,f,c),a;for(var g=bf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var u=d[r];Qf(u,b);k||(u=!!(bf(u.A)&2),p&&(p=!u),t&&(t=u))}k||(g=df(g,5,!0),g=df(g,8,p),g=df(g,16,t),n&&(g=df(g,t?2:2048,!0)),g!==h&&(l&&(d=Ye(d),g=lg(g,f,!0)),cf(d,g)),n&&Object.freeze(d));gg(e,f,c,d);return a}
function lg(a,b,c){a=df(a,2,!!(2&b));a=df(a,32,!!(32&b)&&c);return a=df(a,2048,!1)}
function qg(a,b){a=eg(a,b);var c;null==a?c=a:Hf(a)?"number"===typeof a?c=Nf(a,!1):c=Lf(a,!1):c=void 0;return c}
function rg(a){a=eg(a,1);var b=void 0===b?!1:b;b=null==a?a:Hf(a)?"string"===typeof a?Lf(a,b):b?Mf(a,b):Nf(a,b):void 0;return b}
function sg(a){return qf(a,!1)}
function tg(a,b,c){null!=c&&(Number.isFinite(c)||Cf());return G(a,b,c)}
;function ug(a,b,c){this.A=Uf(a,b,c)}
m=ug.prototype;m.toJSON=function(){if(of)var a=vg(this,this.A,!1);else a=$f(this.A,ag,void 0,void 0,!1,!1),a=vg(this,a,!0);return a};
m.serialize=function(){of=!0;try{return JSON.stringify(this.toJSON(),Wf)}finally{of=!1}};
function wg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);$e(b,32);return Tf(a,b)}
m.clone=function(){var a=this.A,b=ef(a);return Tf(this.constructor,cg(a,b,!1))};
m.Jc=kf;m.toString=function(){return vg(this,this.A,!1).toString()};
function vg(a,b,c){var d=a.constructor.Va,e=ef(c?a.A:b),f=jf(e),g=!1;if(d&&pf){if(!c){b=Ye(b);var h;if(b.length&&nf(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=ef(a.A);a=jf(h);h=+!!(h&512)-1;for(var k,l,n=0;n<d.length;n++)if(l=d[n],l<a){l+=h;var p=f[l];null==p?f[l]=c?sf:ff():c&&p!==sf&&af(p)}else k||(p=void 0,f.length&&nf(p=f[f.length-1])?k=p:f.push(k={})),p=k[l],null==k[l]?k[l]=c?sf:ff():c&&p!==sf&&af(p)}k=b.length;if(!k)return b;var t;
if(nf(f=b[k-1])){a:{var r=f;c={};a=!1;for(var u in r){h=r[u];if(Array.isArray(h)){n=h;if(!Xe&&rf(h,d,+u)||!We&&mf(h)&&0===h.size)h=null;h!=n&&(a=!0)}null!=h?c[u]=h:a=!0}if(a){for(var y in c){r=c;break a}r=null}}r!=f&&(t=!0);k--}for(e=+!!(e&512)-1;0<k;k--){u=k-1;f=b[u];if(!(null==f||!Xe&&rf(f,d,u-e)||!We&&mf(f)&&0===f.size))break;var z=!0}if(!t&&!z)return b;var H;g?H=b:H=Array.prototype.slice.call(b,0,k);b=H;g&&(b.length=k);r&&b.push(r);return b}
;function xg(a){this.A=Uf(a)}
x(xg,ug);var yg=[1,2,3];function zg(a){this.A=Uf(a)}
x(zg,ug);var Ag=[1,2,3];function Bg(a){this.A=Uf(a)}
x(Bg,ug);Bg.Va=[1];function Cg(a){this.A=Uf(a)}
x(Cg,ug);Cg.Va=[3,6,4];function Dg(a){this.A=Uf(a)}
x(Dg,ug);Dg.Va=[1];function Eg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Fg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var u=e[1],y=e[2],z=e[3],H=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var L=z^u&(y^z);var I=1518500249}else L=u^y^z,I=1859775393;else 60>r?(L=u&y|z&(u|y),I=2400959708):(L=u^y^z,I=3395469782);L=((p<<5|p>>>27)&4294967295)+L+H+I+t[r]&4294967295;H=z;z=y;y=(u<<30|u>>>2)&4294967295;u=p;p=L}e[0]=e[0]+p&4294967295;e[1]=e[1]+u&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],u=0,y=p.length;u<y;++u)r.push(p.charCodeAt(u));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var u=24;0<=u;u-=8)p[t++]=e[r]>>u&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Td:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function Gg(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,Hg(Eg(d),a,c||null)].join(" "):null}
function Hg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),Ig(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=Ig(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ig(a){var b=Fg();b.update(a);return b.Td().toLowerCase()}
;var Jg={};function Kg(a){this.h=a||{cookie:""}}
m=Kg.prototype;m.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.Lb())return!0;this.set("TESTCOOKIESENABLED","1",{hc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.hg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.hc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{hc:0,path:b,domain:c});return d};
m.Cc=function(){return Lg(this).keys};
m.Lb=function(){return!this.h.cookie};
m.clear=function(){for(var a=Lg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Lg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Mg=new Kg("undefined"==typeof document?null:document);function Ng(a){return!!Jg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Og(a){a=void 0===a?!1:a;var b=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;Ng(a)&&(b=b||B.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Kg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Ng(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Pg(a,b,c,d){(a=B[a])||"undefined"===typeof document||(a=(new Kg(document)).get(b));return a?Gg(a,c,d):null}
function Qg(a,b){b=void 0===b?!1:b;var c=Eg(String(B.location.href)),d=[];if(Og(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?B.__SAPISID:B.__APISID;e||"undefined"===typeof document||(e=new Kg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Gg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ng(b)&&((b=Pg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Pg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Rg(a){this.A=Uf(a)}
x(Rg,ug);Rg.Va=[2];function Sg(a){yd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Xa()};
this.j=this.i()}
x(Sg,yd);Sg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Sg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Sg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Sg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),zd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Tg(a){this.A=Uf(a)}
x(Tg,ug);function Ug(a){this.A=Uf(a)}
x(Ug,ug);function Vg(a){this.h=this.i=this.j=a}
Vg.prototype.reset=function(){this.h=this.i=this.j};
Vg.prototype.getValue=function(){return this.i};function Wg(a){this.A=Uf(a)}
x(Wg,ug);function Xg(a){this.A=Uf(a)}
x(Xg,ug);Xg.Va=[1];function jg(a){this.A=Uf(a)}
x(jg,ug);var Yg=["platform","platformVersion","architecture","model","uaFullVersion"];new Xg;function Zg(a){this.A=Uf(a)}
x(Zg,ug);function $g(a){this.A=Uf(a)}
x($g,ug);function ah(a){this.A=Uf(a,35)}
x(ah,ug);ah.Va=[3,20,27];function bh(a){this.A=Uf(a,19)}
x(bh,ug);bh.prototype.Rb=function(a){return tg(this,2,a)};
bh.Va=[3,5];function ch(a){this.A=Uf(a,7)}
x(ch,ug);var dh=function(a){return function(b){return wg(a,b)}}(ch);
ch.Va=[5,6];function eh(a){this.A=Uf(a)}
x(eh,ug);var fh;fh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=ng;this.defaultValue=void 0}(175237375,{Uf:0},eh);function gh(a){F.call(this);var b=this;this.componentId="";this.i=[];this.na="";this.Ba=this.ea=-1;this.ma=!1;this.B=this.experimentIds=null;this.Y=this.da=this.s=this.l=0;this.Ka=1;this.timeoutMillis=0;this.R=!1;this.logSource=a.logSource;this.rb=a.rb||function(){};
this.j=new hh(a.logSource,a.vb);this.network=a.network;this.Cb=a.Cb||null;this.bufferSize=1E3;this.nb=Wa(Dd,0,1);this.W=a.df||null;this.sessionIndex=a.sessionIndex||null;this.Jb=a.Jb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.dd;this.vb=a.vb||!1;var c=tg(new Zg,1,1);ih(this.j,c);this.m=new Vg(1E4);this.h=new Sg(this.m.getValue());a=jh(this,a.Wc);nd(this.h,"tick",a,!1,this);this.S=new Sg(6E5);nd(this.S,"tick",a,!1,this);this.Jb||this.S.start();this.vb||(nd(document,"visibilitychange",
function(){"hidden"===document.visibilityState&&b.xc()}),nd(document,"pagehide",this.xc,!1,this))}
x(gh,F);function jh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=gh.prototype;m.P=function(){this.xc();this.h.stop();this.S.stop();F.prototype.P.call(this)};
function kh(a){a.W||(a.W=.01>a.nb()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.W}
function lh(a,b){a.m=new Vg(1>b?1:b);a.h.setInterval(a.m.getValue())}
m.log=function(a){a=a.clone();var b=this.Ka++;a=G(a,21,Kf(b));this.componentId&&G(a,26,Pf(this.componentId));rg(a)||(b=Date.now(),b=Number.isFinite(b)?b.toString():"0",G(a,1,Kf(b)));null==qg(a,15)&&G(a,15,Kf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),og(a,Rg,16,b));b=this.i.length-this.bufferSize+1;0<b&&(this.i.splice(0,b),this.l+=b);this.i.push(a);this.Jb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.i.length)a&&a();else if(this.R)mh(this.j,3),nh(this);else{var d=Date.now();if(this.Ba>d&&this.ea<d)b&&b("throttled");else{mh(this.j,1);var e=oh(this.j,this.i,this.l,this.s,this.Cb,this.da,this.Y);d={};var f=this.rb();f&&(d.Authorization=f);var g=kh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=nc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=nc(g,"pageId",this.pageId));if(f&&this.na===f)b&&b("stale-auth-token");
else{this.i=[];this.h.enabled&&this.h.stop();this.l=0;var h=e.serialize(),k;this.B&&this.B.isSupported(h.length)&&(k=this.B.compress(h));var l={url:g,body:h,Pd:1,Nc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.m.reset();c.h.setInterval(c.m.getValue());if(r){var u=null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));u=dh(y)}catch(H){}if(u){r=Number;y="-1";y=void 0===y?"0":y;var z=rg(u);r=r(null!=z?z:y);0<r&&(c.ea=Date.now(),
c.Ba=c.ea+r);u=fh.ctor?fh.i(u,fh.ctor,fh.h,!0):fh.i(u,fh.h,null,!0);if(r=null===u?void 0:u)u=-1,u=void 0===u?0:u,r=Jf(eg(r,1)),u=null!=r?r:u,-1!==u&&(c.ma||lh(c,u))}}a&&a();c.s=0},p=function(r,u){var y=void 0===y?2:y;
var z=e.A;var H=ef(z),L=!!(2&H),I=H;H=L?1:y;y=1===H;H=2===H;var da=!!(2&I)&&H,T=I;var O=T&2;I=fg(z,T,3);Array.isArray(I)||(I=sf);var ba=!!(T&32);T=bf(I);0===T&&ba&&!O?(T|=33,cf(I,T)):T&1||(T|=1,cf(I,T));O&&(O=!1,T&2||($e(I,34),O=!!(4&T)),O&&Object.freeze(I));O=I;I=ef(z);var J=bf(O),ca=!!(2&J);T=!!(4&J);ba=!!(32&J);var ha=ca&&T||!!(2048&J);if(!T){var V=O,ab=I,Nc=!!(2&J);Nc&&(ab=df(ab,2,!0));for(var Oc=!Nc,Pc=!0,X=0,Ci=0;X<V.length;X++){var Di=Rf(V[X],ah,ab);if(Di instanceof ah){if(!Nc){var hn=!!(bf(Di.A)&
2);Oc&&(Oc=!hn);Pc&&(Pc=hn)}V[Ci++]=Di}}Ci<X&&(V.length=Ci);J=df(J,4,!0);J=df(J,16,Pc);J=df(J,8,Oc);cf(V,J);ca&&!da&&(Object.freeze(O),ha=!0)}da=J;ca=!!(8&J)||y&&!O.length;if(!L&&!ca){ha&&(O=Ye(O),ha=!1,da=0,J=lg(J,I,!1),I=gg(z,I,3,O));L=O;ca=J;for(V=0;V<L.length;V++)J=L[V],ab=dg(J),J!==ab&&(L[V]=ab);ca=df(ca,8,!0);J=ca=df(ca,16,!L.length)}ha||(y?J=df(J,!O.length||16&J&&(!T||ba)?2:2048,!0):J=df(J,32,!1),J!==da&&cf(O,J),y&&(Object.freeze(O),ha=!0));H&&ha&&(O=Ye(O),J=lg(J,I,!1),cf(O,J),gg(z,I,3,O));
z=O;y=qg(e,14);H=c.m;H.h=Math.min(3E5,2*H.h);H.i=Math.min(3E5,H.h+Math.round(.2*(Math.random()-.5)*H.h));c.h.setInterval(c.m.getValue());401===r&&f&&(c.na=f);y&&(c.l+=y);void 0===u&&(u=c.isRetryable(r));u&&(c.i=z.concat(c.i),c.Jb||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.s},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Nc["Content-Encoding"]="gzip";l.Nc["Content-Type"]="application/binary";l.body=r;l.Pd=2;t()},function(){t()}):t()}}}};
m.xc=function(){ph(this.j,!0);this.flush();ph(this.j,!1)};
function nh(a){qh(a,function(b,c){b=nc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.R&&!d&&(a.R=!1);return d})}
function qh(a,b){if(0!==a.i.length){var c=rc(kh(a),"format");c=lc(c,"auth",a.rb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.i.length;++d){var e=a.i.slice(0,32),f=oh(a.j,e,a.l,a.s,a.Cb,a.da,a.Y);if(!b(c,f)){++a.s;break}a.l=0;a.s=0;a.da=0;a.Y=0;a.i=a.i.slice(e.length)}a.h.enabled&&a.h.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function hh(a,b){this.vb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new bh;Number.isInteger(a)&&this.h.Rb(a);b||(this.locale=document.documentElement.getAttribute("lang"));ih(this,new Zg)}
hh.prototype.Rb=function(a){this.h.Rb(a);return this};
function ih(a,b){og(a.h,Zg,1,b);eg(b,1)||tg(b,1,1);if(!a.vb){b=rh(a);var c=eg(b,5);(null==c||"string"===typeof c)&&c||G(b,5,Pf(a.locale))}a.uach&&(b=rh(a),ng(b,Xg,9)||og(b,Xg,9,a.uach))}
function mh(a,b){hg(sh(a))&&(a=th(a),tg(a,1,b))}
function ph(a,b){hg(sh(a))&&(a=th(a),G(a,2,Ff(b)))}
function sh(a){return ng(a.h,Zg,1)}
function uh(a,b){var c=void 0===c?Yg:c;b(window,c).then(function(d){a.uach=d;d=rh(a);og(d,Xg,9,a.uach);return!0}).catch(function(){return!1})}
function rh(a){a=sh(a);var b=ng(a,jg,11);b||(b=new jg,og(a,jg,11,b));return b}
function th(a){a=rh(a);var b=ng(a,Wg,10);b||(b=new Wg,G(b,2,Ff(!1)),og(a,Wg,10,b));return b}
function oh(a,b,c,d,e,f,g){c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(hg(sh(a))){var h=th(a);G(h,3,If(d))}hg(sh(a))&&(d=th(a),G(d,4,If(f)));hg(sh(a))&&(f=th(a),G(f,5,If(g)));a=a.h.clone();g=Date.now().toString();a=G(a,4,Kf(g));b=pg(a,ah,3,b);e&&(a=new Tg,e=G(a,13,If(e)),a=new Ug,e=og(a,Tg,2,e),a=new $g,e=og(a,Ug,1,e),e=tg(e,2,9),og(b,$g,18,e));c&&G(b,14,Kf(c));return b}
;function vh(){}
vh.prototype.serialize=function(a){var b=[];wh(this,a,b);return b.join("")};
function wh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),wh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),xh(d,c),c.push(":"),wh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":xh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var yh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},zh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function xh(a,b){b.push('"',a.replace(zh,function(c){var d=yh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),yh[c]=d);return d}),'"')}
;function Ah(){}
Ah.prototype.h=null;Ah.prototype.getOptions=function(){var a;(a=this.h)||(a={},Bh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Ch;function Dh(){}
Ya(Dh,Ah);function Eh(a){return(a=Bh(a))?new ActiveXObject(a):new XMLHttpRequest}
function Bh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Ch=new Dh;function Fh(a){yd.call(this);this.headers=new Map;this.S=a||null;this.i=!1;this.R=this.I=null;this.l=this.da="";this.j=this.Y=this.s=this.W=!1;this.m=0;this.B=null;this.Ba="";this.ma=this.na=!1}
Ya(Fh,yd);var Gh=/^https?$/i,Hh=["POST","PUT"],Ih=[];function Jh(a,b,c,d,e,f,g){var h=new Fh;Ih.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Rd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.na=g);h.send(a,c,d,e)}
m=Fh.prototype;m.Rd=function(){this.dispose();kb(Ih,this)};
m.send=function(a,b,c,d){if(this.I)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.I=this.S?Eh(this.S):Eh(Ch);this.R=this.S?this.S.getOptions():Ch.getOptions();this.I.onreadystatechange=Va(this.pd,this);try{this.getStatus(),this.Y=!0,this.I.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();Kh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=B.FormData&&a instanceof B.FormData;!(0<=eb(Hh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.I.setRequestHeader(d,c);this.Ba&&(this.I.responseType=this.Ba);"withCredentials"in this.I&&this.I.withCredentials!==this.na&&(this.I.withCredentials=this.na);try{Lh(this),0<this.m&&(this.ma=Mh(this.I),this.getStatus(),this.ma?(this.I.timeout=this.m,this.I.ontimeout=Va(this.Dd,
this)):this.B=me(this.Dd,this.m,this)),this.getStatus(),this.s=!0,this.I.send(a),this.s=!1}catch(g){this.getStatus(),Kh(this,g)}};
function Mh(a){return Lc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Dd=function(){"undefined"!=typeof La&&this.I&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),zd(this,"timeout"),this.abort(8))};
function Kh(a,b){a.i=!1;a.I&&(a.j=!0,a.I.abort(),a.j=!1);a.l=b;Nh(a);Oh(a)}
function Nh(a){a.W||(a.W=!0,zd(a,"complete"),zd(a,"error"))}
m.abort=function(){this.I&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.I.abort(),this.j=!1,zd(this,"complete"),zd(this,"abort"),Oh(this))};
m.P=function(){this.I&&(this.i&&(this.i=!1,this.j=!0,this.I.abort(),this.j=!1),Oh(this,!0));Fh.Aa.P.call(this)};
m.pd=function(){this.Z()||(this.Y||this.s||this.j?Ph(this):this.ye())};
m.ye=function(){Ph(this)};
function Ph(a){if(a.i&&"undefined"!=typeof La)if(a.R[1]&&4==Qh(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==Qh(a))me(a.pd,0,a);else if(zd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Rh(a))zd(a,"complete"),zd(a,"success");else{try{var b=2<Qh(a)?a.I.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Nh(a)}}finally{Oh(a)}}}
function Oh(a,b){if(a.I){Lh(a);var c=a.I,d=a.R[0]?function(){}:null;
a.I=null;a.R=null;b||zd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Lh(a){a.I&&a.ma&&(a.I.ontimeout=null);a.B&&(B.clearTimeout(a.B),a.B=null)}
m.isActive=function(){return!!this.I};
m.isComplete=function(){return 4==Qh(this)};
function Rh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=cc(1,String(a.da)),!a&&B.self&&B.self.location&&(a=B.self.location.protocol.slice(0,-1)),b=!Gh.test(a?a.toLowerCase():"");c=b}return c}
function Qh(a){return a.I?a.I.readyState:0}
m.getStatus=function(){try{return 2<Qh(this)?this.I.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Sh(){}
Sh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Jh(a.url,function(d){d=d.target;if(Rh(d)){try{var e=d.I?d.I.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Nc,a.timeoutMillis,a.withCredentials)};function Th(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Sh}
x(Th,F);Th.prototype.dd=function(){this.W=!0;return this};function Uh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;F.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Th(a,"0"),a.componentId=b,yc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),b=new gh({logSource:a.logSource,rb:a.rb?a.rb:Qg,sessionIndex:a.sessionIndex,df:a.i,vb:a.j,Jb:!1,dd:a.W,pageId:a.pageId,Wc:a.Wc,network:a.network?a.network:void 0}),yc(a,b),a.s&&ih(b.j,a.s),a.h&&(c=a.h,d=rh(b.j),G(d,7,Pf(c))),a.m&&(b.B=a.m),a.componentId&&
(b.componentId=a.componentId),a.Cb&&(b.Cb=a.Cb),a.l&&((c=a.l)?(b.experimentIds||(b.experimentIds=new Rg),c=c.serialize(),G(b.experimentIds,4,Pf(c))):b.experimentIds&&G(b.experimentIds,4)),a.R&&(c=a.R,b.experimentIds||(b.experimentIds=new Rg),kg(b.experimentIds,2,c,sg)),a.B&&(c=a.B,b.ma=!0,lh(b,c)),a.S&&uh(b.j,a.S),a.network.Rb&&a.network.Rb(a.logSource),a.network.Se&&a.network.Se(b),a=b);this.h=a}
x(Uh,F);
Uh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Dg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new Cg;f=G(f,1,Pf(e.i));for(var g=[],h=0;h<e.h.length;h++)g.push(e.h[h].Ca);f=kg(f,3,g,Of);g=[];h=[];for(var k=w(e.pb.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.l;for(var p=e.zc(l)||[],t=[],r=0;r<p.length;r++){var u=p[r],y=u&&u.h;u=new zg;switch(n){case 3:y=Number(y);Number.isFinite(y)&&mg(u,1,Ag,Kf(y));break;case 2:y=Number(y);
if(null!=y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);mg(u,2,Ag,y)}t.push(u)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new Bg;t=og(r,zg,2,t);r=l;u=[];y=[];for(var z=0;z<e.h.length;z++)y.push(e.h[z].Da);for(z=0;z<y.length;z++){var H=y[z],L=r[z],I=new xg;switch(H){case 3:mg(I,1,yg,Pf(String(L)));break;case 2:H=Number(L);Number.isFinite(H)&&mg(I,2,yg,If(H));break;case 1:mg(I,3,yg,Ff("true"===L))}u.push(I)}pg(t,xg,1,u);g.push(t)}}pg(f,Bg,4,g);c.push(f);
e.clear()}pg(a,Cg,1,c);b=this.h;a instanceof ah?b.log(a):(c=new ah,a=a.serialize(),a=G(c,8,Pf(a)),b.log(a));this.h.flush()}};function Vh(a,b){this.h=b;this.m=void 0;this.ga=new Uh(1828);this.i=new ne(this.ga);this.B=new ue(this.i);this.G=new ve(this.i);this.s=new we(this.i);this.l=new se(this.i);this.j=ye(a);(new re(this.i)).h.Ub("/client_streamz/bg/fic",this.h)}
function Wh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Xh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Yh(a){function b(z,H,L){Promise.resolve().then(function(){var I;null!=(I=c.ra)&&void 0!==I.m&&I.B.record(Wh()-I.m,I.j,I.h);h.resolve({Nd:z,Ve:H,dg:L})})}
var c=this;this.h=!1;var d=a.program;var e=a.ee;if(!1!==a.Ee){var f,g;this.ra=null!=(g=a.ra)?g:new Vh(e,null!=(f=a.cg)?f:"_")}var h=new Xh;this.i=h.promise;if(!B[e]){var k;null!=(k=this.ra)&&te(k.l,k.j,k.h,1,"");var l;null!=(l=this.ra)&&l.i.mb()}else if(!B[e].a){var n;null!=(n=this.ra)&&te(n.l,n.j,n.h,2,"");var p;null!=(p=this.ra)&&p.i.mb()}try{var t=B[e].a,r;null!=(r=this.ra)&&(r.m=Wh());this.j=w(t(d,b,!0,a.og)).next().value;this.Ue=h.promise.then(function(){})}catch(z){var u;
null!=(u=this.ra)&&te(u.l,u.j,u.h,4,z.message);var y;null!=(y=this.ra)&&y.i.mb();throw z;}}
Yh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=Wh(),d;null!=(d=this.ra)&&d.G.h.Ub("/client_streamz/bg/fsc",d.j,d.h);return this.i.then(function(e){var f=e.Nd;return new Promise(function(g){f(function(h){var k;null!=(k=b.ra)&&k.s.record(Wh()-c,k.j,k.h);g(h)},[a.cd,
a.We,a.ff])})})};
Yh.prototype.Ad=function(a){if(this.h)throw Error("Already disposed");var b=Wh(),c;null!=(c=this.ra)&&c.G.h.Ub("/client_streamz/bg/fsc",c.j,c.h);a=this.j([a.cd,a.We,a.ff]);var d;null!=(d=this.ra)&&d.s.record(Wh()-b,d.j,d.h);return a};
Yh.prototype.dispose=function(){var a;null!=(a=this.ra)&&a.i.mb();this.h=!0;this.i.then(function(b){(b=b.Ve)&&b()})};
Yh.prototype.Z=function(){return this.h};var Zh=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var $h="function"===typeof URL;function ai(a){if(a instanceof Jb)a instanceof Jb&&a.constructor===Jb?a=a.h:(Na(a),a="type_error:SafeUrl");else{b:if($h){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function bi(a,b){b=ai(b);void 0!==b&&(a.href=b)}
;var ci={};function di(){}
function ei(a){this.h=a}
x(ei,di);ei.prototype.toString=function(){return this.h};function fi(a){var b="true".toString(),c=[new ei(gi[0].toLowerCase(),ci)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ei)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function hi(){throw Error("unknown trace type");}
;var ii="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function ji(a,b){if(b instanceof Eb)a.href=Fb(b).toString();else{if(-1===ii.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=ai(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function ki(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function li(a,b){a.src=Fb(b);ki(a)}
;var mi=ka([""]),ni=la(["\x00"],["\\0"]),oi=la(["\n"],["\\n"]),pi=la(["\x00"],["\\u0000"]);function qi(a){return-1===a.toString().indexOf("`")}
qi(function(a){return a(mi)})||qi(function(a){return a(ni)})||qi(function(a){return a(oi)})||qi(function(a){return a(pi)});function ri(a){this.pe=a}
function si(a){return new ri(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ti=[si("data"),si("http"),si("https"),si("mailto"),si("ftp"),new ri(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function ui(a){var b=vi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function wi(){var a=[];ui(function(b){a.push(b)});
return a}
var vi={gf:"allow-forms",hf:"allow-modals",jf:"allow-orientation-lock",kf:"allow-pointer-lock",lf:"allow-popups",mf:"allow-popups-to-escape-sandbox",nf:"allow-presentation",pf:"allow-same-origin",qf:"allow-scripts",rf:"allow-top-navigation",sf:"allow-top-navigation-by-user-activation"},xi=db(function(){return wi()});
function yi(){var a=zi(),b={};fb(xi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function zi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ai(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Bi=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var Ei="undefined"!==typeof TextEncoder?new TextEncoder:null,Fi=Ei?function(a){return Ei.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Gi(a){yd.call(this);var b=this;this.s=this.j=0;this.Fa=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(Hi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.s||Ii(this)}
x(Gi,yd);function Ji(){var a=Ki;Gi.h||(Gi.h=new Gi(a));return Gi.h}
Gi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Fa.qa(this.s);delete Gi.h};
Gi.prototype.wa=function(){return this.i};
function Ii(a){a.s=a.Fa.oa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(Hi(a),3):c.yield(Hi(a),3);Ii(a);c.h=0})},3E4)}
function Hi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Fa.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.j];h.l=0;h.G=0;a.m=void 0;a.j&&(a.Fa.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?zd(a,"networkstatus-online"):zd(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.v(3)}})})}
;function Li(){this.data=[];this.h=-1}
Li.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Li.prototype.get=function(a){return!!this.data[a]};
function Mi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Ni(a,b){this.h=a[B.Symbol.iterator]();this.i=b}
Ni.prototype[Symbol.iterator]=function(){return this};
Ni.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Oi(a,b){return new Ni(a,b)}
;function Pi(){this.blockSize=-1}
;function Qi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.G=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Ya(Qi,Pi);Qi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ri(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Qi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Ri(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ri(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ri(this,e);f=0;break}}this.i=f;this.l+=b}};
Qi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Ri(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Si(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ti(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ui(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Si(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function Vi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ui(a,"inverted-hdpi")&&Ti(a,Array.prototype.filter.call(a.classList?a.classList:Si(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Wi(){}
Wi.prototype.next=function(){return Xi};
var Xi={done:!0,value:void 0};function Yi(a){return{value:a,done:!1}}
Wi.prototype.Ha=function(){return this};function Zi(a){if(a instanceof $i||a instanceof aj||a instanceof bj)return a;if("function"==typeof a.next)return new $i(function(){return a});
if("function"==typeof a[Symbol.iterator])return new $i(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ha)return new $i(function(){return a.Ha()});
throw Error("Not an iterator or iterable.");}
function $i(a){this.i=a}
$i.prototype.Ha=function(){return new aj(this.i())};
$i.prototype[Symbol.iterator]=function(){return new bj(this.i())};
$i.prototype.h=function(){return new bj(this.i())};
function aj(a){this.i=a}
x(aj,Wi);aj.prototype.next=function(){return this.i.next()};
aj.prototype[Symbol.iterator]=function(){return new bj(this.i)};
aj.prototype.h=function(){return new bj(this.i)};
function bj(a){$i.call(this,function(){return a});
this.j=a}
x(bj,$i);bj.prototype.next=function(){return this.j.next()};function cj(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof cj)for(c=a.Cc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=cj.prototype;m.Cc=function(){dj(this);return this.h.concat()};
m.has=function(a){return ej(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||fj;dj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function fj(a,b){return a===b}
m.Lb=function(){return 0==this.size};
m.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return ej(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&dj(this),!0):!1};
function dj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];ej(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],ej(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return ej(this.i,a)?this.i[a]:b};
m.set=function(a,b){ej(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Cc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new cj(this)};
m.keys=function(){return Zi(this.Ha(!0)).h()};
m.values=function(){return Zi(this.Ha(!1)).h()};
m.entries=function(){var a=this;return Oi(this.keys(),function(b){return[b,a.get(b)]})};
m.Ha=function(a){dj(this);var b=0,c=this.Xa,d=this,e=new Wi;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Xi;var f=d.h[b++];return Yi(a?f:d.i[f])};
return e};
function ej(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){F.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.s=!!a}
Ya(K,F);m=K.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Eb(a)}return!1};
m.Eb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&kb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Za=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];gj(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Eb(c)}}return 0!=e}return!1};
function gj(a,b,c){Sd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Eb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.P=function(){K.Aa.P.call(this);this.clear();this.j.length=0};function hj(a){this.h=a}
hj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new vh).serialize(b))};
hj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
hj.prototype.remove=function(a){this.h.remove(a)};function ij(a){this.h=a}
Ya(ij,hj);function jj(a){this.data=a}
function kj(a){return void 0===a||a instanceof jj?a:new jj(a)}
ij.prototype.set=function(a,b){ij.Aa.set.call(this,a,kj(b))};
ij.prototype.i=function(a){a=ij.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ij.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function lj(a){this.h=a}
Ya(lj,ij);lj.prototype.set=function(a,b,c){if(b=kj(b)){if(c){if(c<Xa()){lj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}lj.Aa.set.call(this,a,b)};
lj.prototype.i=function(a){var b=lj.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())lj.prototype.remove.call(this,a);else return b}};function mj(){}
;function nj(){}
Ya(nj,mj);nj.prototype[Symbol.iterator]=function(){return Zi(this.Ha(!0)).h()};
nj.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function oj(a){this.h=a}
Ya(oj,nj);m=oj.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Ha=function(a){var b=0,c=this.h,d=new Wi;d.next=function(){if(b>=c.length)return Xi;var e=c.key(b++);if(a)return Yi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Yi(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function pj(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Ya(pj,oj);function qj(a,b){this.i=a;this.h=null;var c;if(c=Lc)c=!(9<=Number(ad));if(c){rj||(rj=new cj);this.h=rj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),rj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Ya(qj,nj);var sj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},rj=null;function tj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return sj[b]})}
m=qj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(tj(a),b);uj(this)};
m.get=function(a){a=this.h.getAttribute(tj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(tj(a));uj(this)};
m.Ha=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Wi;d.next=function(){if(b>=c.length)return Xi;var e=c[b++];if(a)return Yi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Yi(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);uj(this)};
function uj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function vj(a,b){this.i=a;this.h=b+"::"}
Ya(vj,nj);vj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
vj.prototype.get=function(a){return this.i.get(this.h+a)};
vj.prototype.remove=function(a){this.i.remove(this.h+a)};
vj.prototype.Ha=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Wi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Yi(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},wj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Qc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var xj={ob:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},yj={ob:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
M.Te=function(){wj?(M.lb=Uint8Array,M.Ja=Uint16Array,M.Jd=Int32Array,M.assign(M,xj)):(M.lb=Array,M.Ja=Array,M.Jd=Array,M.assign(M,yj))};
M.Te();var zj=!0;try{new Uint8Array(1)}catch(a){zj=!1}
function Aj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Bj={};Bj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Cj={},Dj,Ej=[],Fj=0;256>Fj;Fj++){Dj=Fj;for(var Gj=0;8>Gj;Gj++)Dj=Dj&1?3988292384^Dj>>>1:Dj>>>1;Ej[Fj]=Dj}Cj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Ej[(a^b[d])&255];return a^-1};var Hj={};Hj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ij(a){for(var b=a.length;0<=--b;)a[b]=0}
var Jj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Kj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Lj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Mj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Nj=Array(576);Ij(Nj);var Oj=Array(60);Ij(Oj);var Pj=Array(512);Ij(Pj);var Qj=Array(256);Ij(Qj);var Rj=Array(29);Ij(Rj);var Sj=Array(30);Ij(Sj);function Tj(a,b,c,d,e){this.Bd=a;this.Zd=b;this.Yd=c;this.Ud=d;this.ue=e;this.kd=a&&a.length}
var Uj,Vj,Wj;function Xj(a,b){this.ed=a;this.zb=0;this.Wa=b}
function Yj(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function Zj(a,b,c){a.fa>16-c?(a.la|=b<<a.fa&65535,Yj(a,a.la),a.la=b>>16-a.fa,a.fa+=c-16):(a.la|=b<<a.fa&65535,a.fa+=c)}
function ak(a,b,c){Zj(a,c[2*b],c[2*b+1])}
function bk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function ck(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=bk(d[e]++,e))}
function dk(a){var b;for(b=0;286>b;b++)a.sa[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ha[2*b]=0;a.sa[512]=1;a.Qa=a.Db=0;a.ya=a.matches=0}
function ek(a){8<a.fa?Yj(a,a.la):0<a.fa&&(a.V[a.pending++]=a.la);a.la=0;a.fa=0}
function fk(a,b,c){ek(a);Yj(a,c);Yj(a,~c);M.ob(a.V,a.window,b,c,a.pending);a.pending+=c}
function gk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function hk(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.Oa;){e<a.Oa&&gk(b,a.X[e+1],a.X[e],a.depth)&&e++;if(gk(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function ik(a,b,c){var d=0;if(0!==a.ya){do{var e=a.V[a.Ib+2*d]<<8|a.V[a.Ib+2*d+1];var f=a.V[a.Gc+d];d++;if(0===e)ak(a,f,b);else{var g=Qj[f];ak(a,g+256+1,b);var h=Jj[g];0!==h&&(f-=Rj[g],Zj(a,f,h));e--;g=256>e?Pj[e]:Pj[256+(e>>>7)];ak(a,g,c);h=Kj[g];0!==h&&(e-=Sj[g],Zj(a,e,h))}}while(d<a.ya)}ak(a,256,b)}
function jk(a,b){var c=b.ed,d=b.Wa.Bd,e=b.Wa.kd,f=b.Wa.Ud,g,h=-1;a.Oa=0;a.tb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.Oa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Oa;){var k=a.X[++a.Oa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Qa--;e&&(a.Db-=d[2*k+1])}b.zb=h;for(g=a.Oa>>1;1<=g;g--)hk(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.Oa--],hk(a,c,1),d=a.X[1],a.X[--a.tb]=g,a.X[--a.tb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,hk(a,c,1);while(2<=a.Oa);a.X[--a.tb]=
a.X[1];g=b.ed;k=b.zb;d=b.Wa.Bd;e=b.Wa.kd;f=b.Wa.Zd;var l=b.Wa.Yd,n=b.Wa.ue,p,t=0;for(p=0;15>=p;p++)a.La[p]=0;g[2*a.X[a.tb]+1]=0;for(b=a.tb+1;573>b;b++){var r=a.X[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.La[p]++;var u=0;r>=l&&(u=f[r-l]);var y=g[2*r];a.Qa+=y*(p+u);e&&(a.Db+=y*(d[2*r+1]+u))}}if(0!==t){do{for(p=n-1;0===a.La[p];)p--;a.La[p]--;a.La[p+1]+=2;a.La[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.La[p];0!==r;)d=a.X[--b],d>k||(g[2*d+1]!==p&&(a.Qa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}ck(c,h,a.La)}
function kk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ha[2*l]+=g:0!==l?(l!==e&&a.ha[2*l]++,a.ha[32]++):10>=g?a.ha[34]++:a.ha[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function lk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do ak(a,l,a.ha);while(0!==--g)}else 0!==l?(l!==e&&(ak(a,l,a.ha),g--),ak(a,16,a.ha),Zj(a,g-3,2)):10>=g?(ak(a,17,a.ha),Zj(a,g-3,3)):(ak(a,18,a.ha),Zj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function mk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.sa[2*c])return 0;if(0!==a.sa[18]||0!==a.sa[20]||0!==a.sa[26])return 1;for(c=32;256>c;c++)if(0!==a.sa[2*c])return 1;return 0}
var nk=!1;function ok(a,b,c){a.V[a.Ib+2*a.ya]=b>>>8&255;a.V[a.Ib+2*a.ya+1]=b&255;a.V[a.Gc+a.ya]=c&255;a.ya++;0===b?a.sa[2*c]++:(a.matches++,b--,a.sa[2*(Qj[c]+256+1)]++,a.bb[2*(256>b?Pj[b]:Pj[256+(b>>>7)])]++);return a.ya===a.Mb-1}
;function pk(a,b){a.msg=Hj[b];return b}
function qk(a){for(var b=a.length;0<=--b;)a[b]=0}
function rk(a){var b=a.state,c=b.pending;c>a.K&&(c=a.K);0!==c&&(M.ob(a.output,b.V,b.Pb,c,a.Ab),a.Ab+=c,b.Pb+=c,a.Rc+=c,a.K-=c,b.pending-=c,0===b.pending&&(b.Pb=0))}
function sk(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.H.wc&&(a.H.wc=mk(a));jk(a,a.fc);jk(a,a.ac);kk(a,a.sa,a.fc.zb);kk(a,a.bb,a.ac.zb);jk(a,a.Xc);for(e=18;3<=e&&0===a.ha[2*Mj[e]+1];e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.Db+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Zj(a,b?1:0,3),fk(a,c,d);else if(4===a.strategy||g===f)Zj(a,2+(b?1:0),3),ik(a,Nj,Oj);else{Zj(a,4+(b?1:0),3);c=a.fc.zb+1;d=a.ac.zb+1;e+=1;Zj(a,c-257,5);Zj(a,d-1,5);Zj(a,e-4,4);for(f=0;f<e;f++)Zj(a,a.ha[2*
Mj[f]+1],3);lk(a,a.sa,c-1);lk(a,a.bb,d-1);ik(a,a.sa,a.bb)}dk(a);b&&ek(a);a.va=a.o;rk(a.H)}
function N(a,b){a.V[a.pending++]=b}
function tk(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function uk(a,b){var c=a.nd,d=a.o,e=a.xa,f=a.od,g=a.o>a.ja-262?a.o-(a.ja-262):0,h=a.window,k=a.Ya,l=a.Ia,n=a.o+258,p=h[d+e-1],t=h[d+e];a.xa>=a.jd&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.yb=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function vk(a){var b=a.ja,c;do{var d=a.Hd-a.u-a.o;if(a.o>=b+(b-262)){M.ob(a.window,a.window,b,b,0);a.yb-=b;a.o-=b;a.va-=b;var e=c=a.ec;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.H.ka)break;e=a.H;c=a.window;f=a.o+a.u;var g=e.ka;g>d&&(g=d);0===g?c=0:(e.ka-=g,M.ob(c,e.input,e.hb,g,f),1===e.state.wrap?e.F=Bj(e.F,c,g,f):2===e.state.wrap&&(e.F=Cj(e.F,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.ta)for(d=a.o-a.ta,a.J=a.window[d],
a.J=(a.J<<a.Na^a.window[d+1])&a.Ma;a.ta&&!(a.J=(a.J<<a.Na^a.window[d+3-1])&a.Ma,a.Ia[d&a.Ya]=a.head[a.J],a.head[a.J]=d,d++,a.ta--,3>a.u+a.ta););}while(262>a.u&&0!==a.H.ka)}
function wk(a,b){for(var c;;){if(262>a.u){vk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Na^a.window[a.o+3-1])&a.Ma,c=a.Ia[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ja-262&&(a.M=uk(a,c));if(3<=a.M)if(c=ok(a,a.o-a.yb,a.M-3),a.u-=a.M,a.M<=a.Hc&&3<=a.u){a.M--;do a.o++,a.J=(a.J<<a.Na^a.window[a.o+3-1])&a.Ma,a.Ia[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.M);a.o++}else a.o+=a.M,a.M=0,a.J=a.window[a.o],a.J=(a.J<<a.Na^a.window[a.o+1])&a.Ma;else c=ok(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(sk(a,!1),0===a.H.K))return 1}a.ta=2>a.o?a.o:2;return 4===b?(sk(a,!0),0===a.H.K?3:4):a.ya&&(sk(a,!1),0===a.H.K)?1:2}
function xk(a,b){for(var c,d;;){if(262>a.u){vk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Na^a.window[a.o+3-1])&a.Ma,c=a.Ia[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o);a.xa=a.M;a.rd=a.yb;a.M=2;0!==c&&a.xa<a.Hc&&a.o-c<=a.ja-262&&(a.M=uk(a,c),5>=a.M&&(1===a.strategy||3===a.M&&4096<a.o-a.yb)&&(a.M=2));if(3<=a.xa&&a.M<=a.xa){d=a.o+a.u-3;c=ok(a,a.o-1-a.rd,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.J=(a.J<<a.Na^a.window[a.o+3-1])&a.Ma,a.Ia[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.xa);a.fb=0;a.M=2;a.o++;if(c&&(sk(a,!1),0===a.H.K))return 1}else if(a.fb){if((c=ok(a,0,a.window[a.o-1]))&&sk(a,!1),a.o++,a.u--,0===a.H.K)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(ok(a,0,a.window[a.o-1]),a.fb=0);a.ta=2>a.o?a.o:2;return 4===b?(sk(a,!0),0===a.H.K?3:4):a.ya&&(sk(a,!1),0===a.H.K)?1:2}
function yk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){vk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.M=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.M=258-(e-d);a.M>a.u&&(a.M=a.u)}3<=a.M?(c=ok(a,1,a.M-3),a.u-=a.M,a.o+=a.M,a.M=0):(c=ok(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(sk(a,!1),0===a.H.K))return 1}a.ta=0;return 4===b?(sk(a,!0),0===a.H.K?3:4):
a.ya&&(sk(a,!1),0===a.H.K)?1:2}
function zk(a,b){for(var c;;){if(0===a.u&&(vk(a),0===a.u)){if(0===b)return 1;break}a.M=0;c=ok(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(sk(a,!1),0===a.H.K))return 1}a.ta=0;return 4===b?(sk(a,!0),0===a.H.K?3:4):a.ya&&(sk(a,!1),0===a.H.K)?1:2}
function Ak(a,b,c,d,e){this.ge=a;this.te=b;this.xe=c;this.se=d;this.be=e}
var Bk;Bk=[new Ak(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){vk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,sk(a,!1),0===a.H.K)return 1;if(a.o-a.va>=a.ja-262&&(sk(a,!1),0===a.H.K))return 1}a.ta=0;if(4===b)return sk(a,!0),0===a.H.K?3:4;a.o>a.va&&sk(a,!1);return 1}),
new Ak(4,4,8,4,wk),new Ak(4,5,16,8,wk),new Ak(4,6,32,32,wk),new Ak(4,4,16,16,xk),new Ak(8,16,32,32,xk),new Ak(8,16,128,128,xk),new Ak(8,32,128,256,xk),new Ak(32,128,258,1024,xk),new Ak(32,258,258,4096,xk)];
function Ck(){this.H=null;this.status=0;this.V=null;this.wrap=this.pending=this.Pb=this.za=0;this.D=null;this.Ea=0;this.method=8;this.wb=-1;this.Ya=this.Tc=this.ja=0;this.window=null;this.Hd=0;this.head=this.Ia=null;this.od=this.jd=this.strategy=this.level=this.Hc=this.nd=this.xa=this.u=this.yb=this.o=this.fb=this.rd=this.M=this.va=this.Na=this.Ma=this.Dc=this.ec=this.J=0;this.sa=new M.Ja(1146);this.bb=new M.Ja(122);this.ha=new M.Ja(78);qk(this.sa);qk(this.bb);qk(this.ha);this.Xc=this.ac=this.fc=
null;this.La=new M.Ja(16);this.X=new M.Ja(573);qk(this.X);this.tb=this.Oa=0;this.depth=new M.Ja(573);qk(this.depth);this.fa=this.la=this.ta=this.matches=this.Db=this.Qa=this.Ib=this.ya=this.Mb=this.Gc=0}
function Dk(a,b){if(!a||!a.state||5<b||0>b)return a?pk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ka||666===c.status&&4!==b)return pk(a,0===a.K?-5:-2);c.H=a;var d=c.wb;c.wb=b;if(42===c.status)if(2===c.wrap)a.F=0,N(c,31),N(c,139),N(c,8),c.D?(N(c,(c.D.text?1:0)+(c.D.Sa?2:0)+(c.D.extra?4:0)+(c.D.name?8:0)+(c.D.comment?16:0)),N(c,c.D.time&255),N(c,c.D.time>>8&255),N(c,c.D.time>>16&255),N(c,c.D.time>>24&255),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,c.D.os&255),c.D.extra&&c.D.extra.length&&
(N(c,c.D.extra.length&255),N(c,c.D.extra.length>>8&255)),c.D.Sa&&(a.F=Cj(a.F,c.V,c.pending,0)),c.Ea=0,c.status=69):(N(c,0),N(c,0),N(c,0),N(c,0),N(c,0),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,3),c.status=113);else{var e=8+(c.Tc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;tk(c,e+(31-e%31));0!==c.o&&(tk(c,a.F>>>16),tk(c,a.F&65535));a.F=1}if(69===c.status)if(c.D.extra){for(e=c.pending;c.Ea<(c.D.extra.length&65535)&&(c.pending!==c.za||
(c.D.Sa&&c.pending>e&&(a.F=Cj(a.F,c.V,c.pending-e,e)),rk(a),e=c.pending,c.pending!==c.za));)N(c,c.D.extra[c.Ea]&255),c.Ea++;c.D.Sa&&c.pending>e&&(a.F=Cj(a.F,c.V,c.pending-e,e));c.Ea===c.D.extra.length&&(c.Ea=0,c.status=73)}else c.status=73;if(73===c.status)if(c.D.name){e=c.pending;do{if(c.pending===c.za&&(c.D.Sa&&c.pending>e&&(a.F=Cj(a.F,c.V,c.pending-e,e)),rk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ea<c.D.name.length?c.D.name.charCodeAt(c.Ea++)&255:0;N(c,f)}while(0!==f);c.D.Sa&&c.pending>
e&&(a.F=Cj(a.F,c.V,c.pending-e,e));0===f&&(c.Ea=0,c.status=91)}else c.status=91;if(91===c.status)if(c.D.comment){e=c.pending;do{if(c.pending===c.za&&(c.D.Sa&&c.pending>e&&(a.F=Cj(a.F,c.V,c.pending-e,e)),rk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ea<c.D.comment.length?c.D.comment.charCodeAt(c.Ea++)&255:0;N(c,f)}while(0!==f);c.D.Sa&&c.pending>e&&(a.F=Cj(a.F,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.D.Sa?(c.pending+2>c.za&&rk(a),c.pending+2<=c.za&&(N(c,a.F&
255),N(c,a.F>>8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(rk(a),0===a.K)return c.wb=-1,0}else if(0===a.ka&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return pk(a,-5);if(666===c.status&&0!==a.ka)return pk(a,-5);if(0!==a.ka||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?zk(c,b):3===c.strategy?yk(c,b):Bk[c.level].be(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.K&&(c.wb=-1),0;if(2===d&&(1===b?(Zj(c,2,3),ak(c,256,Nj),16===c.fa?(Yj(c,c.la),c.la=0,c.fa=0):8<=c.fa&&
(c.V[c.pending++]=c.la&255,c.la>>=8,c.fa-=8)):5!==b&&(Zj(c,0,3),fk(c,0,0),3===b&&(qk(c.head),0===c.u&&(c.o=0,c.va=0,c.ta=0))),rk(a),0===a.K))return c.wb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(N(c,a.F&255),N(c,a.F>>8&255),N(c,a.F>>16&255),N(c,a.F>>24&255),N(c,a.kb&255),N(c,a.kb>>8&255),N(c,a.kb>>16&255),N(c,a.kb>>24&255)):(tk(c,a.F>>>16),tk(c,a.F&65535));rk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Ek={};Ek=function(){this.input=null;this.kb=this.ka=this.hb=0;this.output=null;this.Rc=this.K=this.Ab=0;this.msg="";this.state=null;this.wc=2;this.F=0};var Fk=Object.prototype.toString;
function Gk(a){if(!(this instanceof Gk))return new Gk(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.H=new Ek;this.H.K=0;var b=this.H;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=pk(b,-2);else{8===e&&(e=9);var k=new Ck;b.state=k;k.H=b;k.wrap=h;k.D=null;k.Tc=e;k.ja=1<<k.Tc;k.Ya=k.ja-1;k.Dc=f+7;k.ec=1<<k.Dc;k.Ma=k.ec-1;k.Na=~~((k.Dc+3-1)/3);k.window=new M.lb(2*k.ja);k.head=new M.Ja(k.ec);k.Ia=new M.Ja(k.ja);k.Mb=1<<f+6;k.za=4*k.Mb;k.V=new M.lb(k.za);k.Ib=1*k.Mb;k.Gc=3*k.Mb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Rc=0;b.wc=2;c=b.state;c.pending=0;c.Pb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.wb=0;if(!nk){d=Array(16);for(f=g=0;28>f;f++)for(Rj[f]=g,e=0;e<1<<Jj[f];e++)Qj[g++]=f;Qj[g-1]=f;for(f=g=0;16>f;f++)for(Sj[f]=g,e=0;e<1<<Kj[f];e++)Pj[g++]=f;for(g>>=7;30>f;f++)for(Sj[f]=g<<7,e=0;e<1<<Kj[f]-7;e++)Pj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Nj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Nj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Nj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Nj[2*e+1]=8,e++,d[8]++;ck(Nj,287,d);for(e=0;30>e;e++)Oj[2*e+1]=5,Oj[2*e]=bk(e,5);Uj=new Tj(Nj,Jj,257,286,15);Vj=new Tj(Oj,
Kj,0,30,15);Wj=new Tj([],Lj,0,19,7);nk=!0}c.fc=new Xj(c.sa,Uj);c.ac=new Xj(c.bb,Vj);c.Xc=new Xj(c.ha,Wj);c.la=0;c.fa=0;dk(c);c=0}else c=pk(b,-2);0===c&&(b=b.state,b.Hd=2*b.ja,qk(b.head),b.Hc=Bk[b.level].te,b.jd=Bk[b.level].ge,b.od=Bk[b.level].xe,b.nd=Bk[b.level].se,b.o=0,b.va=0,b.u=0,b.ta=0,b.M=b.xa=2,b.fb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(Hj[b]);a.header&&(b=this.H)&&b.state&&2===b.state.wrap&&(b.state.D=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=Aj(a.dictionary):
"[object ArrayBuffer]"===Fk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.H;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=Bj(a.F,f,g,0));l.wrap=0;g>=l.ja&&(0===b&&(qk(l.head),l.o=0,l.va=0,l.ta=0),c=new M.lb(l.ja),M.ob(c,f,g-l.ja,l.ja,0),f=c,g=l.ja);c=a.ka;d=a.hb;e=a.input;a.ka=g;a.hb=0;a.input=f;for(vk(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.Na^l.window[f+3-1])&l.Ma,l.Ia[f&l.Ya]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;vk(l)}l.o+=l.u;l.va=l.o;l.ta=l.u;l.u=0;l.M=l.xa=2;l.fb=0;a.hb=d;a.input=e;a.ka=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Hj[b]);this.Lf=!0}}
Gk.prototype.push=function(a,b){var c=this.H,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Aj(a):"[object ArrayBuffer]"===Fk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.ka=c.input.length;do{0===c.K&&(c.output=new M.lb(d),c.Ab=0,c.K=d);a=Dk(c,e);if(1!==a&&0!==a)return Hk(this,a),this.ended=!0,!1;if(0===c.K||0===c.ka&&(4===e||2===e))if("string"===this.options.to){var f=M.Qc(c.output,c.Ab);b=f;f=f.length;if(65537>f&&(b.subarray&&zj||!b.subarray))b=
String.fromCharCode.apply(null,M.Qc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Qc(c.output,c.Ab),this.chunks.push(b)}while((0<c.ka||0===c.K)&&1!==a);if(4===e)return(c=this.H)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=pk(c,-2):(c.state=null,a=113===d?pk(c,-3):0)):a=-2,Hk(this,a),this.ended=!0,0===a;2===e&&(Hk(this,0),c.K=0);return!0};
function Hk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):M.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.H.msg}
function Ik(a,b){b=b||{};b.gzip=!0;b=new Gk(b);b.push(a,!0);if(b.err)throw b.msg||Hj[b.err];return b.result}
;function Jk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Hb(a):b=null;return b}
;function Kk(a){return Hb(null===a?"null":void 0===a?"undefined":a)}
;function Lk(a){this.name=a}
;var Mk=new Lk("rawColdConfigGroup");var Nk=new Lk("rawHotConfigGroup");function Ok(a){this.A=Uf(a)}
x(Ok,ug);var Pk=new Lk("continuationCommand");var Qk=new Lk("webCommandMetadata");var Rk=new Lk("signalServiceEndpoint");var Sk={xf:"EMBEDDED_PLAYER_MODE_UNKNOWN",uf:"EMBEDDED_PLAYER_MODE_DEFAULT",wf:"EMBEDDED_PLAYER_MODE_PFP",vf:"EMBEDDED_PLAYER_MODE_PFL"};var Tk=new Lk("feedbackEndpoint");function Uk(a){this.A=Uf(a)}
x(Uk,ug);var Vk=new Lk("webPlayerShareEntityServiceEndpoint");var Wk=new Lk("playlistEditEndpoint");var Xk=new Lk("modifyChannelNotificationPreferenceEndpoint");var Yk=new Lk("unsubscribeEndpoint");var Zk=new Lk("subscribeEndpoint");function $k(){var a=al;D("yt.ads.biscotti.getId_")||C("yt.ads.biscotti.getId_",a)}
function bl(a){C("yt.ads.biscotti.lastId_",a)}
;function cl(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var dl=B.window,el,fl,gl=(null==dl?void 0:null==(el=dl.yt)?void 0:el.config_)||(null==dl?void 0:null==(fl=dl.ytcfg)?void 0:fl.data_)||{};C("yt.config_",gl);function hl(){cl(gl,arguments)}
function P(a,b){return a in gl?gl[a]:b}
function il(a){var b=gl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var jl=[];function kl(a){jl.forEach(function(b){return b(a)})}
function ll(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ml(b)}}:a}
function ml(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),hl("ERRORS",b));kl(a)}
function nl(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),hl("ERRORS",f))}
;var ol=/^[\w.]*$/,pl={q:!0,search_query:!0};function ql(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=rl(f[0]||""),h=rl(f[1]||"");g in c?Array.isArray(c[g])?lb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(ql);k.args=[{key:l,value:f[1],query:a,method:sl==n?"unchanged":n}];pl.hasOwnProperty(l)||nl(k)}}return c}
var sl=String(ql);function tl(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ul(a){"?"==a.charAt(0)&&(a=a.substr(1));return ql(a,"&")}
function vl(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ul(1<a.length?a[1]:a[0])):{}}
function wl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ul(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return mc(a,e)+d}
function xl(a){if(!b)var b=window.location.href;var c=cc(1,a),d=dc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)==d&&(Number(cc(4,b))||null)==(Number(cc(4,a))||null):!0;return a}
function rl(a){return a&&a.match(ol)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function yl(a){var b=zl;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Bi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(V){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Zh:g;try{var h=g.history.length}catch(V){h=0}e.u_his=h;var k;e.u_h=null==(k=Zh.screen)?void 0:k.height;var l;e.u_w=null==(l=Zh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Zh.screen)?void 0:n.availHeight;var p;e.u_aw=null==
(p=Zh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Zh.screen)?void 0:t.colorDepth}catch(V){}h=b.h;try{var r=h.screenX;var u=h.screenY}catch(V){}try{var y=h.outerWidth;var z=h.outerHeight}catch(V){}try{var H=h.innerWidth;var L=h.innerHeight}catch(V){}try{var I=h.screenLeft;var da=h.screenTop}catch(V){}try{H=h.innerWidth,L=h.innerHeight}catch(V){}try{var T=h.screen.availWidth;var O=h.screen.availTop}catch(V){}r=[I,da,r,u,T,O,y,z,H,L];try{var ba=(b.h.top||window).document,J="CSS1Compat"==ba.compatMode?
ba.documentElement:ba.body;var ca=(new Fd(J.clientWidth,J.clientHeight)).round()}catch(V){ca=new Fd(-12245933,-12245933)}ba=ca;ca={};var ha=void 0===ha?B:ha;J=new Li;"SVGElement"in ha&&"createElementNS"in ha.document&&J.set(0);u=yi();u["allow-top-navigation-by-user-activation"]&&J.set(1);u["allow-popups-to-escape-sandbox"]&&J.set(2);ha.crypto&&ha.crypto.subtle&&J.set(3);"TextDecoder"in ha&&"TextEncoder"in ha&&J.set(4);ha=Mi(J);ca.bc=ha;ca.bih=ba.height;ca.biw=ba.width;ca.brdim=r.join();b=b.i;b=(ca.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ca.wgl=!!Zh.WebGLRenderingContext,ca);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var zl=new function(){var a=window.document;this.h=window;this.i=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return tl(yl(a))});Xa();navigator.userAgent.indexOf(" (CrKey ");function R(a){a=Al(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Bl(a,b){a=Al(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Al(a){return P("EXPERIMENT_FLAGS",{})[a]}
function Cl(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Dl="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function El(){if(!Dl)return null;var a=Dl();return"open"in a?a:null}
function Fl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Gl(a,b){"function"===typeof a&&(a=ll(a));return window.setTimeout(a,b)}
;var Hl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(Hl),["client_dev_set_cookie"]);var Il={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Jl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(Hl)),Kl=!1;
function Ll(a,b){b=void 0===b?{}:b;var c=xl(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in Il){var f=P(Il[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&dc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===P("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&P("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==P("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&P("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in
b&&delete b["X-Goog-Visitor-Id"];if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&dc(a)||(b["X-YouTube-Ad-Signals"]=tl(yl()));return b}
function Ml(a){var b=window.location.search,c=dc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&xl(a)&&(c=document.location.hostname);var d=bc(cc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ul(b),f={};fb(Jl,function(g){e[g]&&(f[g]=e[g])});
return wl(a,f||{},!1)}
function Nl(a,b){var c=b.format||"JSON";a=Ol(a,b);var d=Pl(a,b),e=!1,f=Ql(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Fl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Rl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||B;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Gl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},d)}return f}
function Ol(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=wl(a,b||{},!0);return a}
function Pl(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ul(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):kc(e));f=e||f&&!pb(f);!Kl&&f&&"POST"!=b.method&&(Kl=!0,ml(Error("AJAX request with postData should use POST")));return e}
function Rl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,nl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Sl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Tl(g)})}d&&Ul(e);
return e}
function Ul(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else Ul(a[b])}}
function Sl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Tl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Vl(a,b){b.method="POST";b.postParams||(b.postParams={});return Nl(a,b)}
function Ql(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ll(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=El();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Ml(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ll(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Wl=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Yl={Ua:[],Ra:[{callback:Xl,weight:500}]};function Xl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Zl(){this.Ra=[];this.Ua=[]}
var $l;function am(){if(!$l){var a=$l=new Zl;a.Ua.length=0;a.Ra.length=0;Yl.Ua&&a.Ua.push.apply(a.Ua,Yl.Ua);Yl.Ra&&a.Ra.push.apply(a.Ra,Yl.Ra)}return $l}
;var bm=new K;function cm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=dm(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=dm(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=dm(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function dm(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function em(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=fm(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=cm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?fm(f+".ve",g,h,k):0;d+=f;d+=fm(e,a[e],b,c);if(500<d)break}}else c[b]=gm(a),d+=c[b].length;else c[b]=gm(a),d+=c[b].length;return d}
function fm(a,b,c,d){c+="."+a;a=gm(b);d[c]=a;return c.length+a.length}
function gm(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function hm(){this.Xe=!0}
function im(){hm.h||(hm.h=new hm);return hm.h}
function jm(a,b){a={};var c=Qg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in gl||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in gl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return a}
;var km={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function lm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function mm(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function nm(a,b,c,d,e){Mg.set(""+a,b,{hc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function om(a){return Mg.get(""+a,void 0)}
function pm(a,b,c){Mg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function qm(){if(!Mg.isEnabled())return!1;if(!Mg.Lb())return!0;Mg.set("TESTCOOKIESENABLED","1",{hc:60});if("1"!==Mg.get("TESTCOOKIESENABLED"))return!1;Mg.remove("TESTCOOKIESENABLED");return!0}
;var rm=D("ytglobal.prefsUserPrefsPrefs_")||{};C("ytglobal.prefsUserPrefsPrefs_",rm);function sm(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=om(this.h);a&&this.parse(a)}
var tm;function um(){tm||(tm=new sm);return tm}
m=sm.prototype;m.get=function(a,b){wm(a);xm(a);a=void 0!==rm[a]?rm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){wm(a);xm(a);if(null==b)throw Error("ExpectedNotNull");rm[a]=b.toString()};
function ym(a){return!!((zm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){wm(a);xm(a);delete rm[a]};
m.clear=function(){for(var a in rm)delete rm[a]};
function xm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function wm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function zm(a){a=void 0!==rm[a]?rm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(rm[d]=c.toString())}};var Am={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Bm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Cm(){var a=B.navigator;return a?a.connection:void 0}
function Dm(){var a=Cm();if(a){var b=Am[a.type||"unknown"]||"CONN_UNKNOWN";a=Am[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Em(){var a=Cm();if(null!=a&&a.effectiveType)return Bm.hasOwnProperty(a.effectiveType)?Bm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function S(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
x(S,Error);function Fm(){try{return Gm(),!0}catch(a){return!1}}
function Gm(a){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new S("Datasync ID not set",void 0===a?"unknown":a);}
;function Hm(){}
function Im(a,b){return Ki.ab(a,0,b)}
Hm.prototype.oa=function(a,b){return this.ab(a,1,b)};
Hm.prototype.Fb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Jm=Bl("web_emulated_idle_callback_delay",300),Km=1E3/60-3,Lm=[8,5,4,3,2,1,0];
function Mm(a){a=void 0===a?{}:a;F.call(this);this.i=[];this.j={};this.Y=this.h=0;this.W=this.m=!1;this.R=[];this.S=this.da=!1;for(var b=w(Lm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.uc=a.timeout||1;this.B=Km;this.s=0;this.ma=this.ze.bind(this);this.sc=this.af.bind(this);this.Ba=this.Md.bind(this);this.Ka=this.he.bind(this);this.nb=this.Ce.bind(this);this.na=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.ea=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ma)}
x(Mm,F);m=Mm.prototype;m.Fb=function(a){var b=Xa();Nm(this,a);a=Xa()-b;this.m||(this.B-=a)};
m.ab=function(a,b,c){++this.Y;if(10===b)return this.Fb(a),this.Y;var d=this.Y;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.m||(0!==this.h&&Om(this)!==this.s&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function Pm(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Qm(a){return!a.isHidden()&&a.ea}
function Om(a){if(a.i[8].length){if(a.S)return 4;if(Qm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Qm(a)?3:2:1;return 0}
m.Nb=function(a){var b=D("yt.logging.errors.log");b&&b(a)};
function Nm(a,b){try{b()}catch(c){a.Nb(c)}}
function Rm(a){for(var b=w(Lm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.he=function(a){var b=void 0;a&&(b=a.timeRemaining());this.da=!0;Sm(this,b);this.da=!1};
m.af=function(){Sm(this)};
m.Md=function(){Tm(this)};
m.Ce=function(a){this.S=!0;var b=Om(this);4===b&&b!==this.s&&(this.stop(),this.start());Sm(this,void 0,a);this.S=!1};
m.ze=function(){this.isHidden()||Tm(this);this.h&&(this.stop(),this.start())};
function Tm(a){a.stop();a.m=!0;for(var b=Xa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Nm(a,e)}Um(a);a.m=!1;Rm(a)&&a.start();b=Xa()-b;a.B-=b}
function Um(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Sm(a,b,c){a.S&&4===a.s&&a.h||a.stop();a.m=!0;b=Xa()+(b||a.B);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Nb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Nm(a,f);d=a.da?0:1;d=a.l>d?a.l:d;if(!(Xa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Nm(a,c)}while(c&&Xa()<b)}a.m=!1;Um(a);a.B=Km;Rm(a)&&a.start()}
m.start=function(){this.W=!1;if(0===this.h)switch(this.s=Om(this),this.s){case 1:var a=this.Ka;this.h=this.na?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Jm);break;case 2:this.h=window.setTimeout(this.sc,this.uc);break;case 3:this.h=window.requestAnimationFrame(this.nb);break;case 4:this.h=window.setTimeout(this.Ba,0)}};
m.pause=function(){this.stop();this.W=!0};
m.stop=function(){if(this.h){switch(this.s){case 1:var a=this.h;this.na?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.P=function(){Pm(this);this.stop();this.ea&&document.removeEventListener("visibilitychange",this.ma);F.prototype.P.call(this)};var Vm=D("yt.scheduler.instance.timerIdMap_")||{},Wm=Bl("kevlar_tuner_scheduler_soft_state_timer_ms",800),Xm=0,Ym=0;function Zm(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new Mm(P("scheduler")||{}),C("ytglobal.schedulerInstanceInstance_",a);return a}
function $m(){an();var a=D("ytglobal.schedulerInstanceInstance_");a&&(wc(a),C("ytglobal.schedulerInstanceInstance_",null))}
function an(){Pm(Zm());for(var a in Vm)Vm.hasOwnProperty(a)&&delete Vm[Number(a)]}
function bn(a,b,c){if(!c)return c=void 0===c,-Zm().ab(a,b,c);var d=window.setTimeout(function(){var e=Zm().ab(a,b);Vm[d]=e},c);
return d}
function cn(a){Zm().Fb(a)}
function dn(a){var b=Zm();if(0>a)b.qa(-a);else{var c=Vm[a];c?(b.qa(c),delete Vm[a]):window.clearTimeout(a)}}
function en(){fn()}
function fn(){window.clearTimeout(Xm);Zm().start()}
function gn(){Zm().pause();window.clearTimeout(Xm);Xm=window.setTimeout(en,Wm)}
function jn(){window.clearTimeout(Ym);Ym=window.setTimeout(function(){kn(0)},Wm)}
function kn(a){jn();var b=Zm();b.l=a;b.start()}
function ln(a){jn();var b=Zm();b.l>a&&(b.l=a,b.start())}
function mn(){window.clearTimeout(Ym);var a=Zm();a.l=0;a.start()}
function nn(){D("yt.scheduler.initialized")||(C("yt.scheduler.instance.dispose",$m),C("yt.scheduler.instance.addJob",bn),C("yt.scheduler.instance.addImmediateJob",cn),C("yt.scheduler.instance.cancelJob",dn),C("yt.scheduler.instance.cancelAllJobs",an),C("yt.scheduler.instance.start",fn),C("yt.scheduler.instance.pause",gn),C("yt.scheduler.instance.setPriorityThreshold",kn),C("yt.scheduler.instance.enablePriorityThreshold",ln),C("yt.scheduler.instance.clearPriorityThreshold",mn),C("yt.scheduler.initialized",
!0))}
;function on(){Hm.apply(this,arguments)}
x(on,Hm);function pn(){on.h||(on.h=new on);return on.h}
on.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Gl(a,c||0)};
on.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
on.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
on.prototype.pause=function(){var a=D("yt.scheduler.instance.pause");a&&a()};
var Ki=pn();R("web_scheduler_auto_init")&&nn();function qn(a){var b=new pj;(b=b.isAvailable()?a?new vj(b,a):b:null)||(a=new qj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new lj(a):null;this.i=document.domain||window.location.hostname}
qn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new vh).serialize(b))}catch(f){return}else e=escape(b);nm(a,e,c,this.i)};
qn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=om(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
qn.prototype.remove=function(a){this.h&&this.h.remove(a);pm(a,"/",this.i)};var rn=function(){var a;return function(){a||(a=new qn("ytidb"));return a}}();
function sn(){var a;return null==(a=rn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var tn=[],un,vn=!1;function wn(){var a={};for(un=new xn(void 0===a.handleError?yn:a.handleError,void 0===a.logEvent?zn:a.logEvent);0<tn.length;)switch(a=tn.shift(),a.type){case "ERROR":un.Nb(a.payload);break;case "EVENT":un.logEvent(a.eventType,a.payload)}}
function An(a){vn||(un?un.Nb(a):(tn.push({type:"ERROR",payload:a}),10<tn.length&&tn.shift()))}
function Bn(a,b){vn||(un?un.logEvent(a,b):(tn.push({type:"EVENT",eventType:a,payload:b}),10<tn.length&&tn.shift()))}
;function Cn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Dn(a){return a.substr(0,a.indexOf(":"))||a}
;var En=Be||Ce;function Fn(a){var b=Ob();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Gn={},Hn=(Gn.AUTH_INVALID="No user identifier specified.",Gn.EXPLICIT_ABORT="Transaction was explicitly aborted.",Gn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Gn.MISSING_INDEX="Index not created.",Gn.MISSING_OBJECT_STORES="Object stores not created.",Gn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Gn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Gn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Gn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Gn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Gn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Gn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Gn),In={},Jn=(In.AUTH_INVALID="ERROR",In.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",In.EXPLICIT_ABORT="IGNORED",In.IDB_NOT_SUPPORTED="ERROR",In.MISSING_INDEX=
"WARNING",In.MISSING_OBJECT_STORES="ERROR",In.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",In.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",In.QUOTA_EXCEEDED="WARNING",In.QUOTA_MAYBE_EXCEEDED="WARNING",In.UNKNOWN_ABORT="WARNING",In.INCOMPATIBLE_DB_VERSION="WARNING",In),Kn={},Ln=(Kn.AUTH_INVALID=!1,Kn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Kn.EXPLICIT_ABORT=!1,Kn.IDB_NOT_SUPPORTED=!1,Kn.MISSING_INDEX=!1,Kn.MISSING_OBJECT_STORES=!1,Kn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Kn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Kn.QUOTA_EXCEEDED=!1,Kn.QUOTA_MAYBE_EXCEEDED=!0,Kn.UNKNOWN_ABORT=!0,Kn.INCOMPATIBLE_DB_VERSION=!1,Kn);function Mn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Hn[a]:c;d=void 0===d?Jn[a]:d;e=void 0===e?Ln[a]:e;S.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Mn.prototype)}
x(Mn,S);function Nn(a,b){Mn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Hn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Nn.prototype)}
x(Nn,Mn);function On(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,On.prototype)}
x(On,Error);var Pn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Qn(a,b,c,d){b=Dn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Mn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Mn("QUOTA_EXCEEDED",a);if(De&&"UnknownError"===e.name)return new Mn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof On)return new Mn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Pn.some(function(f){return e.message.includes(f)}))return new Mn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Mn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",qd:e.name})];e.level="WARNING";return e}
function Rn(a,b,c){var d=sn();return new Mn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Sn(a){if(!a)throw Error();throw a;}
function Tn(a){return a}
function Un(a){this.h=a}
function Vn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Vn.all=function(a){return new Vn(new Un(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ub:0};f.ub<a.length;f={ub:f.ub},++f.ub)Vn.resolve(a[f.ub]).then(function(g){return function(h){d[g.ub]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Vn.resolve=function(a){return new Vn(new Un(function(b,c){a instanceof Vn?a.then(b,c):b(a)}))};
Vn.reject=function(a){return new Vn(new Un(function(b,c){c(a)}))};
Vn.prototype.then=function(a,b){var c=this,d=null!=a?a:Tn,e=null!=b?b:Sn;return new Vn(new Un(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Wn(c,c,d,f,g)}),c.i.push(function(){Xn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Wn(c,c,d,f,g):"REJECTED"===c.state.status&&Xn(c,c,e,f,g)}))};
Vn.prototype.catch=function(a){return this.then(void 0,a)};
function Wn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Vn?Yn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Vn?Yn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Yn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Vn?Yn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Zn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function $n(a){return new Promise(function(b,c){Zn(a,b,c)})}
function ao(a){return new Vn(new Un(function(b,c){Zn(a,b,c)}))}
;function bo(a,b){return new Vn(new Un(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var co=window,U=co.ytcsi&&co.ytcsi.now?co.ytcsi.now:co.performance&&co.performance.timing&&co.performance.now&&co.performance.timing.navigationStart?function(){return co.performance.timing.navigationStart+co.performance.now()}:function(){return(new Date).getTime()};function eo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
m=eo.prototype;m.add=function(a,b,c){return fo(this,[a],{mode:"readwrite",ia:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return fo(this,[a],{mode:"readwrite",ia:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return fo(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).count(b)})};
function go(a,b,c){a=a.h.createObjectStore(b,c);return new ho(a)}
m.delete=function(a,b){return fo(this,[a],{mode:"readwrite",ia:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return fo(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).get(b)})};
function io(a,b,c){return fo(a,[b],{mode:"readwrite",ia:!0},function(d){d=d.objectStore(b);return ao(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function fo(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,u,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ia:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ia?3:1;g=0;case 2:if(h){z.v(4);break}g++;k=Math.round(U());za(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var L=new jo(l);L=ko(L,d);return H.call(z,L,7);case 7:return n=z.i,p=Math.round(U()),lo(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Aa(z);r=Math.round(U());u=Qn(t,
a.h.name,b.join(),a.h.version);if((y=u instanceof Mn&&!u.h)||g>=f)lo(a,k,r,g,u,b.join(),e),h=u;z.v(2);break;case 4:return z.return(Promise.reject(h))}})}
function lo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Mn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Bn("QUOTA_EXCEEDED",{dbName:Dn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Mn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Bn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),mo(a,!1,d,f,b,g.tag),An(e)):mo(a,!0,d,f,b,g.tag)}
function mo(a,b,c,d,e,f){Bn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function ho(a){this.h=a}
m=ho.prototype;m.add=function(a,b){return ao(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return ao(this.h.clear()).then(function(){})};
function no(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return ao(this.h.count(a))};
function oo(a,b){return po(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?oo(this,a):ao(this.h.delete(a))};
m.get=function(a){return ao(this.h.get(a))};
m.index=function(a){try{return new qo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new On(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function po(a,b,c){a=a.h.openCursor(b.query,b.direction);return ro(a).then(function(d){return bo(d,c)})}
function jo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Mn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ko(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
jo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Mn("EXPLICIT_ABORT");};
jo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new ho(a),this.i.set(a,b));return b};
function qo(a){this.h=a}
m=qo.prototype;m.count=function(a){return ao(this.h.count(a))};
m.delete=function(a){return so(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return ao(this.h.get(a))};
m.getKey=function(a){return ao(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function so(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ro(a).then(function(d){return bo(d,c)})}
function to(a,b){this.request=a;this.cursor=b}
function ro(a){return ao(a).then(function(b){return b?new to(a,b):null})}
m=to.prototype;m.advance=function(a){this.cursor.advance(a);return ro(this.request)};
m.continue=function(a){this.cursor.continue(a);return ro(this.request)};
m.delete=function(){return ao(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return ao(this.cursor.update(a))};function uo(a,b,c){return new Promise(function(d,e){function f(){t||(t=new eo(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Od,k=c.blocking,l=c.Ye,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&Bn("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:Dn(a)});var u=f(),y=new jo(g.transaction);
n&&n(u,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){Bn("IDB_UNEXPECTEDLY_CLOSED",{dbName:Dn(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function vo(a,b,c){c=void 0===c?{}:c;return uo(a,b,c)}
function wo(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Od)&&c.addEventListener("blocked",function(){e()}),g.yield($n(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Aa(g),Qn(f,a,"",-1);})}
;function xo(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
xo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return vo(a,b,c)};
xo.prototype.delete=function(a){a=void 0===a?{}:a;return wo(this.name,a)};
function yo(a,b){return new Mn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function zo(a,b){if(!b)throw Rn("openWithToken",Dn(a.name));return a.open()}
xo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,u;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",za(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,H=[],L=w(Object.keys(z.Bb)),I=L.next();!I.done;I=L.next()){I=I.value;var da=z.Bb[I],T=void 0===da.Fe?Number.MAX_VALUE:da.Fe;!(h.h.version>=da.Gb)||h.h.version>=T||h.h.objectStoreNames.contains(I)||H.push(I)}k=H;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Bb);n=h.objectStoreNames();
if(c.m<Bl("ytidb_reopen_db_retries",0))return c.m++,h.close(),An(new Mn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<Bl("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return An(new Mn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Nn(n,l);case 5:return y.return(h);case 2:p=Aa(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,yo(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Qn(p,c.name,"",null!=(u=c.options.version)?u:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw yo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ye:b,upgrade:this.options.upgrade};return this.h=d=a()};var Ao=new xo("YtIdbMeta",{Bb:{databases:{Gb:1}},upgrade:function(a,b){b(1)&&go(a,"databases",{keyPath:"actualName"})}});
function Bo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(zo(Ao,b),2);c=d.i;return d.return(fo(c,["databases"],{ia:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return ao(f.h.put(a,void 0)).then(function(){})})}))})}
function Co(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(zo(Ao,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Do(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(zo(Ao,b),2)):3!=e.h?(d=e.i,e.yield(fo(d,["databases"],{ia:!0,mode:"readonly"},function(f){c.length=0;return po(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Eo(a){return Do(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Fo(a,b,c){return Do(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Go(a){var b,c;return A(function(d){if(1==d.h)return b=Gm("YtIdbMeta hasAnyMeta other"),d.yield(Do(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Ho,Io=new function(){}(new function(){});
function Jo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=sn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=En)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||Mc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Bo(d,Io),4);case 4:return e.yield(Co("yt-idb-test-do-not-use",Io),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Ko(){if(void 0!==Ho)return Ho;vn=!0;return Ho=Jo().then(function(a){vn=!1;var b;if(null!=(b=rn())&&b.h){var c;b={hasSucceededOnce:(null==(c=sn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=rn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Lo(){return D("ytglobal.idbToken_")||void 0}
function Mo(){var a=Lo();return a?Promise.resolve(a):Ko().then(function(b){(b=b?Io:void 0)&&C("ytglobal.idbToken_",b);return b})}
;var No=0;function Oo(a,b){No||(No=Ki.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Mo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Fo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(wo(f.actualName),7);case 7:return h.yield(Co(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Aa(h),An(g),d=!1;case 4:Ki.qa(No),No=0,d&&Oo(a,b),h.h=0}})}))}
function Po(){var a;return A(function(b){return 1==b.h?b.yield(Mo(),2):(a=b.i)?b.return(Go(a)):b.return(!1)})}
new Xh;function Qo(a){if(!Fm())throw a=new Mn("AUTH_INVALID",{dbName:a}),An(a),a;var b=Gm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ro(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Mo(),2);case 2:g=n.i;if(!g)throw h=Rn("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),An(h),h;Cn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Qo(a);za(n,3);return n.yield(Bo(k,g),5);case 5:return n.yield(vo(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Aa(n),za(n,7),n.yield(Co(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Aa(n);case 8:throw l;}})}
function So(a,b,c){c=void 0===c?{}:c;return Ro(a,b,!1,c)}
function To(a,b,c){c=void 0===c?{}:c;return Ro(a,b,!0,c)}
function Uo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Mo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Cn(a);d=Qo(a);return e.yield(wo(d.actualName,b),3)}return e.yield(Co(d.actualName,c),0)})}
function Vo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(wo(d.actualName,b),2):e.yield(Co(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Wo(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Mo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Cn("LogsDatabaseV2");return d.yield(Eo(b),3)}c=d.i;return d.yield(Vo(c,a,b),0)})}
function Xo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Mo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Cn(a);return d.yield(wo(a,b),3)}return d.yield(Co(a,c),0)})}
;function Yo(a,b){xo.call(this,a,b);this.options=b;Cn(a)}
x(Yo,xo);function Zo(a,b){var c;return function(){c||(c=new Yo(a,b));return c}}
Yo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.pc?To:So)(a,b,Object.assign({},c))};
Yo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.pc?Xo:Uo)(this.name,a)};
function $o(a,b){return Zo(a,b)}
;var ap={},bp=$o("ytGcfConfig",{Bb:(ap.coldConfigStore={Gb:1},ap.hotConfigStore={Gb:1},ap),pc:!1,upgrade:function(a,b){b(1)&&(no(go(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),no(go(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function cp(a){return zo(bp(),a)}
function dp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(cp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(io(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function ep(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(cp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(io(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function fp(a){var b,c;return A(function(d){return 1==d.h?d.yield(cp(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(fo(b,["coldConfigStore"],{mode:"readwrite",ia:!0},function(e){return so(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function gp(a){var b,c;return A(function(d){return 1==d.h?d.yield(cp(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(fo(b,["hotConfigStore"],{mode:"readwrite",ia:!0},function(e){return so(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function hp(){F.call(this);this.i=[];this.h=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],C("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(hp,F);hp.prototype.P=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;F.prototype.P.call(this)};function ip(){this.h=0;this.i=new hp}
function jp(){var a;return null!=(a=D("yt.gcf.config.hotConfigGroup"))?a:P("RAW_HOT_CONFIG_GROUP")}
function kp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.v(0);break}c&&(a.j=c,C("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Lo();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(gp(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(dp(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function lp(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!R("start_client_gcf"))return h.v(0);a.coldHashData=b;C("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Lo())?c?h.v(4):h.yield(fp(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(ep(c,b,g,d),0)})}
function mp(){if(!ip.h){var a=new ip;ip.h=a}a=ip.h;var b=U()-a.h;if(!(0!==a.h&&b<Bl("send_config_hash_timer"))){b=D("yt.gcf.config.coldConfigData");var c=D("yt.gcf.config.hotHashData"),d=D("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
ip.prototype.l=function(a){this.hotHashData=a;C("yt.gcf.config.hotHashData",this.hotHashData||null)};function np(){return"INNERTUBE_API_KEY"in gl&&"INNERTUBE_API_VERSION"in gl}
function op(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),je:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ld:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Tf:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),le:P("INNERTUBE_CONTEXT_HL"),ke:P("INNERTUBE_CONTEXT_GL"),me:P("INNERTUBE_HOST_OVERRIDE")||"",oe:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ne:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function pp(a){var b={client:{hl:a.le,gl:a.ke,clientName:a.ld,clientVersion:a.innertubeContextClientVersion,configInfo:a.je}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Cl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.ld;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=mm()}(d=D("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&(null==(e=B.navigator)?0:e.deviceMemory)){var f;e=null==(f=B.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Dm())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=Em())&&
b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=mp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=w(Object.entries(ul(P("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function qp(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+D("gapi.auth.getToken")().Mf:(a=jm(im()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function rp(a,b){this.version=a;this.args=b}
rp.prototype.serialize=function(){return{version:this.version,args:this.args}};function sp(a,b){this.topic=a;this.h=b}
sp.prototype.toString=function(){return this.topic};var tp=D("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Eb;K.prototype.publish=K.prototype.Za;K.prototype.clear=K.prototype.clear;C("ytPubsub2Pubsub2Instance",tp);var up=D("ytPubsub2Pubsub2SubscribedKeys")||{};C("ytPubsub2Pubsub2SubscribedKeys",up);var vp=D("ytPubsub2Pubsub2TopicToKeys")||{};C("ytPubsub2Pubsub2TopicToKeys",vp);var wp=D("ytPubsub2Pubsub2IsAsync")||{};C("ytPubsub2Pubsub2IsAsync",wp);
C("ytPubsub2Pubsub2SkipSubKey",null);function xp(a,b){var c=yp();c&&c.publish.call(c,a.toString(),a,b)}
function zp(a){var b=Ap,c=yp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=D("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(up[d])try{if(f&&b instanceof sp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var l=new h;h.Xa=l.version}var n=h.Xa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var u=Array(r);for(k=0;k<r;k++)u[k]=t[k];var y=u}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){ml(z)}},wp[b.toString()]?D("yt.scheduler.instance")?Ki.oa(g):Gl(g,0):g())});
up[d]=!0;vp[b.toString()]||(vp[b.toString()]=[]);vp[b.toString()].push(d);return d}
function Bp(){var a=Cp,b=zp(function(c){a.apply(void 0,arguments);Dp(b)});
return b}
function Dp(a){var b=yp();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete up[c]}))}
function yp(){return D("ytPubsub2Pubsub2Instance")}
;function Ep(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&xp("meta_logging_csi_event",{timerName:a,ng:b})}
;var Fp=void 0,Gp=void 0;function Hp(){Gp||(Gp=Jk(P("WORKER_SERIALIZATION_URL")));return Gp||void 0}
function Ip(){var a=Hp();Fp||void 0===a||(Fp=new Worker(Fb(a),void 0));return Fp}
;var Jp=Bl("max_body_size_to_compress",5E5),Kp=Bl("min_body_size_to_compress",500),Lp=!0,Mp=0,Np=0,Op=Bl("compression_performance_threshold_lr",250),Pp=Bl("slow_compressions_before_abandon_count",4),Qp=!1,Rp=new Map,Sp=1,Tp=!0;function Up(){if("function"===typeof Worker&&Hp()&&!Qp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Rp.get(c.key);d&&(Vp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Rp.delete(c.key))}},b=Ip();
b&&(b.addEventListener("message",a),b.onerror=function(){Rp.clear()},Qp=!0)}}
function Wp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(Lp)try{var g=Xp(b);if(null!=g&&(g>Jp||g<Kp))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Tp||!R("initial_gzip_use_main_thread"))){Qp||Up();var h=Ip();if(h&&!e){Rp.set(Sp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Sp});Sp++;return}}var k=Ik(Fi(b));Vp(k,f,a,c,d)}}catch(l){nl(l),d(a,c)}else d(a,c)}
function Vp(a,b,c,d,e){Tp=!1;var f=U();b.ticks.gelc=f;Np++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Op&&(Mp++,R("abandon_compression_after_N_slow_zips")?Np===Bl("compression_disable_point")&&Mp>Pp&&(Lp=!1):Lp=!1);Yp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Zp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?D("yt.logging.gzipForFetch",!1):!0;if(Lp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Xp(g);if(null!=h&&(h>Jp||h<Kp))return a;f=Ik(Fi(g),b?{level:1}:void 0);var k=U();e.ticks.gelc=k;if(b){Np++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Op)if(Mp++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Mp/Np;var l=Pp/Bl("compression_disable_point");0<Np&&0===Np%Bl("compression_disable_point")&&b>=l&&(Lp=!1)}else Lp=!1;Yp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return nl(n),a}}else return a}
function Xp(a){try{return(new Blob(a.split(""))).size}catch(b){return nl(b),null}}
function Yp(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Ep("gel_compression",a,{sampleRate:.1})}
;function $p(a){a=Object.assign({},a);delete a.Authorization;var b=Qg();if(b){var c=new Qi;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=Ge(c.digest(),3)}return a}
;var aq;function bq(){aq||(aq=new qn("yt.innertube"));return aq}
function cq(a,b,c,d){if(d)return null;d=bq().get("nextId",!0)||1;var e=bq().get("requests",!0)||{};e[d]={method:a,request:b,authState:$p(c),requestTime:Math.round(U())};bq().set("nextId",d+1,86400,!0);bq().set("requests",e,86400,!0);return d}
function dq(a){var b=bq().get("requests",!0)||{};delete b[a];bq().set("requests",b,86400,!0)}
function eq(a){var b=bq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=$p(qp(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),fq(a,d.method,e,{}));delete b[c]}}bq().set("requests",b,86400,!0)}}
;function gq(a){this.Wb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.sb=function(){};
this.now=Date.now;this.Kb=!1;var b;this.Cd=null!=(b=a.Cd)?b:100;var c;this.wd=null!=(c=a.wd)?c:1;var d;this.ud=null!=(d=a.ud)?d:2592E6;var e;this.sd=null!=(e=a.sd)?e:12E4;var f;this.vd=null!=(f=a.vd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.cc=!!a.cc;var h;this.Zb=null!=(h=a.Zb)?h:.1;var k;this.mc=null!=(k=a.mc)?k:10;a.handleError&&(this.handleError=a.handleError);a.sb&&(this.sb=a.sb);a.Kb&&(this.Kb=a.Kb);a.Wb&&(this.Wb=a.Wb);this.U=a.U;this.Fa=a.Fa;this.ba=a.ba;this.aa=a.aa;this.sendFn=a.sendFn;
this.Lc=a.Lc;this.Kc=a.Kc;hq(this)&&(!this.U||this.U("networkless_logging"))&&iq(this)}
function iq(a){hq(a)&&!a.Kb&&(a.h=!0,a.cc&&Math.random()<=a.Zb&&a.ba.Qd(a.T),jq(a),a.aa.wa()&&a.Tb(),a.aa.listen(a.Lc,a.Tb.bind(a)),a.aa.listen(a.Kc,a.Yc.bind(a)))}
m=gq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(hq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ba.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&kq(c,d)}).catch(function(e){kq(c,d);
lq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(hq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ba.set(e,d.T).catch(function(l){lq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ba.set(e,this.T).catch(function(g){d.sendFn(a,b,e.skipRetry);
lq(d,g)})}else this.sendFn(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(hq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ba.qb(d.id,c.T):e=!0;c.aa.gb&&c.U&&c.U("vss_network_hint")&&c.aa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ba.set(d,this.T).then(function(g){d.id=g;e&&c.ba.qb(d.id,c.T)}).catch(function(g){lq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Tb=function(){var a=this;if(!hq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Fa.oa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ba.hd("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(kq(a,b),3):(a.Yc(),c.return());a.i&&(a.i=0,a.Tb());c.h=0})},this.Cd))};
m.Yc=function(){this.Fa.qa(this.i);this.i=0};
function kq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!hq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.v(2);break}return d.yield(a.ba.re(b.id,a.T),3);case 3:(c=d.i)||a.sb(Error("The request cannot be found in the database."));case 2:if(mq(a,b,a.ud)){d.v(4);break}a.sb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.v(5);break}return d.yield(a.ba.qb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=nq(a,
b));if(!b){d.v(0);break}if(!b.skipRetry||void 0===b.id){d.v(8);break}return d.yield(a.ba.qb(b.id,a.T),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function nq(a,b){if(!hq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=oq(f);(h=pq(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.mc)){n.v(2);break}if(!a.aa.oc){n.v(3);break}return n.yield(a.aa.oc(),3);case 3:if(a.aa.wa()){n.v(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.ba.Oc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.mc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.wd?n.yield(a.ba.Oc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.ba.qb(b.id,a.T),8);case 12:a.Fa.oa(function(){a.aa.wa()&&a.Tb()},a.vd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.ba.qb(b.id,a.T),2);a.aa.gb&&a.U&&a.U("vss_network_hint")&&a.aa.gb(!0);d(e,f);h.h=0})};
return b}
function mq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function jq(a){if(!hq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ba.hd("QUEUED",a.T).then(function(b){b&&!mq(a,b,a.sd)?a.Fa.oa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.ba.Oc(b.id,a.T),2);jq(a);c.h=0})}):a.aa.wa()&&a.Tb()})}
function lq(a,b){a.Id&&!a.aa.wa()?a.Id(b):a.handleError(b)}
function hq(a){return!!a.T||a.Wb}
function oq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function pq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var qq;
function rq(){if(qq)return qq();var a={};qq=$o("LogsDatabaseV2",{Bb:(a.LogsRequestsStore={Gb:2},a),pc:!1,upgrade:function(b,c,d){c(2)&&go(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),no(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return qq()}
;function sq(a){return zo(rq(),a)}
function tq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(sq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(io(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();uq(c);return g.return(f)})}
function vq(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(sq(b),2);if(3!=l.h)return d=l.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(fo(d,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(n){return so(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=U();uq(c);return l.return(k)})}
function wq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(sq(b),2);c=d.i;return d.return(fo(c,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",ao(f.h.put(g,void 0)).then(function(){return g})})}))})}
function xq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(sq(b),2);e=f.i;return f.return(fo(e,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),ao(h.h.put(k,void 0)).then(function(){return k})):Vn.resolve(void 0)})}))})}
function yq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(sq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function zq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(sq(a),2);b=d.i;c=U()-2592E6;return d.yield(fo(b,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){return po(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Aq(){A(function(a){return a.yield(Wo(),0)})}
function uq(a){R("nwl_csi_killswitch")||Ep("networkless_performance",a,{sampleRate:1})}
;var Bq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490};var Cq={},Dq=$o("ServiceWorkerLogsDatabase",{Bb:(Cq.SWHealthLog={Gb:1},Cq),pc:!0,upgrade:function(a,b){b(1)&&no(go(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Eq(a){return zo(Dq(),a)}
function Fq(a){var b,c;A(function(d){if(1==d.h)return d.yield(Eq(a),2);b=d.i;c=U()-2592E6;return d.yield(fo(b,["SWHealthLog"],{mode:"readwrite",ia:!0},function(e){return po(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Gq(a){var b;return A(function(c){if(1==c.h)return c.yield(Eq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Hq={},Iq=0;function Jq(a){var b=new Image,c=""+Iq++;Hq[c]=b;b.onload=b.onerror=function(){delete Hq[c]};
b.src=a}
;function Kq(){this.h=new Map;this.i=!1}
function Lq(){if(!Kq.h){var a=D("yt.networkRequestMonitor.instance")||new Kq;C("yt.networkRequestMonitor.instance",a);Kq.h=a}return Kq.h}
Kq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Kq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Kq.prototype.removeParams=function(a){return a.split("?")[0]};
Kq.prototype.removeParams=Kq.prototype.removeParams;Kq.prototype.isEndpointCFR=Kq.prototype.isEndpointCFR;Kq.prototype.requestComplete=Kq.prototype.requestComplete;Kq.getInstance=Lq;var Mq;function Nq(){Mq||(Mq=new qn("yt.offline"));return Mq}
function Oq(a){if(R("offline_error_handling")){var b=Nq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Nq().set("errors",b,2592E3,!0)}}
;function Pq(){yd.call(this);var a=this;this.j=!1;this.i=Ji();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Nq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new S(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;ml(d)}Nq().set("errors",{},2592E3,!0)}}})}
x(Pq,yd);function Qq(){if(!Pq.h){var a=D("yt.networkStatusManager.instance")||new Pq;C("yt.networkStatusManager.instance",a);Pq.h=a}return Pq.h}
m=Pq.prototype;m.wa=function(){return this.i.wa()};
m.gb=function(a){this.i.i=a};
m.de=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Vd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.oc=function(a){a=Hi(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Lq().requestComplete("generate_204",b)});
return a};
Pq.prototype.sendNetworkCheckRequest=Pq.prototype.oc;Pq.prototype.listen=Pq.prototype.listen;Pq.prototype.enableErrorFlushing=Pq.prototype.Vd;Pq.prototype.getWindowStatus=Pq.prototype.de;Pq.prototype.networkStatusHint=Pq.prototype.gb;Pq.prototype.isNetworkAvailable=Pq.prototype.wa;Pq.getInstance=Qq;function Rq(a){a=void 0===a?{}:a;yd.call(this);var b=this;this.i=this.m=0;this.j=Qq();var c=D("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Sq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Sq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){zd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){zd(b,"publicytnetworkstatus-offline")})))}
x(Rq,yd);Rq.prototype.wa=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Rq.prototype.gb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Rq.prototype.oc=function(a){var b=this,c;return A(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Lq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Sq(a,b){a.rateLimit?a.i?(Ki.qa(a.m),a.m=Ki.oa(function(){a.l!==b&&(zd(a,b),a.l=b,a.i=U())},a.rateLimit-(U()-a.i))):(zd(a,b),a.l=b,a.i=U()):zd(a,b)}
;var Tq;function Uq(){var a=gq.call;Tq||(Tq=new Rq({Yf:!0,Qf:!0}));a.call(gq,this,{ba:{Qd:zq,qb:yq,hd:vq,re:wq,Oc:xq,set:tq},aa:Tq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;nl(new S(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else ml(b)},
sb:nl,sendFn:Vq,now:U,Id:Oq,Fa:pn(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",cc:!0,Zb:.1,mc:Bl("potential_esf_error_limit",10),U:R,Kb:!(Fm()&&Wq())});this.j=new Xh;R("networkless_immediately_drop_all_requests")&&Aq();Xo("LogsDatabaseV2")}
x(Uq,gq);function Xq(){var a=D("yt.networklessRequestController.instance");a||(a=new Uq,C("yt.networklessRequestController.instance",a),R("networkless_logging")&&Mo().then(function(b){a.T=b;iq(a);a.j.resolve();a.cc&&Math.random()<=a.Zb&&a.T&&Fq(a.T);R("networkless_immediately_drop_sw_health_store")&&Yq(a)}));
return a}
Uq.prototype.writeThenSend=function(a,b){b||(b={});Fm()||(this.h=!1);gq.prototype.writeThenSend.call(this,a,b)};
Uq.prototype.sendThenWrite=function(a,b,c){b||(b={});Fm()||(this.h=!1);gq.prototype.sendThenWrite.call(this,a,b,c)};
Uq.prototype.sendAndWrite=function(a,b){b||(b={});Fm()||(this.h=!1);gq.prototype.sendAndWrite.call(this,a,b)};
Uq.prototype.awaitInitialization=function(){return this.j.promise};
function Yq(a){var b;A(function(c){if(!a.T)throw b=Rn("clearSWHealthLogsDb"),b;return c.return(Gq(a.T).catch(function(d){a.handleError(d)}))})}
function Vq(a,b,c,d){d=void 0===d?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Zq(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Ql(a,void 0,"POST",f);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Ql(a,
void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new bb({url:a});if(k.j&&k.i||k.l){var l=bc(cc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(pc),t=oc(a,0,"ri",p);if(0>t)var r=null;else{var u=a.indexOf("&",t);if(0>u||u>p)u=p;r=decodeURIComponent(a.slice(t+3,-1!==u?u:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(H){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(H){}z=!1}c=z?!0:!1}else c=!1;c||
Jq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Wp(a,b.postBody,b,Nl,d)):Wp(a,JSON.stringify(b.postParams),b,Vl,d):Nl(a,b)}
function Zq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Lq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Lq().requestComplete(a,!0);d(e,f)}}
function Wq(){return"www.youtube-nocookie.com"!==dc(document.location.toString())}
;var $q=!1,ar=B.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:$q};C("ytNetworklessLoggingInitializationOptions",ar);function br(){var a;A(function(b){if(1==b.h)return b.yield(Mo(),2);a=b.i;if(!a||!Fm()&&!R("nwl_init_require_datasync_id_killswitch")||!Wq())return b.v(0);$q=!0;ar.isNwlInitialized=$q;return b.yield(Xq().awaitInitialization(),0)})}
;function cr(a){var b=this;this.config_=null;a?this.config_=a:np()&&(this.config_=op());Im(function(){eq(b)},5E3)}
cr.prototype.isReady=function(){!this.config_&&np()&&(this.config_=op());return!!this.config_};
function fq(a,b,c,d){function e(u){u=void 0===u?!1:u;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(u||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=cq(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(da,T){dq(y);z(da,T)};
c.onFetchSuccess=function(da,T){dq(y);H(da,T)}}try{if(u&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Xq().writeThenSend(r,g):Xq().sendAndWrite(r,g);
else if(d.compress){var L=!d.networklessOptions.writeThenSend;if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));Wp(r,I,g,Nl,L)}else Wp(r,JSON.stringify(g.postParams),g,Vl,L)}else R("web_all_payloads_via_jspb")?Nl(r,g):Vl(r,g)}catch(da){if("InvalidAccessError"==da.name)y&&(dq(y),y=0),nl(Error("An extension is blocking network request."));else throw da;}y&&Im(function(){eq(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&nl(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new S("innertube xhrclient not ready",b,c,d);ml(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(u,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,y){if(d.onError)d.onError(y)},
onFetchError:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.me)&&(h=f);var k=a.config_.oe||!1,l=qp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.ne&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=wl(""+h+n,p||{},!0);(D("ytNetworklessLoggingInitializationOptions")?
ar.isNwlInitialized:$q)?Ko().then(function(u){e(u)}):e(!1)}
;var dr=0,er=Rc?"webkit":Qc?"moz":Lc?"ms":Kc?"o":"";C("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++dr});var fr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function gr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in fr||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function hr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
gr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
gr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
gr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=B.ytEventsEventsListeners||{};C("ytEventsEventsListeners",ob);var ir=B.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",ir);
function jr(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var kr=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function lr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=jr(a,b,c,d);if(e)return e;e=++ir.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new gr(h);if(!Id(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new gr(h);
h.currentTarget=a;return c.call(a,h)};
g=ll(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),kr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
function mr(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?kr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
;function nr(a){this.B=a;this.h=null;this.l=0;this.s=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.S=lr(window,"mousemove",Va(this.W,this));a=Va(this.R,this);"function"===typeof a&&(a=ll(a));this.Y=window.setInterval(a,25)}
Ya(nr,F);nr.prototype.W=function(a){void 0===a.h&&hr(a);var b=a.h;void 0===a.i&&hr(a);this.h=new Ed(b,a.i)};
nr.prototype.R=function(){if(this.h){var a=U();if(0!=this.l){var b=this.s,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.B();this.m=d}this.l=a;this.s=this.h;this.j=(this.j+1)%4}};
nr.prototype.P=function(){window.clearInterval(this.Y);mr(this.S)};var or={};
function pr(a){var b=void 0===a?{}:a;a=void 0===b.Be?!1:b.Be;b=void 0===b.Wd?!0:b.Wd;if(null==D("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;C("_lact",c,window);C("_fact",c,window);-1==c&&qr();lr(document,"keydown",qr);lr(document,"keyup",qr);lr(document,"mousedown",qr);lr(document,"mouseup",qr);a?lr(window,"touchmove",function(){rr("touchmove",200)},{passive:!0}):(lr(window,"resize",function(){rr("resize",200)}),b&&lr(window,"scroll",function(){rr("scroll",200)}));
new nr(function(){rr("mouse",100)});
lr(document,"touchstart",qr,{passive:!0});lr(document,"touchend",qr,{passive:!0})}}
function rr(a,b){or[a]||(or[a]=!0,Ki.oa(function(){qr();or[a]=!1},b))}
function qr(){null==D("_lact",window)&&pr();var a=Date.now();C("_lact",a,window);-1==D("_fact",window)&&C("_fact",a,window);(a=D("ytglobal.ytUtilActivityCallback_"))&&a()}
function sr(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var tr=B.ytPubsubPubsubInstance||new K,ur=B.ytPubsubPubsubSubscribedKeys||{},vr=B.ytPubsubPubsubTopicToKeys||{},wr=B.ytPubsubPubsubIsSynchronous||{};function xr(a,b){var c=yr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){ur[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{wr[a]?f():Gl(f,0)}catch(g){ml(g)}},void 0);
ur[d]=!0;vr[a]||(vr[a]=[]);vr[a].push(d);return d}return 0}
function zr(a){var b=yr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete ur[c]}))}
function Ar(a,b){var c=yr();c&&c.publish.apply(c,arguments)}
function Br(a){var b=yr();if(b)if(b.clear(a),a)Cr(a);else for(var c in vr)Cr(c)}
function yr(){return B.ytPubsubPubsubInstance}
function Cr(a){vr[a]&&(a=vr[a],fb(a,function(b){ur[b]&&delete ur[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Eb;K.prototype.publish=K.prototype.Za;K.prototype.clear=K.prototype.clear;C("ytPubsubPubsubInstance",tr);C("ytPubsubPubsubTopicToKeys",vr);C("ytPubsubPubsubIsSynchronous",wr);C("ytPubsubPubsubSubscribedKeys",ur);var Dr=Symbol("injectionDeps");function Er(a){this.name=a}
Er.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Fr(a){this.key=a}
function Gr(){this.h=new Map;this.i=new Map}
Gr.prototype.resolve=function(a){return a instanceof Fr?Hr(this,a.key,[],!0):Hr(this,a,[])};
function Hr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Fd)var e=d.Fd;else if(d.ef)e=d[Dr]?Ir(a,d[Dr],c):[],e=d.ef.apply(d,ma(e));else if(d.Ed){e=d.Ed;var f=e[Dr]?Ir(a,e[Dr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.lg||a.i.set(b,e);return e}
function Ir(a,b,c){return b?b.map(function(d){return d instanceof Fr?Hr(a,d.key,c,!0):Hr(a,d,c)}):[]}
;var Jr;function Kr(){Jr||(Jr=new Gr);return Jr}
;var Lr=window;function Mr(){var a,b;return"h5vcc"in Lr&&(null==(a=Lr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Lr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Lr&&Lr.performance.mark&&Lr.performance.measure?2:0}
function Nr(a){switch(Mr()){case 1:Lr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Lr.performance.mark(a+"-start");break;case 0:break;default:hi()}}
function Or(a){switch(Mr()){case 1:Lr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Lr.performance.mark(c);Lr.performance.measure(a,b,c);break;case 0:break;default:hi()}}
;var Pr=R("web_enable_lifecycle_monitoring")&&0!==Mr(),Qr=R("web_enable_lifecycle_monitoring");function Rr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?pn():d;this.j=c;this.scheduler=d;this.i=new Xh;this.h=a;for(a={cb:0};a.cb<this.h.length;a={Ob:a.Ob,cb:a.cb},a.cb++)a.Ob=this.h[a.cb],c=function(e){return function(){e.Ob.Fc();b.h[e.cb].nc=!0;b.h.every(function(f){return!0===f.nc})&&b.i.resolve()}}(a),d=this.getPriority(a.Ob),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.Ob,{Fc:c,
jobId:d})}
function Sr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.nc||(a.scheduler.qa(c.jobId),a.scheduler.ab(c.Fc,10))}
Rr.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.nc||this.scheduler.qa(b.jobId),b.nc=!0;this.i.resolve()};
Rr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Tr(a){this.state=a;this.plugins=[];this.l=void 0;this.s={};Pr&&Nr(this.state)}
m=Tr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;Ia.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Pr&&Or(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Sr(this.j),this.j=void 0);Ur(this,a,b);this.state=a;Pr&&Nr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Vr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Vr(a,b){var c=b.filter(function(e){return 10===Wr(a,e)}),d=b.filter(function(e){return 10!==Wr(a,e)});
return a.s.kg?function(){var e=Ia.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Ie.apply(a,[c].concat(ma(e))),2);a.zd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=Ia.apply(0,arguments);
a.Je.apply(a,[c].concat(ma(e)));a.zd.apply(a,[d].concat(ma(e)))}}
m.Je=function(a){for(var b=Ia.apply(1,arguments),c=pn(),d=w(a),e=d.next(),f={};!e.done;f={xb:f.xb},e=d.next())f.xb=e.value,c.Fb(function(g){return function(){Xr(g.xb.name);g.xb.callback.apply(g.xb,ma(b));Yr(g.xb.name)}}(f))};
m.Ie=function(a){var b=Ia.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=pn(),d=w(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.v(0);f.eb=e.value;f.Hb=void 0;g=function(k){return function(){Xr(k.eb.name);var l=k.eb.callback.apply(k.eb,ma(b));"function"===typeof(null==l?void 0:l.then)?k.Hb=l.then(function(){Yr(k.eb.name)}):Yr(k.eb.name)}}(f);
c.Fb(g);return f.Hb?h.yield(f.Hb,3):h.v(3)}f={eb:f.eb,Hb:f.Hb};e=d.next();return h.v(2)})};
m.zd=function(a){var b=Ia.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){Xr(e.name);e.callback.apply(e,ma(b));Yr(e.name)},
priority:Wr(c,e)}});
d.length&&(this.j=new Rr(d))};
function Wr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Xr(a){Pr&&a&&Nr(a)}
function Yr(a){Pr&&a&&Or(a)}
function Ur(a,b,c){Qr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ia.Object.defineProperties(Tr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Zr(a){Tr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var $r;x(Zr,Tr);Zr.prototype.i=function(a,b){var c=this;this.h=Im(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Zr.prototype.m=function(a,b){this.h&&(Ki.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function as(){$r||($r=new Zr);return $r}
;var bs=[];C("yt.logging.transport.getScrapedGelPayloads",function(){return bs});function cs(){this.store={};this.h={}}
cs.prototype.storePayload=function(a,b){a=ds(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
cs.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=es(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
cs.prototype.extractMatchingEntries=function(a){a=es(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
cs.prototype.getSequenceCount=function(a){a=es(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function es(a,b){var c=ds(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&ds(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(gs(b.auth,g[0])){var h=b.isJspb;gs(void 0===h?"undefined":h?"true":"false",g[1])&&gs(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),gs(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function gs(a,b){return void 0===a||"undefined"===a?!0:a===b}
cs.prototype.getSequenceCount=cs.prototype.getSequenceCount;cs.prototype.extractMatchingEntries=cs.prototype.extractMatchingEntries;cs.prototype.smartExtractMatchingEntries=cs.prototype.smartExtractMatchingEntries;cs.prototype.storePayload=cs.prototype.storePayload;function ds(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function hs(a,b){if(a)return a[b.name]}
;var is=Bl("initial_gel_batch_timeout",2E3),js=Bl("gel_queue_timeout_max_ms",6E4),ks=Math.pow(2,16)-1,ls=Bl("gel_min_batch_size",5),ms=void 0;function ns(){this.l=this.h=this.i=0;this.j=!1}
var ps=new ns,qs=new ns,rs=new ns,ss=new ns,ts,us=!0,vs=B.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",vs);var ws={};function xs(){var a=D("yt.logging.ims");a||(a=new cs,C("yt.logging.ims",a));return a}
function ys(a,b){if("log_event"===a.endpoint){zs();var c=As(a),d=Bs(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=Bq[d||""];var f,g,h,k=null==Kr().resolve(new Fr(ip))?void 0:null==(f=jp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!R("web_payload_policy_disabled_killswitch"))return;k=Cs(e.tier);if(400===k){Ds(a,b);return}}ws[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};xs().storePayload(e,a.payload);Es(b,c,e,"gelDebuggingEvent"===d)}}
function Es(a,b,c,d){function e(){Fs({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(ms=new a);a=Bl("tvhtml5_logging_max_batch_ads_fork")||Bl("web_logging_max_batch")||100;var g=U(),h=Gs(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=xs().getSequenceCount(c));1E3<=d?e():d>=a?ts||(ts=Hs(function(){e();ts=void 0},0)):10<=g-k&&(Is(f,c.tier),h.l=g)}
function Ds(a,b){if("log_event"===a.endpoint){zs();var c=As(a),d=new Map;d.set(c,[a.payload]);var e=Bs(a.payload)||"";b&&(ms=new b);return new Vd(function(f,g){ms&&ms.isReady()?Js(d,ms,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function As(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);vs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Fs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Vd(function(e,f){var g=Gs(c,d),h=g.j;g.j=!1;Ks(g.i);Ks(g.h);g.h=0;ms&&ms.isReady()?void 0===d&&R("enable_web_tiered_gel")?Ls(e,f,a,b,c,300,h):Ls(e,f,a,b,c,d,h):(Is(c,d),e())})}
function Ls(a,b,c,d,e,f,g){var h=ms;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=R("enable_web_tiered_gel")?xs().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):xs().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(ws)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?xs().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):xs().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete ws[l];Js(k,h,a,b,c,!1,g)}
function Is(a,b){function c(){Fs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Gs(a,b),e=d===ss||d===rs?5E3:js;R("web_gel_timeout_cap")&&!d.h&&(e=Hs(function(){c()},e),d.h=e);
Ks(d.i);e=P("LOGGING_BATCH_TIMEOUT",Bl("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&us&&(e=is);e=Hs(function(){0<Bl("gel_min_batch_size")?xs().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ls&&c():c()},e);
d.i=e}
function Js(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(U()),k=a.size,l=(void 0===g?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var n=a.next();for(g={};!n.done;g={ic:g.ic,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,kc:g.kc,jc:g.jc},n=a.next()){var p=w(n.value);n=p.next().value;p=p.next().value;g.batchRequest=ub({context:pp(b.config_||op())});if(!Oa(p)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=
p;(p=vs[n])&&Ms(g.batchRequest,n,p);delete vs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Ns(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.kc=function(t){R("start_client_gcf")&&Ki.oa(function(){return A(function(r){return r.yield(Os(t),0)})});
k--;k||c()};
g.ic=0;g.jc=function(t){return function(){t.ic++;if(e.bypassNetworkless&&1===t.ic)try{fq(b,l,t.batchRequest,Ps({writeThenSend:!0},t.dangerousLogToVisitorSession,t.kc,t.jc,f)),us=!1}catch(r){ml(r),d()}k--;k||c()}}(g);
try{fq(b,l,g.batchRequest,Ps(e,g.dangerousLogToVisitorSession,g.kc,g.jc,f)),us=!1}catch(t){ml(t),d()}}}
function Ps(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Nf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Qs()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function Ns(a,b,c){Qs()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*ks/2)),c++,c>ks&&(c=1),hl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ms(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function zs(){var a;(a=D("yt.logging.transport.enableScrapingForTest"))||(a=Al("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(bs=[],C("yt.logging.transport.enableScrapingForTest",!0),C("yt.logging.transport.scrapedPayloadsForTesting",bs),C("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
C("yt.logging.transport.scrapeClientEvent",!0))}
function Qs(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Hs(a,b){return R("transport_use_scheduler")?R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Im(function(){if("none"===as().currentState)a();else{var c={};as().install((c.none={callback:a},c))}},b):Im(a,b):Gl(a,b)}
function Ks(a){R("transport_use_scheduler")?Ki.qa(a):window.clearTimeout(a)}
function Os(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=hs(d,Nk),g=null==(f=d)?void 0:f.hotHashData,h=hs(d,Mk),l=null==(k=d)?void 0:k.coldHashData,(n=Kr().resolve(new Fr(ip)))?g?e?p.yield(kp(n,g,e),2):p.yield(kp(n,g),2):p.v(2):p.return()):l?h?p.yield(lp(n,l,h),0):p.yield(lp(n,l),0):p.v(0)})}
function Gs(a,b){b=void 0===b?200:b;return a?300===b?ss:qs:300===b?rs:ps}
function Bs(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Bq[b])return b}
function Cs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Rs=B.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",Rs);
function Ss(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=sr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Rs[b]=b in Rs?Rs[b]+1:0,a.sequence={index:Rs[b],groupKey:b},d.endOfSequence&&delete Rs[d.sequenceGroup]);(d.sendIsolatedPayload?Ds:ys)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function zn(a,b,c){c=void 0===c?{}:c;var d=cr;P("ytLoggingEventsDefaultDisabled",!1)&&cr===cr&&(d=null);R("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=sr(),c.timestamp=U());Ss(a,b,d,c)}
;C("ytLoggingGelSequenceIdObj_",B.ytLoggingGelSequenceIdObj_||{});var Ts=new Set,Us=0,Vs=0,Ws=0,Xs=[],Ys=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function yn(a){Zs(a)}
function $s(a){Zs(a,"WARNING")}
function at(a){a instanceof Error?Zs(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new S(a),a.name="RejectedPromiseError",$s(a))}
function Zs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Us))){d=Xs;var k=Cc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=em(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var u="params."+t,y=gm(r[t]);c[u]=y;p+=u.length+y.length;if(500<p)break}}else c.params=gm(r)}if(d.length)for(t=0;t<d.length&&!(p=em(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=am();c=w(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.ag)){a=d.weight;break a}a=w(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=w(Wl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.lc[t.name])for(e=w(c.lc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Ic(f);break}t.params||(t.params={});a=am();t.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Ra.length;t.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Ab("sample").constructor!==zb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Ts.has(t.message)){if(g&&R("web_enable_error_204"))bt(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(bm.Za("handleError",t),R("record_app_crashed_web")&&0===Ws&&1===t.sampleWeight&&(Ws++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),zn("appCrashed",g)),Vs++):"WARNING"===b&&bm.Za("handleWarning",t);if(R("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=w(Ys);for(c=a.next();!c.done;c=a.next())if(Fn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));e=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!il("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=w(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=w(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(zn("clientError",h),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&Fs(void 0,void 0,!1))}R("suppress_error_204_logging")||bt(b,t)}try{Ts.add(t.message)}catch(z){}Us++}}}
function bt(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Nl(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function ct(){this.register=new Map}
function dt(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.fg("ABORTED")}
ct.prototype.clear=function(){dt(this);this.register.clear()};
var et=new ct;var ft=Date.now().toString();
function gt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ft)for(a=1,b=0;b<ft.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ft.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ht,jt=B.ytLoggingDocDocumentNonce_;jt||(jt=gt(),C("ytLoggingDocDocumentNonce_",jt));ht=jt;function kt(a){this.h=a}
m=kt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Uk;void 0!==this.h.trackingParams?G(a,1,qf(this.h.trackingParams,!0)):(void 0!==this.h.veType&&G(a,2,If(this.h.veType)),void 0!==this.h.veCounter&&G(a,6,If(this.h.veCounter)),void 0!==this.h.elementIndex&&G(a,3,If(this.h.elementIndex)),this.h.isCounterfactual&&G(a,5,Ff(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();og(a,Uk,7,b)}void 0!==this.h.youtubeData&&og(a,Ok,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function lt(a){return P("client-screen-nonce-store",{})[void 0===a?0:a]}
function mt(a,b){b=void 0===b?0:b;var c=P("client-screen-nonce-store");c||(c={},hl("client-screen-nonce-store",c));c[b]=a}
function nt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ot(a){return P(nt(void 0===a?0:a))}
C("yt_logging_screen.getRootVeType",ot);function pt(){var a=P("csn-to-ctt-auth-info");a||(a={},hl("csn-to-ctt-auth-info",a));return a}
function qt(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function rt(a){a=lt(void 0===a?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
C("yt_logging_screen.getCurrentCsn",rt);function st(a,b,c){var d=pt();(c=rt(c))&&delete d[c];b&&(d[a]=b)}
function tt(a){return pt()[a]}
C("yt_logging_screen.getCttAuthInfo",tt);C("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==lt(c)||b!==P(nt(c)))if(st(a,d,c),mt(a,c),hl(nt(c),b),b=function(){setTimeout(function(){a&&zn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ht,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var ut=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};C("yt.msgs_",ut);function vt(a){cl(ut,arguments)}
;function wt(){var a=tb(xt),b;return(new Vd(function(c,d){a.onSuccess=function(e){Fl(e)?c(new zt(e)):d(new At("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new At("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new At("Request timed out","net.timeout",e))};
b=Nl("//googleads.g.doubleclick.net/pagead/id",a)})).qc(function(c){c instanceof be&&b.abort();
return $d(c)})}
function At(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(At,$a);function zt(a){this.xhr=a}
;function Bt(){this.h=0;this.value_=null}
Bt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:Ct(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:Dt(a):this};
Bt.prototype.getValue=function(){return this.value_};
Bt.prototype.isRejected=function(){return 2==this.h};
Bt.prototype.$goog_Thenable=!0;function Dt(a){var b=new Bt;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function Ct(a){var b=new Bt;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function Et(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:xl(a)?"same-origin":"cors",credentials:xl(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Ft(){return Og()||(Be||Ce)&&Fn("applewebkit")&&!Fn("version")&&(!Fn("safari")||Fn("gsa/"))||Sc&&Fn("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Gt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Sk)if(Sk[d]==c.embeddedPlayerMode){b=Sk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Ht(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof It;this.isTimeout=a instanceof At&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof be}
x(Ht,$a);Ht.prototype.name="BiscottiError";function It(){$a.call(this,"Biscotti ID is missing from server")}
x(It,$a);It.prototype.name="BiscottiMissingError";var xt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Jt=null;function Kt(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ft())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if("1"==rb(a))return Error("Biscotti ID is not available in private embed mode");if(Gt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function al(){var a=Kt();if(void 0!==a)return $d(a);Jt||(Jt=wt().then(Lt).qc(function(b){return Mt(2,b)}));
return Jt}
function Lt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new It;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new It;a=a.id;bl(a);Jt=Ct(a);Nt(18E5,2);return a}
function Mt(a,b){b=new Ht(b);bl("");Jt=Dt(b);0<a&&Nt(12E4,a-1);throw b;}
function Nt(a,b){Gl(function(){wt().then(Lt,function(c){return Mt(b,c)}).qc(cb)},a)}
function Ot(){try{var a=D("yt.ads.biscotti.getId_");return a?a():al()}catch(b){return $d(b)}}
;function Pt(a){if("1"!=rb(P("PLAYER_VARS",{}))){a&&$k();try{Ot().then(function(){},function(){}),Gl(Pt,18E5)}catch(b){ml(b)}}}
;function Qt(){var a=um(),b=ym(119),c=1<window.devicePixelRatio;if(document.body&&Ui(document.body,"exp-invert-logo"))if(c&&!Ui(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ui(d,"inverted-hdpi")){var e=Si(d);Ti(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ui(document.body,"inverted-hdpi")&&Vi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=zm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete rm[b]:(c=d.toString(16),rm[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in rm)rm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(rm[f])));var f=d.join("&");nm(b,f,63072E3,a.i,c)}}
;var Rt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function St(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;bc(cc(5,a));try{var b=vl(a).theme;return Rt.get(b)||null}catch(c){}return null}
;function Tt(){this.h={};if(this.i=qm()){var a=om("CONSISTENCY");a&&Ut(this,{encryptedTokenJarContents:a})}}
Tt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Pa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Ut(this,a)}};
function Ut(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&nm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Vt=window.location.hostname.split(".").slice(-2).join(".");function Wt(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.h=Xt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Yt;function Zt(){Yt=D("yt.clientLocationService.instance");Yt||(Yt=new Wt,C("yt.clientLocationService.instance",Yt));return Yt}
m=Wt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===P("INNERTUBE_CLIENT_NAME")?(this.h=Xt(this))&&this.h.set("yt-location-playability-token",a,15552E3):nm("YT_CL",JSON.stringify({loctok:a}),15552E3,Vt,!0))};
function Xt(a){return void 0===a.h?new qn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Xt(this))&&this.h.remove("yt-location-playability-token"):pm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===P("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function $t(a,b){var c,d=null==(c=hs(a,Rk))?void 0:c.signal;if(d&&b.Sb&&(c=b.Sb[d]))return c();var e;if((c=null==(e=hs(a,Pk))?void 0:e.request)&&b.Sd&&(e=b.Sd[c]))return e();for(var f in a)if(b.bd[f]&&(a=b.bd[f]))return a()}
;function au(a){return function(){return new a}}
;var bu={},cu=(bu.WEB_UNPLUGGED="^unplugged/",bu.WEB_UNPLUGGED_ONBOARDING="^unplugged/",bu.WEB_UNPLUGGED_OPS="^unplugged/",bu.WEB_UNPLUGGED_PUBLIC="^unplugged/",bu.WEB_CREATOR="^creator/",bu.WEB_KIDS="^kids/",bu.WEB_EXPERIMENTS="^experiments/",bu.WEB_MUSIC="^music/",bu.WEB_REMIX="^music/",bu.WEB_MUSIC_EMBEDDED_PLAYER="^music/",bu.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",bu);
function du(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=cu[b];if(c){var d=new RegExp(c),e=w(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(cu).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=w(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function eu(){}
eu.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?km:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=ub(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;um();var l="USER_INTERFACE_THEME_LIGHT";ym(165)?l="USER_INTERFACE_THEME_DARK":ym(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:St()||l;h.userInterfaceTheme=k;if(!f){if(k=Dm())h.connectionType=
k;R("web_log_effective_connection_type")&&(k=Em())&&(g.client.effectiveConnectionType=k)}var n;if(R("web_log_memory_total_kbytes")&&(null==(n=B.navigator)?0:n.deviceMemory)){var p;n=null==(p=B.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}R("web_gcf_hashes_innertube")&&(k=mp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);p=vl(B.location.href);!R("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:B.location.href},R("kevlar_woffle")&&lm.h&&(p=lm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=mm(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(p=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(J){}t=void 0}t&&(h.timeZone=t)}(t=P("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=Cl();Tt.h||(Tt.h=new Tt);h=Tt.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!R("web_prequest_context_killswitch")&&(r=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=r);t=um();r=ym(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=rt())&&(g.clientScreenNonce=f):
!f&&(f=rt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=D("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Zt().setLocationOnInnerTubeContext(g);try{var u=yl(),y=u.bid;delete u.bid;g.adSignalsInfo={params:[],bid:y};var z=w(Object.entries(u));for(var H=z.next();!H.done;H=z.next()){var L=w(H.value),I=L.next().value,da=L.next().value;u=I;y=da;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:u,value:""+y})}var T;if(R("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==
(T=g.client)?void 0:T.clientName)){var O=P("INNERTUBE_CONTEXT");O.adSignalsInfo&&(g.adSignalsInfo.advertisingId=O.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=O.adSignalsInfo.limitAdTracking)}}catch(J){Zs(J)}z=g}else Zs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var ba;b="/youtubei/v1/"+du(this.j());(H=null==(ba=hs(a.commandMetadata,Qk))?void 0:ba.apiUrl)&&(b=H);ba=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(ba=String(b)+
String(ec(ba)));b={};b.key=P("INNERTUBE_API_KEY");R("json_condensed_response")&&(b.prettyPrint="false");ba=wl(ba,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:ba,ib:Et(ba),Pa:z,config:a};a.config.Vb?a.config.Vb.identity=c:a.config.Vb={identity:c};return a}Zs(new S("Error: Failed to create Request from Command.",a))};
ia.Object.defineProperties(eu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function fu(){}
x(fu,eu);fu.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",ib:Et("/getDatasyncIdsEndpoint","GET"),Pa:{}}};
fu.prototype.j=function(){return[]};
fu.prototype.h=function(){};
fu.prototype.i=function(){};var gu={},hu=(gu.GET_DATASYNC_IDS=au(fu),gu);var iu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function ju(a,b){var c=void 0===c?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=dc(window.location.href);e&&d.push(e);e=dc(a);if(0<=eb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),bi(d,a),a=d.href)if(a=ec(a),a=fc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:rt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&ku(a,b,f)}else ku(a,b)}
function ku(a,b,c){a=lu(a);b=b?kc(b):"";c=c||5;Ft()&&nm(a,b,c)}
function lu(a){for(var b=w(iu),c=b.next();!c.done;c=b.next())a=rc(a,c.value);return"ST-"+$b(a).toString(36)}
;function mu(){try{return!!self.localStorage}catch(a){return!1}}
;function nu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function ou(a){if(mu()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=nu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function pu(){if(!mu())return!1;var a=Gm(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=nu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function qu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return R("copy_login_info_to_st_cookie")&&("WEB"===P("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===P("INNERTUBE_CLIENT_NAME"))&&a}
function ru(a){if(P("LOGGED_IN",!0)&&qu()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=dc(window.location.href);c&&b.push(c);c=dc(a);0<=eb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=ec(a),(b=fc(b))?(b=lu(b),b=(b=om(b)||null)?ul(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;qu()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&ju(a,b)}}
;function su(a){var b=Ia.apply(1,arguments);if(!tu(a)||b.some(function(d){return!tu(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())uu(a,c.value);return a}
function uu(a,b){for(var c in b)if(tu(b[c])){if(c in a&&!tu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});uu(a[c],b[c])}else if(vu(b[c])){if(c in a&&!vu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);wu(a[c],b[c])}else a[c]=b[c];return a}
function wu(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,tu(c)?a.push(uu({},c)):vu(c)?a.push(wu([],c)):a.push(c);return a}
function tu(a){return"object"===typeof a&&!Array.isArray(a)}
function vu(a){return"object"===typeof a&&Array.isArray(a)}
;function xu(a){var b;(b=D("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},C("ytcsi."+(a||"")+"data_",b));return b}
function yu(){var a=xu();a.info||(a.info={});return a.info}
function zu(a){a=xu(a);a.metadata||(a.metadata={});return a.metadata}
function Au(a){a=xu(a);a.tick||(a.tick={});return a.tick}
function Bu(a){a=xu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Cu(a){a=Bu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Du(a){var b=xu(a).nonce;b||(b=gt(),xu(a).nonce=b);return b}
;function Eu(){var a=D("ytcsi.debug");a||(a=[],C("ytcsi.debug",a),C("ytcsi.reference",{}));return a}
function Fu(a){a=a||"";var b=D("ytcsi.reference");b||(Eu(),b=D("ytcsi.reference"));if(b[a])return b[a];var c=Eu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Gu=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",
W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]=
"LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]=
"LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",
W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W.search_ui="LATENCY_ACTION_SEARCH_UI",
W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]=
"LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant=
"LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),Y={},Hu=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p=
"httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav=
"kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",
Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",
Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID=
"requestIds",Y),Iu="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Ju={},Ku=(Ju.ccs="CANARY_STATE_",Ju.mver="MEASUREMENT_VERSION_",Ju.pis="PLAYER_INITIALIZED_STATE_",Ju.yt_pt="LATENCY_PLAYER_",Ju.pa="LATENCY_ACTION_",
Ju.ctop="TOP_ENTITY_TYPE_",Ju.yt_vst="VIDEO_STREAM_TYPE_",Ju),Lu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Mu(a,b,c){c=Bu(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Hu){c=Hu[a];0<=eb(Iu,c)&&(b=!!b);a in Ku&&"string"===typeof b&&(b=Ku[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return su({},d)}0<=eb(Lu,a)||$s(new S("Unknown label logged with GEL CSI",a))}
;function Nu(a,b){rp.call(this,1,arguments);this.timer=b}
x(Nu,rp);var Ou=new sp("aft-recorded",Nu);var Pu=B.ytLoggingLatencyUsageStats_||{};C("ytLoggingLatencyUsageStats_",Pu);function Qu(){this.h=0}
function Ru(){Qu.h||(Qu.h=new Qu);return Qu.h}
Qu.prototype.tick=function(a,b,c,d){Su(this,"tick_"+a+"_"+b)||zn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Qu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Su(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,zn("latencyActionInfo",a,{cttAuthInfo:c}))};
Qu.prototype.jspbInfo=function(){};
Qu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Su(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,zn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Su(a,b){Pu[b]=Pu[b]||{count:0};var c=Pu[b];c.count++;c.time=U();a.h||(a.h=Im(function(){var d=U(),e;for(e in Pu)Pu[e]&&6E4<d-Pu[e].time&&delete Pu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||$s(c)),!0):!1}
;var Tu=window;function Uu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Vu(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Wu(e.requestStart),e.responseEnd=Wu(e.responseEnd),e.redirectStart=Wu(e.redirectStart),e.redirectEnd=Wu(e.redirectEnd),e.domainLookupEnd=Wu(e.domainLookupEnd),e.connectStart=Wu(e.connectStart),e.connectEnd=
Wu(e.connectEnd),e.responseStart=Wu(e.responseStart),e.secureConnectionStart=Wu(e.secureConnectionStart),e.domainLookupStart=Wu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function Wu(a){return Math.round(Xu()+a)}
function Xu(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=Tu.performance||Tu.mozPerformance||Tu.msPerformance||Tu.webkitPerformance||new Uu;var Yu=!1,Zu=!1,$u={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Va(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||cb,Z);function av(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;zu(c).loadType=e}(a=Mu(a,b,c))&&bv(a,c,d)}}
function bv(a,b){if(!R("web_csi_action_sampling_enabled")||!xu(b).actionDisabled){var c=Fu(b||"");su(c.info,a);a.loadType&&(c=a.loadType,zu(b).loadType=c);su(Cu(b),a);c=Du(b);b=xu(b).cttAuthInfo;Ru().info(a,c,b)}}
function cv(){var a,b,c,d;return(null!=(d=null==Kr().resolve(new Fr(ip))?void 0:null==(a=jp())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function dv(a,b,c){if(!R("web_csi_action_sampling_enabled")||!xu(c).actionDisabled){var d=Du(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(null==Kr().resolve(new Fr(ip))?0:jp())&&!Zu&&(Zu=!0,dv("gcfl",U(),c));var f,g,h;e=(null==Kr().resolve(new Fr(ip))?void 0:null==(f=jp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=cv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+
d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;xu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,bv(f,c));xu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Z.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Z.mark(e)));e=Fu(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Bu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Au(c);e=b||U();R("log_repeated_ytcsi_ticks")?a in f||
(f[a]=e):f[a]=e;f=xu(c).cttAuthInfo;"_start"===a?(a=Ru(),Su(a,"baseline_"+d)||zn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Ru().tick(a,d,b,f);ev(c);return e}}}
function fv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=er+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function gv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Yb()&&a.setAttribute("nonce",Yb());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=Xu(),dv("rsf_"+b,c+Math.round(a.fetchStart)),dv("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function hv(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(dv("wffs",Wu(b.startTime)),dv("wffe",Wu(b.responseEnd)))}
function iv(a){var b=jv("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=jv(b[d],a);if(e)return e}return NaN}
function jv(a,b){if(a=Au(b)[a])return"number"===typeof a?a:a[a.length-1]}
function ev(a){var b=jv("_start",a),c=iv(a);b&&c&&!Yu&&(xp(Ou,new Nu(Math.round(c-b),a)),Yu=!0)}
function kv(a,b){for(var c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!kv(a[d],b[d]))return!1;return!0}
function lv(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=jb(a,function(b){return"first-paint"===b.name}))return Wu(a.startTime)}a=Z.timing;
return a.we?Math.max(0,a.we):0}
;function mv(a,b){ll(function(){Fu("").info.actionType=a;b&&hl("TIMING_AFT_KEYS",b);hl("TIMING_ACTION",a);var c=P("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&av(d,c[d]);c={isNavigation:!0,actionType:Gu[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=P("PREVIOUS_ACTION"))c.previousAction=Gu[d]||"LATENCY_ACTION_UNKNOWN";if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=rt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=fv();if(1===d||-1===d)c.isVisible=
!0;zu();yu();c.loadType="cold";d=yu();var e=Vu(),f=Xu(),g=P("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(dv("srt",e.responseStart),1!==d.prerender&&dv("_start",f,void 0));d=lv();0<d&&dv("fpt",d);d=Vu();d.isPerformanceNavigationTiming&&bv({performanceNavigationTiming:!0},void 0);dv("nreqs",d.requestStart,void 0);dv("nress",d.responseStart,void 0);dv("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(dv("nrs",d.redirectStart,void 0),
dv("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(dv("ndnss",d.domainLookupStart,void 0),dv("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(dv("ntcps",d.connectStart,void 0),dv("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Xu()&&0<d.connectEnd-d.secureConnectionStart&&(dv("nstcps",d.secureConnectionStart,void 0),dv("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&hv();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in $u)$u.hasOwnProperty(h)&&
(e=$u[h],gv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});bv(c);c=yu();h=Bu();h.preLoggedGelInfos||(h.preLoggedGelInfos=[]);d=h.preLoggedGelInfos;h=Cu();e=void 0;for(f=0;f<d.length;f++)if(g=d[f],g.loadType){e=g.loadType;break}if("cold"===zu().loadType&&("cold"===c.yt_lt||"cold"===h.loadType||"cold"===e)){e=Au();f=Bu();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var k in e)if(!(k in f))if("number"===typeof e[k])dv(k,
jv(k));else if(R("log_repeated_ytcsi_ticks")){g=w(e[k]);for(var l=g.next();!l.done;l=g.next())l=l.value,dv(k.slice(1),l)}k={};e=!1;if(R("use_infogel_early_logging"))for(d=w(d),f=d.next();!f.done;f=d.next())e=f.value,su(h,e),su(k,e),e=!0;d=w(Object.keys(c));for(f=d.next();!f.done;f=d.next())f=f.value,(f=Mu(f,c[f]))&&!kv(Cu(),f)&&(su(h,f),su(k,f),e=!0);e&&bv(k)}C("ytglobal.timingready_",!0);k=P("TIMING_ACTION");D("ytglobal.timingready_")&&k&&nv()&&iv()&&ev()})()}
function ov(a,b,c,d){ll(av)(a,b,c,d)}
function pv(a,b,c){ll(bv)(a,b,void 0===c?!1:c)}
function qv(a,b,c){return ll(dv)(a,b,c)}
function nv(){return ll(function(){return"_start"in Au()})()}
function rv(){ll(function(){var a=Du();requestAnimationFrame(function(){setTimeout(function(){a===Du()&&qv("ol",void 0,void 0)},0)})})()}
var sv=window;sv.ytcsi&&(sv.ytcsi.info=ov,sv.ytcsi.Sf=pv,sv.ytcsi.tick=qv);var tv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),uv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function vv(a,b,c,d){this.m=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Sb||(a.Sb={});a.Sb=Object.assign({},hu,a.Sb)}
function wv(a,b,c,d){if(void 0!==vv.h){if(d=vv.h,a=[a!==d.m,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new S("InnerTubeTransportService is already initialized",a);
}else vv.h=new vv(a,b,c,d)}
function xv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?km:c;var d=$t(b,a.m);if(!d)return $d(new S("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(ru(e.input),new Vd(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.Xe){var n=e.config,p;n=null==n?void 0:null==(p=n.Vb)?void 0:p.sessionIndex;p=jm(0,{sessionIndex:n});k=Object.assign({},yv(h),p);return l.v(2)}return l.yield(zv(e.config,
h),3)}2!=l.h&&(k=l.i);f(Av(a,e,k));l.h=0})})):$d(new S("Error: Failed to build request for command.",b))}
function Bv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.ig)?0:d.mg)&&a.j){d=w(tv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Av(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,u,y,z,H,L,I,da,T,O,ba,J,ca,ha,V,ab,Nc,Oc,Pc;return A(function(X){switch(X.h){case 1:X.v(2);break;case 3:if((d=X.i)&&!d.isExpired())return X.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Pa)?0:f.context)){X.v(4);break}g=b.Pa.context;X.v(5);break;case 5:h=w([]),k=h.next();case 7:if(k.done){X.v(4);break}l=k.value;return X.yield(l.eg(g),8);case 8:k=h.next();X.v(7);break;case 4:if(null==(n=a.i)||!n.jg(b.input,b.Pa)){X.v(11);break}return X.yield(a.i.Xf(b.input,
b.Pa),12);case 12:return p=X.i,R("kevlar_process_local_innertube_responses_killswitch")||Bv(a,p,b),X.return(p);case 11:return(u=null==(r=b.config)?void 0:r.gg)&&a.h.has(u)&&R("web_memoize_inflight_requests")?t=a.h.get(u):(y=JSON.stringify(b.Pa),L=null!=(H=null==(z=b.ib)?void 0:z.headers)?H:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},L,c)}),I=Object.assign({},b.ib),"POST"===b.ib.method&&(I=Object.assign({},I,{body:y})),(null==(da=b.config)?0:da.Ge)&&qv(b.config.Ge),T=function(){return a.aa.fetch(b.input,
I,b.config)},t=T(),u&&a.h.set(u,t)),X.yield(t,13);
case 13:if((O=X.i)&&"error"in O&&(null==(ba=O)?0:null==(J=ba.error)?0:J.details))for(ca=O.error.details,ha=w(ca),V=ha.next();!V.done;V=ha.next())ab=V.value,(Nc=ab["@type"])&&-1<uv.indexOf(Nc)&&(delete ab["@type"],O=ab);u&&a.h.has(u)&&a.h.delete(u);(null==(Oc=b.config)?0:Oc.He)&&qv(b.config.He);if(O||null==(Pc=a.i)||!Pc.Of(b.input,b.Pa)){X.v(14);break}return X.yield(a.i.Wf(b.input,b.Pa),15);case 15:O=X.i;case 14:return Bv(a,O,b),X.return(O||void 0)}})}
function zv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Vb)?void 0:d.sessionIndex;var h=g.yield;var k=jm(0,{sessionIndex:e});if(!(k instanceof Vd)){var l=new Vd(cb);Wd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},yv(b),f)))})}
function yv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));P("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&
(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Cv=new Er("INNERTUBE_TRANSPORT_TOKEN");var Dv=["share/get_web_player_share_panel"],Ev=["feedback"],Fv=["notification/modify_channel_preference"],Gv=["browse/edit_playlist"],Hv=["subscription/subscribe"],Iv=["subscription/unsubscribe"];function Jv(){}
x(Jv,eu);Jv.prototype.j=function(){return Hv};
Jv.prototype.h=function(a){return hs(a,Zk)||void 0};
Jv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ia.Object.defineProperties(Jv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Kv(){}
x(Kv,eu);Kv.prototype.j=function(){return Iv};
Kv.prototype.h=function(a){return hs(a,Yk)||void 0};
Kv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ia.Object.defineProperties(Kv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Lv(){}
x(Lv,eu);Lv.prototype.j=function(){return Ev};
Lv.prototype.h=function(a){return hs(a,Tk)||void 0};
Lv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ia.Object.defineProperties(Lv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Mv(){}
x(Mv,eu);Mv.prototype.j=function(){return Fv};
Mv.prototype.h=function(a){return hs(a,Xk)||void 0};
Mv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Nv(){}
x(Nv,eu);Nv.prototype.j=function(){return Gv};
Nv.prototype.h=function(a){return hs(a,Wk)||void 0};
Nv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Ov(){}
x(Ov,eu);Ov.prototype.j=function(){return Dv};
Ov.prototype.h=function(a){return hs(a,Vk)};
Ov.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Pv=new Er("NETWORK_SLI_TOKEN");function Qv(a){this.h=a}
Qv.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h&&(e=bc(cc(5,rc(a,"key")))||"/UNKNOWN_PATH",d.h.start(e));f=b;R("wug_networking_gzip_request")&&(f=Zp(b));g=new window.Request(a,f);return h.return(fetch(g).then(function(k){return d.handleResponse(k,c)}).catch(function(k){$s(k)}))})};
Qv.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.qe)&&a.ok?wg(b.qe,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Rf(),c=c.then(function(d){$s(new S("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Qv[Dr]=[new Fr(Pv)];var Rv=new Er("NETWORK_MANAGER_TOKEN");var Sv;function Tv(){var a,b,c;return A(function(d){if(1==d.h)return a=Kr().resolve(Cv),a?d.yield(xv(a),2):($s(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return $s(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Pf;return d.return(c)}$s(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Uv=B.caches,Vv;function Wv(a){var b=a.indexOf(":");return-1===b?{qd:a}:{qd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Xv(){return A(function(a){if(void 0!==Vv)return a.return(Vv);Vv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(Uv.open("test-only"),4);case 4:return d.yield(Uv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Vv)})}
function Yv(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(Xv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Uv.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Wv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Uv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Zv(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(Xv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Gm("cache contains other");return h.yield(Uv.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Wv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function $v(){Tv().then(function(a){a&&(Oo(a),Yv(a),ou(a))})}
function aw(){var a=new Rq;Ki.oa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=Gm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Oo(g);Yv(g);ou(g);return f.return()}c=pu();return f.yield(Zv(),3);case 3:return d=f.i,f.yield(Po(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?$v():a.h.add("publicytnetworkstatus-online",$v,!0,void 0,void 0),f.h=0}})})}
;var gi=ka(["data-"]);function bw(a){a&&(a.dataset?a.dataset[cw()]="true":fi(a))}
function dw(a){return a?a.dataset?a.dataset[cw()]:a.getAttribute("data-loaded"):null}
var ew={};function cw(){return ew.loaded||(ew.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var fw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,gw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function hw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(fw,""),c=c.replace(gw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else iw(a,b,c)}
function iw(a,b,c){c=void 0===c?null:c;var d=jw(a),e=document.getElementById(d),f=e&&dw(e),g=e&&!f;f?b&&b():(b&&(f=xr(d,b),b=""+Qa(b),kw[b]=f),g||(e=lw(a,d,function(){if(!dw(e)){bw(e);Ar(d);var h=Wa(Br,d);Gl(h,0)}},c)))}
function lw(a,b,c,d){d=void 0===d?null:d;var e=Hd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);li(e,Kk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function mw(a){a=jw(a);var b=document.getElementById(a);b&&(Br(a),b.parentNode.removeChild(b))}
function nw(a,b){a&&b&&(a=""+Qa(b),(a=kw[a])&&zr(a))}
function jw(a){var b=document.createElement("a");bi(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(a)}
var kw={};var ow=[],pw=!1;function qw(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ft()){var a=P("PLAYER_VARS",{});if("1"!=rb(a)&&!Gt(a)){var b=function(){pw=!0;"google_ad_status"in window?hl("DCLKSTAT",1):hl("DCLKSTAT",2)};
try{hw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ow.push(Ki.oa(function(){if(!(pw||"google_ad_status"in window)){try{nw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}pw=!0;hl("DCLKSTAT",3)}},5E3))}}}
function rw(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function sw(a){Tr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.ga},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.G},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.G},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(sw,Tr);sw.prototype.ga=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
sw.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
sw.prototype.G=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
sw.prototype.i=function(){this.h=new Map};function tw(a){Tr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.G},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.G},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.G},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(tw,Tr);tw.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
tw.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
tw.prototype.m=function(a,b){a(null==b?void 0:b.event)};
tw.prototype.G=function(a,b){a(null==b?void 0:b.event)};function uw(){this.l=new sw;this.m=new tw}
uw.prototype.install=function(){var a=Ia.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function vw(a){rp.call(this,1,arguments);this.csn=a}
x(vw,rp);var Ap=new sp("screen-created",vw),ww=[],xw=0,yw=new Map,zw=new Map,Aw=new Map;
function Bw(a,b,c,d,e){e=void 0===e?!1:e;for(var f=Cw({cttAuthInfo:tt(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(pb(k)||!k.trackingParams&&!k.veType)&&$s(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=Dw(h,b);if(k.veType&&!zw.has(l)&&!Aw.has(l)&&!e){yw.set(l,[a,b,c,h]);return}h=Dw(c,b);yw.has(h)?Ew(c,b):Aw.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:hb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?Fw("visualElementAttached",f,c):a?Ss("visualElementAttached",c,a,f):zn("visualElementAttached",c,f)}
function Fw(a,b,c){ww.push({Ae:a,payload:c,Vf:void 0,options:b});xw||(xw=Bp())}
function Cp(a){if(ww){for(var b=w(ww),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,zn(c.Ae,c.payload,c.options));ww.length=0}xw=0}
function Dw(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Ew(a,b){a=Dw(a,b);yw.has(a)&&(b=yw.get(a)||[],Bw(b[0],b[1],b[2],[b[3]],!0),yw.delete(a))}
function Cw(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Gw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Gw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=rt(void 0===c?0:c)){a=this.client;d=new kt({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=Dw(d,c);zw.set(f,!0);Ew(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Cw({cttAuthInfo:tt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?Fw("visualElementGestured",f,d):a?Ss("visualElementGestured",d,a,f):zn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Gw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new kt({trackingParams:a}),b,void 0===c?0:c)};
Gw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=rt(d);a||(a=(a=ot(void 0===d?0:d))?new kt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Cw({cttAuthInfo:tt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?Fw("visualElementStateChanged",d,b):a?Ss("visualElementStateChanged",b,a,d):zn("visualElementStateChanged",b,d))}};
function Hw(a,b){if(void 0===b)for(var c=qt(),d=0;d<c.length;d++)void 0!==c[d]&&Hw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Bw(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Iw(){uw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
x(Iw,uw);Iw.prototype.j=function(){zn("finalPayload",{csn:rt()})};
Iw.prototype.h=function(){dt(et)};
Iw.prototype.i=function(){var a=Hw;Gw.h||(Gw.h=new Gw);a(Gw.h)};function Jw(){}
function Kw(){var a=D("ytglobal.storage_");a||(a=new Jw,C("ytglobal.storage_",a));return a}
Jw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Lw()):d.return()})};
function Lw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
C("ytglobal.storageClass_",Jw);function xn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Bl("ytidb_transaction_ended_event_rate_limit_session",.2)}
xn.prototype.Nb=function(a){this.handleError(a)};
xn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Mw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Bl("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Mw(a,b){Kw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Nw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Nw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Nw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Ow(a,b,c){F.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.s=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=eb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.s)}
x(Ow,F);Ow.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){nl(d)}}};
Ow.prototype.P=function(){window.removeEventListener("message",this.s);F.prototype.P.call(this)};function Pw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Ow(!!P("WIDGET_ID_ENFORCE")),b=this.De.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a}
m=Pw.prototype;m.De=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Uc(a,b,c)};
m.Uc=function(){};
m.yc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.yc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ae=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Bc());this.sendMessage("onReady");fb(this.i,this.xd,this);this.i=[]};
m.Bc=function(){return null};
function Qw(a,b){a.sendMessage("infoDelivery",b)}
m.xd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.xd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Rw={},Sw=(Rw["api.invalidparam"]=2,Rw.auth=150,Rw["drm.auth"]=150,Rw["heartbeat.net"]=150,Rw["heartbeat.servererror"]=150,Rw["heartbeat.stop"]=150,Rw["html5.unsupportedads"]=5,Rw["fmt.noneavailable"]=5,Rw["fmt.decode"]=5,Rw["fmt.unplayable"]=5,Rw["html5.missingapi"]=5,Rw["html5.unsupportedlive"]=5,Rw["drm.unavailable"]=5,Rw["mrm.blocked"]=151,Rw);var Tw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Uw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Vw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(Tw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Ww(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Xw(a){Pw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Pe.bind(this));this.addEventListener("onVolumeChange",this.Qe.bind(this));this.addEventListener("onApiChange",this.Ke.bind(this));this.addEventListener("onPlaybackQualityChange",this.Me.bind(this));this.addEventListener("onPlaybackRateChange",this.Ne.bind(this));this.addEventListener("onStateChange",this.Oe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Re.bind(this))}
x(Xw,Pw);m=Xw.prototype;
m.Uc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Uw(a)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Vw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Vw(e);break;case "loadPlaylist":case "cuePlaylist":e=Ww(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Uw(a)&&Qw(this,this.Bc())}};
m.Ec=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Pw.prototype.Ec.call(this,a,b)};
m.yc=function(a,b){var c=this,d=Pw.prototype.yc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.ae.bind(this);this.h.h=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Sw[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Bc=function(){if(!this.api)return null;var a=this.api.getApiInterface();kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Oe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Qw(this,a)};
m.Me=function(a){Qw(this,{playbackQuality:a})};
m.Ne=function(a){Qw(this,{playbackRate:a})};
m.Ke=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Qe=function(){Qw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Pe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Qw(this,a)};
m.Re=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Qw(this,a)};
m.dispose=function(){Pw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Yw(a){F.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.td,this)}
x(Yw,F);m=Yw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,b)};
m.td=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Zw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=$w(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Le.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Le=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,this.Ac(a,b))};
m.Ac=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.P=function(){this.connection.unsubscribe("command",this.td,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.P.call(this)};function ax(a,b){Yw.call(this,b);this.api=a;this.start()}
x(ax,Yw);ax.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
ax.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Zw(a,b){switch(a){case "loadVideoById":return a=Vw(b),[a];case "cueVideoById":return a=Vw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Ww(b),[a];case "cuePlaylist":return a=Ww(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function $w(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ax.prototype.Ac=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Yw.prototype.Ac.call(this,a,b)};
ax.prototype.P=function(){Yw.prototype.P.call(this);delete this.api};function bx(a){a=void 0===a?!1:a;F.call(this);this.h=new K(a);yc(this,this.h)}
Ya(bx,F);bx.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
bx.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
bx.prototype.l=function(a,b){this.Z()||this.h.Za.apply(this.h,arguments)};function cx(a,b,c){bx.call(this);this.j=a;this.i=b;this.id=c}
x(cx,bx);cx.prototype.jb=function(a,b){this.Z()||this.j.jb(this.i,this.id,a,b)};
cx.prototype.P=function(){this.i=this.j=null;bx.prototype.P.call(this)};function dx(a,b,c){F.call(this);this.h=a;this.origin=c;this.i=lr(window,"message",this.j.bind(this));this.connection=new cx(this,a,b);yc(this,this.connection)}
x(dx,F);dx.prototype.jb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
dx.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
dx.prototype.P=function(){mr(this.i);this.h=null;F.prototype.P.call(this)};function ex(){this.state=1;this.h=null}
m=ex.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=yb())?d.createScript(f):f,f=new Db(f,Cb)):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=Jk(a.interpreterSafeUrl).toString());fx(this,d,e,a.program,b,c)}else $s(Error("Cannot initialize botguard without program"))};
function fx(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,hw(c,function(){window[g]?gx(a,d,g,e):(a.state=3,mw(c),$s(new S("Unable to load Botguard","from "+c)))},f)):b?(f=Hd("SCRIPT"),b instanceof Db?(b instanceof Db&&b.constructor===Db?b=b.h:(Na(b),b="type_error:SafeScript"),f.textContent=b,ki(f)):f.textContent=b,f.nonce=Yb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?gx(a,d,g,e):(a.state=4,$s(new S("Unable to load Botguard from JS")))):$s(new S("Unable to load VM; no url or JS provided"))}
function gx(a,b,c,d){a.state=5;try{var e=new Yh({program:b,ee:c,Ee:R("att_web_record_metrics")});e.Ue.then(function(){a.state=6;d&&d(b)});
a.Pc(e)}catch(f){a.state=7,f instanceof Error&&$s(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Sc()?this.Gd({cd:a}):null};
m.dispose=function(){this.Pc(null);this.state=8};
m.Sc=function(){return!!this.h};
m.Gd=function(a){return this.h.Ad(a)};
m.Pc=function(a){wc(this.h);this.h=a};function hx(){var a=D("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function ix(){ex.apply(this,arguments)}
x(ix,ex);ix.prototype.Pc=function(a){var b;null==(b=hx())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ad.bind(a)},C("yt.abuse.playerAttLoader",b),C("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(C("yt.abuse.playerAttLoader",null),C("yt.abuse.playerAttLoaderRun",null))};
ix.prototype.Sc=function(){return!!hx()};
ix.prototype.Gd=function(a){return hx().bgvmc(a)};var jx=new ix;function kx(){return jx.Sc()}
function lx(a){a=void 0===a?{}:a;return jx.invoke(a)}
;function mx(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
mx.prototype.clone=function(){var a=new mx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=tb(c):a[b]=c}return a};var nx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ox(a){a=a||"";if(window.spf){var b=a.match(nx);spf.style.load(a,b?b[1]:"",void 0)}else px(a)}
function px(a){var b=qx(a),c=document.getElementById(b),d=c&&dw(c);d||c&&!d||(c=rx(a,b,function(){if(!dw(c)){bw(c);Ar(b);var e=Wa(Br,b);Gl(e,0)}}))}
function rx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Kk(a);ji(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function qx(a){var b=Hd("A");bi(b,new Jb(a,Kb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(a)}
;function sx(a,b,c,d,e){F.call(this);var f=this;this.l=b;this.webPlayerContextConfig=d;this.sc=e;this.Ba=!1;this.api={};this.ea=this.s=null;this.S=new K;this.h={};this.Y=this.ma=this.elementId=this.Ka=this.config=null;this.W=!1;this.j=this.B=null;this.na={};this.uc=["onReady"];this.lastError=null;this.nb=NaN;this.R={};this.da=0;this.i=this.m=a;yc(this,this.S);tx(this);c?this.da=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(ux(this),vx(this))}
x(sx,F);m=sx.prototype;m.getId=function(){return this.l};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.da&&(clearTimeout(this.da),this.da=0);var b=a||{};b instanceof mx||(b=new mx(b));this.config=b;this.setConfig(a);vx(this);this.isReady()&&wx(this)}};
function ux(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.l,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.l:a.config.attrs.id=a.l);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Ka=a;this.config=xx(a);ux(this);if(!this.ma){var b;this.ma=yx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Ai(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Ai(Number(a)||a))};
function wx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function zx(a){var b=!0,c=Ax(a);c&&a.config&&(b=c.dataset.version===Bx(a));return b&&!!D("yt.player.Application.create")}
function vx(a){if(!a.Z()&&!a.W){var b=zx(a);if(b&&"html5"===(Ax(a)?"html5":null))a.Y="html5",a.isReady()||Cx(a);else if(Dx(a),a.Y="html5",b&&a.j&&a.m)a.m.appendChild(a.j),Cx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=Ex(a,"player_bootstrap_method")?D("yt.player.Application.createAlternate")||D("yt.player.Application.create"):D("yt.player.Application.create");var e=a.config?xx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.sc);Cx(a)};
a.W=!0;b?a.B():(hw(Bx(a),a.B),(b=Fx(a))&&ox(b),Gx(a)&&!c&&C("yt.player.Application.create",null))}}}
function Ax(a){var b=Gd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Cx(a){if(!a.Z()){var b=Ax(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!Ex(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Hx(a)}else a.nb=setTimeout(function(){Cx(a)},50)}}
function Hx(a){tx(a);a.Ba=!0;var b=Ax(a);if(b){a.s=Ix(a,b,"addEventListener");a.ea=Ix(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Ix(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.s&&a.s(g,a.h[g]);wx(a);a.ma&&a.ma(a.api);a.S.Za("onReady",a.api)}
function Ix(a,b,c){var d=b[c];return function(){var e=Ia.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new S("PlayerProxy error in method call",{error:f,method:c,playerId:a.l}),e.level="WARNING",e;}}}
function tx(a){a.Ba=!1;if(a.ea)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ea(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&clearTimeout(Number(c));a.R={};a.s=null;a.ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ka};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ba};
m.addEventListener=function(a,b){var c=this,d=yx(this,b);d&&(0<=eb(this.uc,a)||this.h[a]||(b=Jx(this,a),this.s&&this.s(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=yx(this,b))&&this.S.unsubscribe(a,b)};
function yx(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(){var d=Ia.apply(0,arguments),e=D(b);if(e)try{e.apply(B,d)}catch(f){throw d=new S("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.na[b]=c}return c?c:null}
function Jx(a,b){var c="ytPlayer"+b+a.l;a.h[b]=c;B[c]=function(d){var e=setTimeout(function(){if(!a.Z()){try{a.S.Za(b,null!=d?d:void 0)}catch(h){var f=new S("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.l,data:d});f.level="WARNING";throw f;}f=a.R;var g=String(e);g in f&&delete f[g]}},0);
qb(a.R,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(Ax(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Dx(a){a.cancel();tx(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Ax(a);b&&(zx(a)||!Gx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&nw(Bx(this),this.B);clearTimeout(this.nb);this.W=!1};
m.P=function(){Dx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new S("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.na=null;for(a in this.h)this.h.hasOwnProperty(a)&&(B[this.h[a]]=null);this.Ka=this.config=this.api=null;delete this.m;delete this.i;F.prototype.P.call(this)};
function Gx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Bx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Fx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ex(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function xx(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
;var Kx={},Lx="player_uid_"+(1E9*Math.random()>>>0);function Mx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Gd(c):c;var e=Lx+"_"+Qa(c),f=Kx[e];if(f&&d)return Nx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new sx(c,e,a,b,void 0);Kx[e]=f;zc(f,function(){delete Kx[f.getId()]});
return f.api}
function Nx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ox=null,Px=null,Qx=null;function Rx(){Sx()}
function Tx(){Sx()}
function Sx(){var a=Ox.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Ux(){Ox&&Ox.sendAbandonmentPing&&Ox.sendAbandonmentPing();P("PL_ATT")&&jx.dispose();for(var a=Ki,b=0,c=ow.length;b<c;b++)a.qa(ow[b]);ow.length=0;mw("//static.doubleclick.net/instream/ad_status.js");pw=!1;hl("DCLKSTAT",0);xc(Qx,Px);Ox&&(Ox.removeEventListener("onVideoDataChange",Rx),Ox.destroy())}
;function Vx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&ju(a,b);if(c)return!1;ru(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=mc(a,e);ru(a);f=a+f;var h=void 0===h?ti:h;a:if(h=void 0===h?ti:h,f instanceof Jb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ri&&b.pe(f)){h=new Jb(f,Kb);break a}h=void 0}g=g.location;h=ai(h||Lb);void 0!==h&&(g.href=h)}return!0}
;C("yt.setConfig",hl);C("yt.config.set",hl);C("yt.setMsg",vt);C("yt.msgs.set",vt);C("yt.logging.errors.log",Zs);
C("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}Pt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);mv("embed",["ol"]);c=P("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=vl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&mv("watch",["pbs","pbu","pbp"]);Ox=Mx(a,c);Ox.addEventListener("onVideoDataChange",Rx);Ox.addEventListener("onReady",Tx);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Qx=new Xw(Ox):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Px=new dx(window.parent,a,b),Qx=new ax(Ox,Px.connection));qw();R("ytidb_create_logger_embed_killswitch")||wn();a={};Iw.h||(Iw.h=new Iw);
Iw.h.install((a.flush_logs={callback:function(){Fs()}},a));
br();R("ytidb_clear_embedded_player")&&Ki.oa(function(){var f,g;if(!Sv){var h=Kr(),k={Mc:Rv,Ed:Qv};h.h.set(k.Mc,k);k={bd:{feedbackEndpoint:au(Lv),modifyChannelNotificationPreferenceEndpoint:au(Mv),playlistEditEndpoint:au(Nv),subscribeEndpoint:au(Jv),unsubscribeEndpoint:au(Kv),webPlayerShareEntityServiceEndpoint:au(Ov)}};var l=Zt(),n={};l&&(n.client_location=l);void 0===f&&(f=im());void 0===g&&(g=h.resolve(Rv));wv(k,g,f,n);f={Mc:Cv,Fd:vv.h};h.h.set(f.Mc,f);Sv=h.resolve(Cv)}aw()})});
var Wx=ll(function(){rv();Qt()}),Xx=ll(function(a){a.persisted||(rv(),Qt())}),Yx=ll(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Ux():a.persisted||Ux()}),Zx=ll(Ux);
window.addEventListener?(window.addEventListener("load",Wx),window.addEventListener("pageshow",Xx),window.addEventListener("pagehide",Yx)):window.attachEvent&&(window.attachEvent("onload",Wx),window.attachEvent("onunload",Zx));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=il("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new S(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Zs(e):$s(e))};
ke=at;window.addEventListener("unhandledrejection",function(a){at(a.reason)});
fb(P("ERRORS")||[],function(a){Zs.apply(null,a)});
hl("ERRORS",[]);R("embeds_web_enable_scheduler_to_player_binary")&&nn();C("yt.abuse.player.botguardInitialized",D("yt.abuse.player.botguardInitialized")||kx);C("yt.abuse.player.invokeBotguard",D("yt.abuse.player.invokeBotguard")||lx);C("yt.abuse.dclkstatus.checkDclkStatus",D("yt.abuse.dclkstatus.checkDclkStatus")||rw);C("yt.player.exports.navigate",D("yt.player.exports.navigate")||Vx);C("yt.util.activity.init",D("yt.util.activity.init")||pr);
C("yt.util.activity.getTimeSinceActive",D("yt.util.activity.getTimeSinceActive")||sr);C("yt.util.activity.setTimestamp",D("yt.util.activity.setTimestamp")||qr);}).call(this);
