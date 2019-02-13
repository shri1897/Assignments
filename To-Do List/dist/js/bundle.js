/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Main.js":
/*!************************!*\
  !*** ./src/js/Main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoManager */ \"./src/js/TodoManager.js\");\n\n\n\n(function main() {\n    const todoManager = new _TodoManager__WEBPACK_IMPORTED_MODULE_0__[\"TodoManager\"]();\n    todoManager.init();\n})();\n\n//# sourceURL=webpack:///./src/js/Main.js?");

/***/ }),

/***/ "./src/js/TodoActionBar.js":
/*!*********************************!*\
  !*** ./src/js/TodoActionBar.js ***!
  \*********************************/
/*! exports provided: TodoActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoActionBar\", function() { return TodoActionBar; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _TodoListItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListItems.js */ \"./src/js/TodoListItems.js\");\n\n\n\nclass TodoActionBar extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"]{\n\n    constructor() {\n        super();\n    }\n\n    init(listOfItemObjects, renderCallBack) {\n\n        const textBox = document.getElementById(\"text-box\");\n        const buttonAdd = document.getElementById(\"btn-add\");\n        const buttonSelectAll = document.getElementById(\"btn-select-all\");\n        const buttonDeleteSelected = document.getElementById(\"btn-delete-selected\");\n        const buttonDeleteCompleted = document.getElementById(\"btn-delete-completed\");\n\n        const addItem = () => {\n            let textvalue;\n            textvalue = document.getElementById(\"text-box\").value;\n            document.getElementById(\"text-box\").value = \"\";\n            if (textvalue) {\n                let timeStamp = new Date().getTime();\n                listOfItemObjects.set(timeStamp, new _TodoListItems_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoListItems\"](timeStamp, textvalue));\n            }\n            renderCallBack(listOfItemObjects);\n        }\n\n        textBox.onkeypress =  function textBoxEnterKeyListener(event) {\n            if (event.keyCode === 13) { //Add item If enter key pressed\n                addItem();\n            }\n        };\n\n        buttonAdd.onclick = function buttonAddClickListener() {\n            addItem();\n        };\n\n        buttonSelectAll.onclick = function selectAllClickListener(event) { \n            var check_uncheck = true;\n            if (listOfItemObjects.values().next().value && listOfItemObjects.values().next().value.todoChecked) {\n                check_uncheck = false;\n            }\n            for (var item of listOfItemObjects.values()) {\n                item.setChecked(check_uncheck);\n            }\n            renderCallBack(listOfItemObjects);\n        };\n\n        buttonDeleteSelected.onclick =  function deleteSelectedClickListener(event) { \n            listOfItemObjects.forEach((value, key) => {\n                if (value.todoChecked) {\n                    listOfItemObjects.delete(key);\n                }\n            });\n            renderCallBack(listOfItemObjects);\n        };\n\n        buttonDeleteCompleted.onclick = (event) => { \n            listOfItemObjects.forEach((value, key) => {\n                if (value.todoStatus) {\n                    listOfItemObjects.delete(key);\n                }\n            });\n            renderCallBack(listOfItemObjects);\n        };\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/TodoActionBar.js?");

/***/ }),

/***/ "./src/js/TodoListItems.js":
/*!*********************************!*\
  !*** ./src/js/TodoListItems.js ***!
  \*********************************/
