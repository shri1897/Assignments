import { View } from './View.js'
import { TodoListItem } from './TodoListItem.js';
import { TodoActionBar } from './TodoActionBar.js';
import { brokerTodoManager } from './broker-todo-manager.js';  //broker for Child-Parent intermodule Communication

function TodoManager() {
    this.todoItemList = {};
    this.todoElementList = {};
};

TodoManager.prototype = Object.create(View.prototype);

TodoManager.prototype.constructor = TodoManager;

TodoManager.prototype.init = function () {
    this.todoActionBar = new TodoActionBar();
    this.todoActionBar.init();
    
    brokerTodoManager.addEventListener('setChecked', setChecked.bind(this));
    brokerTodoManager.addEventListener('deleteItem', deleteItem.bind(this));
    brokerTodoManager.addEventListener('deleteMultipleItems', deleteMultipleItems.bind(this));
    brokerTodoManager.addEventListener('addItem', addItem.bind(this));
};

const addItem = function (event) {
    var newTodoItem = new TodoListItem(event.detail.todoText),
        newTodoElement = newTodoItem.createTodoElement();

    this.todoItemList[newTodoItem.id] = newTodoItem;
    this.todoElementList[newTodoItem.id] = newTodoElement;
    render(this.todoElementList);
};

const deleteMultipleItems = function (event) {
    switch (event.detail.todoAction) {
        case 'delete-selected':
            {
                for (let todoID in this.todoItemList) {
                    if (this.todoItemList[todoID].checked) {
                        delete this.todoItemList[todoID];
                        delete this.todoElementList[todoID];
                    }
                }
                break;
            }
        case 'delete-completed':
            {
                for (let todoID in this.todoItemList) {
                    if (this.todoItemList[todoID].status) {
                        delete this.todoItemList[todoID];
                        delete this.todoElementList[todoID];
                    }
                }
                break;
            }
    }
    render(this.todoElementList);
};

const setChecked = function () { //// this <==> todoManager
    var check = true;

    if (this.todoItemList[Object.keys(this.todoItemList)[0]] && this.todoItemList[Object.keys(this.todoItemList)[0]].checked) {
        check = false;
    }
    for (let todoID in this.todoItemList) {
        this.todoItemList[todoID].setChecked(check);
    }
};

const deleteItem = function (event) {
    var todoID = event.detail.todoID;
    delete this.todoItemList[todoID];
    delete this.todoElementList[todoID];
    render(this.todoElementList);
};

const render = function (todoElementList) {
    var listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';
    for (let todoID in todoElementList) {
        listContainer.appendChild(todoElementList[todoID]);
    }
};

export { TodoManager };