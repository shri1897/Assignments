import { View } from './View.js'
import { TodoListItem } from './TodoListItem.js';
import { TodoActionBar } from './TodoActionBar.js';
import { broker } from './broker.js';  //broker for Child-Parent intermodule Communication

function TodoManager() {
    this.todoItemMap = window.todoItemMap = {};
}

TodoManager.prototype = Object.create(View.prototype);

TodoManager.prototype.constructor = TodoManager;

TodoManager.prototype.init = function () {
    this.todoActionBar = new TodoActionBar();
    this.todoActionBar.init();
    
    broker.addEventListener('TodoManager::selectAll', selectAll.bind(this));
    broker.addEventListener('TodoManager::deleteItem', deleteItem.bind(this));
    broker.addEventListener('TodoManager::deleteSelected', deleteSelected.bind(this));
    broker.addEventListener('TodoManager::deleteCompleted', deleteCompleted.bind(this));
    broker.addEventListener('TodoManager::addItem', addItem.bind(this));
};

const addItem = function (event) {
    var newTodoItem = new TodoListItem(event.detail.todoText),
        newTodoElement = newTodoItem.render();

    this.todoItemMap[newTodoItem.id] = newTodoItem;
    document.getElementById('list-container').appendChild(newTodoElement);
};

const deleteItem = function (event) {
    var todoID = event.detail.todoID;
    delete this.todoItemMap[todoID];
};

const deleteSelected  = function () {

    for (let todoID in this.todoItemMap) {
        if (this.todoItemMap[todoID].checked) {
            this.todoItemMap[todoID].delete();
        }
    }
};

const deleteCompleted  = function () {

    for (let todoID in this.todoItemMap) {
        if (this.todoItemMap[todoID].status) {
            this.todoItemMap[todoID].delete();
        }
    }
};

const selectAll = function () {  //Need to rename - selectDeselectAll
    var check = true,
        firstListItem = this.todoItemMap[Object.keys(this.todoItemMap)[0]];

    if (firstListItem && firstListItem.checked) {
        check = false;
    }

    for (let todoID in this.todoItemMap) {
        this.todoItemMap[todoID].setChecked(check);
    }
};

const render = function () {
    // Render todoManager ? ( List-Container and TodoAction Bar??)
    // var bodyElement = document.querySelector(`body`);
    // bodyElement.innerHTML = Mustache.render(todoItemTemplate, listItem);
};

export { TodoManager };