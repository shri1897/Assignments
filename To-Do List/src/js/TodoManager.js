import { View } from './View.js'
import { TodoListItem } from './TodoListItem.js';
import { TodoActionBar } from './TodoActionBar.js';
import { templateListItem } from './templateListItem.js';

const todoList = { items: [] },
    listContainer = document.getElementById('list-container'),
    textBox = document.getElementById("text-box"),
    buttonAdd = document.getElementById("btn-add"),
    buttonSelectAll = document.getElementById("btn-select-all"),
    buttonDeleteSelected = document.getElementById("btn-delete-selected"),
    buttonDeleteCompleted = document.getElementById("btn-delete-completed");

function TodoManager() { }

TodoManager.prototype = Object.create(View.prototype);
TodoManager.prototype.constructor = TodoManager;

TodoManager.prototype.init = function () {
    const props = {
        todoList: todoList,
        listContainer: listContainer,
        textBox: textBox,
        buttonAdd: buttonAdd,
        buttonSelectAll: buttonSelectAll,
        buttonDeleteSelected: buttonDeleteSelected,
        buttonDeleteCompleted: buttonDeleteCompleted,
        addItem: this.addItem.bind(this),
        deleteItem: this.deleteItem.bind(this),
        onTodoListChange: this.onTodoListChange.bind(this)
    }
    this.todoListItem = new TodoListItem();
    this.todoActionBar = new TodoActionBar();
    this.todoActionBar.init(props);
    this.todoListItem.init(props);
};

TodoManager.prototype.addItem = function (textValue) {
    let todoID = new Date().getTime(),  //todoID <- TimeStamp 
        newListItem = new TodoListItem(todoID, textValue);

    todoList.items.push(newListItem);
    this.onTodoListChange();
};

TodoManager.prototype.deleteItem = function (switchAction, index) {
    switch (switchAction) {
        case 'delete-selected': {
            for (let i = todoList.items.length - 1; i >= 0; i--) {
                if (todoList.items[i].todoChecked) {
                    todoList.items.splice(i, 1);
                }
            }
            break;
        }
        case 'delete-completed': {
            for (let i = todoList.items.length - 1; i >= 0; i--) {
                if (todoList.items[i].todoStatus) {
                    todoList.items.splice(i, 1);
                }
            }
            break;
        }
        case 'delete-index': {
            todoList.items.splice(index, 1);
            break;
        }
    }
    this.onTodoListChange();
}

TodoManager.prototype.onTodoListChange = function () {
    this.render();
};

TodoManager.prototype.render = function () {
    console.log(todoList);
    let html = Mustache.to_html(templateListItem, todoList);
    listContainer.innerHTML = html;
}

export { TodoManager };