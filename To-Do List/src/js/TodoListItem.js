import { View } from './View.js';
import { brokerTodoManager } from './broker-todo-manager.js';

function TodoListItem(todoText) {
    this.id = new Date().getTime();  // ID <---- TimeStamp.
    this.text = todoText;
    this.status = false;
    this.checked = false;
}

TodoListItem.prototype = Object.create(View.prototype);

TodoListItem.prototype.constructor = TodoListItem;

TodoListItem.prototype.createItemElement = function () {
    var newTodoItemElement = document.querySelector('.template').cloneNode(true);

    newTodoItemElement.classList.remove('template');
    newTodoItemElement.setAttribute('todo-id', this.id);
    newTodoItemElement.querySelector('.check-box').checked = this.checked;
    newTodoItemElement.querySelector('.todo-text').textContent = this.text;
    if (this.status) {
        newTodoItemElement.classList.add('done');
    }
    newTodoItemElement.onclick = (event) => { todoItemElementOnClick(event, this); };

    return newTodoItemElement;
}

TodoListItem.prototype.deleteItem = function () {
    brokerTodoManager.dispatchEvent(new CustomEvent('deleteItem', { detail: this.id }));
};

TodoListItem.prototype.setChecked = function (check) {
    this.checked = check;
    render(this);
};

const todoItemElementOnClick = function (event, listItem) {
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
    var listItemElement = document.querySelector(`[todo-id='${listItem.id}']`);

    listItemElement.querySelector('.check-box').checked = listItem.checked;
    listItemElement.querySelector('.todo-text').textContent = listItem.text;
    if (listItem.status) {
        listItemElement.classList.add('done');
    }
};

export { TodoListItem };