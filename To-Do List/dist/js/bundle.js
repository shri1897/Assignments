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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoManager */ \"./src/js/TodoManager.js\");\n\n\nvar todoManager = new _TodoManager__WEBPACK_IMPORTED_MODULE_0__[\"TodoManager\"]();\ntodoManager.init();\n\n\n//# sourceURL=webpack:///./src/js/Main.js?");

/***/ }),

/***/ "./src/js/TodoActionBar.js":
/*!*********************************!*\
  !*** ./src/js/TodoActionBar.js ***!
  \*********************************/
/*! exports provided: TodoActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoActionBar\", function() { return TodoActionBar; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _broker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker.js */ \"./src/js/broker.js\");\n\n\n\nconst ENTER_KEY = 13;\n\nfunction TodoActionBar() { };\n\nTodoActionBar.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\n\nTodoActionBar.prototype.constructor = TodoActionBar;\n\nTodoActionBar.prototype.init = function () {\n    \n    document.getElementById('btn-add').onclick = onClickAddItem;  //onXyzClick?\n\n    document.getElementById('btn-select-all').onclick = onClickSelectDeselectAll;\n\n    document.getElementById('btn-delete-selected').onclick = onClickDeleteSelected;\n\n    document.getElementById('btn-delete-completed').onclick = onClickDeleteCompleted;\n\n    document.getElementById('text-box').onkeypress = function (event) {\n        if (event.keyCode === ENTER_KEY) {\n            onClickAddItem();\n        }\n    };\n};\n\nconst onClickAddItem = function () {\n    var todoText = document.getElementById('text-box').value;\n    document.getElementById('text-box').value = '';\n\n    if (todoText) {\n        let addItemEvent = new CustomEvent('TodoManager:addItem', {\n             detail: { todoText: todoText} \n        });\n        _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(addItemEvent);\n    }\n};\n\nconst onClickSelectDeselectAll = function () {\n    _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(new CustomEvent('TodoManager:selectDeselectAll'));\n};\n\nconst onClickDeleteSelected = function () {\n    var deleteSelectedEvent = new CustomEvent('TodoManager:deleteSelected');\n    _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(deleteSelectedEvent);\n};\n\nconst onClickDeleteCompleted = function () {\n    var deleteCompletedEvent = new CustomEvent('TodoManager:deleteCompleted');\n    _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(deleteCompletedEvent);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoActionBar.js?");

/***/ }),

/***/ "./src/js/TodoListItem.js":
/*!********************************!*\
  !*** ./src/js/TodoListItem.js ***!
  \********************************/
/*! exports provided: TodoListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListItem\", function() { return TodoListItem; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _broker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker.js */ \"./src/js/broker.js\");\n/* harmony import */ var _todo_item_template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item-template.js */ \"./src/js/todo-item-template.js\");\n\n\n\n\nfunction TodoListItem(todoText) {\n    this.id = new Date().getTime();  // ID <---- TimeStamp.\n    this.text = todoText;\n    this.status = false;\n    this.checked = false;\n}\n\nTodoListItem.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\n\nTodoListItem.prototype.constructor = TodoListItem;\n\nTodoListItem.prototype.render = function () {  //WRONG? - Render also adds event listener.\n    var newTodoElement = document.createElement('div');\n    newTodoElement.className = 'todo-wrapper';\n    newTodoElement.innerHTML = Mustache.render(_todo_item_template_js__WEBPACK_IMPORTED_MODULE_2__[\"todoItemTemplate\"], this);\n\n    newTodoElement.onclick = onClickTodoElement.bind(this);\n    return newTodoElement;\n};\n\nTodoListItem.prototype.setChecked = function (check) {\n    var todoElement = document.querySelector(`[todo-id='${this.id}']`);\n    this.checked = check;\n    todoElement.querySelector(`.check-box`).checked = check;\n};\n\nTodoListItem.prototype.setStatus = function (status) {\n    var todoElement = document.querySelector(`[todo-id='${this.id}']`);\n\n    this.status = status;\n    status ? todoElement.classList.add('done') : todoElement.classList.remove('done');\n    // if(status) {\n    //     todoElement.classList.add('done');\n    // }else {\n    //     todoElement.classList.remove('done');\n    // }\n};\n\nTodoListItem.prototype.delete = function () {\n    var deleteItemEvent = new CustomEvent('TodoManager:deleteMapItem', {\n        detail: { todoID: this.id }\n    });\n\n    _broker_js__WEBPACK_IMPORTED_MODULE_1__[\"broker\"].dispatchEvent(deleteItemEvent);\n    document.querySelector(`[todo-id='${this.id}']`).closest('.todo-wrapper').remove();       //Split into two lines??\n};\n\nconst onClickTodoElement = function (event) {\n\n    switch (event.target.getAttribute('todo-action')) {\n        case 'select-item':\n            {\n                this.setChecked(event.target.checked);\n                break;\n            }\n        case 'mark-done':\n            {\n                this.setStatus(!this.status);\n                break;\n            }\n        case 'delete-item':\n            {\n                this.delete();\n                break;\n            }\n    }\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// TodoListItem.prototype.createTodoElement = function () {\n//     var templateListItem = document.querySelector('.template'),\n//         newTodoElement = templateListItem.cloneNode(true);\n\n//     newTodoElement.classList.remove(\"template\");\n//     newTodoElement.setAttribute(\"todo-id\", `${this.id}`);\n//     newTodoElement.querySelector(`.todo-text`).textContent = this.text;\n\n//     if (this.status) {\n//         newItem.classList.add('done-class');\n//     }\n//     newTodoElement.querySelector(`[todo-action=\"select-item\"]`).checked = this.checked;\n//     newTodoElement.onclick = todoElementOnClick.bind(this);\n//     return newTodoElement;\n// };\n\n// const render = function (listItem) {\n//     var todoElement = document.querySelector(`[todo-id='${listItem.id}']`);\n//     todoElement.outerHTML = Mustache.render(todoItemTemplate, listItem);\n// };\n\n\n//# sourceURL=webpack:///./src/js/TodoListItem.js?");

