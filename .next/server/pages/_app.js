"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartContextProvider: () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartContextProvider({ children }) {\n    const ls =  false ? 0 : null;\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartContextProvider.useEffect\": ()=>{\n            if (cartProducts?.length > 0) {\n                ls?.setItem(\"cart\", JSON.stringify(cartProducts));\n            }\n        }\n    }[\"CartContextProvider.useEffect\"], [\n        cartProducts\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartContextProvider.useEffect\": ()=>{\n            if (ls && ls.getItem(\"cart\")) {\n                setCartProducts(JSON.parse(ls.getItem(\"cart\")));\n            }\n        }\n    }[\"CartContextProvider.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartContextProvider.useEffect\": ()=>{\n            if (cartProducts.length === 0) {\n                ls?.removeItem(\"cart\");\n            }\n        }\n    }[\"CartContextProvider.useEffect\"], [\n        cartProducts\n    ]);\n    function addProduct(productId) {\n        setCartProducts((prev)=>[\n                ...prev,\n                productId\n            ]);\n    }\n    function removeProduct(productId) {\n        setCartProducts((prev)=>{\n            const pos = prev.indexOf(productId);\n            if (pos !== -1) {\n                return prev.filter((value, index)=>index !== pos);\n            }\n            return prev;\n        });\n    }\n    function clearCart() {\n        setCartProducts([]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartProducts,\n            setCartProducts,\n            addProduct,\n            removeProduct,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Code Warrior\\\\Auto-Cartel-Front\\\\components\\\\CartContext.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkQ7QUFFcEQsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUFDLENBQUMsR0FBRztBQUV0QyxTQUFTSSxvQkFBb0IsRUFBRUMsUUFBUSxFQUFFO0lBQzlDLE1BQU1DLEtBQUssTUFBNkIsR0FBR0MsQ0FBbUIsR0FBRztJQUVqRSxNQUFNLENBQUNFLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ERCxnREFBU0E7eUNBQUM7WUFDUixJQUFJUSxjQUFjRSxTQUFTLEdBQUc7Z0JBQzVCTCxJQUFJTSxRQUFRLFFBQVFDLEtBQUtDLFNBQVMsQ0FBQ0w7WUFDckM7UUFDRjt3Q0FBRztRQUFDQTtLQUFhO0lBRWpCUixnREFBU0E7eUNBQUM7WUFDUixJQUFJSyxNQUFNQSxHQUFHUyxPQUFPLENBQUMsU0FBUztnQkFDNUJMLGdCQUFnQkcsS0FBS0csS0FBSyxDQUFDVixHQUFHUyxPQUFPLENBQUM7WUFDeEM7UUFDRjt3Q0FBRyxFQUFFO0lBQ0xkLGdEQUFTQTt5Q0FBQztZQUNSLElBQUlRLGFBQWFFLE1BQU0sS0FBSyxHQUFHO2dCQUM3QkwsSUFBSVcsV0FBVztZQUNqQjtRQUNGO3dDQUFHO1FBQUNSO0tBQWE7SUFFakIsU0FBU1MsV0FBV0MsU0FBUztRQUMzQlQsZ0JBQWdCLENBQUNVLE9BQVM7bUJBQUlBO2dCQUFNRDthQUFVO0lBQ2hEO0lBQ0EsU0FBU0UsY0FBY0YsU0FBUztRQUM5QlQsZ0JBQWdCLENBQUNVO1lBQ2YsTUFBTUUsTUFBTUYsS0FBS0csT0FBTyxDQUFDSjtZQUN6QixJQUFJRyxRQUFRLENBQUMsR0FBRztnQkFDZCxPQUFPRixLQUFLSSxNQUFNLENBQUMsQ0FBQ0MsT0FBT0MsUUFBVUEsVUFBVUo7WUFDakQ7WUFDQSxPQUFPRjtRQUNUO0lBQ0Y7SUFFQSxTQUFTTztRQUNQakIsZ0JBQWdCLEVBQUU7SUFDcEI7SUFFQSxxQkFDRSw4REFBQ1AsWUFBWXlCLFFBQVE7UUFDbkJILE9BQU87WUFDTGhCO1lBQ0FDO1lBQ0FRO1lBQ0FHO1lBQ0FNO1FBQ0Y7a0JBRUN0Qjs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIkM6XFxDb2RlIFdhcnJpb3JcXEF1dG8tQ2FydGVsLUZyb250XFxjb21wb25lbnRzXFxDYXJ0Q29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0Q29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGxzID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhbFN0b3JhZ2UgOiBudWxsO1xyXG5cclxuICBjb25zdCBbY2FydFByb2R1Y3RzLCBzZXRDYXJ0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2FydFByb2R1Y3RzPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxzPy5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0UHJvZHVjdHMpKTtcclxuICAgIH1cclxuICB9LCBbY2FydFByb2R1Y3RzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobHMgJiYgbHMuZ2V0SXRlbShcImNhcnRcIikpIHtcclxuICAgICAgc2V0Q2FydFByb2R1Y3RzKEpTT04ucGFyc2UobHMuZ2V0SXRlbShcImNhcnRcIikpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXJ0UHJvZHVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGxzPy5yZW1vdmVJdGVtKFwiY2FydFwiKTtcclxuICAgIH1cclxuICB9LCBbY2FydFByb2R1Y3RzXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFByb2R1Y3QocHJvZHVjdElkKSB7XHJcbiAgICBzZXRDYXJ0UHJvZHVjdHMoKHByZXYpID0+IFsuLi5wcmV2LCBwcm9kdWN0SWRdKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgIHNldENhcnRQcm9kdWN0cygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBwb3MgPSBwcmV2LmluZGV4T2YocHJvZHVjdElkKTtcclxuICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gcHJldi5maWx0ZXIoKHZhbHVlLCBpbmRleCkgPT4gaW5kZXggIT09IHBvcyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyQ2FydCgpIHtcclxuICAgIHNldENhcnRQcm9kdWN0cyhbXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgY2FydFByb2R1Y3RzLFxyXG4gICAgICAgIHNldENhcnRQcm9kdWN0cyxcclxuICAgICAgICBhZGRQcm9kdWN0LFxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3QsXHJcbiAgICAgICAgY2xlYXJDYXJ0LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FydENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibHMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJjYXJ0UHJvZHVjdHMiLCJzZXRDYXJ0UHJvZHVjdHMiLCJsZW5ndGgiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEl0ZW0iLCJwYXJzZSIsInJlbW92ZUl0ZW0iLCJhZGRQcm9kdWN0IiwicHJvZHVjdElkIiwicHJldiIsInJlbW92ZVByb2R1Y3QiLCJwb3MiLCJpbmRleE9mIiwiZmlsdGVyIiwidmFsdWUiLCJpbmRleCIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CartContext */ \"./components/CartContext.js\");\n\n\n\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)([\n    `body{background-color:#eee;padding:0;margin:0;font-family:\"poppins\",sans-serif;}`\n]);\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n                fileName: \"C:\\\\Code Warrior\\\\Auto-Cartel-Front\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Code Warrior\\\\Auto-Cartel-Front\\\\pages\\\\_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Code Warrior\\\\Auto-Cartel-Front\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0Q7QUFDVTtBQUVoRSxNQUFNRSxlQUFlRixvRUFBaUJBOzs7QUFVdkIsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRTs7MEJBQ0UsOERBQUNIOzs7OzswQkFDRCw4REFBQ0Qsd0VBQW1CQTswQkFDbEIsNEVBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIkM6XFxDb2RlIFdhcnJpb3JcXEF1dG8tQ2FydGVsLUZyb250XFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ2FydENvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRDb250ZXh0XCI7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG4gYm9keXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcGFkZGluZzowO1xuICBtYXJnaW46MDtcbiAgZm9udC1mYW1pbHk6IFwicG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuIH1cbiBgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgIDxDYXJ0Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiR2xvYmFsU3R5bGVzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();