"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ "next/script");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\daniel\\Documents\\GitHub\\site_r\\site_react_next\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Home({
  data
}) {
  const {
    0: orcamento,
    1: setOrcamento
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    subject: '',
    content: ''
  });
  const {
    0: response,
    1: setResponse
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    formSave: false,
    type: '',
    mensagem: ''
  });

  const onChangeInput = e => setOrcamento(_objectSpread(_objectSpread({}, orcamento), {}, {
    [e.target.name]: e.target.value
  }));

  const sendOrcamento = async e => {
    e.preventDefault();
    setResponse({
      formSave: true
    });

    try {
      const res = await fetch('http://localhost:8080/cadastrar-orcamento', {
        method: 'POST',
        body: JSON.stringify(orcamento),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseEnv = await res.json();

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
    } catch (err) {
      setResponse({
        formSave: false,
        type: 'error',
        mensagem: "ERRO: tente mais tarde!"
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
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
    }, this), console.log(data), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
          className: "menu",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "menu-btn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: "img-top top",
      id: "top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("style", {
        children: `.img-top {
                   background-image: url(` + data.url + data.datahome.image_top + `); 
                   background-repeat: no-repeat; 
                   background-position: center;     
               }`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "max-width",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "top-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "text-1",
            children: data.datahome.title_top_one
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "text-2",
            children: data.datahome.title_top_two
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "text-3",
            children: data.datahome.title_top_three
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: "services",
      id: "services",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: "title",
          children: data.datahome.ser_title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "serv-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                className: data.datahome.ser_icone_one
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_title_one
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                className: data.datahome.ser_icone_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_title_two
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                className: data.datahome.ser_icone_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "text",
                children: data.datahome.ser_icone_three
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: "contact",
      id: "contact",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: "title",
          children: data.datahome.cont_title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "contact-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "column left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: data.datahome.cont_desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "icons",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_emp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_emp
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_end
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_end
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                  className: data.datahome.cont_icon_email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "head",
                    children: data.datahome.cont_title_email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "column right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text",
              children: data.datahome.cont_title_form
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
              onSubmit: sendOrcamento,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "fields",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "field name",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "field email",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "field",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "field textarea",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("textarea", {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "button-area",
                children: response.formSave ? "salvando" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        children: [data.datahome.footer_desc, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      strategy: "beforeInteractive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
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

async function getServerSideProps() {
  const response = await fetch(`http://localhost:8080/`);
  const data = await response.json(); //console.log(data);

  return {
    props: {
      data
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRUEsU0FBU0ksSUFBVCxDQUFlO0FBQUNDLEVBQUFBO0FBQUQsQ0FBZixFQUF3QjtBQUVwQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJOLCtDQUFRLENBQUM7QUFDdkNPLElBQUFBLElBQUksRUFBRSxFQURpQztBQUV2Q0MsSUFBQUEsS0FBSyxFQUFFLEVBRmdDO0FBR3ZDQyxJQUFBQSxPQUFPLEVBQUUsRUFIOEI7QUFJdkNDLElBQUFBLE9BQU8sRUFBRTtBQUo4QixHQUFELENBQTFDO0FBT0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTJCWiwrQ0FBUSxDQUFDO0FBQ3RDYSxJQUFBQSxRQUFRLEVBQUUsS0FENEI7QUFFdENDLElBQUFBLElBQUksRUFBRSxFQUZnQztBQUd0Q0MsSUFBQUEsUUFBUSxFQUFFO0FBSDRCLEdBQUQsQ0FBekM7O0FBTUEsUUFBTUMsYUFBYSxHQUFHQyxDQUFDLElBQUlYLFlBQVksaUNBQU1ELFNBQU47QUFBaUIsS0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNYLElBQVYsR0FBaUJVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUEzQyxLQUF2Qzs7QUFFQSxRQUFNQyxhQUFhLEdBQUcsTUFBTUgsQ0FBTixJQUFXO0FBQzdCQSxJQUFBQSxDQUFDLENBQUNJLGNBQUY7QUFFQVQsSUFBQUEsV0FBVyxDQUFDO0FBQUNDLE1BQUFBLFFBQVEsRUFBRTtBQUFYLEtBQUQsQ0FBWDs7QUFFQSxRQUFJO0FBQ0EsWUFBTVMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQywyQ0FBRCxFQUE4QztBQUNqRUMsUUFBQUEsTUFBTSxFQUFFLE1BRHlEO0FBRWpFQyxRQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFldEIsU0FBZixDQUYyRDtBQUdqRXVCLFFBQUFBLE9BQU8sRUFBRTtBQUFDLDBCQUFnQjtBQUFqQjtBQUh3RCxPQUE5QyxDQUF2QjtBQU1BLFlBQU1DLFdBQVcsR0FBRyxNQUFNUCxHQUFHLENBQUNRLElBQUosRUFBMUI7O0FBRUEsVUFBR0QsV0FBVyxDQUFDRSxJQUFmLEVBQW9CO0FBQ2hCbkIsUUFBQUEsV0FBVyxDQUFDO0FBQ1JDLFVBQUFBLFFBQVEsRUFBRSxLQURGO0FBRVJDLFVBQUFBLElBQUksRUFBRSxPQUZFO0FBR1JDLFVBQUFBLFFBQVEsRUFBRWMsV0FBVyxDQUFDZDtBQUhkLFNBQUQsQ0FBWDtBQUtILE9BTkQsTUFNSztBQUNESCxRQUFBQSxXQUFXLENBQUM7QUFDUkMsVUFBQUEsUUFBUSxFQUFFLEtBREY7QUFFUkMsVUFBQUEsSUFBSSxFQUFFLFNBRkU7QUFHUkMsVUFBQUEsUUFBUSxFQUFFYyxXQUFXLENBQUNkO0FBSGQsU0FBRCxDQUFYO0FBS0g7QUFFSixLQXZCRCxDQXVCQyxPQUFNaUIsR0FBTixFQUFVO0FBQ1BwQixNQUFBQSxXQUFXLENBQUM7QUFDUkMsUUFBQUEsUUFBUSxFQUFFLEtBREY7QUFFUkMsUUFBQUEsSUFBSSxFQUFFLE9BRkU7QUFHUkMsUUFBQUEsUUFBUSxFQUFFO0FBSEYsT0FBRCxDQUFYO0FBS0g7QUFDSixHQW5DRDs7QUFxQ0Esc0JBQ0E7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDhCQUNJO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQU9La0IsT0FBTyxDQUFDQyxHQUFSLENBQVk5QixJQUFaLENBUEwsZUFRSTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGlDQUNJO0FBQUcsZ0JBQUksRUFBQyxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUksbUJBQVMsRUFBQyxNQUFkO0FBQUEsa0NBQ0k7QUFBQSxtQ0FBSTtBQUFHLGtCQUFJLEVBQUMsTUFBUjtBQUFlLHVCQUFTLEVBQUMsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSxtQ0FBSTtBQUFHLGtCQUFJLEVBQUMsV0FBUjtBQUFvQix1QkFBUyxFQUFDLFVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsbUNBQUk7QUFBRyxrQkFBSSxFQUFDLFVBQVI7QUFBbUIsdUJBQVMsRUFBQyxVQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBU0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUF3Qkk7QUFBUyxlQUFTLEVBQUMsYUFBbkI7QUFBaUMsUUFBRSxFQUFDLEtBQXBDO0FBQUEsOEJBQ0k7QUFBQSxrQkFDTTtBQUNsQiwwQ0FEaUIsR0FDMkJBLElBQUksQ0FBQytCLEdBRGhDLEdBQ3NDL0IsSUFBSSxDQUFDZ0MsUUFBTCxDQUFjQyxTQURwRCxHQUNnRTtBQUNqRjtBQUNBO0FBQ0E7QUFMWTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFRSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxzQkFBeUJqQyxJQUFJLENBQUNnQyxRQUFMLENBQWNFO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUFBLHNCQUF5QmxDLElBQUksQ0FBQ2dDLFFBQUwsQ0FBY0c7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsc0JBQXlCbkMsSUFBSSxDQUFDZ0MsUUFBTCxDQUFjSTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQSxzQkFBYXBDLElBQUksQ0FBQ2dDLFFBQUwsQ0FBY0s7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKLGVBMkNJO0FBQVMsZUFBUyxFQUFDLFVBQW5CO0FBQThCLFFBQUUsRUFBQyxVQUFqQztBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLE9BQWQ7QUFBQSxvQkFBdUJyQyxJQUFJLENBQUNnQyxRQUFMLENBQWNNO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLEtBQWY7QUFBQSxzQ0FDSTtBQUFHLHlCQUFTLEVBQUV0QyxJQUFJLENBQUNnQyxRQUFMLENBQWNPO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLDBCQUNLdkMsSUFBSSxDQUFDZ0MsUUFBTCxDQUFjUTtBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBS0k7QUFBQSwwQkFBSXhDLElBQUksQ0FBQ2dDLFFBQUwsQ0FBY1M7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBV0k7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsS0FBZjtBQUFBLHNDQUNJO0FBQUcseUJBQVMsRUFBRXpDLElBQUksQ0FBQ2dDLFFBQUwsQ0FBY1U7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQUsseUJBQVMsRUFBQyxNQUFmO0FBQUEsMEJBQ0MxQyxJQUFJLENBQUNnQyxRQUFMLENBQWNXO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUtJO0FBQUEsMEJBQUkzQyxJQUFJLENBQUNnQyxRQUFMLENBQWNZO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYSixlQXFCSTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxLQUFmO0FBQUEsc0NBQ0k7QUFBRyx5QkFBUyxFQUFFNUMsSUFBSSxDQUFDZ0MsUUFBTCxDQUFjYTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBSyx5QkFBUyxFQUFDLE1BQWY7QUFBQSwwQkFDQzdDLElBQUksQ0FBQ2dDLFFBQUwsQ0FBY2E7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBS0k7QUFBQSwwQkFBSTdDLElBQUksQ0FBQ2dDLFFBQUwsQ0FBY2M7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDSixlQWdGSTtBQUFTLGVBQVMsRUFBQyxTQUFuQjtBQUE2QixRQUFFLEVBQUMsU0FBaEM7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxPQUFkO0FBQUEsb0JBQXVCOUMsSUFBSSxDQUFDZ0MsUUFBTCxDQUFjZTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxvQ0FDSTtBQUFBLHdCQUFJL0MsSUFBSSxDQUFDZ0MsUUFBTCxDQUFjZ0I7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUssdUJBQVMsRUFBQyxPQUFmO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBQSx3Q0FDSTtBQUFHLDJCQUFTLEVBQUVoRCxJQUFJLENBQUNnQyxRQUFMLENBQWNpQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBRUk7QUFBSywyQkFBUyxFQUFDLE1BQWY7QUFBQSwwQ0FDSTtBQUFLLDZCQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUF1QmpELElBQUksQ0FBQ2dDLFFBQUwsQ0FBY2tCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFFSTtBQUFLLDZCQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUE0QmxELElBQUksQ0FBQ2dDLFFBQUwsQ0FBY21CO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQVNJO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQUEsd0NBQ0k7QUFBRywyQkFBUyxFQUFFbkQsSUFBSSxDQUFDZ0MsUUFBTCxDQUFjb0I7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJO0FBQUssMkJBQVMsRUFBQyxNQUFmO0FBQUEsMENBQ0k7QUFBSyw2QkFBUyxFQUFDLE1BQWY7QUFBQSw4QkFBdUJwRCxJQUFJLENBQUNnQyxRQUFMLENBQWNxQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUk7QUFBSyw2QkFBUyxFQUFDLFdBQWY7QUFBQSw4QkFBNEJyRCxJQUFJLENBQUNnQyxRQUFMLENBQWNzQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVEosZUFpQkk7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBQSx3Q0FDSTtBQUFHLDJCQUFTLEVBQUV0RCxJQUFJLENBQUNnQyxRQUFMLENBQWN1QjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBRUk7QUFBSywyQkFBUyxFQUFDLE1BQWY7QUFBQSwwQ0FDSTtBQUFLLDZCQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUF1QnZELElBQUksQ0FBQ2dDLFFBQUwsQ0FBY3dCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFFSTtBQUFLLDZCQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUE0QnhELElBQUksQ0FBQ2dDLFFBQUwsQ0FBY3lCO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQTZCSTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEsd0JBQXVCekQsSUFBSSxDQUFDZ0MsUUFBTCxDQUFjMEI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQU0sc0JBQVEsRUFBRTFDLGFBQWhCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSx3Q0FDSTtBQUFLLDJCQUFTLEVBQUMsWUFBZjtBQUFBLHlDQUNJO0FBQU8sd0JBQUksRUFBQyxNQUFaO0FBQW1CLHdCQUFJLEVBQUMsTUFBeEI7QUFBK0IsK0JBQVcsRUFBQyxlQUEzQztBQUEyRCw0QkFBUSxFQUFFSixhQUFyRTtBQUFvRiw0QkFBUTtBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUlJO0FBQUssMkJBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ0k7QUFBTyx3QkFBSSxFQUFDLE1BQVo7QUFBbUIsd0JBQUksRUFBQyxPQUF4QjtBQUFnQywrQkFBVyxFQUFDLGlCQUE1QztBQUE4RCw0QkFBUSxFQUFFQSxhQUF4RTtBQUF1Riw0QkFBUTtBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFVSTtBQUFLLHlCQUFTLEVBQUMsT0FBZjtBQUFBLHVDQUNJO0FBQU8sc0JBQUksRUFBQyxNQUFaO0FBQW1CLHNCQUFJLEVBQUMsU0FBeEI7QUFBa0MsNkJBQVcsRUFBQyxrQkFBOUM7QUFBaUUsMEJBQVEsRUFBRUEsYUFBM0U7QUFBMEYsMEJBQVE7QUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkosZUFjSTtBQUFLLHlCQUFTLEVBQUMsZ0JBQWY7QUFBQSx1Q0FDSTtBQUFVLHNCQUFJLEVBQUMsU0FBZjtBQUF5QixzQkFBSSxFQUFDLElBQTlCO0FBQW1DLHNCQUFJLEVBQUMsSUFBeEM7QUFBNkMsNkJBQVcsRUFBQyxzQkFBekQ7QUFBNkUsMEJBQVEsRUFBRUEsYUFBdkY7QUFBc0csMEJBQVE7QUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZEosZUFrQkk7QUFBSyx5QkFBUyxFQUFDLGFBQWY7QUFBQSwwQkFDS0wsUUFBUSxDQUFDRSxRQUFULEdBQW9CLFVBQXBCLGdCQUFnQztBQUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhGSixlQThJSTtBQUFBLDZCQUNJO0FBQUEsbUJBQU9ULElBQUksQ0FBQ2dDLFFBQUwsQ0FBYzJCLFdBQXJCLG9CQUFrQztBQUFHLGNBQUksRUFBRTNELElBQUksQ0FBQ2dDLFFBQUwsQ0FBYzRCLFdBQXZCO0FBQUEsb0JBQXFDNUQsSUFBSSxDQUFDZ0MsUUFBTCxDQUFjNkI7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlJSixlQW1KSSw4REFBQyxvREFBRDtBQUFRLFNBQUcsRUFBQyxrRUFBWjtBQUErRSxjQUFRLEVBQUM7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5KSixlQW9KSSw4REFBQyxvREFBRDtBQUFRLFNBQUcsRUFBQyxXQUFaO0FBQXdCLGNBQVEsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBd0pEOztBQUVNLGVBQWVDLGtCQUFmLEdBQW9DO0FBQ3ZDLFFBQU12RCxRQUFRLEdBQUcsTUFBTVksS0FBSyxDQUFFLHdCQUFGLENBQTVCO0FBQ0EsUUFBTW5CLElBQUksR0FBRyxNQUFNTyxRQUFRLENBQUNtQixJQUFULEVBQW5CLENBRnVDLENBR3ZDOztBQUNBLFNBQU87QUFBRXFDLElBQUFBLEtBQUssRUFBRTtBQUFFL0QsTUFBQUE7QUFBRjtBQUFULEdBQVA7QUFDSDtBQUVELGlFQUFlRCxJQUFmOzs7Ozs7Ozs7O0FDNU5GOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZV9yZWFjdF9uZXh0Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2l0ZV9yZWFjdF9uZXh0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc2l0ZV9yZWFjdF9uZXh0L2V4dGVybmFsIFwibmV4dC9zY3JpcHRcIiIsIndlYnBhY2s6Ly9zaXRlX3JlYWN0X25leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpdGVfcmVhY3RfbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgge2RhdGF9ICkge1xyXG5cclxuICAgIGNvbnN0IFtvcmNhbWVudG8sIHNldE9yY2FtZW50b10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHN1YmplY3Q6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbcmVzcG9uc2UsICBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1lbnNhZ2VtOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT4gc2V0T3JjYW1lbnRvKHsgLi4ub3JjYW1lbnRvLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSk7XHJcblxyXG4gICAgY29uc3Qgc2VuZE9yY2FtZW50byA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRSZXNwb25zZSh7Zm9ybVNhdmU6IHRydWV9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jYWRhc3RyYXItb3JjYW1lbnRvJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmNhbWVudG8pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2VFbnYuZXJybyl7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVuc2FnZW06IHJlc3BvbnNlRW52Lm1lbnNhZ2VtXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZW5zYWdlbTogcmVzcG9uc2VFbnYubWVuc2FnZW1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FnZW06IFwiRVJSTzogdGVudGUgbWFpcyB0YXJkZSFcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS40L2Nzcy9hbGwubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPHRpdGxlPlNpdGUgLSBTYXB1cDM8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICB7Y29uc29sZS5sb2coZGF0YSl9XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdG9wXCI+U2FwdXAzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3RvcFwiIGNsYXNzTmFtZT1cIm1lbnUtYnRuXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwibWVudS1idG5cIj5TZXJ2acOnb3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPVwibWVudS1idG5cIj5Db250YXRvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbWctdG9wIHRvcFwiIGlkPVwidG9wXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgIHtgLmltZy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGArIGRhdGEudXJsICsgZGF0YS5kYXRhaG9tZS5pbWFnZV90b3AgK2ApOyBcclxuICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgICAgXHJcbiAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0xXCI+e2RhdGEuZGF0YWhvbWUudGl0bGVfdG9wX29uZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMlwiPntkYXRhLmRhdGFob21lLnRpdGxlX3RvcF90d299PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTNcIj57ZGF0YS5kYXRhaG9tZS50aXRsZV90b3BfdGhyZWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57ZGF0YS5kYXRhaG9tZS5idG5fdGl0bGVfdG9wfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZXJ2aWNlc1wiIGlkPVwic2VydmljZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLmRhdGFob21lLnNlcl90aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5zZXJfaWNvbmVfb25lfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhaG9tZS5zZXJfdGl0bGVfb25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5kYXRhaG9tZS5zZXJfZGVzY19vbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2RhdGEuZGF0YWhvbWUuc2VyX2ljb25lX3R3b30+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhaG9tZS5zZXJfdGl0bGVfdHdvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5kYXRhaG9tZS5zZXJfZGVzY190d299PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2RhdGEuZGF0YWhvbWUuc2VyX2ljb25lX3RocmVlfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmRhdGFob21lLnNlcl9pY29uZV90aHJlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuZGF0YWhvbWUuc2VyX2Rlc2NfdGhyZWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLmRhdGFob21lLmNvbnRfdGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5kYXRhaG9tZS5jb250X2Rlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5jb250X2ljb25fZW1wfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPntkYXRhLmRhdGFob21lLmNvbnRfdGl0bGVfZW1wfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPntkYXRhLmRhdGFob21lLmNvbnRfbmFtZV9lbXB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5jb250X2ljb25fZW5kfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPntkYXRhLmRhdGFob21lLmNvbnRfdGl0bGVfZW5kfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPntkYXRhLmRhdGFob21lLmNvbnRfbmFtZV9lbmR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZGF0YS5kYXRhaG9tZS5jb250X2ljb25fZW1haWx9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+e2RhdGEuZGF0YWhvbWUuY29udF90aXRsZV9lbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj57ZGF0YS5kYXRhaG9tZS5jb250X25hbWVfZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2RhdGEuZGF0YWhvbWUuY29udF90aXRsZV9mb3JtfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZE9yY2FtZW50b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gbm9tZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBlLW1haWxcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gYXNzdW50b1wiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCB0ZXh0YXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29udGVudFwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gY29udGXDumRvXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLmZvcm1TYXZlID8gXCJzYWx2YW5kb1wiOiA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHNwYW4+e2RhdGEuZGF0YWhvbWUuZm9vdGVyX2Rlc2N9IDxhIGhyZWY9e2RhdGEuZGF0YWhvbWUuZm9vdGVyX2xpbmt9PntkYXRhLmRhdGFob21lLmZvb3Rlcl9uYW1lfTwvYT48L3NwYW4+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcblxyXG5cclxuICAgICAgICA8U2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNi4wL2pxdWVyeS5taW4uanNcIiBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIvPlxyXG4gICAgICAgIDxTY3JpcHQgc3JjPVwiY3VzdG9tLmpzXCIgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCIvPiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH07XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJTY3JpcHQiLCJIb21lIiwiZGF0YSIsIm9yY2FtZW50byIsInNldE9yY2FtZW50byIsIm5hbWUiLCJlbWFpbCIsInN1YmplY3QiLCJjb250ZW50IiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImZvcm1TYXZlIiwidHlwZSIsIm1lbnNhZ2VtIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRPcmNhbWVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2VFbnYiLCJqc29uIiwiZXJybyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJkYXRhaG9tZSIsImltYWdlX3RvcCIsInRpdGxlX3RvcF9vbmUiLCJ0aXRsZV90b3BfdHdvIiwidGl0bGVfdG9wX3RocmVlIiwiYnRuX3RpdGxlX3RvcCIsInNlcl90aXRsZSIsInNlcl9pY29uZV9vbmUiLCJzZXJfdGl0bGVfb25lIiwic2VyX2Rlc2Nfb25lIiwic2VyX2ljb25lX3R3byIsInNlcl90aXRsZV90d28iLCJzZXJfZGVzY190d28iLCJzZXJfaWNvbmVfdGhyZWUiLCJzZXJfZGVzY190aHJlZSIsImNvbnRfdGl0bGUiLCJjb250X2Rlc2MiLCJjb250X2ljb25fZW1wIiwiY29udF90aXRsZV9lbXAiLCJjb250X25hbWVfZW1wIiwiY29udF9pY29uX2VuZCIsImNvbnRfdGl0bGVfZW5kIiwiY29udF9uYW1lX2VuZCIsImNvbnRfaWNvbl9lbWFpbCIsImNvbnRfdGl0bGVfZW1haWwiLCJjb250X25hbWVfZW1haWwiLCJjb250X3RpdGxlX2Zvcm0iLCJmb290ZXJfZGVzYyIsImZvb3Rlcl9saW5rIiwiZm9vdGVyX25hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=