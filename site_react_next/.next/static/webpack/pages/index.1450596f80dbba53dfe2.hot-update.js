"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/script */ "./node_modules/next/script.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\daniel\\Documents\\GitHub\\site_r\\site_react_next\\pages\\index.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Home(_ref) {
  _s();

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    name: '',
    email: '',
    subject: '',
    content: ''
  }),
      orcamento = _useState[0],
      setOrcamento = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    formSave: false,
    type: '',
    mensagem: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    return setOrcamento(_objectSpread(_objectSpread({}, orcamento), {}, (0,C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));
  };

  var sendOrcamento = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var res, responseEnv;
      return C_Users_daniel_Documents_GitHub_site_r_site_react_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setResponse({
                formSave: true
              });
              _context.prev = 2;
              _context.next = 5;
              return fetch('http://localhost:8080/cadastrar-orcamento', {
                method: 'POST',
                body: JSON.stringify(orcamento),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              responseEnv = _context.sent;

              if (responseEnv.erro) {
                setResponse({
                  formSave: false,
                  type: 'error',
                  mensagem: responseEnv.mensagem
                });
              } else {
                setResponse({
                  formSave: false,
                  type: 'success',
                  mensagem: responseEnv.mensagem
                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              setResponse({
                formSave: false,
                type: 'error',
                mensagem: "ERRO: tente mais tarde!"
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function sendOrcamento(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Site - Sapup3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, this), console.log(data), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
            href: "#top",
            children: "Sapup3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
          className: "menu",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              href: "#top",
              className: "menu-btn",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              href: "#services",
              className: "menu-btn",
              children: "Servi\xE7os"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              href: "#contact",
              className: "menu-btn",
              children: "Contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "menu-btn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
            className: "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: "img-top top",
      id: "top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
        children: ".img-top {\n                   background-image: url(" + data.url + data.datahome.image_top + "); \n                   background-repeat: no-repeat; \n                   background-position: center;     \n               }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "max-width",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "top-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-1",
            children: data.datahome.title_top_one
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-2",
            children: data.datahome.title_top_two
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-3",
            children: data.datahome.title_top_three
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
            href: "#",
            children: data.datahome.btn_title_top
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: "services",
      id: "services",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          className: "title",
          children: data.datahome.ser_title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "serv-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                className: data.datahome.ser_icone_one
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_title_one
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: data.datahome.ser_desc_one
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                className: data.datahome.ser_icone_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_title_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: data.datahome.ser_desc_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                className: data.datahome.ser_icone_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_icone_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: data.datahome.ser_desc_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: "contact",
      id: "contact",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          className: "title",
          children: data.datahome.cont_title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "contact-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "column left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: data.datahome.cont_desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "icons",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_emp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_emp
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "sub-title",
                    children: data.datahome.cont_name_emp
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_end
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_end
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "sub-title",
                    children: data.datahome.cont_name_end
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "sub-title",
                    children: data.datahome.cont_name_email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "column right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "text",
              children: data.datahome.cont_title_form
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
              onSubmit: sendOrcamento,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "fields",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "field name",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                    type: "text",
                    name: "name",
                    placeholder: "Digite o nome",
                    onChange: onChangeInput,
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "field email",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                    type: "text",
                    name: "email",
                    placeholder: "Digite o e-mail",
                    onChange: onChangeInput,
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "field",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                  type: "text",
                  name: "subject",
                  placeholder: "Digite o assunto",
                  onChange: onChangeInput,
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "field textarea",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("textarea", {
                  name: "content",
                  cols: "30",
                  rows: "10",
                  placeholder: "Digite o conte\xFAdo",
                  onChange: onChangeInput,
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "button-area",
                children: response.formSave ? "salvando" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  type: "submit",
                  children: "Enviar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 66
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: [data.datahome.footer_desc, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          href: data.datahome.footer_link,
          children: data.datahome.footer_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 47
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      strategy: "beforeInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      src: "custom.js",
      strategy: "afterInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

_s(Home, "2V1BhoV/vK2y2bpA3Id/sTlEkDo=");

_c = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTQ1MDU5NmY4MGRiYmE1M2RmZTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRUEsU0FBU0ksSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFFcEIsa0JBQWtDSiwrQ0FBUSxDQUFDO0FBQ3ZDSyxJQUFBQSxJQUFJLEVBQUUsRUFEaUM7QUFFdkNDLElBQUFBLEtBQUssRUFBRSxFQUZnQztBQUd2Q0MsSUFBQUEsT0FBTyxFQUFFLEVBSDhCO0FBSXZDQyxJQUFBQSxPQUFPLEVBQUU7QUFKOEIsR0FBRCxDQUExQztBQUFBLE1BQU9DLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBT0EsbUJBQWlDViwrQ0FBUSxDQUFDO0FBQ3RDVyxJQUFBQSxRQUFRLEVBQUUsS0FENEI7QUFFdENDLElBQUFBLElBQUksRUFBRSxFQUZnQztBQUd0Q0MsSUFBQUEsUUFBUSxFQUFFO0FBSDRCLEdBQUQsQ0FBekM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBa0JDLFdBQWxCOztBQU1BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsQ0FBQztBQUFBLFdBQUlQLFlBQVksaUNBQU1ELFNBQU4saUtBQWtCUSxDQUFDLENBQUNDLE1BQUYsQ0FBU2IsSUFBM0IsRUFBa0NZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUEzQyxHQUFoQjtBQUFBLEdBQXZCOztBQUVBLE1BQU1DLGFBQWE7QUFBQSxnVUFBRyxpQkFBTUgsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJBLGNBQUFBLENBQUMsQ0FBQ0ksY0FBRjtBQUVBTixjQUFBQSxXQUFXLENBQUM7QUFBQ0osZ0JBQUFBLFFBQVEsRUFBRTtBQUFYLGVBQUQsQ0FBWDtBQUhrQjtBQUFBO0FBQUEscUJBTUlXLEtBQUssQ0FBQywy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OERBQUMsb0RBQUQ7QUFBUSxTQUFHLEVBQUMsa0VBQVo7QUFBK0UsY0FBUSxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuSkosZUFvSkksOERBQUMsb0RBQUQ7QUFBUSxTQUFHLEVBQUMsV0FBWjtBQUF3QixjQUFRLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQXdKRDs7R0E5TU03RDs7S0FBQUE7O0FBdU5QLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgge2RhdGF9ICkge1xyXG5cclxuICAgIGNvbnN0IFtvcmNhbWVudG8sIHNldE9yY2FtZW50b10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHN1YmplY3Q6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbcmVzcG9uc2UsICBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1lbnNhZ2VtOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT4gc2V0T3JjYW1lbnRvKHsgLi4ub3JjYW1lbnRvLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSk7XHJcblxyXG4gICAgY29uc3Qgc2VuZE9yY2FtZW50byA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRSZXNwb25zZSh7Zm9ybVNhdmU6IHRydWV9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jYWRhc3RyYXItb3JjYW1lbnRvJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmNhbWVudG8pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2VFbnYuZXJybyl7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVuc2FnZW06IHJlc3BvbnNlRW52Lm1lbnNhZ2VtXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZW5zYWdlbTogcmVzcG9uc2VFbnYubWVuc2FnZW1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FnZW06IFwiRVJSTzogdGVudGUgbWFpcyB0YXJkZSFcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS40L2Nzcy9hbGwubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPHRpdGxlPlNpdGUgLSBTYXB1cDM8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICB7Y29uc29sZS5sb2coZGF0YSl9XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdG9wXCI+U2FwdXAzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3RvcFwiIGNsYXNzTmFtZT1cIm1lbnUtYnRuXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwibWVudS1idG5cIj5TZXJ2acOnb3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPVwibWVudS1idG5cIj5Db250YXRvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbWctdG9wIHRvcFwiIGlkPVwidG9wXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgIHtgLmltZy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGArIGRhdGEudXJsICsgZGF0YS5kYXRhaG9tZS5pbWFnZV90b3AgK2ApOyBcclxuICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgICAgXHJcbiAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0xXCI+e2RhdGEuZGF0YWhvbWUudGl0bGVfdG9wX29uZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMlwiPntkYXRhLmRhdGFob21lLnRpdGxlX3RvcF90d299PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTNcIj57ZGF0YS5kYXRhaG9tZS50aXRsZV90b3BfdGhyZWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57ZGF0YS5kYXRhaG9tZS5idG5fdGl0bGVfdG9wfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZXJ2aWNlc1wiIGlkPVwic2VydmljZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLmRhdGFob21lLnNlcl90aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5zZXJfaWNvbmVfb25lfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhaG9tZS5zZXJfdGl0bGVfb25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5kYXRhaG9tZS5zZXJfZGVzY19vbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2RhdGEuZGF0YWhvbWUuc2VyX2ljb25lX3R3b30+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhaG9tZS5zZXJfdGl0bGVfdHdvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5kYXRhaG9tZS5zZXJfZGVzY190d299PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2RhdGEuZGF0YWhvbWUuc2VyX2ljb25lX3RocmVlfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmRhdGFob21lLnNlcl9pY29uZV90aHJlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuZGF0YWhvbWUuc2VyX2Rlc2NfdGhyZWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLmRhdGFob21lLmNvbnRfdGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5kYXRhaG9tZS5jb250X2Rlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5jb250X2ljb25fZW1wfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPntkYXRhLmRhdGFob21lLmNvbnRfdGl0bGVfZW1wfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPntkYXRhLmRhdGFob21lLmNvbnRfbmFtZV9lbXB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5jb250X2ljb25fZW5kfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPntkYXRhLmRhdGFob21lLmNvbnRfdGl0bGVfZW5kfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPntkYXRhLmRhdGFob21lLmNvbnRfbmFtZV9lbmR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5jb250X2ljb25fZW1haWx9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+e2RhdGEuZGF0YWhvbWUuY29udF90aXRsZV9lbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj57ZGF0YS5kYXRhaG9tZS5jb250X25hbWVfZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2RhdGEuZGF0YWhvbWUuY29udF90aXRsZV9mb3JtfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZE9yY2FtZW50b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gbm9tZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBlLW1haWxcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gYXNzdW50b1wiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCB0ZXh0YXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29udGVudFwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gY29udGXDumRvXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLmZvcm1TYXZlID8gXCJzYWx2YW5kb1wiOiA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHNwYW4+e2RhdGEuZGF0YWhvbWUuZm9vdGVyX2Rlc2N9IDxhIGhyZWY9e2RhdGEuZGF0YWhvbWUuZm9vdGVyX2xpbmt9PntkYXRhLmRhdGFob21lLmZvb3Rlcl9uYW1lfTwvYT48L3NwYW4+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcblxyXG5cclxuICAgICAgICA8U2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNi4wL2pxdWVyeS5taW4uanNcIiBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIvPlxyXG4gICAgICAgIDxTY3JpcHQgc3JjPVwiY3VzdG9tLmpzXCIgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCIvPiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH07XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiU2NyaXB0IiwiSG9tZSIsImRhdGEiLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwiY29udGVudCIsIm9yY2FtZW50byIsInNldE9yY2FtZW50byIsImZvcm1TYXZlIiwidHlwZSIsIm1lbnNhZ2VtIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsIm9uQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kT3JjYW1lbnRvIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNwb25zZUVudiIsImVycm8iLCJjb25zb2xlIiwibG9nIiwidXJsIiwiZGF0YWhvbWUiLCJpbWFnZV90b3AiLCJ0aXRsZV90b3Bfb25lIiwidGl0bGVfdG9wX3R3byIsInRpdGxlX3RvcF90aHJlZSIsImJ0bl90aXRsZV90b3AiLCJzZXJfdGl0bGUiLCJzZXJfaWNvbmVfb25lIiwic2VyX3RpdGxlX29uZSIsInNlcl9kZXNjX29uZSIsInNlcl9pY29uZV90d28iLCJzZXJfdGl0bGVfdHdvIiwic2VyX2Rlc2NfdHdvIiwic2VyX2ljb25lX3RocmVlIiwic2VyX2Rlc2NfdGhyZWUiLCJjb250X3RpdGxlIiwiY29udF9kZXNjIiwiY29udF9pY29uX2VtcCIsImNvbnRfdGl0bGVfZW1wIiwiY29udF9uYW1lX2VtcCIsImNvbnRfaWNvbl9lbmQiLCJjb250X3RpdGxlX2VuZCIsImNvbnRfbmFtZV9lbmQiLCJjb250X2ljb25fZW1haWwiLCJjb250X3RpdGxlX2VtYWlsIiwiY29udF9uYW1lX2VtYWlsIiwiY29udF90aXRsZV9mb3JtIiwiZm9vdGVyX2Rlc2MiLCJmb290ZXJfbGluayIsImZvb3Rlcl9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==