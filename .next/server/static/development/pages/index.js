module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Landing/Hero.js":
/*!************************************!*\
  !*** ./components/Landing/Hero.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Hero =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hero).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4144463311" + " " + "hero__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4144463311" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4144463311" + " " + "title"
      }, "Albert teaches your child mathematics!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-4144463311" + " " + "ingress"
      }, "Enable your child to learn mathematics at desired pace in an engaging and fun way! Create an account for your child today!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "jsx-4144463311" + " " + "button"
      }, "Free trial 14 days")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4144463311",
        css: ".hero__wrapper.jsx-4144463311{padding-bottom:10rem;padding-top:10rem;}.title.jsx-4144463311{color:#EF7B8F;margin-top:0;font-size:5.4rem;font-weight:bold;}.ingress.jsx-4144463311{color:#EF7B8F;font-size:3rem;font-weight:bold;line-height:4.5rem;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9IZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVc0QixBQUc4QyxBQUlQLEFBTUEsY0FMRCxBQU1FLE9BVkcsTUFLRCxFQU1BLFVBVnJCLEtBS3FCLEVBTUUsZUFMdkIsSUFNdUIsbUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9IZXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBIZXJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BbGJlcnQgdGVhY2hlcyB5b3VyIGNoaWxkIG1hdGhlbWF0aWNzITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZ3Jlc3NcIj5FbmFibGUgeW91ciBjaGlsZCB0byBsZWFybiBtYXRoZW1hdGljcyBhdCBkZXNpcmVkIHBhY2UgaW4gYW4gZW5nYWdpbmcgYW5kIGZ1biB3YXkhIENyZWF0ZSBhbiBhY2NvdW50IGZvciB5b3VyIGNoaWxkIHRvZGF5ITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCIgaHJlZj1cIiNcIj5GcmVlIHRyaWFsIDE0IGRheXM8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuaGVyb19fd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTByZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRUY3QjhGO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNS40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmluZ3Jlc3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNFRjdCOEY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0LjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybyJdfQ== */\n/*@ sourceURL=/Users/joakim/Desktop/dev/albert-web-next/components/Landing/Hero.js */"
      }));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Landing/Trial.js":
/*!*************************************!*\
  !*** ./components/Landing/Trial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Trial =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Trial, _React$Component);

  function Trial() {
    _classCallCheck(this, Trial);

    return _possibleConstructorReturn(this, _getPrototypeOf(Trial).apply(this, arguments));
  }

  _createClass(Trial, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4099655911" + " " + "trial__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4099655911" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-4099655911" + " " + "title"
      }, "Why not try now?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-4099655911"
      }, "No commitments, no lock-in periods, no up front payments.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-4099655911"
      }), "Try 14 days for free and cancel anytime."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "jsx-4099655911" + " " + "button"
      }, "Free trial 14 days")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4099655911",
        css: ".trial__wrapper.jsx-4099655911{margin-top:13rem;}.container.jsx-4099655911{text-align:center;}.title.jsx-4099655911{font-size:4.5rem;font-weight:bold;margin:0;}p.jsx-4099655911{font-size:2.6rem;line-height:3.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9UcmlhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXNEIsQUFHc0MsQUFHQyxBQUdELEFBS0EsaUJBVnJCLEFBTXFCLEFBS0UsQ0FSdkIsZ0JBSWEsRUFLYixPQUpBIiwiZmlsZSI6Ii9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9UcmlhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgVHJpYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpYWxfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5XaHkgbm90IHRyeSBub3c/PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gY29tbWl0bWVudHMsIG5vIGxvY2staW4gcGVyaW9kcywgbm8gdXAgZnJvbnQgcGF5bWVudHMuPGJyIC8+VHJ5IDE0IGRheXMgZm9yIGZyZWUgYW5kIGNhbmNlbCBhbnl0aW1lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCIgaHJlZj1cIiNcIj5GcmVlIHRyaWFsIDE0IGRheXM8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50cmlhbF9fd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbCJdfQ== */\n/*@ sourceURL=/Users/joakim/Desktop/dev/albert-web-next/components/Landing/Trial.js */"
      }));
    }
  }]);

  return Trial;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Trial);

