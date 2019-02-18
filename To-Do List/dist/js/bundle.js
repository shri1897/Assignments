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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoActionBar\", function() { return TodoActionBar; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n\n\nfunction TodoActionBar() { };\n\nTodoActionBar.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\nTodoActionBar.prototype.constructor = TodoActionBar;\n\nTodoActionBar.prototype.init = function (todoManagerProps) {\n\n    todoManagerProps.textBox.onkeypress = (event) => {\n        if (event.keyCode === 13) {     //Add item If enter key pressed\n            addItemEventHandler(todoManagerProps);\n        }\n    };\n\n    todoManagerProps.buttonAdd.onclick = addItemEventHandler.bind(null, todoManagerProps);\n\n    todoManagerProps.buttonSelectAll.onclick = selectAllClickHandler.bind(null, todoManagerProps);\n\n    todoManagerProps.buttonDeleteSelected.onclick = deleteSelectedClickHandler.bind(null, todoManagerProps);\n\n    todoManagerProps.buttonDeleteCompleted.onclick = deleteCompletedClickHandler.bind(null, todoManagerProps);\n};\n\nconst addItemEventHandler = (todoManagerProps) => {\n    let textValue = todoManagerProps.textBox.value;\n    todoManagerProps.textBox.value = '';\n    if (textValue) {\n        todoManagerProps.addItem(textValue);\n    }\n};\n\nconst selectAllClickHandler = (todoManagerProps) => {\n    var select_delesect = true,\n        firstTodoElement = todoManagerProps.todoList.items[0];\n\n    if (firstTodoElement && firstTodoElement.todoChecked) {\n        select_delesect = false;\n    }\n\n    for (let item of todoManagerProps.todoList.items) {\n        item.todoChecked = select_delesect;\n    }\n    todoManagerProps.onTodoListChange();\n};\n\nconst deleteSelectedClickHandler = (todoManagerProps) => {\n    todoManagerProps.deleteItem('delete-selected');\n};\n\nconst deleteCompletedClickHandler = (todoManagerProps) => {\n    todoManagerProps.deleteItem('delete-completed');\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoActionBar.js?");

/***/ }),

/***/ "./src/js/TodoListItem.js":
/*!********************************!*\
  !*** ./src/js/TodoListItem.js ***!
  \********************************/
/*! exports provided: TodoListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListItem\", function() { return TodoListItem; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n\n\nfunction TodoListItem(todoID, todoText, todoStatus, todoChecked) {\n    this.todoID = todoID;\n    this.todoText = todoText;\n    this.todoStatus = todoStatus === true ? true : false;\n    this.todoChecked = todoChecked === true ? true : false;\n}\n\nTodoListItem.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\nTodoListItem.prototype.constructor = TodoListItem;\n\nTodoListItem.prototype.init = function (todoManagerProps) {\n\n    todoManagerProps.listContainer.onclick = (event) => {\n        listContainerClickHandler(event, todoManagerProps);\n    }\n};\n\nconst listContainerClickHandler = (event, todoManagerProps) => {\n    let itemWrapper = findItemWrapper(event.target, 'todo-id'),\n        todoID = parseInt(itemWrapper.getAttribute(\"todo-id\")),\n        clickedListItem = todoManagerProps.todoList.items.find(item => item.todoID === todoID);\n\n    switch (event.target.getAttribute(\"todo-action\")) {\n        case \"select-item\":\n            {\n                clickedListItem.todoChecked = event.target.checked;\n                render(clickedListItem, itemWrapper);\n                break;\n            }\n        case \"mark-done\":\n            {\n                clickedListItem.todoStatus = true;\n                render(clickedListItem, itemWrapper);\n                break;\n            }\n        case \"delete-item\":\n            {\n                let index = todoManagerProps.todoList.items.indexOf(clickedListItem);\n                todoManagerProps.deleteItem('delete-index', index)\n                break;\n            }\n    }\n    event.stopPropagation();\n};\n\nconst render = (todoListItem, todoListElement) => {\n    if (todoListItem.todoStatus) {\n        todoListElement.classList.add('done-class');\n    }\n    todoListElement.checked = todoListItem.todoChecked;\n}\n\nconst findItemWrapper = (element, attributeName) => { //returns the closest parent element of the passed element with given Attribute\n    while (element != null) {\n        if (element.getAttribute(attributeName)) {\n            return element;\n        }\n        element = element.parentElement;\n    }\n    throw new Error(`Parent element with ${attributeName} not found!`);\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/TodoListItem.js?");

/***/ }),

