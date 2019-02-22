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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoManager */ \"./src/js/TodoManager.js\");\n\n\n(function todoMain() {\n    var todoManager = new _TodoManager__WEBPACK_IMPORTED_MODULE_0__[\"TodoManager\"]();\n    todoManager.init();\n})();\n\n//# sourceURL=webpack:///./src/js/Main.js?");

/***/ }),

/***/ "./src/js/TodoActionBar.js":
/*!*********************************!*\
  !*** ./src/js/TodoActionBar.js ***!
  \*********************************/
/*! exports provided: TodoActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoActionBar\", function() { return TodoActionBar; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker-todo-manager.js */ \"./src/js/broker-todo-manager.js\");\n\n\n\nfunction TodoActionBar() { };\n\nTodoActionBar.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\n\nTodoActionBar.prototype.constructor = TodoActionBar;\n\nTodoActionBar.prototype.init = function () {\n\n    document.getElementById('text-box').onkeypress = function (event) {\n        if (event.keyCode === 13) {\n            addItemOnEvent();\n        }\n    };\n\n    document.getElementById('btn-add').onclick = addItemOnEvent;\n\n    document.getElementById('btn-select-all').onclick = selectAllOnClick;\n\n    document.getElementById('btn-delete-selected').onclick = deleteSelectedOnClick;\n\n    document.getElementById('btn-delete-completed').onclick = deleteCompletedOnClick;\n};\n\nconst addItemOnEvent = function () {\n    var todoText = document.getElementById('text-box').value;\n    document.getElementById('text-box').value = '';\n    if (todoText) {\n        let addItemEvent = new CustomEvent('addItem', { detail: { todoText: todoText} });\n        _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_1__[\"brokerTodoManager\"].dispatchEvent(addItemEvent);\n    }\n};\n\nconst selectAllOnClick = function () {\n    _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_1__[\"brokerTodoManager\"].dispatchEvent(new CustomEvent('setChecked'));\n};\n\nconst deleteSelectedOnClick = function () {\n    var deleteSelectedEvent = new CustomEvent('deleteMultipleItems', { detail: { todoAction: 'delete-selected'}});\n    _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_1__[\"brokerTodoManager\"].dispatchEvent(deleteSelectedEvent);\n};\n\nconst deleteCompletedOnClick = function () {\n    var deleteCompletedEvent = new CustomEvent('deleteMultipleItems', { detail: { todoAction: 'delete-completed'} });\n    _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_1__[\"brokerTodoManager\"].dispatchEvent(deleteCompletedEvent);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoActionBar.js?");

/***/ }),

/***/ "./src/js/TodoListItem.js":
/*!********************************!*\
  !*** ./src/js/TodoListItem.js ***!
  \********************************/
/*! exports provided: TodoListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListItem\", function() { return TodoListItem; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker-todo-manager.js */ \"./src/js/broker-todo-manager.js\");\n/* harmony import */ var _template_todo_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-todo-item.js */ \"./src/js/template-todo-item.js\");\n\n\n\n\nfunction TodoListItem(todoText) {\n    this.id = new Date().getTime();  // ID <---- TimeStamp.\n    this.text = todoText;\n    this.status = false;\n    this.checked = false;\n};\n\nTodoListItem.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\n\nTodoListItem.prototype.constructor = TodoListItem;\n\nTodoListItem.prototype.createTodoElement = function () {\n    var newTodoElement = document.createElement('div');\n    newTodoElement.innerHTML = Mustache.render(_template_todo_item_js__WEBPACK_IMPORTED_MODULE_2__[\"todoItemTemplate\"], this);\n    newTodoElement.onclick = todoElementOnClick.bind(this);\n    return newTodoElement;\n};\n\nTodoListItem.prototype.deleteItem = function () {\n    var deleteItemEvent = new CustomEvent('deleteItem', { detail: { todoID: this.id } });\n    _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_1__[\"brokerTodoManager\"].dispatchEvent(deleteItemEvent);\n};\n\nTodoListItem.prototype.setChecked = function (check) {\n    this.checked = check;\n    render(this);\n};\n\nconst todoElementOnClick = function (event) {\n    switch (event.target.getAttribute('todo-action')) {\n        case 'select-item':\n            {\n                this.checked = event.target.checked;\n                render(this);\n                break;\n            }\n        case 'mark-done':\n            {\n                this.status = true;\n                render(this);\n                break;\n            }\n        case 'delete-item':\n            {\n                this.deleteItem();\n                break;\n            }\n    }\n};\n\nconst render = function (listItem) {\n    var todoElement = document.querySelector(`[todo-id='${listItem.id}']`);\n    todoElement.outerHTML = Mustache.render(_template_todo_item_js__WEBPACK_IMPORTED_MODULE_2__[\"todoItemTemplate\"], listItem);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoListItem.js?");