/***/ }),

/***/ "./components/Landing/USP.js":
/*!***********************************!*\
  !*** ./components/Landing/USP.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var USP =
/*#__PURE__*/
function (_React$Component) {
  _inherits(USP, _React$Component);

  function USP() {
    _classCallCheck(this, USP);

    return _possibleConstructorReturn(this, _getPrototypeOf(USP).apply(this, arguments));
  }

  _createClass(USP, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2585628197" + " " + "usp__container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2585628197" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2585628197" + " " + "usp__item usp__item--right usp__item--plus"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2585628197" + " " + "usp__title"
      }, "Research-based content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2585628197"
      }, "Content based on years of research developed by highly experienced teachers make sure your child learns the right things in the right order. All of it.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2585628197" + " " + "usp__item usp__item--division"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2585628197" + " " + "usp__title"
      }, "Interactive excercises"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2585628197"
      }, "The interactive way of solving exercises will help your child understand and learn mathematics with a high level of enthusiasm and engagement enhancing the learning experience.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2585628197" + " " + "usp__item usp__item--right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2585628197" + " " + "usp__title"
      }, "Gamified experience"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2585628197"
      }, "Gamified learning journey with unlocking of new levels, challenges and continuous positive feedbck from now on bring great value of child's screentime."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2585628197",
        css: ".usp__container.jsx-2585628197{margin-top:-10rem;margin-bottom:15rem;}.container.jsx-2585628197{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.usp__title.jsx-2585628197{font-size:4.5rem;font-weight:bold;}.usp__item.jsx-2585628197{margin-top:4rem;width:calc(50% - 2rem);position:relative;}.usp__item--right.jsx-2585628197{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.usp__item--plus.jsx-2585628197:before{content:\"\";position:absolute;top:-100px;z-index:-1;width:110%;height:250%;-webkit-transform:rotate(15deg);-ms-transform:rotate(15deg);transform:rotate(15deg);background:url('static/assets/images/addition.svg');background-repeat:no-repeat;background-position:center;background-size:contain;-webkit-animation:animatedAddition-jsx-2585628197 5s linear infinite alternate;animation:animatedAddition-jsx-2585628197 5s linear infinite alternate;}.usp__item--division.jsx-2585628197:before{content:\"\";position:absolute;top:-100px;z-index:-1;width:100%;height:200%;background:url('static/assets/images/division.svg');background-repeat:no-repeat;background-position:center;background-size:contain;-webkit-animation:animatedBackground-jsx-2585628197 7.5s linear infinite alternate;animation:animatedBackground-jsx-2585628197 7.5s linear infinite alternate;}@-webkit-keyframes animatedBackground-jsx-2585628197{from{-webkit-transform:translate(0px);-ms-transform:translate(0px);transform:translate(0px);}to{-webkit-transform:translatey(-50px) translatex(10px);-ms-transform:translatey(-50px) translatex(10px);transform:translatey(-50px) translatex(10px);}}@keyframes animatedBackground-jsx-2585628197{from{-webkit-transform:translate(0px);-ms-transform:translate(0px);transform:translate(0px);}to{-webkit-transform:translatey(-50px) translatex(10px);-ms-transform:translatey(-50px) translatex(10px);transform:translatey(-50px) translatex(10px);}}@-webkit-keyframes animatedAddition-jsx-2585628197{from{-webkit-transform:rotate(15deg) translate(0px);-ms-transform:rotate(15deg) translate(0px);transform:rotate(15deg) translate(0px);}to{-webkit-transform:rotate(12deg) translatey(-20px) translatex(-10px);-ms-transform:rotate(12deg) translatey(-20px) translatex(-10px);transform:rotate(12deg) translatey(-20px) translatex(-10px);}}@keyframes animatedAddition-jsx-2585628197{from{-webkit-transform:rotate(15deg) translate(0px);-ms-transform:rotate(15deg) translate(0px);transform:rotate(15deg) translate(0px);}to{-webkit-transform:rotate(12deg) translatey(-20px) translatex(-10px);-ms-transform:rotate(12deg) translatey(-20px) translatex(-10px);transform:rotate(12deg) translatey(-20px) translatex(-10px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9VU1AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0I0QixBQUcyQyxBQUlMLEFBS0ksQUFRRCxBQU1JLEFBSVQsQUFlQSxBQWVrQixBQUdvQixBQU1OLEFBR3FCLFdBekM5QyxBQWVBLEtBekJLLENBUk4sQ0FURyxXQTRCVCxBQWVBLEtBakNmLElBVEEsQ0FpQnNCLENBV1AsQUFlQSxXQWRBLEFBZUEsTUExQmYsS0FZZ0IsQUFlQSxVQXZCaEIsRUFuQjBCLEFBNEJFLEFBZTRCLGFBVXBELHVDQVQ0QixHQWtCNUIsa0JBTkEsS0F2RHVCLEVBNENJLElBaEJ5Qix1QkFpQjVCLFdBbUJ4QixhQWxCNEQsS0FqQmhDLDRCQUNELHVCQTdCL0IsSUE4QjRCLHdCQUNnQywwRUFlNUQsNEVBZEEiLCJmaWxlIjoiL1VzZXJzL2pvYWtpbS9EZXNrdG9wL2Rldi9hbGJlcnQtd2ViLW5leHQvY29tcG9uZW50cy9MYW5kaW5nL1VTUC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFVTUCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c3BfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNwX19pdGVtIHVzcF9faXRlbS0tcmlnaHQgdXNwX19pdGVtLS1wbHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXNwX190aXRsZVwiPlJlc2VhcmNoLWJhc2VkIGNvbnRlbnQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29udGVudCBiYXNlZCBvbiB5ZWFycyBvZiByZXNlYXJjaCBkZXZlbG9wZWQgYnkgaGlnaGx5IGV4cGVyaWVuY2VkIHRlYWNoZXJzIG1ha2Ugc3VyZSB5b3VyIGNoaWxkIGxlYXJucyB0aGUgcmlnaHQgdGhpbmdzIGluIHRoZSByaWdodCBvcmRlci4gQWxsIG9mIGl0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNwX19pdGVtIHVzcF9faXRlbS0tZGl2aXNpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1c3BfX3RpdGxlXCI+SW50ZXJhY3RpdmUgZXhjZXJjaXNlczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgaW50ZXJhY3RpdmUgd2F5IG9mIHNvbHZpbmcgZXhlcmNpc2VzIHdpbGwgaGVscCB5b3VyIGNoaWxkIHVuZGVyc3RhbmQgYW5kIGxlYXJuIG1hdGhlbWF0aWNzIHdpdGggYSBoaWdoIGxldmVsIG9mIGVudGh1c2lhc20gYW5kIGVuZ2FnZW1lbnQgZW5oYW5jaW5nIHRoZSBsZWFybmluZyBleHBlcmllbmNlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNwX19pdGVtIHVzcF9faXRlbS0tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1c3BfX3RpdGxlXCI+R2FtaWZpZWQgZXhwZXJpZW5jZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5HYW1pZmllZCBsZWFybmluZyBqb3VybmV5IHdpdGggdW5sb2NraW5nIG9mIG5ldyBsZXZlbHMsIGNoYWxsZW5nZXMgYW5kIGNvbnRpbnVvdXMgcG9zaXRpdmUgZmVlZGJjayBmcm9tIG5vdyBvbiBicmluZyBncmVhdCB2YWx1ZSBvZiBjaGlsZCdzIHNjcmVlbnRpbWUuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC51c3BfX2NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnVzcF9fdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudXNwX19jb250ZW50IHtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnVzcF9faXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudXNwX19pdGVtLS1yaWdodCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC51c3BfX2l0ZW0tLXBsdXM6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3N0YXRpYy9hc3NldHMvaW1hZ2VzL2FkZGl0aW9uLnN2ZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZWRBZGRpdGlvbiA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnVzcF9faXRlbS0tZGl2aXNpb246YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3N0YXRpYy9hc3NldHMvaW1hZ2VzL2RpdmlzaW9uLnN2ZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZWRCYWNrZ3JvdW5kIDcuNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYW5pbWF0ZWRCYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC01MHB4KSB0cmFuc2xhdGV4KDEwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBhbmltYXRlZEFkZGl0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKSB0cmFuc2xhdGUoMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZykgdHJhbnNsYXRleSgtMjBweCkgdHJhbnNsYXRleCgtMTBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVU1AiXX0= */\n/*@ sourceURL=/Users/joakim/Desktop/dev/albert-web-next/components/Landing/USP.js */"
      }));
    }
  }]);

  return USP;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (USP);

