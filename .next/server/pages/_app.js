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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.ts\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/home/musman/Practice/nextJs-basic-todo-app/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBR1U7U0FFL0JDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU0sNkVBQUVELFNBQVM7V0FBS0MsU0FBUzs7Ozs7O0FBQ2pDLENBQUM7QUFFRCxpRUFBZUgsMkRBQWlCLENBQUNDLEtBQUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5cbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApXG4iXSwibmFtZXMiOlsid3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/actions/index.ts":
/*!********************************!*\
  !*** ./redux/actions/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_TODO\": () => (/* binding */ CREATE_TODO),\n/* harmony export */   \"ADD_TODO\": () => (/* binding */ ADD_TODO),\n/* harmony export */   \"DELETE_TODO\": () => (/* binding */ DELETE_TODO),\n/* harmony export */   \"UPDATE_TODO\": () => (/* binding */ UPDATE_TODO),\n/* harmony export */   \"CLEAR_TODO\": () => (/* binding */ CLEAR_TODO),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo),\n/* harmony export */   \"clearTodo\": () => (/* binding */ clearTodo)\n/* harmony export */ });\nconst CREATE_TODO = \"CREATE_TODO\";\nconst ADD_TODO = \"ADD_TODO\";\nconst DELETE_TODO = \"DELETE_TODO\";\nconst UPDATE_TODO = \"UPDATE_TODO\";\nconst CLEAR_TODO = \"CLEAR_TODO\";\nconst createTodo = (todo)=>({\n        type: CREATE_TODO,\n        todo\n    })\n;\nconst addTodo = (todo)=>({\n        type: ADD_TODO,\n        todo\n    })\n;\nconst deleteTodo = (id)=>({\n        type: DELETE_TODO,\n        id\n    })\n;\nconst updateTodo = (id, todo)=>({\n        type: UPDATE_TODO,\n        id,\n        todo\n    })\n;\nconst clearTodo = ()=>({\n        type: CLEAR_TODO\n    })\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxLQUFLLENBQUNBLFdBQVcsR0FBRyxDQUFhO0FBQ2pDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQVU7QUFDM0IsS0FBSyxDQUFDQyxXQUFXLEdBQUcsQ0FBYTtBQUNqQyxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFhO0FBQ2pDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQVk7QUFFL0IsS0FBSyxDQUFDQyxVQUFVLElBQUlDLElBQVksSUFBTSxDQUFDO1FBQUNDLElBQUksRUFBRVAsV0FBVztRQUFFTSxJQUFJO0lBQUMsQ0FBQzs7QUFDakUsS0FBSyxDQUFDRSxPQUFPLElBQUlGLElBQVksSUFBTSxDQUFDO1FBQUNDLElBQUksRUFBRU4sUUFBUTtRQUFFSyxJQUFJO0lBQUMsQ0FBQzs7QUFDM0QsS0FBSyxDQUFDRyxVQUFVLElBQUlDLEVBQVUsSUFBTSxDQUFDO1FBQUNILElBQUksRUFBRUwsV0FBVztRQUFFUSxFQUFFO0lBQUMsQ0FBQzs7QUFDN0QsS0FBSyxDQUFDQyxVQUFVLElBQUlELEVBQVUsRUFBRUosSUFBWSxJQUFNLENBQUM7UUFBQ0MsSUFBSSxFQUFFSixXQUFXO1FBQUVPLEVBQUU7UUFBRUosSUFBSTtJQUFDLENBQUM7O0FBQ2pGLEtBQUssQ0FBQ00sU0FBUyxRQUFVLENBQUM7UUFBQ0wsSUFBSSxFQUFFSCxVQUFVO0lBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3JlZHV4L2FjdGlvbnMvaW5kZXgudHM/NzQ4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ1JFQVRFX1RPRE8gPSBcIkNSRUFURV9UT0RPXCI7XG5leHBvcnQgY29uc3QgQUREX1RPRE8gPSBcIkFERF9UT0RPXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1RPRE8gPSBcIkRFTEVURV9UT0RPXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1RPRE8gPSBcIlVQREFURV9UT0RPXCI7XG5leHBvcnQgY29uc3QgQ0xFQVJfVE9ETyA9IFwiQ0xFQVJfVE9ET1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9kbyA9ICh0b2RvOiBzdHJpbmcpID0+ICh7IHR5cGU6IENSRUFURV9UT0RPLCB0b2RvIH0pO1xuZXhwb3J0IGNvbnN0IGFkZFRvZG8gPSAodG9kbzogc3RyaW5nKSA9PiAoeyB0eXBlOiBBRERfVE9ETywgdG9kbyB9KTtcbmV4cG9ydCBjb25zdCBkZWxldGVUb2RvID0gKGlkOiBudW1iZXIpID0+ICh7IHR5cGU6IERFTEVURV9UT0RPLCBpZCB9KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVUb2RvID0gKGlkOiBudW1iZXIsIHRvZG86IHN0cmluZykgPT4gKHsgdHlwZTogVVBEQVRFX1RPRE8sIGlkLCB0b2RvIH0pO1xuZXhwb3J0IGNvbnN0IGNsZWFyVG9kbyA9ICgpID0+ICh7IHR5cGU6IENMRUFSX1RPRE8gfSk7XG5cbiJdLCJuYW1lcyI6WyJDUkVBVEVfVE9ETyIsIkFERF9UT0RPIiwiREVMRVRFX1RPRE8iLCJVUERBVEVfVE9ETyIsIkNMRUFSX1RPRE8iLCJjcmVhdGVUb2RvIiwidG9kbyIsInR5cGUiLCJhZGRUb2RvIiwiZGVsZXRlVG9kbyIsImlkIiwidXBkYXRlVG9kbyIsImNsZWFyVG9kbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/index.ts\n");