/***/ }),

/***/ "./src/js/TodoManager.js":
/*!*******************************!*\
  !*** ./src/js/TodoManager.js ***!
  \*******************************/
/*! exports provided: TodoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoManager\", function() { return TodoManager; });\n/* harmony import */ var _TodoListItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoListItem.js */ \"./src/js/TodoListItem.js\");\n/* harmony import */ var _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoActionBar.js */ \"./src/js/TodoActionBar.js\");\n/* harmony import */ var _broker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./broker.js */ \"./src/js/broker.js\");\n\n\n  //broker for Child-Parent intermodule Communication\n\nfunction TodoManager() {\n    this.todoItemMap = window.todoItemMap = {};\n}\n\nTodoManager.prototype.init = function () {\n    this.todoActionBar = new _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoActionBar\"]();\n    this.todoActionBar.init();\n    \n    _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"broker\"].addEventListener('TodoManager:selectDeselectAll', selectDeselectAll.bind(this));\n    _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"broker\"].addEventListener('TodoManager:deleteMapItem', deleteMapItem.bind(this));\n    _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"broker\"].addEventListener('TodoManager:deleteSelected', deleteSelected.bind(this));\n    _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"broker\"].addEventListener('TodoManager:deleteCompleted', deleteCompleted.bind(this));\n    _broker_js__WEBPACK_IMPORTED_MODULE_2__[\"broker\"].addEventListener('TodoManager:addItem', addItem.bind(this));\n};\n\nconst addItem = function (event) {\n    var newTodoItem = new _TodoListItem_js__WEBPACK_IMPORTED_MODULE_0__[\"TodoListItem\"](event.detail.todoText);\n    var newTodoElement = newTodoItem.render();\n\n    this.todoItemMap[newTodoItem.id] = newTodoItem;\n    document.getElementById('list-container').appendChild(newTodoElement);\n};\n\nconst deleteMapItem = function (event) { //Needs a better name\n    var todoID = event.detail.todoID;\n    delete this.todoItemMap[todoID];\n};\n\nconst deleteSelected  = function () {\n\n    for (let todoID in this.todoItemMap) {\n        if (this.todoItemMap[todoID].checked) {\n            this.todoItemMap[todoID].delete();\n        }\n    }\n};\n\nconst deleteCompleted  = function () {\n\n    for (let todoID in this.todoItemMap) {\n        if (this.todoItemMap[todoID].status) {\n            this.todoItemMap[todoID].delete();\n        }\n    }\n};\n\nconst selectDeselectAll = function () {  //rename? - selectDeselectAll\n    var check = true;\n    var firstListItem = this.todoItemMap[Object.keys(this.todoItemMap)[0]];\n\n    if (firstListItem && firstListItem.checked) {\n        check = false;\n    }\n\n    for (let todoID in this.todoItemMap) {\n        this.todoItemMap[todoID].setChecked(check);\n    }\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// const render = function () {\n//     // Render todoManager ? ( List-Container and TodoAction Bar??)\n//     // var bodyElement = document.querySelector(`body`);\n//     // bodyElement.innerHTML = Mustache.render(todoItemTemplate, listItem);\n// };\n\n//# sourceURL=webpack:///./src/js/TodoManager.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"broker\", function() { return broker; });\n//broker for Child-Parent intermodule Communication\nconst broker = document.createElement('span');\n\n\n\n//# sourceURL=webpack:///./src/js/broker.js?");

/***/ }),

/***/ "./src/js/todo-item-template.js":
/*!**************************************!*\
  !*** ./src/js/todo-item-template.js ***!
  \**************************************/
/*! exports provided: todoItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoItemTemplate\", function() { return todoItemTemplate; });\nconst todoItemTemplate =\n`\n    <div class=\"list-item {{#status}}done{{/status}}\" todo-id=\"{{id}}\">\n        <input type=\"checkbox\" class=\"check-box\" todo-action=\"select-item\" {{#checked}}checked{{/checked}}>\n        <p class=\"todo-text\" todo-action=\"todo-text\">{{text}}</p>\n        <button class=\"btn-done\" todo-action=\"mark-done\">Done</button>\n        <button class=\"btn-delete\" todo-action=\"delete-item\">Delete</button>\n    </div>\n`;\n\n\n//# sourceURL=webpack:///./src/js/todo-item-template.js?");

/***/ })

/******/ });