/***/ }),

/***/ "./components/Landing/USPGallery.js":
/*!******************************************!*\
  !*** ./components/Landing/USPGallery.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var USPGallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(USPGallery, _React$Component);

  function USPGallery() {
    _classCallCheck(this, USPGallery);

    return _possibleConstructorReturn(this, _getPrototypeOf(USPGallery).apply(this, arguments));
  }

  _createClass(USPGallery, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1035365099"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1035365099" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-1035365099" + " " + "usp__list"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1035365099" + " " + "usp__list__item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1035365099" + " " + "list__item__title"
      }, "Based on years of research")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1035365099" + " " + "usp__list__item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1035365099" + " " + "list__item__title"
      }, "Individual learning experience")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1035365099" + " " + "usp__list__item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1035365099" + " " + "list__item__title"
      }, "Developed by teachers")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1035365099" + " " + "usp__list__item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1035365099" + " " + "list__item__title"
      }, "Based on curriculum in school")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1035365099" + " " + "usp__list__item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1035365099" + " " + "list__item__title"
      }, "Gamified learning journey")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1035365099" + " " + "usp__list__item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1035365099" + " " + "list__item__title"
      }, "Montessori inspired")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1035365099" + " " + "usp__list__item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1035365099" + " " + "list__item__title"
      }, "Thousands of happy families")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1035365099" + " " + "usp__list__item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-1035365099" + " " + "list__item__title"
      }, "For ages 4-9")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1035365099",
        css: ".usp__list.jsx-1035365099{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:5px;list-style-type:none;margin:0;padding:0;}.usp__list__item.jsx-1035365099{background-color:#f7cfdb;height:240px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;padding:2rem;}.list__item__title.jsx-1035365099{font-weight:bold;font-size:2.5rem;line-height:3.5rem;}@media (max-width:992px){.usp__list.jsx-1035365099{grid-template-columns:1fr 1fr;}.usp__list__item.jsx-1035365099{height:auto;padding:40px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9VU1BHYWxsZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCNEIsQUFHa0MsQUFRWSxBQVNSLEFBTWlCLEFBR2xCLFlBQ0csQ0ExQm1CLElBaUJyQixRQVRKLEVBbUJiLEdBSkEsSUFMbUIsSUFUTixhQVJBLEVBa0JqQixXQWpCeUIscUJBQ1osU0FDQyxVQUNkLFFBSzJCLG1HQUNKLDZGQUNELGtCQUNMLGFBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9VU1BHYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBVU1BHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1c3BfX2xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ1c3BfX2xpc3RfX2l0ZW1cIj48aDQgY2xhc3NOYW1lPVwibGlzdF9faXRlbV9fdGl0bGVcIj5CYXNlZCBvbiB5ZWFycyBvZiByZXNlYXJjaDwvaDQ+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ1c3BfX2xpc3RfX2l0ZW1cIj48aDQgY2xhc3NOYW1lPVwibGlzdF9faXRlbV9fdGl0bGVcIj5JbmRpdmlkdWFsIGxlYXJuaW5nIGV4cGVyaWVuY2U8L2g0PjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidXNwX19saXN0X19pdGVtXCI+PGg0IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1fX3RpdGxlXCI+RGV2ZWxvcGVkIGJ5IHRlYWNoZXJzPC9oND48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVzcF9fbGlzdF9faXRlbVwiPjxoNCBjbGFzc05hbWU9XCJsaXN0X19pdGVtX190aXRsZVwiPkJhc2VkIG9uIGN1cnJpY3VsdW0gaW4gc2Nob29sPC9oND48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVzcF9fbGlzdF9faXRlbVwiPjxoNCBjbGFzc05hbWU9XCJsaXN0X19pdGVtX190aXRsZVwiPkdhbWlmaWVkIGxlYXJuaW5nIGpvdXJuZXk8L2g0PjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidXNwX19saXN0X19pdGVtXCI+PGg0IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1fX3RpdGxlXCI+TW9udGVzc29yaSBpbnNwaXJlZDwvaDQ+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ1c3BfX2xpc3RfX2l0ZW1cIj48aDQgY2xhc3NOYW1lPVwibGlzdF9faXRlbV9fdGl0bGVcIj5UaG91c2FuZHMgb2YgaGFwcHkgZmFtaWxpZXM8L2g0PjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidXNwX19saXN0X19pdGVtXCI+PGg0IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1fX3RpdGxlXCI+Rm9yIGFnZXMgNC05PC9oND48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAudXNwX19saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXNwX19saXN0X19pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3Y2ZkYjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpc3RfX2l0ZW1fX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnVzcF9fbGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnVzcF9fbGlzdF9faXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVNQR2FsbGVyeSJdfQ== */\n/*@ sourceURL=/Users/joakim/Desktop/dev/albert-web-next/components/Landing/USPGallery.js */"
      }));
    }
  }]);

  return USPGallery;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (USPGallery);

