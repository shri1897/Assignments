import { View } from './View.js';
import { brokerTodoManager } from './broker-todo-manager.js';
import { templateTodoItem } from './template-todo-item.js';

function TodoListItem(todoText) {
    this.id = new Date().getTime();  // ID <---- TimeStamp.
    this.text = todoText;
    this.status = false;
    this.checked = false;
};

TodoListItem.prototype = Object.create(View.prototype);

TodoListItem.prototype.constructor = TodoListItem;

TodoListItem.prototype.createTodoElement = function () {
    var newTodoElement = document.createElement('div');
    newTodoElement.innerHTML = Mustache.render(templateTodoItem, this);
    newTodoElement.onclick = todoElementOnClick.bind(this);
    return newTodoElement;
};

TodoListItem.prototype.deleteItem = function () {
    var deleteItemEvent = new CustomEvent('deleteItem', { detail: { todoID: this.id } });
    brokerTodoManager.dispatchEvent(deleteItemEvent);
};

TodoListItem.prototype.setChecked = function (check) {
    this.checked = check;
    render(this);
};

const todoElementOnClick = function (event) {
    switch (event.target.getAttribute('todo-action')) {
        case 'select-item':
            {
                this.checked = event.target.checked;
                render(this);
                break;
            }
        case 'mark-done':
            {
                this.status = true;
                render(this);
                break;
            }
        case 'delete-item':
            {
                this.deleteItem();
                break;
            }
    }
};

const render = function (listItem) {
    var todoElement = document.querySelector(`[todo-id='${listItem.id}']`);
    todoElement.outerHTML = Mustache.render(templateTodoItem, listItem);
};

export { TodoListItem };