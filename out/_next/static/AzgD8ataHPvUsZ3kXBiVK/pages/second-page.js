(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{316:function(e,n,t){__NEXT_REGISTER_PAGE("/second-page",function(){return e.exports=t(317),{page:e.exports.default}})},317:function(e,n,t){"use strict";t.r(n);var r=t(19),o=t.n(r),a=t(0),u=t.n(a),c=t(15);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n,t,r,o,a,u){try{var c=e[a](u),i=c.value}catch(e){return void t(e)}c.done?n(i):Promise.resolve(i).then(r,o)}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var b=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,s(n).apply(this,arguments))}var t,r,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,u.a.Component),t=n,r=[{key:"render",value:function(){var e=this.props.t;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,e("h1")),u.a.createElement(c.Link,{href:"/"},u.a.createElement("a",null,e("back-to-home"))),u.a.createElement("button",{onClick:function(){return c.i18n.changeLanguage("en"===c.i18n.language?"sv":"en")}},e("change-locale")),u.a.createElement(c.Link,{href:"/second-page"},u.a.createElement("a",null,e("to-second-page"))))}}],a=[{key:"getInitialProps",value:function(){var e,n=(e=o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["second-page"]});case 1:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function u(e){f(a,r,o,u,c,"next",e)}function c(e){f(a,r,o,u,c,"throw",e)}u(void 0)})});return function(){return n.apply(this,arguments)}}()}],r&&p(t.prototype,r),a&&p(t,a),n}();n.default=Object(c.withNamespaces)("second-page")(b)}},[[316,1,0]]]);