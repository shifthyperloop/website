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
      name: refName.current.value,
      email: refEmail.current.value,
      message: refMessage.current.value
    };

    var dataURI = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(data).map(function (_ref) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      return key + '=' + encodeURIComponent(val);
    }).join('&');

    fetch('https://script.google.com/macros/s/AKfycby7djTgeLHEyQVW4ruOEBXsHQoJ5jldANy8_efvayGaB8Acyve1/exec?' + dataURI).then(function () {
      // Nullstill sjema og si det gikk bra
      refName.current.value = '';
      refEmail.current.value = '';
      refMessage.current.value = '';
    })["catch"](function () {// Si ifra at den feilet
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: "https://www.shifthyperloop.com/contact",
    title: "Shift Hyperloop | Contact us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Contact us")), __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Getting in touch is easy!"), __jsx("p", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Andersens veg 5, c/o MTP, Valgrinda"), __jsx("p", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:contact@shifthyperloop.com",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "contact@shifthyperloop.com")), __jsx("p", {
    className: "jsx-3963390635" + " " + "some",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/ShiftHyperloop/",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaFacebook"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.instagram.com/shift__hyperloop/",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaInstagram"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.linkedin.com/company/shift-hyperloop/",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/shifthyperloop",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3963390635" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
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
      lineNumber: 74
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3963390635" + " " + "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
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
      lineNumber: 85
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3963390635" + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
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
      lineNumber: 95
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3963390635" + " " + "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("button", {
    id: "submit-form",
    onClick: submitHandler,
    className: "jsx-3963390635" + " " + "submit-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Submit")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3963390635",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');body{background-image:linear-gradient(0deg,#0008,#0008), url(/Contact-hyperloop-dark.png);}.contact-us{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;white-space:nowrap;overflow:hidden;font-size:3rem;font-family:'Roboto Condensed',sans-serif;color:white;margin-bottom:50px;}.contact-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:1200px;margin:auto;}.contact-info{border-right:#fff5 1px solid;width:50%;height:30rem;text-align:center;}.contact-form{height:30rem;border-left:#fff5 1px solid;width:50%;padding-right:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:top;-webkit-justify-content:top;-ms-flex-pack:top;justify-content:top;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.email,.name,.message{width:80%;margin:2%;}.name-field,.email-field,.message-field{border:none;padding:10px 5px;color:#aaa;}.submit-form{border:none;margin-top:20px;padding:5px 5px;color:black;background-color:white;}.message{-webkit-flex:1;-ms-flex:1;flex:1;}.message-field{height:100%;}.some>a{padding:10px;font-size:1.7em;}input,textarea{background:rgba(33,37,41,0.9);width:100%;font-family:'Roboto Condensed',sans-serif;}p{-webkit-flex:0 0 120px;-ms-flex:0 0 120px;flex:0 0 120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaGFubmVcXE9uZURyaXZlXFxTa3JpdmVib3JkXFxQcm9nbGFiMlxcU2hpZnQtd2Vic2l0ZVxccGFnZXNcXGNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0h5QixBQUU2RixBQUloRCxBQUlyQixBQWFBLEFBU2dCLEFBT2hCLEFBYUgsQUFPRSxBQU1BLEFBYUwsQUFJSyxBQUlDLEFBTW9CLEFBTWxCLFVBN0NMLEVBT08sQUFNRCxBQWlCbEIsQ0EzQzhCLEFBK0NaLE9BakNsQixRQWFrQixDQWxDTixBQTRCQyxBQTJCYixDQUthLEdBZGIsTUE3Q2UsQ0E0QmYsQ0FyQlksQUFxRGlDLEdBMUIvQixPQTFCTyxDQVBELElBa0NLLENBOEJ6QixhQS9EQSxBQU9lLElBaENVLEFBYUosS0E4Q3JCLElBeUJBLEVBeEZBLDBEQWtCeUIsQ0FtQkQsNkJBaENILGlEQWlDQyxvQkFuQkQsd0JBYlIsV0FDUSxtQkFDSCxhQStCRyxHQTlCSixlQUM0QixRQVUxQixpQkFDTCxZQUNkLEtBWGMsWUFDTyxtQkFDckIsRUEyQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxoYW5uZVxcT25lRHJpdmVcXFNrcml2ZWJvcmRcXFByb2dsYWIyXFxTaGlmdC13ZWJzaXRlXFxwYWdlc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFGYWNlYm9vaywgRmFJbnN0YWdyYW0sIEZhR2l0aHViLCBGYUxpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuPHNjcmlwdFxyXG4gIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxyXG4gIHNyYz1cIkM6XFxVc2Vyc1xcaGFubmVcXE9uZURyaXZlXFxTa3JpdmVib3JkXFxQcm9nbGFiMlxcU2hpZnQtd2Vic2l0ZVxcY29udGFjdGhlbHAuanNcIlxyXG4+PC9zY3JpcHQ+O1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IDxwPkNvbnRhY3QgdXM8L3A+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XHJcbiAgY29uc3QgcmVmTmFtZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHJlZkVtYWlsID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVmTWVzc2FnZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBuYW1lOiByZWZOYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGVtYWlsOiByZWZFbWFpbC5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBtZXNzYWdlOiByZWZNZXNzYWdlLmN1cnJlbnQudmFsdWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGF0YVVSSSA9IE9iamVjdC5lbnRyaWVzKGRhdGEpXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpKVxyXG4gICAgICAuam9pbignJicpO1xyXG4gICAgZmV0Y2goXHJcbiAgICAgICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnk3ZGpUZ2VMSEV5UVZXNHJ1T0VCWHNIUW9KNWpsZEFOeThfZWZ2YXlHYUI4QWN5dmUxL2V4ZWM/JyArXHJcbiAgICAgICAgZGF0YVVSSVxyXG4gICAgKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gTnVsbHN0aWxsIHNqZW1hIG9nIHNpIGRldCBnaWtrIGJyYVxyXG4gICAgICAgIHJlZk5hbWUuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHJlZkVtYWlsLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgICAgICByZWZNZXNzYWdlLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAvLyBTaSBpZnJhIGF0IGRlbiBmZWlsZXRcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICB1cmw9XCJodHRwczovL3d3dy5zaGlmdGh5cGVybG9vcC5jb20vY29udGFjdFwiXHJcbiAgICAgIHRpdGxlPVwiU2hpZnQgSHlwZXJsb29wIHwgQ29udGFjdCB1c1wiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC11c1wiPlxyXG4gICAgICAgIDxwPkNvbnRhY3QgdXM8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm9cIj5cclxuICAgICAgICAgIDxoMj5HZXR0aW5nIGluIHRvdWNoIGlzIGVhc3khPC9oMj5cclxuICAgICAgICAgIDxwPkFuZGVyc2VucyB2ZWcgNSwgYy9vIE1UUCwgVmFsZ3JpbmRhPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBzaGlmdGh5cGVybG9vcC5jb21cIj5cclxuICAgICAgICAgICAgICBjb250YWN0QHNoaWZ0aHlwZXJsb29wLmNvbVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzb21lXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vU2hpZnRIeXBlcmxvb3AvXCI+XHJcbiAgICAgICAgICAgICAgPEZhRmFjZWJvb2sgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zaGlmdF9faHlwZXJsb29wL1wiPlxyXG4gICAgICAgICAgICAgIDxGYUluc3RhZ3JhbSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9zaGlmdC1oeXBlcmxvb3AvXCI+XHJcbiAgICAgICAgICAgICAgPEZhTGlua2VkaW4gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NoaWZ0aHlwZXJsb29wXCI+XHJcbiAgICAgICAgICAgICAgPEZhR2l0aHViIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZSAob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lLWZpZWxkXCJcclxuICAgICAgICAgICAgICByZWY9e3JlZk5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVtYWlsLWZpZWxkXCJcclxuICAgICAgICAgICAgICByZWY9e3JlZkVtYWlsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlLWZpZWxkXCJcclxuICAgICAgICAgICAgICByZWY9e3JlZk1lc3NhZ2V9XHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGlkPVwic3VibWl0LWZvcm1cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1mb3JtXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMDgsICMwMDA4KSxcclxuICAgICAgICAgICAgdXJsKC9Db250YWN0LWh5cGVybG9vcC1kYXJrLnBuZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFjdC11cyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFjdC1pbmZvIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogI2ZmZjUgMXB4IHNvbGlkO1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGhlaWdodDogMzByZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFjdC1mb3JtIHtcclxuICAgICAgICAgIGhlaWdodDogMzByZW07XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogI2ZmZjUgMXB4IHNvbGlkO1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogdG9wO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lbWFpbCxcclxuICAgICAgICAubmFtZSxcclxuICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lLWZpZWxkLFxyXG4gICAgICAgIC5lbWFpbC1maWVsZCxcclxuICAgICAgICAubWVzc2FnZS1maWVsZCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1Ym1pdC1mb3JtIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSxcclxuICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgLypoZWlnaHQ6IDEwJTsqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZXNzYWdlLWZpZWxkIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb21lID4gYSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzMsIDM3LCA0MSwgMC45KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZmxleDogMCAwIDEyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\hanne\\OneDrive\\Skrivebord\\Proglab2\\Shift-website\\pages\\contact.js */"));
}

/***/ })

})
//# sourceMappingURL=contact.js.76d474f20c074f7f4b98.hot-update.js.map