/***/ }),

/***/ "./components/Landing/VideoContainer.js":
/*!**********************************************!*\
  !*** ./components/Landing/VideoContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var VideoContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VideoContainer, _React$Component);

  function VideoContainer() {
    _classCallCheck(this, VideoContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(VideoContainer).apply(this, arguments));
  }

  _createClass(VideoContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3394277774" + " " + "video__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3394277774" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3394277774" + " " + "content__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-3394277774" + " " + "title"
      }, "Learning made fun!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3394277774" + " " + "ingress"
      }, "With gamified learning path, motiviating confetti rains and research based content, Albert will make mathematics learning fun and delightful for your child.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
        width: "100%",
        height: "370",
        src: "https://www.youtube.com/embed/ypqcU0ZKHbM",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: true,
        className: "jsx-3394277774"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3394277774",
        css: ".video__wrapper.jsx-3394277774{background:url('static/assets/images/oval.png');background-size:140% 100%;background-position-x:-200px;padding:40rem 0;}.container.jsx-3394277774{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.content__wrapper.jsx-3394277774{-webkit-flex:1;-ms-flex:1;flex:1;padding-right:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}iframe.jsx-3394277774{-webkit-flex:1.5;-ms-flex:1.5;flex:1.5;}.title.jsx-3394277774{font-size:4.5rem;font-weight:bold;margin:0;}.ingress.jsx-3394277774{font-size:2.6rem;line-height:3.5rem;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9WaWRlb0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhNEIsQUFHeUUsQUFNbkMsQUFHTixBQVFFLEFBR1EsQUFLQSxpQkFKQSxBQUtFLGdCQWhCQSxDQVlWLEVBS1UsR0FUdkIsSUFLQSxLQXRCOEIsSUFVYixHQWlCakIsbUJBMUJpQyxBQUtqQyw2QkFKb0IsZ0JBQ3BCLE9BUTBCLDhFQUNDLG1HQUMzQiIsImZpbGUiOiIvVXNlcnMvam9ha2ltL0Rlc2t0b3AvZGV2L2FsYmVydC13ZWItbmV4dC9jb21wb25lbnRzL0xhbmRpbmcvVmlkZW9Db250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFZpZGVvQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvX193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5MZWFybmluZyBtYWRlIGZ1biE8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5ncmVzc1wiPldpdGggZ2FtaWZpZWQgbGVhcm5pbmcgcGF0aCwgbW90aXZpYXRpbmcgY29uZmV0dGkgcmFpbnMgYW5kIHJlc2VhcmNoIGJhc2VkIGNvbnRlbnQsIEFsYmVydCB3aWxsIG1ha2UgbWF0aGVtYXRpY3MgbGVhcm5pbmcgZnVuIGFuZCBkZWxpZ2h0ZnVsIGZvciB5b3VyIGNoaWxkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzcwXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQveXBxY1UwWktIYk1cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnc3RhdGljL2Fzc2V0cy9pbWFnZXMvb3ZhbC5wbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTQwJSAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHJlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGVudF9fd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZnJhbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMS41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbmdyZXNzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb0NvbnRhaW5lciJdfQ== */\n/*@ sourceURL=/Users/joakim/Desktop/dev/albert-web-next/components/Landing/VideoContainer.js */"
      }));
    }
  }]);

  return VideoContainer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (VideoContainer);

