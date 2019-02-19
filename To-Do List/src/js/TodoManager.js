import { View } from './View.js'
import { TodoListItem } from './TodoListItem.js';
import { TodoActionBar } from './TodoActionBar.js';
import { brokerTodoManager } from './brokerTodoManager.js';

function TodoManager() {
    this.todoList = {};
    this.todoElementList = {};
}

TodoManager.prototype = Object.create(View.prototype);
TodoManager.prototype.constructor = TodoManager;

TodoManager.prototype.init = function () {
    this.todoActionBar = new TodoActionBar();
    this.todoActionBar.init();
    brokerTodoManager.addEventListener('deleteItem', (event) => { deleteItem(event.detail, this) });
    brokerTodoManager.addEventListener('deleteMultipleItems', (event) => { deleteMultipleItems(event.detail, this) });
    brokerTodoManager.addEventListener('addItem', (event) => { addItem(event.detail, this) });
    brokerTodoManager.addEventListener('setChecked', setChecked.bind(this));
};

const addItem = function (todoText, todoManager) {
    let newTodoItem = new TodoListItem(todoText);
    let newTodoItemElement = newTodoItem.createItemElement();

    todoManager.todoList[newTodoItem.id] = newTodoItem;
    todoManager.todoElementList[newTodoItem.id] = newTodoItemElement;
    render(todoManager.todoElementList);
};

const deleteMultipleItems = function (switchAction, todoManager) {
    switch (switchAction) {
        case 'delete-selected':
            {
                for (let todoID in todoManager.todoList) {
                    if (todoManager.todoList[todoID].checked) {
                        todoManager.todoList[todoID].deleteItem();
                    }
                }
                break;
            }
        case 'delete-completed':
            {
                for (let todoID in todoManager.todoList) {
                    if (todoManager.todoList[todoID].status) {
                        todoManager.todoList[todoID].deleteItem();
                        delete todoManager.todoList[todoID];
                    }
                }
                break;
            }
    }
};

const setChecked = function () { //// this <==> todoManager
    var check = true;
    if (this.todoList[Object.keys(this.todoList)[0]] && this.todoList[Object.keys(this.todoList)[0]].checked) {
        check = false;
    }
    for (let todoID in this.todoList) {
        this.todoList[todoID].setChecked(check);
    }
}

const deleteItem = function (todoID, todoManager) {
    delete todoManager.todoList[todoID];
    delete todoManager.todoElementList[todoID];
    render(todoManager.todoElementList);
}

const render = function (todoElementList) {
    let listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';
    for (let todoID in todoElementList) {
        listContainer.appendChild(todoElementList[todoID]);
    }
}

export { TodoManager };