/***/ }),

/***/ "./redux/reducers/rootReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducers\": () => (/* binding */ reducers)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./redux/actions/index.ts\");\n\nconst INTIAL_STATE = {\n    todo: \"\",\n    todos: []\n};\nconst reducers = (state = INTIAL_STATE, action)=>{\n    switch(action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_0__.CREATE_TODO:\n            return {\n                ...state,\n                todo: action.todo\n            };\n        case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO:\n            return {\n                ...state,\n                todos: [\n                    ...state.todos,\n                    action.todo\n                ]\n            };\n        case _actions__WEBPACK_IMPORTED_MODULE_0__.CLEAR_TODO:\n            return {\n                ...state,\n                todo: \"\"\n            };\n    }\n    return state;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpQztBQUNqQyxLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ3BCQyxJQUFJLEVBQUUsQ0FBRTtJQUNSQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsUUFBUSxJQUFJQyxLQUFLLEdBQUdKLFlBQVksRUFBRUssTUFBVyxHQUFLLENBQUM7SUFDOUQsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDakIsSUFBSSxDQUFDUCxpREFBZTtZQUNsQixNQUFNLENBQUMsQ0FBQzttQkFDSEssS0FBSztnQkFDUkgsSUFBSSxFQUFFSSxNQUFNLENBQUNKLElBQUk7WUFDbkIsQ0FBQztRQUNILElBQUksQ0FBQ0YsOENBQVk7WUFDZixNQUFNLENBQUMsQ0FBQzttQkFDSEssS0FBSztnQkFDUkYsS0FBSyxFQUFFLENBQUM7dUJBQUdFLEtBQUssQ0FBQ0YsS0FBSztvQkFBRUcsTUFBTSxDQUFDSixJQUFJO2dCQUFBLENBQUM7WUFDdEMsQ0FBQztRQUNILElBQUksQ0FBQ0YsZ0RBQWM7WUFDakIsTUFBTSxDQUFDLENBQUM7bUJBQ0hLLEtBQUs7Z0JBQ1JILElBQUksRUFBRSxDQUFFO1lBQ1YsQ0FBQzs7SUFFTCxNQUFNLENBQUNHLEtBQUs7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcmVkdXgvcmVkdWNlcnMvcm9vdFJlZHVjZXIudHM/MDAzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3QgZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmNvbnN0IElOVElBTF9TVEFURSA9IHtcbiAgdG9kbzogXCJcIixcbiAgdG9kb3M6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0gKHN0YXRlID0gSU5USUFMX1NUQVRFLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3QuQ1JFQVRFX1RPRE86XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9kbzogYWN0aW9uLnRvZG8sXG4gICAgICB9O1xuICAgIGNhc2UgYWN0LkFERF9UT0RPOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvZG9zOiBbLi4uc3RhdGUudG9kb3MsIGFjdGlvbi50b2RvXSxcbiAgICAgIH07XG4gICAgY2FzZSBhY3QuQ0xFQVJfVE9ETzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2RvOiBcIlwiLFxuICAgICAgfTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59O1xuIl0sIm5hbWVzIjpbImFjdCIsIklOVElBTF9TVEFURSIsInRvZG8iLCJ0b2RvcyIsInJlZHVjZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ1JFQVRFX1RPRE8iLCJBRERfVE9ETyIsIkNMRUFSX1RPRE8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/rootReducer.ts\n");

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/rootReducer */ \"./redux/reducers/rootReducer.ts\");\n\n\n\n\n\nconst BindMiddleware = (middlewares)=>{\n    if (true) {\n        return (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middlewares));\n    }\n    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middlewares);\n};\nconst reducer = (state, action)=>{\n    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n        const nextState = {\n            ...state,\n            ...action.payload\n        };\n        return nextState;\n    } else {\n        return (0,_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_4__.reducers)(state, action);\n    }\n};\nconst initStore = ()=>{\n    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, BindMiddleware([\n        (redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())\n    ]));\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(initStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ087QUFDNUI7QUFDK0I7QUFFYjtBQUVqRCxLQUFLLENBQUNPLGNBQWMsSUFBSUMsV0FBZ0IsR0FBSyxDQUFDO0lBQzVDLEVBQUUsRUFSSixJQVEyQyxFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDSCw2RUFBbUIsQ0FBQ0osc0RBQWUsSUFBSU8sV0FBVztJQUMzRCxDQUFDO0lBQ0QsTUFBTSxDQUFDUCxzREFBZSxJQUFJTyxXQUFXO0FBQ3ZDLENBQUM7QUFFRCxLQUFLLENBQUNDLE9BQU8sSUFBSUMsS0FBVSxFQUFFQyxNQUFXLEdBQUssQ0FBQztJQUM1QyxFQUFFLEVBQUVBLE1BQU0sQ0FBQ0MsSUFBSSxLQUFLVix1REFBTyxFQUFFLENBQUM7UUFDNUIsS0FBSyxDQUFDVyxTQUFTLEdBQUcsQ0FBQztlQUNkSCxLQUFLO2VBQ0xDLE1BQU0sQ0FBQ0csT0FBTztRQUNuQixDQUFDO1FBQ0QsTUFBTSxDQUFDRCxTQUFTO0lBQ2xCLENBQUMsTUFBTSxDQUFDO1FBQ04sTUFBTSxDQUFDUCwrREFBUSxDQUFDSSxLQUFLLEVBQUVDLE1BQU07SUFDL0IsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNJLFNBQVMsT0FBUyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQ2Ysa0RBQVcsQ0FBQ1MsT0FBTyxFQUFFRixjQUFjLENBQUMsQ0FBQ0g7UUFBQUEsb0RBQUs7SUFBQSxDQUFDO0FBQ3RELENBQUM7QUFFTSxLQUFLLENBQUNZLE9BQU8sR0FBR2IsaUVBQWEsQ0FBQ1ksU0FBUyxFQUFFLENBQUM7SUFBQ0UsS0FBSyxFQUFFLElBQUk7QUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcmVkdXgvc3RvcmUudHM/OTNhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcblxuaW1wb3J0IHsgcmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9yb290UmVkdWNlclwiO1xuXG5jb25zdCBCaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlczogYW55KSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcbiAgfVxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKTtcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICB9O1xuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xuICB9XG59O1xuXG5jb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIEJpbmRNaWRkbGV3YXJlKFt0aHVua10pKTtcbn1cblxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTsiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJIWURSQVRFIiwiY3JlYXRlV3JhcHBlciIsInRodW5rIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlZHVjZXJzIiwiQmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwiaW5pdFN0b3JlIiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();