/***/ "./src/js/TodoManager.js":
/*!*******************************!*\
  !*** ./src/js/TodoManager.js ***!
  \*******************************/
/*! exports provided: TodoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoManager\", function() { return TodoManager; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/View.js\");\n/* harmony import */ var _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListItem.js */ \"./src/js/TodoListItem.js\");\n/* harmony import */ var _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoActionBar.js */ \"./src/js/TodoActionBar.js\");\n/* harmony import */ var _templateListItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templateListItem.js */ \"./src/js/templateListItem.js\");\n\n\n\n\n\nconst todoList = { items: [] },\n    listContainer = document.getElementById('list-container'),\n    textBox = document.getElementById(\"text-box\"),\n    buttonAdd = document.getElementById(\"btn-add\"),\n    buttonSelectAll = document.getElementById(\"btn-select-all\"),\n    buttonDeleteSelected = document.getElementById(\"btn-delete-selected\"),\n    buttonDeleteCompleted = document.getElementById(\"btn-delete-completed\");\n\nfunction TodoManager() { }\n\nTodoManager.prototype = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__[\"View\"].prototype);\nTodoManager.prototype.constructor = TodoManager;\n\nTodoManager.prototype.init = function () {\n    const props = {\n        todoList: todoList,\n        listContainer: listContainer,\n        textBox: textBox,\n        buttonAdd: buttonAdd,\n        buttonSelectAll: buttonSelectAll,\n        buttonDeleteSelected: buttonDeleteSelected,\n        buttonDeleteCompleted: buttonDeleteCompleted,\n        addItem: this.addItem.bind(this),\n        deleteItem: this.deleteItem.bind(this),\n        onTodoListChange: this.onTodoListChange.bind(this)\n    }\n    this.todoListItem = new _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoListItem\"]();\n    this.todoActionBar = new _TodoActionBar_js__WEBPACK_IMPORTED_MODULE_2__[\"TodoActionBar\"]();\n    this.todoActionBar.init(props);\n    this.todoListItem.init(props);\n};\n\nTodoManager.prototype.addItem = function (textValue) {\n    let todoID = new Date().getTime(),  //todoID <- TimeStamp \n        newListItem = new _TodoListItem_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoListItem\"](todoID, textValue);\n\n    todoList.items.push(newListItem);\n    this.onTodoListChange();\n};\n\nTodoManager.prototype.deleteItem = function (switchAction, index) {\n    switch (switchAction) {  // todoList needs to be updated. So, using Splice instead of Slice.\n        case 'delete-selected': {\n            for (let i = todoList.items.length - 1; i >= 0; i--) {\n                if (todoList.items[i].todoChecked) {\n                    todoList.items.splice(i, 1);\n                }\n            }\n            break;\n        }\n        case 'delete-completed': {\n            for (let i = todoList.items.length - 1; i >= 0; i--) {\n                if (todoList.items[i].todoStatus) {\n                    todoList.items.splice(i, 1);\n                }\n            }\n            break;\n        }\n        case 'delete-index': {\n            todoList.items.splice(index, 1);\n            break;\n        }\n    }\n    this.onTodoListChange();\n};\n\nTodoManager.prototype.onTodoListChange = function () {\n    this.render();\n};\n\nTodoManager.prototype.render = function () {\n    let todoListHTML = Mustache.to_html(_templateListItem_js__WEBPACK_IMPORTED_MODULE_3__[\"templateListItem\"], todoList);\n    listContainer.innerHTML = todoListHTML;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/TodoManager.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"templateListItem\", function() { return templateListItem; });\nconst templateListItem =\n`\n    {{#items}}\n        <div class=\"list-item {{#todoStatus}}done-class{{/todoStatus}}\" todo-id=\"{{todoID}}\" >\n            <input type=\"checkbox\" class=\"check-box\" todo-action=\"select-item\" {{#todoChecked}}checked{{/todoChecked}}>\n            <p todo-action=\"todo-text\">{{todoText}}</p>\n            <button class=\"btn-done\"  todo-action=\"mark-done\"  style=\"color: rgb(0, 139, 139);\">Done</button>\n            <button class=\"btn-delete\" todo-action = \"delete-item\" style=\"color: rgb(255, 81, 81);\">X</button>\n        </div>\n    {{/items}}\n`;\n\n\n//# sourceURL=webpack:///./src/js/templateListItem.js?");

/***/ })

/******/ });