/*! exports provided: TodoListItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListItems\", function() { return TodoListItems; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n\n\nclass TodoListItems extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"] {\n    constructor(todoID, todoText, todoStatus, todoChecked) {\n        super();\n        this.todoID = todoID;\n        this.todoText = todoText;\n        this.todoStatus = todoStatus === true ? true : false;\n        this.todoChecked = todoChecked === true ? true : false;\n    }\n\n    init(listOfItemObjects, renderCallBack) {\n        document.getElementById(\"list-container\").addEventListener(\"click\", (event) => { //Using Event-bubbling to find the target.\n            let todoID, clickedListItem;\n            clickedListItem = event.target.parentElement;\n            todoID = parseInt(clickedListItem.getAttribute(\"todo-id\"));\n            switch (event.target.getAttribute(\"todo-type\")) {\n                case \"check\":\n                    {\n                        listOfItemObjects.get(todoID).setChecked(event.target.checked);\n                        break;\n                    }\n                case \"btn-done\":\n                    {\n                        listOfItemObjects.get(todoID).setStatus(true);\n                        break;\n                    }\n                case \"btn-x\":\n                    {\n                        listOfItemObjects.delete(todoID);\n                        break;\n                    }\n            }\n            renderCallBack(listOfItemObjects);\n            event.stopPropagation();\n        });\n    }\n\n    setStatus(status) {\n        this.todoStatus = status;\n    };\n\n    setChecked(value) {\n        this.todoChecked = value;\n    };\n\n    setText(newText) {\n        this.todoText = newText;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/TodoListItems.js?");

/***/ }),

/***/ "./src/js/TodoManager.js":
/*!*******************************!*\
  !*** ./src/js/TodoManager.js ***!
  \*******************************/
/*! exports provided: TodoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoManager\", function() { return TodoManager; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _TodoListItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListItems.js */ \"./src/js/TodoListItems.js\");\n/* harmony import */ var _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoActionBar.js */ \"./src/js/TodoActionBar.js\");\n\n\n\n\nclass TodoManager extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"] {\n    constructor() {\n        super();\n        this.listOfItemObjects = reloadFromLocalStorage();\n    }\n\n    init() {\n        this.todoListItems = new _TodoListItems_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoListItems\"]();\n        this.todoActionBar = new _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__[\"TodoActionBar\"]();\n        this.todoActionBar.init(this.listOfItemObjects, this.render);\n        this.todoListItems.init(this.listOfItemObjects, this.render);\n        this.render(this.listOfItemObjects);\n    }\n\n    render(listOfItemObjects) {\n        let newItem, newJSONFromMap = [];\n        let templateItem = document.querySelector('.template-list-item');\n        let listContainer = document.getElementById('list-container');\n        listContainer.innerHTML = \"\";\n\n        listOfItemObjects.forEach((value, key) => {\n            newItem = templateItem.cloneNode(true);\n            newItem.querySelector(`[todo-type=\"text-holder\"]`).textContent = value.todoText;\n            newItem.classList.remove(\"template-list-item\");\n            newItem.setAttribute(\"todo-id\", `${key}`);\n            if (value.todoStatus) {\n                newItem.classList.add('done-class');\n            }\n            newItem.querySelector(`[todo-type=\"check\"]`).checked = value.todoChecked;\n            listContainer.appendChild(newItem);\n            newJSONFromMap.push(value);\n        });\n\n        console.log(newJSONFromMap);\n        localStorage.setItem(\"com.modular.todolist\", JSON.stringify(newJSONFromMap));\n    }\n}\n\nconst reloadFromLocalStorage = () => {\n    let retrivedList = JSON.parse(localStorage.getItem(\"com.modular.todolist\"));\n    console.log(retrivedList);\n    if (retrivedList) {\n        let listOfObjects = new Map();\n        for (let i = 0; i < retrivedList.length; i += 1) {\n            listOfObjects.set(retrivedList[i].todoID, new _TodoListItems_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoListItems\"](retrivedList[i].todoID, retrivedList[i].todoText, retrivedList[i].todoStatus, retrivedList[i].todoChecked));\n        }\n        return listOfObjects;\n    } else {\n        return new Map();\n    }\n}\n/**------------------------------------------------------------------------------------------------------------------------- */\n\n\n//# sourceURL=webpack:///./src/js/TodoManager.js?");

/***/ }),

/***/ "./src/js/View.js":
/*!************************!*\
  !*** ./src/js/View.js ***!
  \************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\nclass View {\n    constructor() {\n\n    }\n\n    init() {\n\n    }\n\n    render() {\n\n    }\n\n    delete() {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/View.js?");

/***/ })

/******/ });