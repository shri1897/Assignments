import { View } from './View.js'
import { TodoListItem } from './TodoListItem.js';
import { TodoActionBar } from './TodoActionBar.js';
import { templateListItem } from './templateListItem.js';

function TodoManager() {
    this.todoList = window.todoList = {};
}

TodoManager.prototype = Object.create(View.prototype);
TodoManager.prototype.constructor = TodoManager;

TodoManager.prototype.init = function () {
    this.todoActionBar = new TodoActionBar();
    this.todoActionBar.init();
    document.addEventListener('deleteTodoListItem', (event) => { deleteTodoListItem(event.detail, this) });
    document.addEventListener('deleteItem', (event) => { deleteItem(event.detail, this) });
    document.addEventListener('addItem', (event) => { addItem(event.detail, this) });
    document.addEventListener('setChecked', setChecked.bind(this));
};

const addItem = function (todoText, todoManager) {
    let newListItem = new TodoListItem(todoText);
    newListItem.init();
    todoManager.todoList[newListItem.id] = newListItem;
};

const deleteItem = function (switchAction, todoManager) {
    switch (switchAction) {  
        case 'delete-selected':
            {
                for(let todoID in todoManager.todoList) {
                    if(todoManager.todoList[todoID].checked) {
                        todoManager.todoList[todoID].deleteItem();
                        delete todoManager.todoList[todoID];
                    }
                }
                break;
            }
        case 'delete-completed':
            {
                for(let todoID in todoManager.todoList) {
                    if(todoManager.todoList[todoID].status) {
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
    if(this.todoList[Object.keys(this.todoList)[0]] && this.todoList[Object.keys(this.todoList)[0]].checked) {
        check = false;
    }
    for(let todoID in this.todoList) {
        this.todoList[todoID].setChecked(check);
    }
}

const deleteTodoListItem = function (listItem, todoManager) {
    for(let todoID in todoManager.todoList) {
        if(todoManager.todoList[todoID]==listItem) {
           delete todoManager.todoList[todoID];
           break;
        }
    }
}

export { TodoManager };