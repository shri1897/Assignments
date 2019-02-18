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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoManager */ \"./src/js/TodoManager.js\");\n\n\n(function main() {\n    \"use strict\";\n    const todoManager = new _TodoManager__WEBPACK_IMPORTED_MODULE_0__[\"TodoManager\"]();\n    todoManager.init();\n})();\n\n//# sourceURL=webpack:///./src/js/Main.js?");

/***/ }),

/***/ "./src/js/TodoActionBar.js":
/*!*********************************!*\
  !*** ./src/js/TodoActionBar.js ***!
  \*********************************/
/*! exports provided: TodoActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoActionBar\", function() { return TodoActionBar; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _broker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker.js */ \"./src/js/broker.js\");\n\n\n\nfunction TodoActionBar() { };\n\nTodoActionBar.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\n\nTodoActionBar.prototype.constructor = TodoActionBar;\n\nTodoActionBar.prototype.init = function () {\n\n    document.getElementById('text-box').onkeypress = function(event) {\n        if (event.keyCode === 13) { \n            addItemOnClick();\n        }\n    };\n\n    document.getElementById('btn-add').onclick = addItemOnClick;\n\n    document.getElementById('btn-select-all').onclick = selectAllOnClick;\n\n    document.getElementById('btn-delete-selected').onclick = deleteSelectedOnClick;\n\n    document.getElementById('btn-delete-completed').onclick = deleteCompletedOnClick;\n};\n\nconst addItemOnClick = function(){\n    let todoText = document.getElementById('text-box').value;\n    document.getElementById('text-box').value = '';\n    if (todoText) {\n        _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(new CustomEvent('addItem', {detail: todoText}));\n    }\n};\n\nconst selectAllOnClick = function() {\n    _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(new CustomEvent('setChecked'));\n};\n\nconst deleteSelectedOnClick = function() {\n    _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(new CustomEvent('deleteItem', {detail: 'delete-selected'}));\n};\n\nconst deleteCompletedOnClick = function() {\n    _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(new CustomEvent('deleteItem', {detail: 'delete-completed'}));\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoActionBar.js?");

/***/ }),

/***/ "./src/js/TodoListItem.js":
/*!********************************!*\
  !*** ./src/js/TodoListItem.js ***!
  \********************************/
/*! exports provided: TodoListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListItem\", function() { return TodoListItem; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _broker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker.js */ \"./src/js/broker.js\");\n\n\n\nfunction TodoListItem(todoText) {\n    this.id = new Date().getTime();\n    this.text = todoText;\n    this.status = false;\n    this.checked = false;\n}\n\nTodoListItem.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\n\nTodoListItem.prototype.constructor = TodoListItem;\n\nTodoListItem.prototype.init = function () {\n    createItem(this);\n    let listItemElement = document.querySelector(`[todo-id='${this.id}']`);\n    listItemElement.onclick = (event) =>{listItemElementOnClick(event, this);};\n};\n\nTodoListItem.prototype.deleteItem = function () {\n    let listItemElement = document.querySelector(`[todo-id='${this.id}']`);\n    listItemElement.remove();\n};\n\nTodoListItem.prototype.setChecked = function (check) {\n    this.checked = check;\n    render(this);\n}\nconst listItemElementOnClick = function (event, listItem) {\n    switch (event.target.getAttribute('todo-action')) {\n        case 'select-item':\n            {\n                listItem.checked = event.target.checked;\n                render(listItem);\n                break;\n            }\n        case 'mark-done':\n            {\n                listItem.status = true;\n                render(listItem);\n                break;\n            }\n        case 'delete-item':\n            {\n                _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(new CustomEvent('deleteTodoListItem', {detail: listItem}));\n                event.currentTarget.remove();\n                break;\n            }\n    }\n};\n\nconst createItem = function (listItem) {\n    var newListItemElement = document.querySelector('.template').cloneNode(true);\n\n    newListItemElement.classList.remove('template');\n    newListItemElement.setAttribute('todo-id', listItem.id);\n    newListItemElement.querySelector('.check-box').checked = listItem.checked;\n    newListItemElement.querySelector('.todo-text').textContent = listItem.text;\n    if (listItem.status) {\n        newListItemElement.classList.add('done');\n    }\n    document.getElementById('list-container').appendChild(newListItemElement);\n};\n\nconst render = function (listItem) {\n    var listItemElement = document.querySelector(`[todo-id='${listItem.id}']`);\n\n    listItemElement.querySelector('.check-box').checked = listItem.checked;\n    listItemElement.querySelector('.todo-text').textContent = listItem.text;\n    if (listItem.status) {\n        listItemElement.classList.add('done');\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoListItem.js?");

