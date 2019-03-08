import { TodoListItem } from './TodoListItem.js';
import { TodoActionBar } from './TodoActionBar.js';
import { broker } from './broker.js';  //broker for Child-Parent intermodule Communication

function TodoManager() {
    this.todoItemMap = window.todoItemMap = {};
}

TodoManager.prototype.init = function () {
    this.todoActionBar = new TodoActionBar();
    this.todoActionBar.init();
    
    broker.addEventListener('TodoManager:selectDeselectAll', selectDeselectAll.bind(this));
    broker.addEventListener('TodoManager:deleteMapItem', deleteMapItem.bind(this));
    broker.addEventListener('TodoManager:deleteSelected', deleteSelected.bind(this));
    broker.addEventListener('TodoManager:deleteCompleted', deleteCompleted.bind(this));
    broker.addEventListener('TodoManager:addItem', addItem.bind(this));
};

const addItem = function (event) {
    var newTodoItem = new TodoListItem(event.detail.todoText);
    var newTodoElement = newTodoItem.render();

    this.todoItemMap[newTodoItem.id] = newTodoItem;
    document.getElementById('list-container').appendChild(newTodoElement);
};

const deleteMapItem = function (event) { //Needs a better name
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

const selectDeselectAll = function () {
    var check = true;
    var firstListItem = this.todoItemMap[Object.keys(this.todoItemMap)[0]];

    if (firstListItem && firstListItem.checked) {
        check = false;
    }

    for (let todoID in this.todoItemMap) {
        this.todoItemMap[todoID].setChecked(check);
    }
};

export { TodoManager };























// const render = function () {
//     // Render todoManager ? ( List-Container and TodoAction Bar??)
//     // var bodyElement = document.querySelector(`body`);
//     // bodyElement.innerHTML = Mustache.render(todoItemTemplate, listItem);
// };