/***/ }),

/***/ "./src/js/TodoManager.js":
/*!*******************************!*\
  !*** ./src/js/TodoManager.js ***!
  \*******************************/
/*! exports provided: TodoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoManager\", function() { return TodoManager; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListItem.js */ \"./src/js/TodoListItem.js\");\n/* harmony import */ var _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoActionBar.js */ \"./src/js/TodoActionBar.js\");\n/* harmony import */ var _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./broker-todo-manager.js */ \"./src/js/broker-todo-manager.js\");\n\n\n\n  //broker for Child-Parent intermodule Communication\n\nfunction TodoManager() {\n    this.todoItemList = {};\n    this.todoElementList = {};\n};\n\nTodoManager.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\n\nTodoManager.prototype.constructor = TodoManager;\n\nTodoManager.prototype.init = function () {\n    this.todoActionBar = new _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__[\"TodoActionBar\"]();\n    this.todoActionBar.init();\n    \n    _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_3__[\"brokerTodoManager\"].addEventListener('setChecked', setChecked.bind(this));\n    _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_3__[\"brokerTodoManager\"].addEventListener('deleteItem', deleteItem.bind(this));\n    _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_3__[\"brokerTodoManager\"].addEventListener('deleteMultipleItems', deleteMultipleItems.bind(this));\n    _broker_todo_manager_js__WEBPACK_IMPORTED_MODULE_3__[\"brokerTodoManager\"].addEventListener('addItem', addItem.bind(this));\n};\n\nconst addItem = function (event) {\n    var newTodoItem = new _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoListItem\"](event.detail.todoText),\n        newTodoElement = newTodoItem.createTodoElement();\n\n    this.todoItemList[newTodoItem.id] = newTodoItem;\n    this.todoElementList[newTodoItem.id] = newTodoElement;\n    render(this.todoElementList);\n};\n\nconst deleteMultipleItems = function (event) {\n    switch (event.detail.todoAction) {\n        case 'delete-selected':\n            {\n                for (let todoID in this.todoItemList) {\n                    if (this.todoItemList[todoID].checked) {\n                        delete this.todoItemList[todoID];\n                        delete this.todoElementList[todoID];\n                    }\n                }\n                break;\n            }\n        case 'delete-completed':\n            {\n                for (let todoID in this.todoItemList) {\n                    if (this.todoItemList[todoID].status) {\n                        delete this.todoItemList[todoID];\n                        delete this.todoElementList[todoID];\n                    }\n                }\n                break;\n            }\n    }\n    render(this.todoElementList);\n};\n\nconst setChecked = function () { //// this <==> todoManager\n    var check = true;\n\n    if (this.todoItemList[Object.keys(this.todoItemList)[0]] && this.todoItemList[Object.keys(this.todoItemList)[0]].checked) {\n        check = false;\n    }\n    for (let todoID in this.todoItemList) {\n        this.todoItemList[todoID].setChecked(check);\n    }\n};\n\nconst deleteItem = function (event) {\n    var todoID = event.detail.todoID;\n    delete this.todoItemList[todoID];\n    delete this.todoElementList[todoID];\n    render(this.todoElementList);\n};\n\nconst render = function (todoElementList) {\n    var listContainer = document.getElementById('list-container');\n    listContainer.innerHTML = '';\n    for (let todoID in todoElementList) {\n        listContainer.appendChild(todoElementList[todoID]);\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoManager.js?");

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

/***/ "./src/js/broker-todo-manager.js":
/*!***************************************!*\
  !*** ./src/js/broker-todo-manager.js ***!
  \***************************************/
/*! exports provided: brokerTodoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brokerTodoManager\", function() { return brokerTodoManager; });\nconst brokerTodoManager = document.createElement('span');\n\n\n\n//# sourceURL=webpack:///./src/js/broker-todo-manager.js?");

/***/ }),

/***/ "./src/js/template-todo-item.js":
/*!**************************************!*\
  !*** ./src/js/template-todo-item.js ***!
  \**************************************/
/*! exports provided: todoItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoItemTemplate\", function() { return todoItemTemplate; });\nconst todoItemTemplate =\n`\n    <div class=\"list-item {{#status}}done{{/status}}\" todo-id=\"{{id}}\">\n        <input type=\"checkbox\" class=\"check-box\" todo-action=\"select-item\" {{#checked}}checked{{/checked}}>\n        <p class=\"todo-text\" todo-action=\"todo-text\">{{text}}</p>\n        <button class=\"btn-done\" todo-action=\"mark-done\">Done</button>\n        <button class=\"btn-delete\" todo-action=\"delete-item\">Delete</button>\n    </div>\n`;\n\n\n//# sourceURL=webpack:///./src/js/template-todo-item.js?");

/***/ })

/******/ });