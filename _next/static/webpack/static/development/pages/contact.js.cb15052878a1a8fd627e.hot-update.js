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
  var refName = react__WEBPACK_IMPORTED_MODULE_3___default()();
  var refEmail = react__WEBPACK_IMPORTED_MODULE_3___default()();
  var refMessage = react__WEBPACK_IMPORTED_MODULE_3___default()();

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
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');body{background-image:linear-gradient(0deg,#0008,#0008), url(/Contact-hyperloop-dark.png);}.contact-us{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;white-space:nowrap;overflow:hidden;font-size:3rem;font-family:'Roboto Condensed',sans-serif;color:white;margin-bottom:50px;}.contact-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:1200px;margin:auto;}.contact-info{border-right:#fff5 1px solid;width:50%;height:30rem;text-align:center;}.contact-form{height:30rem;border-left:#fff5 1px solid;width:50%;padding-right:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:top;-webkit-justify-content:top;-ms-flex-pack:top;justify-content:top;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.email,.name,.message{width:80%;margin:2%;}.name-field,.email-field,.message-field{border:none;padding:10px 5px;color:#aaa;}.submit-form{border:none;margin-top:20px;padding:5px 5px;color:black;background-color:white;}.message{-webkit-flex:1;-ms-flex:1;flex:1;}.message-field{height:100%;}.some>a{padding:10px;font-size:1.7em;}input,textarea{background:rgba(33,37,41,0.9);width:100%;font-family:'Roboto Condensed',sans-serif;}p{-webkit-flex:0 0 120px;-ms-flex:0 0 120px;flex:0 0 120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaGFubmVcXE9uZURyaXZlXFxTa3JpdmVib3JkXFxQcm9nbGFiMlxcU2hpZnQtd2Vic2l0ZVxccGFnZXNcXGNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUd5QixBQUU2RixBQUloRCxBQUlyQixBQWFBLEFBU2dCLEFBT2hCLEFBYUgsQUFPRSxBQU1BLEFBYUwsQUFJSyxBQUlDLEFBTW9CLEFBTWxCLFVBN0NMLEVBT08sQUFNRCxBQWlCbEIsQ0EzQzhCLEFBK0NaLE9BakNsQixRQWFrQixDQWxDTixBQTRCQyxBQTJCYixDQUthLEdBZGIsTUE3Q2UsQ0E0QmYsQ0FyQlksQUFxRGlDLEdBMUIvQixPQTFCTyxDQVBELElBa0NLLENBOEJ6QixhQS9EQSxBQU9lLElBaENVLEFBYUosS0E4Q3JCLElBeUJBLEVBeEZBLDBEQWtCeUIsQ0FtQkQsNkJBaENILGlEQWlDQyxvQkFuQkQsd0JBYlIsV0FDUSxtQkFDSCxhQStCRyxHQTlCSixlQUM0QixRQVUxQixpQkFDTCxZQUNkLEtBWGMsWUFDTyxtQkFDckIsRUEyQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxoYW5uZVxcT25lRHJpdmVcXFNrcml2ZWJvcmRcXFByb2dsYWIyXFxTaGlmdC13ZWJzaXRlXFxwYWdlc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB1c2VSZWYgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYUZhY2Vib29rLCBGYUluc3RhZ3JhbSwgRmFHaXRodWIsIEZhTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG48c2NyaXB0XHJcbiAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXHJcbiAgc3JjPVwiQzpcXFVzZXJzXFxoYW5uZVxcT25lRHJpdmVcXFNrcml2ZWJvcmRcXFByb2dsYWIyXFxTaGlmdC13ZWJzaXRlXFxjb250YWN0aGVscC5qc1wiXHJcbj48L3NjcmlwdD47XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4gPHA+Q29udGFjdCB1czwvcD47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICBjb25zdCByZWZOYW1lID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVmRW1haWwgPSB1c2VSZWYoKTtcclxuICBjb25zdCByZWZNZXNzYWdlID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG5hbWU6IHJlZk5hbWUuY3VycmVudCxcclxuICAgICAgZW1haWw6IHJlZkVtYWlsLmN1cnJlbnQsXHJcbiAgICAgIG1lc3NhZ2U6IHJlZk1lc3NhZ2UuY3VycmVudCxcclxuICAgIH07XHJcbiAgICBjb25zdCBkYXRhVVJJID0gT2JqZWN0LmVudHJpZXMoZGF0YSlcclxuICAgICAgLm1hcCgoW2tleSwgdmFsXSkgPT4ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkpXHJcbiAgICAgIC5qb2luKCcmJyk7XHJcbiAgICBmZXRjaChcclxuICAgICAgJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieTdkalRnZUxIRXlRVlc0cnVPRUJYc0hRb0o1amxkQU55OF9lZnZheUdhQjhBY3l2ZTEvZXhlYz8nICtcclxuICAgICAgICBkYXRhVVJJXHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdXJsPVwiaHR0cHM6Ly93d3cuc2hpZnRoeXBlcmxvb3AuY29tL2NvbnRhY3RcIlxyXG4gICAgICB0aXRsZT1cIlNoaWZ0IEh5cGVybG9vcCB8IENvbnRhY3QgdXNcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdXNcIj5cclxuICAgICAgICA8cD5Db250YWN0IHVzPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgICA8aDI+R2V0dGluZyBpbiB0b3VjaCBpcyBlYXN5ITwvaDI+XHJcbiAgICAgICAgICA8cD5BbmRlcnNlbnMgdmVnIDUsIGMvbyBNVFAsIFZhbGdyaW5kYTwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RAc2hpZnRoeXBlcmxvb3AuY29tXCI+XHJcbiAgICAgICAgICAgICAgY29udGFjdEBzaGlmdGh5cGVybG9vcC5jb21cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic29tZVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1NoaWZ0SHlwZXJsb29wL1wiPlxyXG4gICAgICAgICAgICAgIDxGYUZhY2Vib29rIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2hpZnRfX2h5cGVybG9vcC9cIj5cclxuICAgICAgICAgICAgICA8RmFJbnN0YWdyYW0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvc2hpZnQtaHlwZXJsb29wL1wiPlxyXG4gICAgICAgICAgICAgIDxGYUxpbmtlZGluIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zaGlmdGh5cGVybG9vcFwiPlxyXG4gICAgICAgICAgICAgIDxGYUdpdGh1YiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZS1maWVsZFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWZOYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbC1maWVsZFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWZFbWFpbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZS1maWVsZFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWZNZXNzYWdlfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBpZD1cInN1Ym1pdC1mb3JtXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXQtZm9ybVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDA4LCAjMDAwOCksXHJcbiAgICAgICAgICAgIHVybCgvQ29udGFjdC1oeXBlcmxvb3AtZGFyay5wbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3QtdXMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6ICNmZmY1IDFweCBzb2xpZDtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6ICNmZmY1IDFweCBzb2xpZDtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZW1haWwsXHJcbiAgICAgICAgLm5hbWUsXHJcbiAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZS1maWVsZCxcclxuICAgICAgICAuZW1haWwtZmllbGQsXHJcbiAgICAgICAgLm1lc3NhZ2UtZmllbGQge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2FhYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJtaXQtZm9ybSB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUsXHJcbiAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgIC8qaGVpZ2h0OiAxMCU7Ki9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVzc2FnZS1maWVsZCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29tZSA+IGEge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAzNywgNDEsIDAuOSk7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZsZXg6IDAgMCAxMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\hanne\\OneDrive\\Skrivebord\\Proglab2\\Shift-website\\pages\\contact.js */"));
}

/***/ })

})
//# sourceMappingURL=contact.js.cb15052878a1a8fd627e.hot-update.js.map