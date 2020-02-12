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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "C:\\Users\\hanne\\OneDrive\\Skrivebord\\Proglab2\\Shift-website\\pages\\contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycby7djTgeLHEyQVW4ruOEBXsHQoJ5jldANy8_efvayGaB8Acyve1/exec';
$('#submit-form').on('click', function (e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    data: $form.serializeObject()
  }).success // do something
  ();
});

var Page = function Page() {
  return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Contact us");
};

function About() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "https://www.shifthyperloop.com/contact",
    title: "Shift Hyperloop | Contact us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Contact us")), __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3963390635" + " " + "contact-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Getting in touch is easy!"), __jsx("p", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Andersens veg 5, c/o MTP, Valgrinda"), __jsx("p", {
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:contact@shifthyperloop.com",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "contact@shifthyperloop.com")), __jsx("p", {
    className: "jsx-3963390635" + " " + "some",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/ShiftHyperloop/",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaFacebook"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.instagram.com/shift__hyperloop/",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaInstagram"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.linkedin.com/company/shift-hyperloop/",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/shifthyperloop",
    className: "jsx-3963390635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })))), __jsx("form", {
    className: "jsx-3963390635" + " " + "contact-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3963390635" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "name",
    autoFocus: true,
    placeholder: "Name (optional)",
    className: "jsx-3963390635" + " " + "name-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3963390635" + " " + "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "email",
    placeholder: "Email",
    className: "jsx-3963390635" + " " + "email-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
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
      lineNumber: 94
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    id: "submit-form",
    className: "jsx-3963390635" + " " + "submit-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Submit")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3963390635",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');body{background-image:linear-gradient(0deg,#0008,#0008), url(/Contact-hyperloop-dark.png);}.contact-us{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;white-space:nowrap;overflow:hidden;font-size:3rem;font-family:'Roboto Condensed',sans-serif;color:white;margin-bottom:50px;}.contact-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:1200px;margin:auto;}.contact-info{border-right:#fff5 1px solid;width:50%;height:30rem;text-align:center;}.contact-form{height:30rem;border-left:#fff5 1px solid;width:50%;padding-right:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:top;-webkit-justify-content:top;-ms-flex-pack:top;justify-content:top;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.email,.name,.message{width:80%;margin:2%;}.name-field,.email-field,.message-field{border:none;padding:10px 5px;color:#aaa;}.submit-form{border:none;margin-top:20px;padding:5px 5px;color:black;background-color:white;}.message{-webkit-flex:1;-ms-flex:1;flex:1;}.message-field{height:100%;}.some>a{padding:10px;font-size:1.7em;}input,textarea{background:rgba(33,37,41,0.9);width:100%;font-family:'Roboto Condensed',sans-serif;}p{-webkit-flex:0 0 120px;-ms-flex:0 0 120px;flex:0 0 120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaGFubmVcXE9uZURyaXZlXFxTa3JpdmVib3JkXFxQcm9nbGFiMlxcU2hpZnQtd2Vic2l0ZVxccGFnZXNcXGNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0d5QixBQUU2RixBQUloRCxBQUlyQixBQWFBLEFBU2dCLEFBT2hCLEFBYUgsQUFPRSxBQU1BLEFBYUwsQUFJSyxBQUlDLEFBTW9CLEFBTWxCLFVBN0NMLEVBT08sQUFNRCxBQWlCbEIsQ0EzQzhCLEFBK0NaLE9BakNsQixRQWFrQixDQWxDTixBQTRCQyxBQTJCYixDQUthLEdBZGIsTUE3Q2UsQ0E0QmYsQ0FyQlksQUFxRGlDLEdBMUIvQixPQTFCTyxDQVBELElBa0NLLENBOEJ6QixhQS9EQSxBQU9lLElBaENVLEFBYUosS0E4Q3JCLElBeUJBLEVBeEZBLDBEQWtCeUIsQ0FtQkQsNkJBaENILGlEQWlDQyxvQkFuQkQsd0JBYlIsV0FDUSxtQkFDSCxhQStCRyxHQTlCSixlQUM0QixRQVUxQixpQkFDTCxZQUNkLEtBWGMsWUFDTyxtQkFDckIsRUEyQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxoYW5uZVxcT25lRHJpdmVcXFNrcml2ZWJvcmRcXFByb2dsYWIyXFxTaGlmdC13ZWJzaXRlXFxwYWdlc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7XHJcbiAgRmFGYWNlYm9vayxcclxuICBGYUluc3RhZ3JhbSxcclxuICBGYUdpdGh1YixcclxuICBGYVNuYXBjaGF0LFxyXG4gIEZhTGlua2VkaW4sXHJcbiAgRmFMZWFmLFxyXG4gIEdJVHJvcGh5LFxyXG4gIElvTWRQZXJzb24sXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxudmFyICRmb3JtID0gJCgnZm9ybSN0ZXN0LWZvcm0nKSxcclxuICB1cmwgPVxyXG4gICAgJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieTdkalRnZUxIRXlRVlc0cnVPRUJYc0hRb0o1amxkQU55OF9lZnZheUdhQjhBY3l2ZTEvZXhlYyc7XHJcblxyXG4kKCcjc3VibWl0LWZvcm0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciBqcXhociA9ICQuYWpheCh7XHJcbiAgICB1cmw6IHVybCxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgZGF0YTogJGZvcm0uc2VyaWFsaXplT2JqZWN0KCksXHJcbiAgfSlcclxuICAgIC5zdWNjZXNzXHJcbiAgICAvLyBkbyBzb21ldGhpbmdcclxuICAgICgpO1xyXG59KTtcclxuY29uc3QgUGFnZSA9ICgpID0+IDxwPkNvbnRhY3QgdXM8L3A+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdXJsPVwiaHR0cHM6Ly93d3cuc2hpZnRoeXBlcmxvb3AuY29tL2NvbnRhY3RcIlxyXG4gICAgICB0aXRsZT1cIlNoaWZ0IEh5cGVybG9vcCB8IENvbnRhY3QgdXNcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdXNcIj5cclxuICAgICAgICA8cD5Db250YWN0IHVzPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgICA8aDI+R2V0dGluZyBpbiB0b3VjaCBpcyBlYXN5ITwvaDI+XHJcbiAgICAgICAgICA8cD5BbmRlcnNlbnMgdmVnIDUsIGMvbyBNVFAsIFZhbGdyaW5kYTwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RAc2hpZnRoeXBlcmxvb3AuY29tXCI+XHJcbiAgICAgICAgICAgICAgY29udGFjdEBzaGlmdGh5cGVybG9vcC5jb21cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic29tZVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1NoaWZ0SHlwZXJsb29wL1wiPlxyXG4gICAgICAgICAgICAgIDxGYUZhY2Vib29rIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2hpZnRfX2h5cGVybG9vcC9cIj5cclxuICAgICAgICAgICAgICA8RmFJbnN0YWdyYW0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvc2hpZnQtaHlwZXJsb29wL1wiPlxyXG4gICAgICAgICAgICAgIDxGYUxpbmtlZGluIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zaGlmdGh5cGVybG9vcFwiPlxyXG4gICAgICAgICAgICAgIDxGYUdpdGh1YiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIChvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hbWUtZmllbGRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbC1maWVsZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2UtZmllbGRcIlxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0LWZvcm1cIiBjbGFzc05hbWU9XCJzdWJtaXQtZm9ybVwiPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDAwOCwgIzAwMDgpLFxyXG4gICAgICAgICAgICB1cmwoL0NvbnRhY3QtaHlwZXJsb29wLWRhcmsucG5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWN0LXVzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWN0LWluZm8ge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAjZmZmNSAxcHggc29saWQ7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAjZmZmNSAxcHggc29saWQ7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiB0b3A7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVtYWlsLFxyXG4gICAgICAgIC5uYW1lLFxyXG4gICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUtZmllbGQsXHJcbiAgICAgICAgLmVtYWlsLWZpZWxkLFxyXG4gICAgICAgIC5tZXNzYWdlLWZpZWxkIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VibWl0LWZvcm0ge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lLFxyXG4gICAgICAgIC5lbWFpbCB7XHJcbiAgICAgICAgICAvKmhlaWdodDogMTAlOyovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lc3NhZ2UtZmllbGQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvbWUgPiBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzMywgMzcsIDQxLCAwLjkpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmbGV4OiAwIDAgMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\hanne\\OneDrive\\Skrivebord\\Proglab2\\Shift-website\\pages\\contact.js */"));
}

/***/ })

})
//# sourceMappingURL=contact.js.35b914bf18d8718581e2.hot-update.js.map