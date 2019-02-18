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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoManager */ \"./src/js/TodoManager.js\");\n\n\n(function main() {\n    const todoManager = new _TodoManager__WEBPACK_IMPORTED_MODULE_0__[\"TodoManager\"]();\n    todoManager.init();\n    todoManager.render();\n})();\n\n\n//# sourceURL=webpack:///./src/js/Main.js?");

/***/ }),

/***/ "./src/js/TodoActionBar.js":
/*!*********************************!*\
  !*** ./src/js/TodoActionBar.js ***!
  \*********************************/
/*! exports provided: TodoActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoActionBar\", function() { return TodoActionBar; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n\n\nfunction TodoActionBar() { };\n\nTodoActionBar.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\nTodoActionBar.prototype.constructor = TodoActionBar;\n\nTodoActionBar.prototype.init = function (todoManager) {\n\n    todoManager.textBox.onkeypress = (event) => {\n        if (event.keyCode === 13) {     //Add item If enter key pressed\n            addItemEventHandler(todoManager);\n        }\n    };\n\n    todoManager.buttonAdd.onclick = addItemEventHandler.bind(null, todoManager);\n\n    todoManager.buttonSelectAll.onclick = selectAllClickHandler.bind(null, todoManager);\n\n    todoManager.buttonDeleteSelected.onclick = deleteSelectedClickHandler.bind(null, todoManager);\n\n    todoManager.buttonDeleteCompleted.onclick = deleteCompletedClickHandler.bind(null, todoManager);\n};\n\nconst addItemEventHandler = (todoManager) => {\n    let todoText = todoManager.textBox.value;\n    todoManager.textBox.value = '';\n    if (todoText) {\n        todoManager.addItem(todoText);\n    }\n};\n\nconst selectAllClickHandler = (todoManager) => {\n    var select_delesect = true,\n        firstTodoElement = todoManager.todoList.items[0];\n\n    if (firstTodoElement && firstTodoElement.todoChecked) {\n        select_delesect = false;\n    }\n\n    for (let item of todoManager.todoList.items) {\n        item.todoChecked = select_delesect;\n    }\n    todoManager.onTodoListChange();\n};\n\nconst deleteSelectedClickHandler = (todoManager) => {\n    todoManager.deleteItem('delete-selected');\n};\n\nconst deleteCompletedClickHandler = (todoManager) => {\n    todoManager.deleteItem('delete-completed');\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoActionBar.js?");

/***/ }),

/***/ "./src/js/TodoListItem.js":
/*!********************************!*\
  !*** ./src/js/TodoListItem.js ***!
  \********************************/
/*! exports provided: TodoListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListItem\", function() { return TodoListItem; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n\n\nfunction TodoListItem(todoID, todoText, todoStatus, todoChecked) {\n    this.todoID = todoID;\n    this.todoText = todoText;\n    this.todoStatus = todoStatus === true ? true : false;\n    this.todoChecked = todoChecked === true ? true : false;\n}\n\nTodoListItem.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\nTodoListItem.prototype.constructor = TodoListItem;\n\nTodoListItem.prototype.init = function (todoManager) {\n\n    todoManager.listContainer.onclick = (event) => {\n        listContainerClickHandler(event, todoManager);\n    }\n};\n\nconst listContainerClickHandler = (event, todoManager) => {\n    try {\n        let itemWrapper = findItemWrapper(event.target, 'todo-id'),\n            todoID = parseInt(itemWrapper.getAttribute(\"todo-id\")),\n            clickedListItem = todoManager.todoList.items.find(item => item.todoID === todoID);\n\n        switch (event.target.getAttribute(\"todo-action\")) {\n            case \"select-item\":\n                {\n                    clickedListItem.todoChecked = event.target.checked;\n                    render(clickedListItem, itemWrapper);\n                    break;\n                }\n            case \"mark-done\":\n                {\n                    clickedListItem.todoStatus = true;\n                    render(clickedListItem, itemWrapper);\n                    break;\n                }\n            case \"delete-item\":\n                {\n                    let index = todoManager.todoList.items.indexOf(clickedListItem);\n                    todoManager.deleteItem('delete-index', index);\n                    break;\n                }\n        }\n    } catch(error) {\n        console.log(error.message);\n    }\n    event.stopPropagation();\n};\n\nconst findItemWrapper = (element, attributeName) => { //returns the closest parent element of the passed element with given Attribute\n    while (element != null) {\n        if (element.getAttribute(attributeName)) {\n            return element;\n        }\n        element = element.parentElement;\n    }\n    throw new Error(`Parent element with ${attributeName} not found!`);\n\n};\n\nconst render = (todoListItem, todoListElement) => {\n    if (todoListItem.todoStatus) {\n        todoListElement.classList.add('done');\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoListItem.js?");

/***/ }),

