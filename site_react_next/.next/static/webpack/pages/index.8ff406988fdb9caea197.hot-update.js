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
              console.log(orcamento.name);
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
                console.log(responseEnv.mensagem);
              } else {
                console.log(responseEnv.mensagem);
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              console.log("ERRO: tente mais tarde!");

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
        lineNumber: 50,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Site - Sapup3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
            lineNumber: 59,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
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
              lineNumber: 62,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              href: "#services",
              className: "menu-btn",
              children: "Servi\xE7os"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              href: "#contact",
              className: "menu-btn",
              children: "Contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "menu-btn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
            className: "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: "img-top top",
      id: "top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
        children: ".img-top {\n                   background-image: url(" + data.url + data.datahome.image_top + "); \n                   background-repeat: no-repeat; \n                   background-position: center;     \n               }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
            lineNumber: 82,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-2",
            children: data.datahome.title_top_two
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-3",
            children: data.datahome.title_top_three
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
            href: "#",
            children: data.datahome.btn_title_top
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
          lineNumber: 93,
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
                lineNumber: 97,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_title_one
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: data.datahome.ser_desc_one
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                className: data.datahome.ser_icone_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_title_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: data.datahome.ser_desc_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                className: data.datahome.ser_icone_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_icone_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: data.datahome.ser_desc_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
          lineNumber: 130,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "contact-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "column left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: data.datahome.cont_desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "icons",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_emp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_emp
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "sub-title",
                    children: data.datahome.cont_name_emp
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_end
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_end
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "sub-title",
                    children: data.datahome.cont_name_end
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "sub-title",
                    children: data.datahome.cont_name_email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "column right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "text",
              children: data.datahome.cont_title_form
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
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
                    lineNumber: 165,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
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
                    lineNumber: 168,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 163,
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
                  lineNumber: 173,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
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
                  lineNumber: 177,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "button-area",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  type: "submit",
                  children: "Enviar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: [data.datahome.footer_desc, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          href: data.datahome.footer_link,
          children: data.datahome.footer_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 47
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      strategy: "beforeInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      src: "custom.js",
      strategy: "afterInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGZmNDA2OTg4ZmRiOWNhZWExOTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRUEsU0FBU0ksSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFFcEIsa0JBQWtDSiwrQ0FBUSxDQUFDO0FBQ3ZDSyxJQUFBQSxJQUFJLEVBQUUsRUFEaUM7QUFFdkNDLElBQUFBLEtBQUssRUFBRSxFQUZnQztBQUd2Q0MsSUFBQUEsT0FBTyxFQUFFLEVBSDhCO0FBSXZDQyxJQUFBQSxPQUFPLEVBQUU7QUFKOEIsR0FBRCxDQUExQztBQUFBLE1BQU9DLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBT0EsbUJBQWlDViwrQ0FBUSxDQUFDO0FBQ3RDVyxJQUFBQSxRQUFRLEVBQUUsS0FENEI7QUFFdENDLElBQUFBLElBQUksRUFBRSxFQUZnQztBQUd0Q0MsSUFBQUEsUUFBUSxFQUFFO0FBSDRCLEdBQUQsQ0FBekM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBa0JDLFdBQWxCOztBQU1BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsQ0FBQztBQUFBLFdBQUlQLFlBQVksaUNBQU1ELFNBQU4saUtBQWtCUSxDQUFDLENBQUNDLE1BQUYsQ0FBU2IsSUFBM0IsRUFBa0NZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUEzQyxHQUFoQjtBQUFBLEdBQXZCOztBQUVBLE1BQU1DLGFBQWE7QUFBQSxnVUFBRyxpQkFBTUgsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJBLGNBQUFBLENBQUMsQ0FBQ0ksY0FBRjtBQUNBQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsU0FBUyxDQUFDSixJQUF0QjtBQUZrQjtBQUFBO0FBQUEscUJBS0ltQixLQUFLLENBQUMsMkNBQUQsRUFB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cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0JztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoIHtkYXRhfSApIHtcclxuXHJcbiAgICBjb25zdCBbb3JjYW1lbnRvLCBzZXRPcmNhbWVudG9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBzdWJqZWN0OiAnJyxcclxuICAgICAgICBjb250ZW50OiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCAgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtZW5zYWdlbTogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSBlID0+IHNldE9yY2FtZW50byh7IC4uLm9yY2FtZW50bywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG5cclxuICAgIGNvbnN0IHNlbmRPcmNhbWVudG8gPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob3JjYW1lbnRvLm5hbWUpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NhZGFzdHJhci1vcmNhbWVudG8nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9yY2FtZW50byksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUVudiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZUVudi5lcnJvKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRW52Lm1lbnNhZ2VtKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUVudi5tZW5zYWdlbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJSTzogdGVudGUgbWFpcyB0YXJkZSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuNC9jc3MvYWxsLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICAgIDx0aXRsZT5TaXRlIC0gU2FwdXAzPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAge2NvbnNvbGUubG9nKGRhdGEpfVxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3RvcFwiPlNhcHVwMzwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiN0b3BcIiBjbGFzc05hbWU9XCJtZW51LWJ0blwiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNzZXJ2aWNlc1wiIGNsYXNzTmFtZT1cIm1lbnUtYnRuXCI+U2VydmnDp29zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjY29udGFjdFwiIGNsYXNzTmFtZT1cIm1lbnUtYnRuXCI+Q29udGF0bzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW1nLXRvcCB0b3BcIiBpZD1cInRvcFwiPlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICB7YC5pbWctdG9wIHtcclxuICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChgKyBkYXRhLnVybCArIGRhdGEuZGF0YWhvbWUuaW1hZ2VfdG9wICtgKTsgXHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgICAgIFxyXG4gICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMVwiPntkYXRhLmRhdGFob21lLnRpdGxlX3RvcF9vbmV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJcIj57ZGF0YS5kYXRhaG9tZS50aXRsZV90b3BfdHdvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zXCI+e2RhdGEuZGF0YWhvbWUudGl0bGVfdG9wX3RocmVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e2RhdGEuZGF0YWhvbWUuYnRuX3RpdGxlX3RvcH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VydmljZXNcIiBpZD1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5kYXRhaG9tZS5zZXJfdGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vydi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2RhdGEuZGF0YWhvbWUuc2VyX2ljb25lX29uZX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZGF0YWhvbWUuc2VyX3RpdGxlX29uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuZGF0YWhvbWUuc2VyX2Rlc2Nfb25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtkYXRhLmRhdGFob21lLnNlcl9pY29uZV90d299PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZGF0YWhvbWUuc2VyX3RpdGxlX3R3b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuZGF0YWhvbWUuc2VyX2Rlc2NfdHdvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtkYXRhLmRhdGFob21lLnNlcl9pY29uZV90aHJlZX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhaG9tZS5zZXJfaWNvbmVfdGhyZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmRhdGFob21lLnNlcl9kZXNjX3RocmVlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWN0XCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5kYXRhaG9tZS5jb250X3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuZGF0YWhvbWUuY29udF9kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2RhdGEuZGF0YWhvbWUuY29udF9pY29uX2VtcH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj57ZGF0YS5kYXRhaG9tZS5jb250X3RpdGxlX2VtcH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj57ZGF0YS5kYXRhaG9tZS5jb250X25hbWVfZW1wfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2RhdGEuZGF0YWhvbWUuY29udF9pY29uX2VuZH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj57ZGF0YS5kYXRhaG9tZS5jb250X3RpdGxlX2VuZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj57ZGF0YS5kYXRhaG9tZS5jb250X25hbWVfZW5kfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2RhdGEuZGF0YWhvbWUuY29udF9pY29uX2VtYWlsfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPntkYXRhLmRhdGFob21lLmNvbnRfdGl0bGVfZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+e2RhdGEuZGF0YWhvbWUuY29udF9uYW1lX2VtYWlsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPntkYXRhLmRhdGFob21lLmNvbnRfdGl0bGVfZm9ybX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRPcmNhbWVudG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWVcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gZS1tYWlsXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIGFzc3VudG9cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgdGV4dGFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbnRlbnRcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIGNvbnRlw7pkb1wiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxzcGFuPntkYXRhLmRhdGFob21lLmZvb3Rlcl9kZXNjfSA8YSBocmVmPXtkYXRhLmRhdGFob21lLmZvb3Rlcl9saW5rfT57ZGF0YS5kYXRhaG9tZS5mb290ZXJfbmFtZX08L2E+PC9zcGFuPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG5cclxuXHJcbiAgICAgICAgPFNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkubWluLmpzXCIgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiLz5cclxuICAgICAgICA8U2NyaXB0IHNyYz1cImN1c3RvbS5qc1wiIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiLz4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvYCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVhZCIsIlNjcmlwdCIsIkhvbWUiLCJkYXRhIiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsImNvbnRlbnQiLCJvcmNhbWVudG8iLCJzZXRPcmNhbWVudG8iLCJmb3JtU2F2ZSIsInR5cGUiLCJtZW5zYWdlbSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZE9yY2FtZW50byIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwianNvbiIsInJlc3BvbnNlRW52IiwiZXJybyIsInVybCIsImRhdGFob21lIiwiaW1hZ2VfdG9wIiwidGl0bGVfdG9wX29uZSIsInRpdGxlX3RvcF90d28iLCJ0aXRsZV90b3BfdGhyZWUiLCJidG5fdGl0bGVfdG9wIiwic2VyX3RpdGxlIiwic2VyX2ljb25lX29uZSIsInNlcl90aXRsZV9vbmUiLCJzZXJfZGVzY19vbmUiLCJzZXJfaWNvbmVfdHdvIiwic2VyX3RpdGxlX3R3byIsInNlcl9kZXNjX3R3byIsInNlcl9pY29uZV90aHJlZSIsInNlcl9kZXNjX3RocmVlIiwiY29udF90aXRsZSIsImNvbnRfZGVzYyIsImNvbnRfaWNvbl9lbXAiLCJjb250X3RpdGxlX2VtcCIsImNvbnRfbmFtZV9lbXAiLCJjb250X2ljb25fZW5kIiwiY29udF90aXRsZV9lbmQiLCJjb250X25hbWVfZW5kIiwiY29udF9pY29uX2VtYWlsIiwiY29udF90aXRsZV9lbWFpbCIsImNvbnRfbmFtZV9lbWFpbCIsImNvbnRfdGl0bGVfZm9ybSIsImZvb3Rlcl9kZXNjIiwiZm9vdGVyX2xpbmsiLCJmb290ZXJfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=