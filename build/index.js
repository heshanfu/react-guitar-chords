!function(e,r){if("object"===typeof exports&&"object"===typeof module)module.exports=r(require("react"));else if("function"===typeof define&&define.amd)define(["react"],r);else{var t=r("object"===typeof exports?require("react"):e.react);for(var n in t)("object"===typeof exports?exports:e)[n]=t[n]}}(this,function(e){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=7)}([function(e,r){function t(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===t||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(r){try{return s.call(null,e,0)}catch(r){return s.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(r){try{return l.call(null,e)}catch(r){return l.call(this,e)}}}function a(){v&&y&&(v=!1,y.length?d=y.concat(d):h=-1,d.length&&u())}function u(){if(!v){var e=o(a);v=!0;for(var r=d.length;r;){for(y=d,d=[];++h<r;)y&&y[h].run();h=-1,r=d.length}y=null,v=!1,i(e)}}function c(e,r){this.fun=e,this.array=r}function f(){}var s,l,p=e.exports={};!function(){try{s="function"===typeof setTimeout?setTimeout:t}catch(e){s=t}try{l="function"===typeof clearTimeout?clearTimeout:n}catch(e){l=n}}();var y,d=[],v=!1,h=-1;p.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];d.push(new c(e,r)),1!==d.length||v||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.prependListener=f,p.prependOnceListener=f,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(r,t){r.exports=e},function(e,r,t){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,r,t){"use strict";(function(r){function t(e,r,t,o,i,a,u,c){if(n(r),!e){var f;if(void 0===r)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[t,o,i,a,u,c],l=0;f=new Error(r.replace(/%s/g,function(){return s[l++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var n=function(e){};"production"!==r.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=t}).call(r,t(0))},function(e,r,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r,t){"use strict";var n={REAL_Y_MAX:130,X_BASE:20,X_MAX:120,Y_BASE:40,Y_MAX:90};r.a=n},function(e,r,t){"use strict";(function(r){var n=t(2),o=n;if("production"!==r.env.NODE_ENV){var i=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=0,i="Warning: "+e.replace(/%s/g,function(){return t[o++]});"undefined"!==typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(e,r){if(void 0===r)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==r.indexOf("Failed Composite propType: ")&&!e){for(var t=arguments.length,n=Array(t>2?t-2:0),o=2;o<t;o++)n[o-2]=arguments[o];i.apply(void 0,[r].concat(n))}}}e.exports=o}).call(r,t(0))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(8);r.default=n.a},function(e,r,t){"use strict";function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function a(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var u=t(1),c=t.n(u),f=t(9),s=t.n(f),l=t(14),p=t(15),y=t(16),d=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),v=function(e){function r(){return o(this,r),i(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return a(r,e),d(r,[{key:"render",value:function(){var e={stroke:"rgb(0,0,0)",strokeWidth:.2},r=this.props.frets.filter(function(e){return"number"===typeof e}),t=Math.min.apply(Math,n(r)),o=Math.max.apply(Math,n(r)),i=o-t,a=i>4?i:4,u={stroke:"rgb(0,0,0)",strokeWidth:.5},f=this.props.frets.length-1;return c.a.createElement("svg",{width:"150",height:"150",style:{border:"1px solid red"}},c.a.createElement("text",{x:"5",y:"15"},this.props.chordName),c.a.createElement(p.a,{lineStyles:u,stringCount:f}),c.a.createElement(l.a,{fretStyles:e,numberFretsToRender:a}),c.a.createElement(y.a,{fingering:this.props.fingering,frets:this.props.frets,lowestFret:t,numberFretsToRender:a}))}}]),r}(u.Component);v.propTypes={chordName:s.a.string,frets:s.a.arrayOf(s.a.oneOfType([s.a.string,s.a.number])),fingering:s.a.arrayOf(s.a.oneOfType([s.a.string,s.a.number]))},r.a=v},function(e,r,t){(function(r){if("production"!==r.env.NODE_ENV){var n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n};e.exports=t(10)(o,!0)}else e.exports=t(13)()}).call(r,t(0))},function(e,r,t){"use strict";(function(r){var n=t(2),o=t(3),i=t(6),a=t(11),u=t(4),c=t(12);e.exports=function(e,t){function f(e){var r=e&&(j&&e[j]||e[S]);if("function"===typeof r)return r}function s(e,r){return e===r?0!==e||1/e===1/r:e!==e&&r!==r}function l(e){this.message=e,this.stack=""}function p(e){function n(n,f,s,p,y,d,v){if(p=p||k,d=d||s,v!==u)if(t)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==r.env.NODE_ENV&&"undefined"!==typeof console){var h=p+":"+s;!a[h]&&c<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",d,p),a[h]=!0,c++)}return null==f[s]?n?new l(null===f[s]?"The "+y+" `"+d+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+y+" `"+d+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(f,s,p,y,d)}if("production"!==r.env.NODE_ENV)var a={},c=0;var f=n.bind(null,!1);return f.isRequired=n.bind(null,!0),f}function y(e){function r(r,t,n,o,i,a){var u=r[t];if(x(u)!==e)return new l("Invalid "+o+" `"+i+"` of type `"+_(u)+"` supplied to `"+n+"`, expected `"+e+"`.");return null}return p(r)}function d(e){function r(r,t,n,o,i){if("function"!==typeof e)return new l("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=r[t];if(!Array.isArray(a)){return new l("Invalid "+o+" `"+i+"` of type `"+x(a)+"` supplied to `"+n+"`, expected an array.")}for(var c=0;c<a.length;c++){var f=e(a,c,n,o,i+"["+c+"]",u);if(f instanceof Error)return f}return null}return p(r)}function v(e){function r(r,t,n,o,i){if(!(r[t]instanceof e)){var a=e.name||k;return new l("Invalid "+o+" `"+i+"` of type `"+A(r[t])+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}return null}return p(r)}function h(e){function t(r,t,n,o,i){for(var a=r[t],u=0;u<e.length;u++)if(s(a,e[u]))return null;return new l("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+n+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?p(t):("production"!==r.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),n.thatReturnsNull)}function m(e){function r(r,t,n,o,i){if("function"!==typeof e)return new l("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var a=r[t],c=x(a);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var f in a)if(a.hasOwnProperty(f)){var s=e(a,f,n,o,i+"."+f,u);if(s instanceof Error)return s}return null}return p(r)}function b(e){function t(r,t,n,o,i){for(var a=0;a<e.length;a++){if(null==(0,e[a])(r,t,n,o,i,u))return null}return new l("Invalid "+o+" `"+i+"` supplied to `"+n+"`.")}if(!Array.isArray(e))return"production"!==r.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),n.thatReturnsNull;for(var o=0;o<e.length;o++){var a=e[o];if("function"!==typeof a)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",T(a),o),n.thatReturnsNull}return p(t)}function g(e){function r(r,t,n,o,i){var a=r[t],c=x(a);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var f in e){var s=e[f];if(s){var p=s(a,f,n,o,i+"."+f,u);if(p)return p}}return null}return p(r)}function E(e){function r(r,t,n,o,i){var c=r[t],f=x(c);if("object"!==f)return new l("Invalid "+o+" `"+i+"` of type `"+f+"` supplied to `"+n+"`, expected `object`.");var s=a({},r[t],e);for(var p in s){var y=e[p];if(!y)return new l("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=y(c,p,n,o,i+"."+p,u);if(d)return d}return null}return p(r)}function O(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(O);if(null===r||e(r))return!0;var t=f(r);if(!t)return!1;var n,o=t.call(r);if(t!==r.entries){for(;!(n=o.next()).done;)if(!O(n.value))return!1}else for(;!(n=o.next()).done;){var i=n.value;if(i&&!O(i[1]))return!1}return!0;default:return!1}}function w(e,r){return"symbol"===e||("Symbol"===r["@@toStringTag"]||"function"===typeof Symbol&&r instanceof Symbol)}function x(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":w(r,e)?"symbol":r}function _(e){if("undefined"===typeof e||null===e)return""+e;var r=x(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function T(e){var r=_(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}function A(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var j="function"===typeof Symbol&&Symbol.iterator,S="@@iterator",k="<<anonymous>>",N={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:function(){return p(n.thatReturnsNull)}(),arrayOf:d,element:function(){function r(r,t,n,o,i){var a=r[t];if(!e(a)){return new l("Invalid "+o+" `"+i+"` of type `"+x(a)+"` supplied to `"+n+"`, expected a single ReactElement.")}return null}return p(r)}(),instanceOf:v,node:function(){function e(e,r,t,n,o){return O(e[r])?null:new l("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}return p(e)}(),objectOf:m,oneOf:h,oneOfType:b,shape:g,exact:E};return l.prototype=Error.prototype,N.checkPropTypes=c,N.PropTypes=N,N}}).call(r,t(0))},function(e,r,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map(function(e){return r[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,u,c=n(e),f=1;f<arguments.length;f++){t=Object(arguments[f]);for(var s in t)i.call(t,s)&&(c[s]=t[s]);if(o){u=o(t);for(var l=0;l<u.length;l++)a.call(t,u[l])&&(c[u[l]]=t[u[l]])}}return c}},function(e,r,t){"use strict";(function(r){function n(e,t,n,c,f){if("production"!==r.env.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var l;try{o("function"===typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",n,s,typeof e[s]),l=e[s](t,s,c,n,null,a)}catch(e){l=e}if(i(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",n,s,typeof l),l instanceof Error&&!(l.message in u)){u[l.message]=!0;var p=f?f():"";i(!1,"Failed %s type: %s%s",n,l.message,null!=p?p:"")}}}if("production"!==r.env.NODE_ENV)var o=t(3),i=t(6),a=t(4),u={};e.exports=n}).call(r,t(0))},function(e,r,t){"use strict";var n=t(2),o=t(3),i=t(4);e.exports=function(){function e(e,r,t,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r};return t.checkPropTypes=n,t.PropTypes=t,t}},function(e,r,t){"use strict";var n=t(1),o=t.n(n),i=t(5),a=function(e){var r=e.numberFretsToRender,t=e.fretStyles,n=i.a.Y_MAX/r,a=r+2;return Array.from(new Array(a)).map(function(e,r){if(0===r)return o.a.createElement("line",{key:r,style:t,x1:i.a.X_BASE,x2:i.a.X_MAX,y1:i.a.Y_BASE,y2:i.a.Y_BASE});var a=i.a.Y_BASE+n*(r-1);return o.a.createElement("line",{key:r,style:t,x1:i.a.X_BASE,x2:i.a.X_MAX,y1:a,y2:a})})};r.a=a},function(e,r,t){"use strict";var n=t(1),o=t.n(n),i=t(5),a=function(e){var r=e.stringCount,t=e.lineStyles;return Array.from(new Array(r+1)).map(function(e,n){var a=i.a.X_MAX-i.a.X_BASE,u=a/r,c=i.a.X_BASE+u*n;return o.a.createElement("line",{key:n,style:t,x1:c,x2:c,y1:i.a.Y_BASE,y2:i.a.REAL_Y_MAX})})};r.a=a},function(e,r,t){"use strict";var n=t(1),o=t.n(n),i=t(5),a=function(e){var r=e.frets,t=e.fingering,n=e.numberFretsToRender,a=e.lowestFret,u=[],c=i.a.X_MAX-i.a.X_BASE,f=c/5,s=r.includes(0),l=i.a.Y_MAX/n;return s||u.push(o.a.createElement("text",{key:"open-chord-fret-label",x:i.a.X_MAX+10,y:i.a.Y_BASE,fill:"black"},a)),r.forEach(function(e,r){if("x"===e||0===e){var n=i.a.X_BASE+f*r-4;return u.push(o.a.createElement("text",{key:"zero-fret-"+r,x:n,y:i.a.Y_BASE-3},e))}var c=i.a.X_BASE+f*r,p=void 0;if(p=s?i.a.Y_BASE+l*e-l/2:i.a.Y_BASE+l*(e-a+1)-l/2,u.push(o.a.createElement("circle",{cx:c,cy:p,fill:"black",key:"fingering-"+r,r:"8"})),t){var y=t[r];u.push(o.a.createElement("text",{fill:"white",key:"fingering-text-"+r,textAnchor:"middle",x:c,y:p+5},y))}}),u};r.a=a}])});