/***/ }),

/***/ "./components/Landing/VideoGallery.js":
/*!********************************************!*\
  !*** ./components/Landing/VideoGallery.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var VideoGallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VideoGallery, _React$Component);

  function VideoGallery() {
    _classCallCheck(this, VideoGallery);

    return _possibleConstructorReturn(this, _getPrototypeOf(VideoGallery).apply(this, arguments));
  }

  _createClass(VideoGallery, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1453242270" + " " + "video__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1453242270" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1453242270" + " " + "title"
      }, "Voice of our small users... \uD83D\uDE00")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1453242270",
        css: ".video__wrapper.jsx-1453242270{background:url('static/assets/images/oval.png');background-size:140% 100%;background-position-x:-200px;padding:30rem 0;position:relative;}.container.jsx-1453242270{text-align:center;}.video__wrapper.jsx-1453242270:before{content:\"\";position:absolute;top:-8rem;right:-8rem;width:35rem;height:35rem;border-radius:50%;background-image:linear-gradient(206deg,#abe1ea,#73c0d1);}.title.jsx-1453242270{font-size:4.5rem;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9WaWRlb0dhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzRCLEFBR3lFLEFBTzlCLEFBR1AsQUFVTSxXQVRDLE1BVUQsQ0FickIsV0FJYyxLQVVkLEtBVGdCLFNBWmMsR0FhZCxZQUNDLFdBYmdCLEVBY1gsa0JBQ3lDLFNBZDNDLGdCQUNFLGtCQUN0QixjQWFBIiwiZmlsZSI6Ii9Vc2Vycy9qb2FraW0vRGVza3RvcC9kZXYvYWxiZXJ0LXdlYi1uZXh0L2NvbXBvbmVudHMvTGFuZGluZy9WaWRlb0dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFZpZGVvR2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb19fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlZvaWNlIG9mIG91ciBzbWFsbCB1c2Vycy4uLiDwn5iAPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb19fd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ3N0YXRpYy9hc3NldHMvaW1hZ2VzL292YWwucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE0MCUgMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzByZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudmlkZW9fX3dyYXBwZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC04cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC04cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMDZkZWcsICNhYmUxZWEsICM3M2MwZDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9HYWxsZXJ5Il19 */\n/*@ sourceURL=/Users/joakim/Desktop/dev/albert-web-next/components/Landing/VideoGallery.js */"
      }));
    }
  }]);

  return VideoGallery;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (VideoGallery);

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next");

module.exports = new NextI18Next({
  otherLanguages: ['de']
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Landing_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Landing/Hero */ "./components/Landing/Hero.js");
/* harmony import */ var _components_Landing_VideoContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Landing/VideoContainer */ "./components/Landing/VideoContainer.js");
/* harmony import */ var _components_Landing_USP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Landing/USP */ "./components/Landing/USP.js");
/* harmony import */ var _components_Landing_VideoGallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Landing/VideoGallery */ "./components/Landing/VideoGallery.js");
/* harmony import */ var _components_Landing_USPGallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Landing/USPGallery */ "./components/Landing/USPGallery.js");
/* harmony import */ var _components_Landing_Trial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Landing/Trial */ "./components/Landing/Trial.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Homepage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Homepage, _React$Component);

  function Homepage() {
    _classCallCheck(this, Homepage);

    return _possibleConstructorReturn(this, _getPrototypeOf(Homepage).apply(this, arguments));
  }

  _createClass(Homepage, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Landing_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Landing_VideoContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Landing_USP__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Landing_VideoGallery__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Landing_USPGallery__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Landing_Trial__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  namespacesRequired: ['common', 'footer']
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Homepage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withNamespaces"])('common')(Homepage));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map