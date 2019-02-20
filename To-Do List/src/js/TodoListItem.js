import { View } from './View.js';
import { brokerTodoManager } from './broker-todo-manager.js';

function TodoListItem(todoText) {
    this.id = new Date().getTime();  // ID <---- TimeStamp.
    this.text = todoText;
    this.status = false;
    this.checked = false;
};

TodoListItem.prototype = Object.create(View.prototype);

TodoListItem.prototype.constructor = TodoListItem;

TodoListItem.prototype.createTodoElement = function () {
    var newTodoElement = document.querySelector('.template').cloneNode(true);

    newTodoElement.classList.remove('template');
    newTodoElement.setAttribute('todo-id', this.id);
    newTodoElement.querySelector('.check-box').checked = this.checked;
    newTodoElement.querySelector('.todo-text').textContent = this.text;
    if (this.status) {
        newTodoElement.classList.add('done');
    }
    newTodoElement.onclick = (event) => { todoElementOnClick(event, this); };

    return newTodoElement;
};

TodoListItem.prototype.deleteItem = function () {
    brokerTodoManager.dispatchEvent(new CustomEvent('deleteItem', { detail: this.id }));
};

TodoListItem.prototype.setChecked = function (check) {
    this.checked = check;
    render(this);
};

const todoElementOnClick = function (event, listItem) {
    switch (event.target.getAttribute('todo-action')) {
        case 'select-item':
            {
                listItem.checked = event.target.checked;
                render(listItem);
                break;
            }
        case 'mark-done':
            {
                listItem.status = true;
                render(listItem);
                break;
            }
        case 'delete-item':
            {
                brokerTodoManager.dispatchEvent(new CustomEvent('deleteItem', { detail: listItem.id }));
                break;
            }
    }
};

const render = function (listItem) {
    var todoElement = document.querySelector(`[todo-id='${listItem.id}']`);

    todoElement.querySelector('.check-box').checked = listItem.checked;
    todoElement.querySelector('.todo-text').textContent = listItem.text;
    if (listItem.status) {
        todoElement.classList.add('done');
    }
};

export { TodoListItem };