/***/ "./src/js/TodoManager.js":
/*!*******************************!*\
  !*** ./src/js/TodoManager.js ***!
  \*******************************/
/*! exports provided: TodoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoManager\", function() { return TodoManager; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListItem.js */ \"./src/js/TodoListItem.js\");\n/* harmony import */ var _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoActionBar.js */ \"./src/js/TodoActionBar.js\");\n/* harmony import */ var _templateListItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templateListItem.js */ \"./src/js/templateListItem.js\");\n\n\n\n\n\nfunction TodoManager() { \n    this.todoList = { items: [] },\n    this.listContainer = document.getElementById('list-container'),\n    this.textBox = document.getElementById(\"text-box\"),\n    this.buttonAdd = document.getElementById(\"btn-add\"),\n    this.buttonSelectAll = document.getElementById(\"btn-select-all\"),\n    this.buttonDeleteSelected = document.getElementById(\"btn-delete-selected\"),\n    this.buttonDeleteCompleted = document.getElementById(\"btn-delete-completed\");\n}\n\nTodoManager.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\nTodoManager.prototype.constructor = TodoManager;\n\nTodoManager.prototype.init = function () {\n    this.todoListItem = new _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoListItem\"]();\n    this.todoActionBar = new _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__[\"TodoActionBar\"]();\n    this.todoActionBar.init(this);\n    this.todoListItem.init(this);\n};\n\nTodoManager.prototype.addItem = function (todoText) {\n    let todoID = new Date().getTime(),  //todoID <- TimeStamp \n        newListItem = new _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoListItem\"](todoID, todoText);\n\n    this.todoList.items.push(newListItem);\n    this.onTodoListChange();\n};\n\nTodoManager.prototype.deleteItem = function (switchAction, index) {\n    switch (switchAction) {  // todoManager.todoList needs to be updated. So, using Splice instead of Slice.\n        case 'delete-selected': {\n            for (let i = this.todoList.items.length - 1; i >= 0; i -= 1) {\n                if (this.todoList.items[i].todoChecked) {\n                    this.todoList.items.splice(i, 1);\n                }\n            }\n            break;\n        }\n        case 'delete-completed': {\n            for (let i = this.todoList.items.length - 1; i >= 0; i -= 1) {\n                if (this.todoList.items[i].todoStatus) {\n                    this.todoList.items.splice(i, 1);\n                }\n            }\n            break;\n        }\n        case 'delete-index': {\n            this.todoList.items.splice(index, 1);\n            break;\n        }\n    }\n    this.onTodoListChange();\n};\n\nTodoManager.prototype.onTodoListChange = function () {\n    render(this);\n};\n\nconst render = function (todoManager) {\n    console.log(todoManager.todoList);\n    let todoListHTML = Mustache.to_html(_templateListItem_js__WEBPACK_IMPORTED_MODULE_3__[\"templateListItem\"], todoManager.todoList);\n    todoManager.listContainer.innerHTML = todoListHTML;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoManager.js?");

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

/***/ "./src/js/templateListItem.js":
/*!************************************!*\
  !*** ./src/js/templateListItem.js ***!
  \************************************/
/*! exports provided: templateListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"templateListItem\", function() { return templateListItem; });\nconst templateListItem =\n`   \n     {{#items}}\n        <div class=\"list-item {{#todoStatus}}done{{/todoStatus}}\" todo-id=\"{{todoID}}\" >\n            <input type=\"checkbox\" class=\"check-box\" todo-action=\"select-item\" {{#todoChecked}}checked{{/todoChecked}}>\n            <p class\"para\" todo-action=\"todo-text\">{{todoText}}</p>\n            <button class=\"btn-done\"  todo-action=\"mark-done\"  style=\"color: rgb(0, 139, 139);\">Done</button>\n            <button class=\"btn-delete\" todo-action = \"delete-item\" style=\"color: rgb(255, 81, 81);\">X</button>\n        </div>\n    {{/items}}\n`;\n\n\n\n// /////////////////// Removing Done Button ///////////////////////////////////\n// {{^todoStatus}}\n//                 <button class=\"btn-done\"  todo-action=\"mark-done\"  style=\"color: rgb(0, 139, 139);\">Done</button>\n//             {{/todoStatus}}\n\n//# sourceURL=webpack:///./src/js/templateListItem.js?");

/***/ })

/******/ });