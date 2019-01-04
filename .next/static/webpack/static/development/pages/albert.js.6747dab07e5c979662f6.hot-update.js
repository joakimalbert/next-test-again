webpackHotUpdate("static/development/pages/albert.js",{

/***/ "./pages/albert.js":
/*!*************************!*\
  !*** ./pages/albert.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);


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




var Albert =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Albert, _React$Component);

  function Albert() {
    _classCallCheck(this, Albert);

    return _possibleConstructorReturn(this, _getPrototypeOf(Albert).apply(this, arguments));
  }

  _createClass(Albert, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("noscript", null, "<p style=\"margin:0;padding:0;border:0;\"> <img src=\"https://track.adform.net/Serving/TrackPoint/?pm=1511642\" width=\"1\" height=\"1\" alt=\"\" /> </p>"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Albert"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "canonical",
        href: "https://www.hejalbert.se/"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:locale",
        content: "en_US"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:type",
        content: "website"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:title",
        content: "Main Page - Albert"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:url",
        content: "https://www.hejalbert.se/"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:site_name",
        content: "Albert"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "twitter:title",
        content: "Main Page - Albert"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "dns-prefetch",
        href: "//cdn.jsdelivr.net"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "dns-prefetch",
        href: "//s.w.org"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        id: "sb_instagram_styles-css",
        href: "https://www.hejalbert.se/wp-content/plugins/instagram-feed/css/sb-instagram.min.css?ver=1.5.1",
        type: "text/css",
        media: "all"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        id: "videojs-plugin-css",
        href: "https://www.hejalbert.se/wp-content/plugins/videojs-html5-video-player-for-wordpress/plugin-styles.css?ver=4.9.3",
        type: "text/css",
        media: "all"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        id: "videojs-css",
        href: "https://www.hejalbert.se/wp-content/plugins/videojs-html5-video-player-for-wordpress/videojs/video-js.css?ver=4.9.3",
        type: "text/css",
        media: "all"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        id: "bfa-font-awesome-css",
        href: "//cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css?ver=4.7.0",
        type: "text/css",
        media: "all"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "https://api.w.org/",
        href: "https://www.hejalbert.se/wp-json/"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "EditURI",
        type: "application/rsd+xml",
        title: "RSD",
        href: "https://www.hejalbert.se/xmlrpc.php?rsd"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "wlwmanifest",
        type: "application/wlwmanifest+xml",
        href: "https://www.hejalbert.se/wp-includes/wlwmanifest.xml"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "generator",
        content: "WordPress 4.9.3"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "shortlink",
        href: "https://www.hejalbert.se/"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "alternate",
        type: "application/json+oembed",
        href: "https://www.hejalbert.se/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.hejalbert.se%2F"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "alternate",
        type: "text/xml+oembed",
        href: "https://www.hejalbert.se/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.hejalbert.se%2F&format=xml"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("noscript", null, "<img height=\"1\" width=\"1\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=271034299921078&ev=PageView&noscript=1\" />"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        id: "fixed-header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "navbar navbar-default navbar-static-top"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "navbar-header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "navbar-brand",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        id: "navbar-logo",
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-logo2.svg",
        alt: true
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "bs-example-navbar-collapse-1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
        href: "/mypages"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "loginPanelButton"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/icon-setting.png",
        title: "Kontoinst\xE4llningar"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "nav navbar-nav navbar-right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/parent-register/",
        className: "modal-parent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/parents-b-t-n-n-a-v-b-a-r.svg",
        alt: true
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "headerSignUpBtn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/register/",
        className: "modal-students"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/students-b-t-n-n-a-v-b-a-r.svg",
        alt: true
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "login-cust"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://login.hejalbert.se"
      }, " LOGGA IN")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "loginPanel"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "login-section-login"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "LOGGA IN P\xC5 MINA SIDOR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "loginUsername",
        placeholder: "Telefonnummer eller e-mail",
        pattern: "\\d*",
        inputMode: "numeric"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        id: "loginPassword",
        placeholder: "L\xF6senord"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        id: "login-error-small"
      }, "Fel anv\xE4ndare eller l\xF6senord"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "button button-full",
        href: "#",
        id: "loginButton"
      }, "LOGGA IN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        className: "login-loader",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 32 32",
        xmlSpace: "preserve",
        width: 32,
        height: 32
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        className: "nc-icon-wrapper",
        fill: "#00b08d"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        className: "nc-loop_bars-32"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
        "data-color": "color-2",
        fill: "none",
        stroke: "#00b08d",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        x1: 16,
        y1: 7,
        x2: 16,
        y2: 24,
        transform: "translate(0 2.5762240000367163) scale(1 0.8389859999977052)",
        style: {
          opacity: '0.8389859999977052'
        },
        strokeLinejoin: "round"
      }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
        fill: "none",
        stroke: "#00b08d",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        x1: 3,
        y1: 7,
        x2: 3,
        y2: 24,
        transform: "translate(0 7.023775999963283) scale(1 0.5610140000022947)",
        style: {
          opacity: '0.5610140000022947'
        },
        strokeLinejoin: "round"
      }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
        fill: "none",
        stroke: "#00b08d",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        x1: 29,
        y1: 7,
        x2: 29,
        y2: 24,
        transform: "translate(0 7.023775999963283) scale(1 0.5610140000022947)",
        style: {
          opacity: '0.5610140000022947'
        },
        strokeLinejoin: "round"
      }), " "), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        id: "forgotPasswordLink"
      }, "Gl\xF6mt l\xF6senordet?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "login-section-forgot-password",
        style: {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "GL\xD6MT L\xD6SENORD?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Skriv in ditt telefonnummer eller e-mailadress nedan s\xE5 skickar vi instruktioner om hur du \xE5terst\xE4ller ditt l\xF6senord!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "forgotPasswordPhoneMail"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "button button-full",
        href: "#",
        id: "forgotPasswordSendButton"
      }, "SKICKA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        id: "loginLink"
      }, "Logga in?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "login-section-error",
        style: {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        id: "login-error-title",
        style: {
          color: '#9999A7'
        }
      }, "HOPPSAN!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        id: "login-error-body"
      }, "Mina sidor \xE4r en tj\xE4nst f\xF6r dig som k\xF6pt en prenumeration direkt h\xE4r p\xE5 hemsidan."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        style: {
          color: '#BDBDC7',
          marginTop: '50px'
        }
      }, "HAR DU INGEN PRENUMERATION?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        id: "login-error-subtext"
      }, "Testa premium i 7 dagar gratis ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/parent-register/"
      }, "h\xE4r"), ". Har du en prenumeration via App Store / Google Play? L\xE4s mer under ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/faq/"
      }, "\"Vanliga fr\xE5gor och svar\"")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        role: "navigation"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "menuToggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        id: "mobileMenuChecker"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        id: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "menu-logo",
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-logo-white2.svg"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "menu-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sidebar-items"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        id: "cta-text",
        href: "/parent-register/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Jag vill bjuda mitt barn", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "p\xE5 l\xE4xhj\xE4lp"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sidebar-items"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        id: "cta-text",
        href: "/register/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Jag \xE4r elev som vill", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "skapa konto"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sidebar-items"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        id: "cta-text",
        href: "https://hejalbert.edimia.se/login",
        style: {
          fontSize: '22px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "LOGGA IN"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sidebar-items",
        id: "loginPanelButtonMobile"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "menu-icon2",
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/lock2.svg"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        href: "#"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "MINA SIDOR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "greeting-section two-column-section"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        id: "newslink",
        href: "javascript:void(0)"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        id: "nationella",
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/desk-banner.gif"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "greeting-description"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Hej, Albert h\xE4r!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Din ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "digitala mattel\xE4rare"), " som hj\xE4lper dig att", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        id: "greeting-type"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "greeting-links"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/register-now",
        className: "modal-registration green-link"
      }, "PROVA GRATIS I 14 DAGAR!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/ica",
        className: "modal-registration green-link ica"
      }, "Aktivera din gratism\xE5nad med ICA"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "greeting-image"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/greeting-background.svg",
        alt: true
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "for-all-section two-column-section image-left-section summer"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "summer-all-image col-sm-5 col-md-6 col-lg-5 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-matsmart.png",
        alt: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "for-all-description  col-sm-7 col-md-6 col-lg-7 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "JUST NU: SKOLSTARTSKAMPANJ 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Kickstarta skol\xE5ret med Albert och bidra till minskat matsvinn!", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "I samarbete med Matsmart f\xE5r alla nya kunder m\xF6jligheten att testa Albert gratis i 14 dagar plus 100 kr i rabatt p\xE5 sitt n\xE4sta k\xF6p hos Matsmart.se."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/matsmart",
        className: "green-link btn-summer"
      }, " TA DEL AV ERBJUDANDET H\xC4R!")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "tutorial-section two-column-section image-right-section"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tutorial-description  col-sm-7 col-md-6 col-lg-7 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Jag \xE4r den digitala mattel\xE4raren tillg\xE4nglig n\xE4r som helst, var som helst. P\xE5 dina villkor."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Min kunskap \xE4r baserad p\xE5 skolplanen och jag anpassar mig efter just den \xE5rskursen eleven g\xE5r i. Jag vet, r\xE4tt coolt! Man kan fr\xE5ga mig om just det kapitlet och matematiska omr\xE5de man befinner sig i. Eleverna gillar mig."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.hejalbert.se/tutoring/",
        className: "green-link"
      }, "L\xE4s mer        ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-arrow-right",
        "aria-hidden": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tutorial-image  col-sm-5 col-md-5 col-lg-5 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/tutor-available.svg",
        alt: true
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "fun-lessons-section two-column-section image-left-section"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fun-lessons-image  col-sm-6 col-md-6 col-lg-5 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-lessons.svg",
        alt: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fun-lessons-description  col-sm-6 col-md-6 col-lg-7 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "G\xF6r det lite roligare och enklare att l\xE4ra sig."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Jag skapades f\xF6r att g\xF6ra matematik l\xE4ttf\xF6rst\xE5eligt och roligt. Jag har som m\xE5l att f\xE5 din inl\xE4rning att bli enkel och kul. F\xF6rutom l\xE4xhj\xE4lp ger jag dig \xF6ver 200 korta roliga animerade lektioner som antagligen kommer f\xE5 dig att gilla matten lite mer \xE4n tidigare."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.hejalbert.se/lessons/",
        className: "green-link"
      }, "L\xE4s mer        ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-arrow-right",
        "aria-hidden": "true"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "rectangle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/rectangle.svg",
        alt: true
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "need-section two-column-section image-right-section"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "need-description  col-sm-5 col-md-5 col-lg-5 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Jag vet vad du beh\xF6ver. Jag \xE4r smart."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Med mitt inbyggda provcenter och min smarta teknik kommer jag kunna l\xE4ra k\xE4nna dig b\xE4ttre och b\xE4ttre. Mitt spelcenter och trof\xE9sk\xE5p hj\xE4lper dig p\xE5 ett roligt och utmanande s\xE4tt att bygga dina matteskills. Dessutom f\xE5r du individuellt framtagna rekommendationer f\xF6r att dina svagheter ska v\xE4ndas till styrkor. Allt f\xF6r att du ska bli en mattem\xE4stare!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.hejalbert.se/tests/",
        className: "green-link"
      }, "L\xE4s mer        ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-arrow-right",
        "aria-hidden": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "need-image  clearfix col-sm-7 col-md-6 col-lg-7 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-brain-tests.svg"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "for-all-section two-column-section image-left-section"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "for-all-image  col-sm-5 col-md-6 col-lg-5 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-for-all.png",
        alt: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "for-all-description  col-sm-7 col-md-6 col-lg-7 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Fr\xE5n F\xF6rskoleklass till f\xF6rsta \xE5ret p\xE5 Gymnasiet!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Nu \xE4r jag \xE4ven anpassad f\xF6r barn och elever i l\xE4gre \xE5ldrar och t\xE4cker in i hela grundskolan. Registrera er \xE4r p\xE5 hemsidan och ange vilken \xE5lder ni vill att jag ska anpassa mig f\xF6r s\xE5 f\xE5r ni en skr\xE4ddarsydd upplevelse f\xF6r just er. Jag funkar utm\xE4rkt f\xF6r alla barn och elever mellan 5-17 \xE5r. ")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "reviews-section"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "owl-carousel"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "slide"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "user"
      }, "Rose, \xC5k 9"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "review"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Albert \xE4r en fantastisk app som hj\xE4lper b\xE5de mig och de som beh\xF6ver extra mycket hj\xE4lp i matte. N\xE4r jag l\xF6ste uppgifter i Albert s\xE5 m\xE4rkte jag inte att det var lika sv\xE5rt eftersom hans f\xF6rklaringar f\xE5r mig att fatta! Hade jag l\xF6st uppgifterna utan st\xF6d fr\xE5n Albert hade det tagit v\xE4ldigt l\xE5ng tid f\xF6r mig att f\xF6rst\xE5."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "slide"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "user"
      }, "Johanna, \xC5k 8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "review"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Jag \xE4lskar Albert, jag tycker att det \xE4r superbra att det finns en app som hj\xE4lper alla p\xE5 h\xF6gstadiet att verkligen kunna r\xE4kna ut matteuppgifter p\xE5 r\xE4tt s\xE4tt s\xE5 att man f\xF6rst\xE5r. Albert hj\xE4lper mig att r\xE4kna ut uppgifter som jag fastnat p\xE5 fortare och b\xE4ttre, med snabba tips, hela utr\xE4kningar och roliga videos att titta p\xE5."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "slide"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "user"
      }, "Teo, \xC5k 7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "review"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Albert \xE4r grym! Jag tycker mest om lektionerna som enkelt f\xF6rklarar olika kapitel. Jag f\xF6rstod inte vad algebra var riktigt, men genom Alberts lektion som bara var typ 2 minuter s\xE5 fattade jag direkt! Han \xE4r b\xE4st!")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "benefit-section"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "benefit-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "benefit benefit-improve"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "benefit-percent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "/10"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "av dem som har provat Albert tror att Albert kan hj\xE4lpa dom uppn\xE5 h\xF6gre betyg. ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "benefit benefit-improve"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "benefit-percent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "99", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "%"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "av alla som provat Albert tycker att plugget blir enklare och roligare.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "benefit benefit-improve"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "benefit-percent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "97", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "%"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "av alla f\xF6r\xE4ldrar vi pratat med s\xE4ger att dom hade betalat runt hundralappen f\xF6r obegr\xE4nsad l\xE4xhj\xE4lp via Albert."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "register-section"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "register-image col-sm-3 col-md-4 col-lg-3 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-forever.gif",
        alt: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "register-description col-sm-9 col-md-8 col-lg-9 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "links"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/parent-register/",
        className: "modal-parent"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/parents-b-t-n-n-a-v-b-a-r.svg",
        alt: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/register/",
        className: "modal-students"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/students-b-t-n-n-a-v-b-a-r.svg",
        alt: true
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "app-and-social-links"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "app-links"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "social-links"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.facebook.com/hejalbert/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-facebook",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.instagram.com/hej_albert/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-instagram",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.snapchat.com/add/hejalbert"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-snapchat-ghost",
        "aria-hidden": "true"
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pages-list-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "pages-list"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "F\xF6retaget Albert"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.hejalbert.se/about/"
      }, "Om Albert")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.hejalbert.se/press/"
      }, "Press")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.hejalbert.se/contacts/"
      }, "Kontakta oss"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "pages-list"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Support"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.hejalbert.se/faq/"
      }, "Vanliga fr\xE5gor och svar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "pages-list"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Mer information"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/register",
        className: "modal-registration"
      }, "Prova Albert Gratis i 14dagar")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.hejalbert.se/terms-and-conditions/"
      }, "Medlemsvillkor")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.hejalbert.se/job/"
      }, "Jobba hos oss")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "copyrights"
      }, "eEducation Albert AB | All rights reserved")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "screenDimmer"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        id: "bootstrap-css",
        href: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/css/bootstrap.min.css?ver=4.9.3",
        type: "text/css",
        media: "all"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        id: "base-styles-css",
        href: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/css/style.min.css?vr=1.1.3&ver=4.9.3",
        type: "text/css",
        media: "all"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        id: "owl-carousel-css",
        href: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/css/owl.carousel.min.css?ver=4.9.3",
        type: "text/css",
        media: "all"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        id: "albert2-styles-css",
        href: "https://www.hejalbert.se/wp-content/themes/mr-albert/assets/css/albert2.css?ver=4.9.3",
        type: "text/css",
        media: "all"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("noscript", null, "<div style=\"display:inline;\"> <img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"  src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/937554832/?guid=ON&amp;script=0\"/> </div>"))));
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

  return Albert;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withNamespaces"])('common')(Albert));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/albert")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=albert.js.6747dab07e5c979662f6.hot-update.js.map