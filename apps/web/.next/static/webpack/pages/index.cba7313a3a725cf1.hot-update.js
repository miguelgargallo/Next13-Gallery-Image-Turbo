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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"../../node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui */ \"../../packages/ui/dist/index.mjs\");\n/* eslint-disable react/jsx-no-comment-textnodes */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    // word a word and find the definition\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [definition, setDefinition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // const fetch data but if no data is found then return a sentence \"no data found\"\n    const fetchData = async ()=>{\n        // display fetched text on screen from https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.0/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLpA.txt\n        {\n            const response = await fetch(\"https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.0/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLpA.txt\");\n            const text1 = await response.text();\n            const word = text1.split(\" \");\n            setWord(word);\n        }\n        const lines = text.split(\" \");\n        const randomLine = lines[Math.floor(Math.random() * lines.length)];\n        setDefinition(randomLine);\n        setLoading(false);\n        setWord(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Pylar\"\n                    }, void 0, false, {\n                        fileName: \"/home/alex/frameworks/staff/Next13-Gallery-Image-Turbo/apps/web/src/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/alex/frameworks/staff/Next13-Gallery-Image-Turbo/apps/web/src/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/alex/frameworks/staff/Next13-Gallery-Image-Turbo/apps/web/src/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui__WEBPACK_IMPORTED_MODULE_3__.TitlePylar, {}, void 0, false, {\n                        fileName: \"/home/alex/frameworks/staff/Next13-Gallery-Image-Turbo/apps/web/src/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                        word: word,\n                        setWord: setWord,\n                        definition: definition,\n                        setDefinition: setDefinition,\n                        fetchData: fetchData,\n                        loading: loading,\n                        setLoading: setLoading,\n                        error: error,\n                        setError: setError\n                    }, void 0, false, {\n                        fileName: \"/home/alex/frameworks/staff/Next13-Gallery-Image-Turbo/apps/web/src/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/alex/frameworks/staff/Next13-Gallery-Image-Turbo/apps/web/src/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {\n                fileName: \"/home/alex/frameworks/staff/Next13-Gallery-Image-Turbo/apps/web/src/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/alex/frameworks/staff/Next13-Gallery-Image-Turbo/apps/web/src/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"A/3fBpGMhkFPUNdrosKC9kAfSbo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQWlELEdBQ2pEOztBQUE2QjtBQUNJO0FBQ1A7QUFDTTtBQUNKO0FBR2IsU0FBU0ssT0FBTzs7SUFDN0Isc0NBQXNDO0lBQ3RDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBUztJQUN6QyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFVLEtBQUs7SUFDckQsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFnQixJQUFJO0lBRXRELGtGQUFrRjtJQUVsRixNQUFNYSxZQUFZLFVBQVk7UUFFNUIsb05BQW9OO1FBQ3BOO1lBQ0UsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLFFBQU8sTUFBTUYsU0FBU0UsSUFBSTtZQUNoQyxNQUFNWCxPQUFPVyxNQUFLQyxLQUFLLENBQUM7WUFDeEJYLFFBQVFEO1FBQ1Y7UUFDRSxNQUFNYSxRQUFRRixLQUFLQyxLQUFLLENBQUM7UUFDekIsTUFBTUUsYUFBYUQsS0FBSyxDQUFDRSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0osTUFBTUssTUFBTSxFQUFFO1FBQ2xFZixjQUFjVztRQUNkVCxXQUFXLEtBQUs7UUFDaEJKLFFBQVE7SUFDVjtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUMxQixrREFBSUE7O2tDQUNILDhEQUFDMkI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLTCxXQUFVOztrQ0FDZCw4REFBQ3ZCLDBDQUFVQTs7Ozs7a0NBQ1gsOERBQUNELG9DQUFJQTt3QkFDSEksTUFBTUE7d0JBQ05DLFNBQVNBO3dCQUNUQyxZQUFZQTt3QkFDWkMsZUFBZUE7d0JBQ2ZLLFdBQVdBO3dCQUNYSixTQUFTQTt3QkFDVEMsWUFBWUE7d0JBQ1pDLE9BQU9BO3dCQUNQQyxVQUFVQTs7Ozs7Ozs7Ozs7OzBCQUlkLDhEQUFDVCxzQ0FBTUE7Ozs7Ozs7Ozs7O0FBR2IsQ0FBQztHQWxEcUJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtbm8tY29tbWVudC10ZXh0bm9kZXMgKi9cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcInVpXCI7XG5pbXBvcnQgeyBUaXRsZVB5bGFyIH0gZnJvbSBcInVpXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwidWlcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyB3b3JkIGEgd29yZCBhbmQgZmluZCB0aGUgZGVmaW5pdGlvblxuICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbZGVmaW5pdGlvbiwgc2V0RGVmaW5pdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gY29uc3QgZmV0Y2ggZGF0YSBidXQgaWYgbm8gZGF0YSBpcyBmb3VuZCB0aGVuIHJldHVybiBhIHNlbnRlbmNlIFwibm8gZGF0YSBmb3VuZFwiXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgLy8gZGlzcGxheSBmZXRjaGVkIHRleHQgb24gc2NyZWVuIGZyb20gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL21pZ3VlbGdhcmdhbGxvL05leHQxMy1HYWxsZXJ5LUltYWdlLVR1cmJvL21haW4vRGF0YS5weWxhci9JbWFnZXMvUHlsYXItdjEuMC9BX3Bob3RvZ3JhcGh5X29mX3RoZV9lYXJ0aF9fZnJvbV90aGVfbW9vbl9vbl9hX2Zpc19BQUFHT0xwQS50eHRcbiAgICB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL21pZ3VlbGdhcmdhbGxvL05leHQxMy1HYWxsZXJ5LUltYWdlLVR1cmJvL21haW4vRGF0YS5weWxhci9JbWFnZXMvUHlsYXItdjEuMC9BX3Bob3RvZ3JhcGh5X29mX3RoZV9lYXJ0aF9fZnJvbV90aGVfbW9vbl9vbl9hX2Zpc19BQUFHT0xwQS50eHRcIik7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgY29uc3Qgd29yZCA9IHRleHQuc3BsaXQoXCIgXCIpO1xuICAgICAgc2V0V29yZCh3b3JkKTtcbiAgICB9XG4gICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCIgXCIpO1xuICAgICAgY29uc3QgcmFuZG9tTGluZSA9IGxpbmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpbmVzLmxlbmd0aCldO1xuICAgICAgc2V0RGVmaW5pdGlvbihyYW5kb21MaW5lKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0V29yZChcIlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlB5bGFyPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPFRpdGxlUHlsYXIgLz5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgd29yZD17d29yZH1cbiAgICAgICAgICAgIHNldFdvcmQ9e3NldFdvcmR9XG4gICAgICAgICAgICBkZWZpbml0aW9uPXtkZWZpbml0aW9ufVxuICAgICAgICAgICAgc2V0RGVmaW5pdGlvbj17c2V0RGVmaW5pdGlvbn1cbiAgICAgICAgICAgIGZldGNoRGF0YT17ZmV0Y2hEYXRhfVxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIHNldExvYWRpbmc9e3NldExvYWRpbmd9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICBzZXRFcnJvcj17c2V0RXJyb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfTtcblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsIk1lbnUiLCJUaXRsZVB5bGFyIiwiRm9vdGVyIiwiSG9tZSIsIndvcmQiLCJzZXRXb3JkIiwiZGVmaW5pdGlvbiIsInNldERlZmluaXRpb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwidGV4dCIsInNwbGl0IiwibGluZXMiLCJyYW5kb21MaW5lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});