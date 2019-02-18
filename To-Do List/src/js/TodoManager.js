import { View } from './View.js'
import { TodoListItem } from './TodoListItem.js';
import { TodoActionBar } from './TodoActionBar.js';
import { templateListItem } from './templateListItem.js';

function TodoManager() { 
    this.todoList = { items: [] },
    this.listContainer = document.getElementById('list-container'),
    this.textBox = document.getElementById("text-box"),
    this.buttonAdd = document.getElementById("btn-add"),
    this.buttonSelectAll = document.getElementById("btn-select-all"),
    this.buttonDeleteSelected = document.getElementById("btn-delete-selected"),
    this.buttonDeleteCompleted = document.getElementById("btn-delete-completed");
}

TodoManager.prototype = Object.create(View.prototype);
TodoManager.prototype.constructor = TodoManager;

TodoManager.prototype.init = function () {
    this.todoListItem = new TodoListItem();
    this.todoActionBar = new TodoActionBar();
    this.todoActionBar.init(this);
    this.todoListItem.init(this);
};

TodoManager.prototype.addItem = function (todoText) {
    let todoID = new Date().getTime(),  //todoID <- TimeStamp 
        newListItem = new TodoListItem(todoID, todoText);

    this.todoList.items.push(newListItem);
    this.onTodoListChange();
};

TodoManager.prototype.deleteItem = function (switchAction, index) {
    switch (switchAction) {  // todoManager.todoList needs to be updated. So, using Splice instead of Slice.
        case 'delete-selected': {
            for (let i = this.todoList.items.length - 1; i >= 0; i -= 1) {
                if (this.todoList.items[i].todoChecked) {
                    this.todoList.items.splice(i, 1);
                }
            }
            break;
        }
        case 'delete-completed': {
            for (let i = this.todoList.items.length - 1; i >= 0; i -= 1) {
                if (this.todoList.items[i].todoStatus) {
                    this.todoList.items.splice(i, 1);
                }
            }
            break;
        }
        case 'delete-index': {
            this.todoList.items.splice(index, 1);
            break;
        }
    }
    this.onTodoListChange();
};

TodoManager.prototype.onTodoListChange = function () {
    render(this);
};

const render = function (todoManager) {
    console.log(todoManager.todoList);
    let todoListHTML = Mustache.to_html(templateListItem, todoManager.todoList);
    todoManager.listContainer.innerHTML = todoListHTML;
};

export { TodoManager };