"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _popup_AboutPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup/AboutPopup */ \"./src/components/popup/AboutPopup.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar aboutData = {\n    firstName: \"Endy\",\n    lastName: \"Arfian F. P.\",\n    bithday: \"01 January 1994\",\n    address: \"Sleman, Yogyakarta\",\n    phn: \"+62 857... ( req. by email )\",\n    email: \"endyarfian94@gmail.com\",\n    serviceLists: [\n        \"Website Development\",\n        \"Creative Design\",\n        \"2D/3D Animation\",\n        \"Geographic Information System\",\n        \"Forestry Data Analyst\", \n    ],\n    skills: {\n        programming: [\n            {\n                name: \"PHP\",\n                value: \"70\"\n            },\n            {\n                name: \"Java Script\",\n                value: \"50\"\n            },\n            {\n                name: \"Database\",\n                value: \"75\"\n            }, \n        ],\n        other: [\n            {\n                name: \"GIS\",\n                value: \"80\"\n            },\n            {\n                name: \"Animation\",\n                value: \"70\"\n            },\n            {\n                name: \"Design\",\n                value: \"85\"\n            }, \n        ],\n        language: [\n            {\n                name: \"English\",\n                value: \"70\"\n            },\n            {\n                name: \"Indonesian\",\n                value: \"100\"\n            }, \n        ]\n    },\n    education: [\n        {\n            year: \"2014 - 2021\",\n            unv: \"Universitas Gadjah Mada\",\n            degree: \"Bachelor's Degree of Forestry\"\n        },\n        {\n            year: \"2009 - 2013\",\n            unv: \"STM Pembangunan Yogyakarta\",\n            degree: \"Associate Degree of electronics major\"\n        }, \n    ],\n    working: [\n        {\n            year: \"2021 - Running\",\n            company: \"Geo Circle Indonesia\",\n            deg: \"Spatial Data Analyst\"\n        },\n        {\n            year: \"2014 - Running\",\n            company: \"Freelance\",\n            deg: \"Creative Designer, 2D/3D Animator, Web Developer\"\n        },\n        {\n            year: \"2019 - 2020\",\n            company: \"Agri Muda Swasembada Foundation\",\n            deg: \"Social Media Content\"\n        }, \n    ],\n    project: [\n        {\n            year: \"2023\",\n            company: \"BRGM & UGM\",\n            as: \"Web Developer & Database Engineer\",\n            deg: \"Penyusunan dan Pembuatan Sistem Informasi Gambut dan Mangrove\"\n        },\n        {\n            year: \"2022\",\n            company: \"Bukit Asam & UGM\",\n            as: \"Data Analyst\",\n            deg: \"Penaksiran Biomassa dan Cadangan Karbon Tegakan Hasil Reklamasi\"\n        },\n        {\n            year: \"2022\",\n            company: \"Fakultas Kehutanan UGM\",\n            as: \"Web Developer & Database Engineer\",\n            deg: \"Penyusunan RPJP KHDTK Fak. Kehutanan UGM\"\n        },\n        {\n            year: \"2021\",\n            company: \"Blitar Gov. & UGM\",\n            as: \"Enumerator\",\n            deg: \"Penyelesaian Penguasan Tanah dan Penataan Kawasan Hutan\"\n        },\n        {\n            year: \"2021\",\n            company: \"Fakultas Kehutanan UGM\",\n            as: \"Field Coordinator\",\n            deg: \"Riset Pemandatan Kawasan Hutan Dengan Tujuan Khusus\"\n        },\n        {\n            year: \"2021\",\n            company: \"DLHK Sleman & UGM\",\n            as: \"Surveyor & Data Analyst\",\n            deg: \"Kajian Analisis Spasial Pesisir Pantai Selatan DIY\"\n        },\n        {\n            year: \"2019\",\n            company: \"BPDASHL SUMUT & UGM\",\n            as: \"Surveyor & Data Analyst\",\n            deg: \"Penyusunan Rencana Teknis Rehabilitasi DAS Wampu Sei Ular\"\n        }, \n    ],\n    partnersLogos: [\n        \"img/partners/1.png\",\n        \"img/partners/2.png\",\n        \"img/partners/3.png\",\n        \"img/partners/4.png\", \n    ]\n};\nvar About = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), popup = ref[0], setPopup = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popup_AboutPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: popup,\n                close: function() {\n                    return setPopup(false);\n                },\n                aboutData: aboutData\n            }, void 0, false, {\n                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"_tm_section hidden animated\",\n                id: \"about\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section_inner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"_tm_about\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"image\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"img/thumbs/1-1.jpg\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"main\",\n                                            \"data-img-url\": \"img/about/1.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"short\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"name\",\n                                                children: [\n                                                    aboutData.firstName,\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"coloring\",\n                                                        children: aboutData.lastName\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"job\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"My name is \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Endy Arfian.\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 30\n                                                }, _this),\n                                                \" I do a lot of work in the forestry sector, web-developing, and designing. \",\n                                                \"I'm\",\n                                                \" very passionate and dedicated to my work. With 5+ years experience in those sector, I have acquired the skills and knowledge.\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"_tm_button\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            onClick: function() {\n                                                return setPopup(true);\n                                            },\n                                            children: \"Learn More\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\components\\\\About.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanM/ZTU4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiLi9BbmltYXRlZFRleHRcIjtcclxuaW1wb3J0IEFib3V0UG9wdXAgZnJvbSBcIi4vcG9wdXAvQWJvdXRQb3B1cFwiO1xyXG5cclxuY29uc3QgYWJvdXREYXRhID0ge1xyXG4gIGZpcnN0TmFtZTogXCJFbmR5XCIsXHJcbiAgbGFzdE5hbWU6IFwiQXJmaWFuIEYuIFAuXCIsXHJcbiAgYml0aGRheTogXCIwMSBKYW51YXJ5IDE5OTRcIixcclxuICBhZGRyZXNzOiBcIlNsZW1hbiwgWW9neWFrYXJ0YVwiLFxyXG4gIHBobjogXCIrNjIgODU3Li4uICggcmVxLiBieSBlbWFpbCApXCIsXHJcbiAgZW1haWw6IFwiZW5keWFyZmlhbjk0QGdtYWlsLmNvbVwiLFxyXG4gIHNlcnZpY2VMaXN0czogW1xyXG4gICAgXCJXZWJzaXRlIERldmVsb3BtZW50XCIsXHJcbiAgICBcIkNyZWF0aXZlIERlc2lnblwiLFxyXG4gICAgXCIyRC8zRCBBbmltYXRpb25cIixcclxuICAgIFwiR2VvZ3JhcGhpYyBJbmZvcm1hdGlvbiBTeXN0ZW1cIixcclxuICAgIFwiRm9yZXN0cnkgRGF0YSBBbmFseXN0XCIsXHJcbiAgXSxcclxuICBza2lsbHM6IHtcclxuICAgIHByb2dyYW1taW5nOiBbXHJcbiAgICAgIHsgbmFtZTogXCJQSFBcIiwgdmFsdWU6IFwiNzBcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiSmF2YSBTY3JpcHRcIiwgdmFsdWU6IFwiNTBcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiRGF0YWJhc2VcIiwgdmFsdWU6IFwiNzVcIiB9LFxyXG4gICAgXSxcclxuICAgIG90aGVyOiBbXHJcbiAgICAgIHsgbmFtZTogXCJHSVNcIiwgdmFsdWU6IFwiODBcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiQW5pbWF0aW9uXCIsIHZhbHVlOiBcIjcwXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIkRlc2lnblwiLCB2YWx1ZTogXCI4NVwiIH0sXHJcbiAgICBdLFxyXG4gICAgbGFuZ3VhZ2U6IFtcclxuICAgICAgeyBuYW1lOiBcIkVuZ2xpc2hcIiwgdmFsdWU6IFwiNzBcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiSW5kb25lc2lhblwiLCB2YWx1ZTogXCIxMDBcIiB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGVkdWNhdGlvbjogW1xyXG4gICAgeyB5ZWFyOiBcIjIwMTQgLSAyMDIxXCIsIHVudjogXCJVbml2ZXJzaXRhcyBHYWRqYWggTWFkYVwiLCBkZWdyZWU6IFwiQmFjaGVsb3IncyBEZWdyZWUgb2YgRm9yZXN0cnlcIiB9LFxyXG4gICAgeyB5ZWFyOiBcIjIwMDkgLSAyMDEzXCIsIHVudjogXCJTVE0gUGVtYmFuZ3VuYW4gWW9neWFrYXJ0YVwiLCBkZWdyZWU6IFwiQXNzb2NpYXRlIERlZ3JlZSBvZiBlbGVjdHJvbmljcyBtYWpvclwiIH0sXHJcbiAgXSxcclxuICB3b3JraW5nOiBbXHJcbiAgICB7XHJcbiAgICAgIHllYXI6IFwiMjAyMSAtIFJ1bm5pbmdcIixcclxuICAgICAgY29tcGFueTogXCJHZW8gQ2lyY2xlIEluZG9uZXNpYVwiLFxyXG4gICAgICBkZWc6IFwiU3BhdGlhbCBEYXRhIEFuYWx5c3RcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHllYXI6IFwiMjAxNCAtIFJ1bm5pbmdcIixcclxuICAgICAgY29tcGFueTogXCJGcmVlbGFuY2VcIixcclxuICAgICAgZGVnOiBcIkNyZWF0aXZlIERlc2lnbmVyLCAyRC8zRCBBbmltYXRvciwgV2ViIERldmVsb3BlclwiLFxyXG4gICAgfSxcclxuICAgIHsgeWVhcjogXCIyMDE5IC0gMjAyMFwiLCBjb21wYW55OiBcIkFncmkgTXVkYSBTd2FzZW1iYWRhIEZvdW5kYXRpb25cIiwgZGVnOiBcIlNvY2lhbCBNZWRpYSBDb250ZW50XCIgfSxcclxuICBdLFxyXG4gIHByb2plY3Q6IFtcclxuICAgIHtcclxuICAgICAgeWVhcjogXCIyMDIzXCIsXHJcbiAgICAgIGNvbXBhbnk6IFwiQlJHTSAmIFVHTVwiLFxyXG4gICAgICBhczogXCJXZWIgRGV2ZWxvcGVyICYgRGF0YWJhc2UgRW5naW5lZXJcIixcclxuICAgICAgZGVnOiBcIlBlbnl1c3VuYW4gZGFuIFBlbWJ1YXRhbiBTaXN0ZW0gSW5mb3JtYXNpIEdhbWJ1dCBkYW4gTWFuZ3JvdmVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHllYXI6IFwiMjAyMlwiLFxyXG4gICAgICBjb21wYW55OiBcIkJ1a2l0IEFzYW0gJiBVR01cIixcclxuICAgICAgYXM6IFwiRGF0YSBBbmFseXN0XCIsXHJcbiAgICAgIGRlZzogXCJQZW5ha3NpcmFuIEJpb21hc3NhIGRhbiBDYWRhbmdhbiBLYXJib24gVGVnYWthbiBIYXNpbCBSZWtsYW1hc2lcIixcclxuICAgIH0sXHJcbiAgICB7IHllYXI6IFwiMjAyMlwiLCBjb21wYW55OiBcIkZha3VsdGFzIEtlaHV0YW5hbiBVR01cIiwgYXM6IFwiV2ViIERldmVsb3BlciAmIERhdGFiYXNlIEVuZ2luZWVyXCIsIGRlZzogXCJQZW55dXN1bmFuIFJQSlAgS0hEVEsgRmFrLiBLZWh1dGFuYW4gVUdNXCIgfSxcclxuICAgIHsgeWVhcjogXCIyMDIxXCIsIGNvbXBhbnk6IFwiQmxpdGFyIEdvdi4gJiBVR01cIiwgYXM6IFwiRW51bWVyYXRvclwiLCBkZWc6IFwiUGVueWVsZXNhaWFuIFBlbmd1YXNhbiBUYW5haCBkYW4gUGVuYXRhYW4gS2F3YXNhbiBIdXRhblwiIH0sXHJcbiAgICB7IHllYXI6IFwiMjAyMVwiLCBjb21wYW55OiBcIkZha3VsdGFzIEtlaHV0YW5hbiBVR01cIiwgYXM6IFwiRmllbGQgQ29vcmRpbmF0b3JcIiwgZGVnOiBcIlJpc2V0IFBlbWFuZGF0YW4gS2F3YXNhbiBIdXRhbiBEZW5nYW4gVHVqdWFuIEtodXN1c1wiIH0sXHJcbiAgICB7IHllYXI6IFwiMjAyMVwiLCBjb21wYW55OiBcIkRMSEsgU2xlbWFuICYgVUdNXCIsIGFzOiBcIlN1cnZleW9yICYgRGF0YSBBbmFseXN0XCIsIGRlZzogXCJLYWppYW4gQW5hbGlzaXMgU3Bhc2lhbCBQZXNpc2lyIFBhbnRhaSBTZWxhdGFuIERJWVwiIH0sXHJcbiAgICB7IHllYXI6IFwiMjAxOVwiLCBjb21wYW55OiBcIkJQREFTSEwgU1VNVVQgJiBVR01cIiwgYXM6IFwiU3VydmV5b3IgJiBEYXRhIEFuYWx5c3RcIiwgZGVnOiBcIlBlbnl1c3VuYW4gUmVuY2FuYSBUZWtuaXMgUmVoYWJpbGl0YXNpIERBUyBXYW1wdSBTZWkgVWxhclwiIH0sXHJcbiAgXSxcclxuICBwYXJ0bmVyc0xvZ29zOiBbXHJcbiAgICBcImltZy9wYXJ0bmVycy8xLnBuZ1wiLFxyXG4gICAgXCJpbWcvcGFydG5lcnMvMi5wbmdcIixcclxuICAgIFwiaW1nL3BhcnRuZXJzLzMucG5nXCIsXHJcbiAgICBcImltZy9wYXJ0bmVycy80LnBuZ1wiLFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8QWJvdXRQb3B1cFxyXG4gICAgICAgIG9wZW49e3BvcHVwfVxyXG4gICAgICAgIGNsb3NlPXsoKSA9PiBzZXRQb3B1cChmYWxzZSl9XHJcbiAgICAgICAgYWJvdXREYXRhPXthYm91dERhdGF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiX3RtX3NlY3Rpb24gaGlkZGVuIGFuaW1hdGVkXCIgaWQ9XCJhYm91dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfdG1fYWJvdXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdGh1bWJzLzEtMS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCIgZGF0YS1pbWctdXJsPVwiaW1nL2Fib3V0LzEuanBnXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7YWJvdXREYXRhLmZpcnN0TmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yaW5nXCI+e2Fib3V0RGF0YS5sYXN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImpvYlwiPlxyXG4gICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRUZXh0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIE15IG5hbWUgaXMgPHNwYW4+RW5keSBBcmZpYW4uPC9zcGFuPiBJIGRvIGEgbG90IG9mIHdvcmsgaW4gdGhlIGZvcmVzdHJ5IHNlY3RvciwgXHJcbiAgICAgICAgICAgICAgICAgIHdlYi1kZXZlbG9waW5nLCBhbmQgZGVzaWduaW5nLiB7YEknbWB9IHZlcnkgcGFzc2lvbmF0ZSBhbmQgZGVkaWNhdGVkIHRvIG15IHdvcmsuIFdpdGggNStcclxuICAgICAgICAgICAgICAgICAgeWVhcnMgZXhwZXJpZW5jZSBpbiB0aG9zZSBzZWN0b3IsIEkgaGF2ZVxyXG4gICAgICAgICAgICAgICAgICBhY3F1aXJlZCB0aGUgc2tpbGxzIGFuZCBrbm93bGVkZ2UuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfdG1fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHNldFBvcHVwKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwiQW5pbWF0ZWRUZXh0IiwiQWJvdXRQb3B1cCIsImFib3V0RGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYml0aGRheSIsImFkZHJlc3MiLCJwaG4iLCJlbWFpbCIsInNlcnZpY2VMaXN0cyIsInNraWxscyIsInByb2dyYW1taW5nIiwibmFtZSIsInZhbHVlIiwib3RoZXIiLCJsYW5ndWFnZSIsImVkdWNhdGlvbiIsInllYXIiLCJ1bnYiLCJkZWdyZWUiLCJ3b3JraW5nIiwiY29tcGFueSIsImRlZyIsInByb2plY3QiLCJhcyIsInBhcnRuZXJzTG9nb3MiLCJBYm91dCIsInBvcHVwIiwic2V0UG9wdXAiLCJvcGVuIiwiY2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImltZyIsInNyYyIsImFsdCIsImRhdGEtaW1nLXVybCIsImgzIiwic3BhbiIsInAiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/About.js\n");

/***/ })

});