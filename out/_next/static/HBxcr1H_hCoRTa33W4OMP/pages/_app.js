(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(e,t,n){e.exports=n(103)},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.flush=function(){var e=a.cssRules();return a.flush(),e};var o,i=n(0),s=n(104);var a=new((o=s)&&o.__esModule?o:{default:o}).default,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.prevProps={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.styleId!==e.styleId||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){a.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.styleId&&a.remove(this.prevProps),a.add(this.props),this.prevProps=this.props),null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return a.computeId(t,n)}).join(" ")}}]),t}();t.default=u},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(105)),i=s(n(106));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return r(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),i=t+r;return e[i]||(e[i]="jsx-"+(0,o.default)(t+"-"+r)),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=a},105:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},106:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,l=t.isBrowser,c=void 0===l?"undefined"!=typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"==typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}return n(e,[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}]),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n(45))},107:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=y,t.default=void 0;var o=r(n(48)),i=r(n(16)),s=r(n(17)),a=r(n(25)),u=r(n(26)),l=r(n(27)),c=r(n(22)),f=r(n(0)),p=r(n(28)),d=r(n(108)),h=function(e){function t(){return(0,i.default)(this,t),(0,a.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return null}}]),t}(f.default.Component);(0,c.default)(h,"contextTypes",{headManager:p.default.object});var m="next-head";function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return[f.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var v=["name","httpEquiv","charSet","itemProp","property"],_=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var b=(0,d.default)(function(e){return e.map(function(e){return f.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return f.default.Fragment&&t.type===f.default.Fragment?e.concat(f.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(y("")).filter(Boolean).filter((t=new o.default,n=new o.default,r=new o.default,i={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var s=0,a=v.length;s<a;s++){var u=v[s];if(e.props.hasOwnProperty(u))if("charSet"===u){if(r.has(u))return!1;r.add(u)}else{var l=e.props[u],c=i[u]||new o.default;if(c.has(l)&&-1===_.indexOf(l))return!1;c.add(l),i[u]=c}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+m,r=e.key||t;return f.default.cloneElement(e,{key:r,className:n})});var t,n,r,i},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(h);t.default=b},108:function(e,t,n){"use strict";var r=n(32),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,y=new d.default;function v(r){o=e((0,p.default)(y)),_.canUseDOM?t.call(r,o):n&&(o=n(o))}var _=function(e){function t(e){var n;return(0,i.default)(this,t),n=(0,s.default)(this,(0,a.default)(t).call(this,e)),t.canUseDOM||(y.add((0,c.default)((0,c.default)(n))),v((0,c.default)((0,c.default)(n)))),n}return(0,l.default)(t,e),(0,u.default)(t,null,[{key:"peek",value:function(){return o}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,y.clear(),e}}]),(0,u.default)(t,[{key:"componentDidMount",value:function(){y.add(this),v(this)}},{key:"componentDidUpdate",value:function(){v(this)}},{key:"componentWillUnmount",value:function(){y.delete(this),v(this)}},{key:"render",value:function(){return h.default.createElement(r,null,this.props.children)}}]),t}(h.Component);return(0,f.default)(_,"canUseDOM","undefined"!=typeof window),(0,f.default)(_,"contextTypes",r.contextTypes),(0,f.default)(_,"displayName","SideEffect(".concat((0,m.getDisplayName)(r),")")),_}};var i=o(n(16)),s=o(n(25)),a=o(n(26)),u=o(n(17)),l=o(n(27)),c=o(n(59)),f=o(n(22)),p=o(n(109)),d=o(n(48)),h=r(n(0)),m=n(36)},109:function(e,t,n){var r=n(110),o=n(111),i=n(119);e.exports=function(e){return r(e)||o(e)||i()}},110:function(e,t,n){var r=n(69);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},111:function(e,t,n){var r=n(112),o=n(116);e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},112:function(e,t,n){e.exports=n(113)},113:function(e,t,n){n(30),n(114),e.exports=n(2).Array.from},114:function(e,t,n){"use strict";var r=n(24),o=n(3),i=n(42),s=n(91),a=n(92),u=n(54),l=n(115),c=n(68);o(o.S+o.F*!n(95)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,f,p=i(e),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,y=void 0!==m,v=0,_=c(p);if(y&&(m=r(m,h>2?arguments[2]:void 0,2)),null==_||d==Array&&a(_))for(n=new d(t=u(p.length));t>v;v++)l(n,v,y?m(p[v],v):p[v]);else for(f=_.call(p),n=new d;!(o=f.next()).done;v++)l(n,v,y?s(f,m,[o.value,v],!0):o.value);return n.length=v,n}})},115:function(e,t,n){"use strict";var r=n(20),o=n(46);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},116:function(e,t,n){e.exports=n(117)},117:function(e,t,n){n(44),n(30),e.exports=n(118)},118:function(e,t,n){var r=n(56),o=n(13)("iterator"),i=n(43);e.exports=n(2).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(r(t))}},119:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},120:function(e,t,n){e.exports=n(250)},152:function(e,t,n){e.exports=n(107)},249:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(326),{page:e.exports.default}})},250:function(e,t,n){"use strict";var r=n(32),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=w,t.Container=t.default=void 0;var i=o(n(65)),s=o(n(66)),a=o(n(251)),u=o(n(16)),l=o(n(17)),c=o(n(25)),f=o(n(26)),p=o(n(27)),d=o(n(22)),h=r(n(0)),m=o(n(28)),y=n(36),v=n(58),_=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(0,f.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=w(t);return h.default.createElement(b,null,h.default.createElement(n,(0,a.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,s.default)(i.default.mark(function e(t){var n,r,o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,y.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);t.default=_,(0,d.default)(_,"childContextTypes",{headManager:m.default.object,router:m.default.object});var b=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=b;var g=(0,y.execOnce)(function(){0});function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return g(),r},get pathname(){return g(),t},get asPath(){return g(),n},back:function(){g(),e.back()},push:function(t,n){return g(),e.push(t,n)},pushTo:function(t,n){g();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return g(),e.replace(t,n)},replaceTo:function(t,n){g();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},251:function(e,t,n){var r=n(102);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},326:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r),i=n(0),s=n.n(i),a=n(120),u=n.n(a),l=n(152),c=n.n(l),f=n(15);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,m(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,s.a.Component),n=t,(r=[{key:"render",value:function(){return s.a.createElement("footer",{className:"jsx-1387001933 footer__wrapper"},s.a.createElement("div",{className:"jsx-1387001933 container"},s.a.createElement("h3",{className:"jsx-1387001933"},"@ 2018 eEducation Albert AB | All rights reserved"),s.a.createElement("div",{className:"jsx-1387001933 social_links"},s.a.createElement("h2",{className:"jsx-1387001933"},this.props.t("Follow Us")),s.a.createElement("ul",{className:"jsx-1387001933"},s.a.createElement("li",{className:"jsx-1387001933"},"Facebook"),s.a.createElement("li",{className:"jsx-1387001933"},"Instagram"))),s.a.createElement("div",{className:"jsx-1387001933 more_info"},s.a.createElement("h2",{className:"jsx-1387001933"},this.props.t("more information")),s.a.createElement("a",{href:"#",className:"jsx-1387001933"},"Frequently asked questions"),s.a.createElement("a",{href:"#",className:"jsx-1387001933"},"Terms & Conditions")),s.a.createElement("div",{className:"jsx-1387001933 company_info"},s.a.createElement("h2",{className:"jsx-1387001933"},this.props.t("company information")),s.a.createElement("a",{href:"#",className:"jsx-1387001933"},"About Albert"),s.a.createElement("a",{href:"#",className:"jsx-1387001933"},"Press"),s.a.createElement("a",{href:"#",className:"jsx-1387001933"},"Contact us")),s.a.createElement("div",{className:"jsx-1387001933 albert_header"},s.a.createElement("h1",{className:"jsx-1387001933"},"albert"))),s.a.createElement(o.a,{styleId:"1387001933",css:[".footer__wrapper.jsx-1387001933{background-color:#68B8CA;padding-top:100px;margin:0px;}",".container.jsx-1387001933{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}",".company_info.jsx-1387001933 a.jsx-1387001933,.more_info.jsx-1387001933 a.jsx-1387001933{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;color:#fff;margin:5px 0px 5px 0px;-webkit-text-decoration:none;text-decoration:none;}",".social_links.jsx-1387001933,.company_info.jsx-1387001933,.more_info.jsx-1387001933,.albert_header.jsx-1387001933{margin:20px;}",".social_links.jsx-1387001933 ul.jsx-1387001933{list-style-type:none;}","h1.jsx-1387001933{color:#fff;font-size:30pt;}","h2.jsx-1387001933{color:#fff;font-size:18pt;text-transform:uppercase;}","h3.jsx-1387001933{font-size:14pt;color:#fff;text-align:center;margin-bottom:10px;}","a.jsx-1387001933{font-size:16pt;}","@media (min-width:600px){.social_links.jsx-1387001933,.company_info.jsx-1387001933,.more_info.jsx-1387001933{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}}"]}))}}])&&d(n.prototype,r),i&&d(n,i),t}(),_=Object(f.withNamespaces)("footer")(v);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,S(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,u.a),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return s.a.createElement(a.Container,null,s.a.createElement(c.a,null,s.a.createElement("title",{className:"jsx-779296470"},"Albert - din digitala mattelärare"),s.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-779296470"})),s.a.createElement(o.a,{styleId:"779296470",css:["@font-face{font-family:'Bariol';src:url('/static/fonts/Bariol/Bariol.woff2') format('woff2'), url('/static/fonts/Bariol/Bariol.woff') format('woff');font-weight:normal;font-style:normal;}","@font-face{font-family:'Bariol';src:url('/static/fonts/Bariol/Bariol-Bold.woff2') format('woff2'), url('/static/fonts/Bariol/Bariol-Bold.woff') format('woff');font-weight:bold;font-style:normal;}","html{font-size:62.5%;}","body{background-color:#F6F5F9;font-family:Bariol,Arial,sans-serif;color:#55556b;margin:0;font-size:1.6rem;}",".container{width:1172px;margin-left:auto;margin-right:auto;}","@media (max-width:1200px){.container{width:100%;}}",".button{background-color:#EF7B8F;color:white;font-size:2.5rem;font-weight:bold;padding:15px 35px;text-transform:uppercase;border-radius:30px;-webkit-text-decoration:none;text-decoration:none;}"]}),s.a.createElement(t,g({},n,{className:"jsx-779296470 "+(null!=n.className&&n.className||"")})),s.a.createElement(_,null))}}])&&w(n.prototype,r),i&&w(n,i),t}();t.default=Object(f.appWithTranslation)(k)}},[[249,1,0]]]);