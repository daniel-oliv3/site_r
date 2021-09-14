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
        lineNumber: 44,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Site - Sapup3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
            lineNumber: 53,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
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
              lineNumber: 56,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              href: "#services",
              className: "menu-btn",
              children: "Servi\xE7os"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              href: "#contact",
              className: "menu-btn",
              children: "Contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "menu-btn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
            className: "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: "img-top top",
      id: "top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
        children: ".img-top {\n                   background-image: url(" + data.url + data.datahome.image_top + "); \n                   background-repeat: no-repeat; \n                   background-position: center;     \n               }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
            lineNumber: 76,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-2",
            children: data.datahome.title_top_two
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-3",
            children: data.datahome.title_top_three
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
            href: "#",
            children: data.datahome.btn_title_top
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
          lineNumber: 87,
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
                lineNumber: 91,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_title_one
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: data.datahome.ser_desc_one
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                className: data.datahome.ser_icone_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_title_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: data.datahome.ser_desc_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                className: data.datahome.ser_icone_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_icone_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: data.datahome.ser_desc_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
          lineNumber: 124,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "contact-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "column left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: data.datahome.cont_desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "icons",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_emp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_emp
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "sub-title",
                    children: data.datahome.cont_name_emp
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_end
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_end
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "sub-title",
                    children: data.datahome.cont_name_end
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "sub-title",
                    children: data.datahome.cont_name_email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "column right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "text",
              children: data.datahome.cont_title_form
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
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
                    lineNumber: 159,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
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
                    lineNumber: 162,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
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
                  lineNumber: 167,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
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
                  lineNumber: 171,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "button-area",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  type: "submit",
                  children: "Enviar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: [data.datahome.footer_desc, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          href: data.datahome.footer_link,
          children: data.datahome.footer_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 47
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      strategy: "beforeInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      src: "custom.js",
      strategy: "afterInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_s(Home, "KY4M49QC/vGwuaEj+aNl8qXI0Bg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTNhYWRjNDcxM2YwYTcyNTk5YTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRUEsU0FBU0ksSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFFcEIsa0JBQWtDSiwrQ0FBUSxDQUFDO0FBQ3ZDSyxJQUFBQSxJQUFJLEVBQUUsRUFEaUM7QUFFdkNDLElBQUFBLEtBQUssRUFBRSxFQUZnQztBQUd2Q0MsSUFBQUEsT0FBTyxFQUFFLEVBSDhCO0FBSXZDQyxJQUFBQSxPQUFPLEVBQUU7QUFKOEIsR0FBRCxDQUExQztBQUFBLE1BQU9DLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBT0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxDQUFDO0FBQUEsV0FBSUYsWUFBWSxpQ0FBTUQsU0FBTixpS0FBa0JHLENBQUMsQ0FBQ0MsTUFBRixDQUFTUixJQUEzQixFQUFrQ08sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTNDLEdBQWhCO0FBQUEsR0FBdkI7O0FBRUEsTUFBTUMsYUFBYTtBQUFBLGdVQUFHLGlCQUFNSCxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQkEsY0FBQUEsQ0FBQyxDQUFDSSxjQUFGO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxTQUFTLENBQUNKLElBQXRCO0FBRmtCO0FBQUE7QUFBQSxxQkFLSWMsS0FBSyxDQUFDLDJDQUFELEVBQThDO0FBQ2pFQyxnQkFBQUEsTUFBTSxFQUFFLE1BRHlEO0FBRWpFQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsU0FBZixDQUYyRDtBQUdqRWUsZ0JBQUFBLE9BQU8sRUFBRTtBQUFDLGtDQUFnQjtBQUFqQjtBQUh3RCxlQUE5QyxDQUxUOztBQUFBO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoRkosZUE2SUk7QUFBQSw2QkFDSTtBQUFBLG1CQUFPUCxJQUFJLENBQUMyQixRQUFMLENBQWMyQixXQUFyQixvQkFBa0M7QUFBRyxjQUFJLEVBQUV0RCxJQUFJLENBQUMyQixRQUFMLENBQWM0QixXQUF2QjtBQUFBLG9CQUFxQ3ZELElBQUksQ0FBQzJCLFFBQUwsQ0FBYzZCO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3SUosZUFrSkksOERBQUMsb0RBQUQ7QUFBUSxTQUFHLEVBQUMsa0VBQVo7QUFBK0UsY0FBUSxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsSkosZUFtSkksOERBQUMsb0RBQUQ7QUFBUSxTQUFHLEVBQUMsV0FBWjtBQUF3QixjQUFRLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5KSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQXVKRDs7R0ExTE16RDs7S0FBQUE7O0FBbU1QLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgge2RhdGF9ICkge1xyXG5cclxuICAgIGNvbnN0IFtvcmNhbWVudG8sIHNldE9yY2FtZW50b10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHN1YmplY3Q6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXRPcmNhbWVudG8oeyAuLi5vcmNhbWVudG8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcclxuXHJcbiAgICBjb25zdCBzZW5kT3JjYW1lbnRvID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9yY2FtZW50by5uYW1lKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jYWRhc3RyYXItb3JjYW1lbnRvJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmNhbWVudG8pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2VFbnYuZXJybyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUVudi5tZW5zYWdlbSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFbnYubWVuc2FnZW0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk86IHRlbnRlIG1haXMgdGFyZGUhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjQvY3NzL2FsbC5taW4uY3NzXCIvPlxyXG4gICAgICAgICAgICA8dGl0bGU+U2l0ZSAtIFNhcHVwMzwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIHtjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN0b3BcIj5TYXB1cDM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjdG9wXCIgY2xhc3NOYW1lPVwibWVudS1idG5cIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VydmljZXNcIiBjbGFzc05hbWU9XCJtZW51LWJ0blwiPlNlcnZpw6dvczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2NvbnRhY3RcIiBjbGFzc05hbWU9XCJtZW51LWJ0blwiPkNvbnRhdG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImltZy10b3AgdG9wXCIgaWQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAge2AuaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYCsgZGF0YS51cmwgKyBkYXRhLmRhdGFob21lLmltYWdlX3RvcCArYCk7IFxyXG4gICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgICBcclxuICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTFcIj57ZGF0YS5kYXRhaG9tZS50aXRsZV90b3Bfb25lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yXCI+e2RhdGEuZGF0YWhvbWUudGl0bGVfdG9wX3R3b308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM1wiPntkYXRhLmRhdGFob21lLnRpdGxlX3RvcF90aHJlZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPntkYXRhLmRhdGFob21lLmJ0bl90aXRsZV90b3B9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlcnZpY2VzXCIgaWQ9XCJzZXJ2aWNlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEuZGF0YWhvbWUuc2VyX3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnYtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtkYXRhLmRhdGFob21lLnNlcl9pY29uZV9vbmV9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmRhdGFob21lLnNlcl90aXRsZV9vbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmRhdGFob21lLnNlcl9kZXNjX29uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5zZXJfaWNvbmVfdHdvfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmRhdGFob21lLnNlcl90aXRsZV90d299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmRhdGFob21lLnNlcl9kZXNjX3R3b308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5zZXJfaWNvbmVfdGhyZWV9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZGF0YWhvbWUuc2VyX2ljb25lX3RocmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5kYXRhaG9tZS5zZXJfZGVzY190aHJlZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdFwiIGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEuZGF0YWhvbWUuY29udF90aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmRhdGFob21lLmNvbnRfZGVzY308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtkYXRhLmRhdGFob21lLmNvbnRfaWNvbl9lbXB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+e2RhdGEuZGF0YWhvbWUuY29udF90aXRsZV9lbXB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+e2RhdGEuZGF0YWhvbWUuY29udF9uYW1lX2VtcH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtkYXRhLmRhdGFob21lLmNvbnRfaWNvbl9lbmR9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+e2RhdGEuZGF0YWhvbWUuY29udF90aXRsZV9lbmR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+e2RhdGEuZGF0YWhvbWUuY29udF9uYW1lX2VuZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtkYXRhLmRhdGFob21lLmNvbnRfaWNvbl9lbWFpbH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj57ZGF0YS5kYXRhaG9tZS5jb250X3RpdGxlX2VtYWlsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPntkYXRhLmRhdGFob21lLmNvbnRfbmFtZV9lbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57ZGF0YS5kYXRhaG9tZS5jb250X3RpdGxlX2Zvcm19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kT3JjYW1lbnRvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBub21lXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIGUtbWFpbFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBhc3N1bnRvXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIHRleHRhcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb250ZW50XCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBjb250ZcO6ZG9cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8c3Bhbj57ZGF0YS5kYXRhaG9tZS5mb290ZXJfZGVzY30gPGEgaHJlZj17ZGF0YS5kYXRhaG9tZS5mb290ZXJfbGlua30+e2RhdGEuZGF0YWhvbWUuZm9vdGVyX25hbWV9PC9hPjwvc3Bhbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcblxyXG4gICAgICAgIDxTY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5Lm1pbi5qc1wiIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIi8+XHJcbiAgICAgICAgPFNjcmlwdCBzcmM9XCJjdXN0b20uanNcIiBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIi8+ICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJTY3JpcHQiLCJIb21lIiwiZGF0YSIsIm5hbWUiLCJlbWFpbCIsInN1YmplY3QiLCJjb250ZW50Iiwib3JjYW1lbnRvIiwic2V0T3JjYW1lbnRvIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRPcmNhbWVudG8iLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNwb25zZUVudiIsImVycm8iLCJtZW5zYWdlbSIsInVybCIsImRhdGFob21lIiwiaW1hZ2VfdG9wIiwidGl0bGVfdG9wX29uZSIsInRpdGxlX3RvcF90d28iLCJ0aXRsZV90b3BfdGhyZWUiLCJidG5fdGl0bGVfdG9wIiwic2VyX3RpdGxlIiwic2VyX2ljb25lX29uZSIsInNlcl90aXRsZV9vbmUiLCJzZXJfZGVzY19vbmUiLCJzZXJfaWNvbmVfdHdvIiwic2VyX3RpdGxlX3R3byIsInNlcl9kZXNjX3R3byIsInNlcl9pY29uZV90aHJlZSIsInNlcl9kZXNjX3RocmVlIiwiY29udF90aXRsZSIsImNvbnRfZGVzYyIsImNvbnRfaWNvbl9lbXAiLCJjb250X3RpdGxlX2VtcCIsImNvbnRfbmFtZV9lbXAiLCJjb250X2ljb25fZW5kIiwiY29udF90aXRsZV9lbmQiLCJjb250X25hbWVfZW5kIiwiY29udF9pY29uX2VtYWlsIiwiY29udF90aXRsZV9lbWFpbCIsImNvbnRfbmFtZV9lbWFpbCIsImNvbnRfdGl0bGVfZm9ybSIsImZvb3Rlcl9kZXNjIiwiZm9vdGVyX2xpbmsiLCJmb290ZXJfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=