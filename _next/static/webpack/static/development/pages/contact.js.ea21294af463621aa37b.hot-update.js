webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");


var _jsxFileName = "C:\\Users\\hanne\\OneDrive\\Skrivebord\\Proglab2\\Shift-website\\pages\\contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





__jsx("script", {
  type: "text/javascript",
  src: "C:\\Users\\hanne\\OneDrive\\Skrivebord\\Proglab2\\Shift-website\\contacthelp.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
});

var Page = function Page() {
  return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Contact us");
};

function About() {
  var refName = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var refEmail = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var refMessage = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var submitHandler = function submitHandler() {
    var data = {
      name: refName.current,
      email: refEmail.current,
      message: refMessage.current
    };

    var dataURI = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(data).map(function (_ref) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      return key + '=' + encodeURIComponent(val);
    }).join('&');

    fetch('https://script.google.com/macros/s/AKfycby7djTgeLHEyQVW4ruOEBXsHQoJ5jldANy8_efvayGaB8Acyve1/exec?' + dataURI);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: "https://www.shifthyperloop.com/contact",
    title: "Shift Hyperloop | Contact us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Contact us")), __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Getting in touch is easy!"), __jsx("p", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Andersens veg 5, c/o MTP, Valgrinda"), __jsx("p", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:contact@shifthyperloop.com",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "contact@shifthyperloop.com")), __jsx("p", {
    className: "jsx-3963390635" + " " + "some",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/ShiftHyperloop/",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaFacebook"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.instagram.com/shift__hyperloop/",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaInstagram"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.linkedin.com/company/shift-hyperloop/",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/shifthyperloop",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3963390635" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "name",
    autoFocus: true,
    placeholder: "Name (optional)",
    ref: refName,
    className: "jsx-3963390635" + " " + "name-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3963390635" + " " + "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "email",
    placeholder: "Email",
    ref: refEmail,
    className: "jsx-3963390635" + " " + "email-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3963390635" + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("textarea", {
    type: "text",
    name: "message",
    placeholder: "Message",
    ref: refMessage,
    className: "jsx-3963390635" + " " + "message-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3963390635" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("button", {
    id: "submit-form",
    onClick: submitHandler,
    className: "jsx-3963390635" + " " + "submit-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Submit")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3963390635",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');body{background-image:linear-gradient(0deg,#0008,#0008), url(/Contact-hyperloop-dark.png);}.contact-us{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;white-space:nowrap;overflow:hidden;font-size:3rem;font-family:'Roboto Condensed',sans-serif;color:white;margin-bottom:50px;}.contact-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:1200px;margin:auto;}.contact-info{border-right:#fff5 1px solid;width:50%;height:30rem;text-align:center;}.contact-form{height:30rem;border-left:#fff5 1px solid;width:50%;padding-right:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:top;-webkit-justify-content:top;-ms-flex-pack:top;justify-content:top;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.email,.name,.message{width:80%;margin:2%;}.name-field,.email-field,.message-field{border:none;padding:10px 5px;color:#aaa;}.submit-form{border:none;margin-top:20px;padding:5px 5px;color:black;background-color:white;}.message{-webkit-flex:1;-ms-flex:1;flex:1;}.message-field{height:100%;}.some>a{padding:10px;font-size:1.7em;}input,textarea{background:rgba(33,37,41,0.9);width:100%;font-family:'Roboto Condensed',sans-serif;}p{-webkit-flex:0 0 120px;-ms-flex:0 0 120px;flex:0 0 120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaGFubmVcXE9uZURyaXZlXFxTa3JpdmVib3JkXFxQcm9nbGFiMlxcU2hpZnQtd2Vic2l0ZVxccGFnZXNcXGNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUd5QixBQUU2RixBQUloRCxBQUlyQixBQWFBLEFBU2dCLEFBT2hCLEFBYUgsQUFPRSxBQU1BLEFBYUwsQUFJSyxBQUlDLEFBTW9CLEFBTWxCLFVBN0NMLEVBT08sQUFNRCxBQWlCbEIsQ0EzQzhCLEFBK0NaLE9BakNsQixRQWFrQixDQWxDTixBQTRCQyxBQTJCYixDQUthLEdBZGIsTUE3Q2UsQ0E0QmYsQ0FyQlksQUFxRGlDLEdBMUIvQixPQTFCTyxDQVBELElBa0NLLENBOEJ6QixhQS9EQSxBQU9lLElBaENVLEFBYUosS0E4Q3JCLElBeUJBLEVBeEZBLDBEQWtCeUIsQ0FtQkQsNkJBaENILGlEQWlDQyxvQkFuQkQsd0JBYlIsV0FDUSxtQkFDSCxhQStCRyxHQTlCSixlQUM0QixRQVUxQixpQkFDTCxZQUNkLEtBWGMsWUFDTyxtQkFDckIsRUEyQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxoYW5uZVxcT25lRHJpdmVcXFNrcml2ZWJvcmRcXFByb2dsYWIyXFxTaGlmdC13ZWJzaXRlXFxwYWdlc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFGYWNlYm9vaywgRmFJbnN0YWdyYW0sIEZhR2l0aHViLCBGYUxpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuPHNjcmlwdFxyXG4gIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxyXG4gIHNyYz1cIkM6XFxVc2Vyc1xcaGFubmVcXE9uZURyaXZlXFxTa3JpdmVib3JkXFxQcm9nbGFiMlxcU2hpZnQtd2Vic2l0ZVxcY29udGFjdGhlbHAuanNcIlxyXG4+PC9zY3JpcHQ+O1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IDxwPkNvbnRhY3QgdXM8L3A+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XHJcbiAgY29uc3QgcmVmTmFtZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHJlZkVtYWlsID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVmTWVzc2FnZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBuYW1lOiByZWZOYW1lLmN1cnJlbnQsXHJcbiAgICAgIGVtYWlsOiByZWZFbWFpbC5jdXJyZW50LFxyXG4gICAgICBtZXNzYWdlOiByZWZNZXNzYWdlLmN1cnJlbnQsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGF0YVVSSSA9IE9iamVjdC5lbnRyaWVzKGRhdGEpXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpKVxyXG4gICAgICAuam9pbignJicpO1xyXG4gICAgZmV0Y2goXHJcbiAgICAgICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnk3ZGpUZ2VMSEV5UVZXNHJ1T0VCWHNIUW9KNWpsZEFOeThfZWZ2YXlHYUI4QWN5dmUxL2V4ZWM/JyArXHJcbiAgICAgICAgZGF0YVVSSVxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0XHJcbiAgICAgIHVybD1cImh0dHBzOi8vd3d3LnNoaWZ0aHlwZXJsb29wLmNvbS9jb250YWN0XCJcclxuICAgICAgdGl0bGU9XCJTaGlmdCBIeXBlcmxvb3AgfCBDb250YWN0IHVzXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXVzXCI+XHJcbiAgICAgICAgPHA+Q29udGFjdCB1czwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxyXG4gICAgICAgICAgPGgyPkdldHRpbmcgaW4gdG91Y2ggaXMgZWFzeSE8L2gyPlxyXG4gICAgICAgICAgPHA+QW5kZXJzZW5zIHZlZyA1LCBjL28gTVRQLCBWYWxncmluZGE8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QHNoaWZ0aHlwZXJsb29wLmNvbVwiPlxyXG4gICAgICAgICAgICAgIGNvbnRhY3RAc2hpZnRoeXBlcmxvb3AuY29tXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNvbWVcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9TaGlmdEh5cGVybG9vcC9cIj5cclxuICAgICAgICAgICAgICA8RmFGYWNlYm9vayAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NoaWZ0X19oeXBlcmxvb3AvXCI+XHJcbiAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3NoaWZ0LWh5cGVybG9vcC9cIj5cclxuICAgICAgICAgICAgICA8RmFMaW5rZWRpbiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hpZnRoeXBlcmxvb3BcIj5cclxuICAgICAgICAgICAgICA8RmFHaXRodWIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIChvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hbWUtZmllbGRcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVmTmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1haWwtZmllbGRcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVmRW1haWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2UtZmllbGRcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVmTWVzc2FnZX1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgaWQ9XCJzdWJtaXQtZm9ybVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0LWZvcm1cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDAwOCwgIzAwMDgpLFxyXG4gICAgICAgICAgICB1cmwoL0NvbnRhY3QtaHlwZXJsb29wLWRhcmsucG5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWN0LXVzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWN0LWluZm8ge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAjZmZmNSAxcHggc29saWQ7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAjZmZmNSAxcHggc29saWQ7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiB0b3A7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVtYWlsLFxyXG4gICAgICAgIC5uYW1lLFxyXG4gICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUtZmllbGQsXHJcbiAgICAgICAgLmVtYWlsLWZpZWxkLFxyXG4gICAgICAgIC5tZXNzYWdlLWZpZWxkIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VibWl0LWZvcm0ge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lLFxyXG4gICAgICAgIC5lbWFpbCB7XHJcbiAgICAgICAgICAvKmhlaWdodDogMTAlOyovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lc3NhZ2UtZmllbGQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvbWUgPiBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzMywgMzcsIDQxLCAwLjkpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmbGV4OiAwIDAgMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\hanne\\OneDrive\\Skrivebord\\Proglab2\\Shift-website\\pages\\contact.js */"));
}

/***/ })

})
//# sourceMappingURL=contact.js.ea21294af463621aa37b.hot-update.js.map