/***/ }),

/***/ "./src/js/TodoManager.js":
/*!*******************************!*\
  !*** ./src/js/TodoManager.js ***!
  \*******************************/
/*! exports provided: TodoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoManager\", function() { return TodoManager; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListItem.js */ \"./src/js/TodoListItem.js\");\n/* harmony import */ var _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoActionBar.js */ \"./src/js/TodoActionBar.js\");\n/* harmony import */ var _broker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./broker.js */ \"./src/js/broker.js\");\n\n\n\n\n\nfunction TodoManager() {\n    this.todoList = window.todoList = {};\n}\n\nTodoManager.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\nTodoManager.prototype.constructor = TodoManager;\n\nTodoManager.prototype.init = function () {\n    this.todoActionBar = new _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__[\"TodoActionBar\"]();\n    this.todoActionBar.init();\n    _broker_js__WEBPACK_IMPORTED_MODULE_3__[\"broker\"].addEventListener('deleteTodoListItem', (event) => { deleteTodoListItem(event.detail, this) });\n    _broker_js__WEBPACK_IMPORTED_MODULE_3__[\"broker\"].addEventListener('deleteItem', (event) => { deleteItem(event.detail, this) });\n    _broker_js__WEBPACK_IMPORTED_MODULE_3__[\"broker\"].addEventListener('addItem', (event) => { addItem(event.detail, this) });\n    _broker_js__WEBPACK_IMPORTED_MODULE_3__[\"broker\"].addEventListener('setChecked', setChecked.bind(this));\n};\n\nconst addItem = function (todoText, todoManager) {\n    let newListItem = new _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoListItem\"](todoText);\n    newListItem.init();\n    todoManager.todoList[newListItem.id] = newListItem;\n};\n\nconst deleteItem = function (switchAction, todoManager) {\n    switch (switchAction) {  \n        case 'delete-selected':\n            {\n                for(let todoID in todoManager.todoList) {\n                    if(todoManager.todoList[todoID].checked) {\n                        todoManager.todoList[todoID].deleteItem();\n                        delete todoManager.todoList[todoID];\n                    }\n                }\n                break;\n            }\n        case 'delete-completed':\n            {\n                for(let todoID in todoManager.todoList) {\n                    if(todoManager.todoList[todoID].status) {\n                        todoManager.todoList[todoID].deleteItem();\n                        delete todoManager.todoList[todoID];\n                    }\n                }\n                break;\n            }\n    }\n};\n\nconst setChecked = function () { //// this <==> todoManager\n    var check = true;\n    if(this.todoList[Object.keys(this.todoList)[0]] && this.todoList[Object.keys(this.todoList)[0]].checked) {\n        check = false;\n    }\n    for(let todoID in this.todoList) {\n        this.todoList[todoID].setChecked(check);\n    }\n}\n\nconst deleteTodoListItem = function (listItem, todoManager) {\n    for(let todoID in todoManager.todoList) {\n        if(todoManager.todoList[todoID]==listItem) {\n           delete todoManager.todoList[todoID];\n           break;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/TodoManager.js?");

/***/ }),

/***/ "./src/js/View.js":
/*!************************!*\
  !*** ./src/js/View.js ***!
  \************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\nfunction View() {};\n\nView.prototype.init = function () {}\nView.prototype.render = function () {}\nView.prototype.delete = function () {}\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/View.js?");

/***/ }),

/***/ "./src/js/broker.js":
/*!**************************!*\
  !*** ./src/js/broker.js ***!
  \**************************/
/*! exports provided: broker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"broker\", function() { return broker; });\nconst broker = document.createElement('span');\n\n\n\n//# sourceURL=webpack:///./src/js/broker.js?");

/***/ })

/******/ });