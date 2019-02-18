import { View } from './View.js';

function TodoListItem(todoText) {
    this.id = new Date().getTime();
    this.text = todoText;
    this.status = false;
    this.checked = false;
}

TodoListItem.prototype = Object.create(View.prototype);

TodoListItem.prototype.constructor = TodoListItem;

TodoListItem.prototype.init = function () {
    createItem(this);
    let listItemElement = document.querySelector(`[todo-id='${this.id}']`);
    listItemElement.onclick = (event) =>{listItemElementOnClick(event, this);};
};

TodoListItem.prototype.deleteItem = function () {
    let listItemElement = document.querySelector(`[todo-id='${this.id}']`);
    listItemElement.remove();
};

TodoListItem.prototype.setChecked = function (check) {
    this.checked = check;
    render(this);
}
const listItemElementOnClick = function (event, listItem) {
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
                document.dispatchEvent(new CustomEvent('deleteTodoListItem', {detail: listItem}));
                event.currentTarget.remove();
                break;
            }
    }
};

const createItem = function (listItem) {
    var newListItemElement = document.querySelector('.template').cloneNode(true);

    newListItemElement.classList.remove('template');
    newListItemElement.setAttribute('todo-id', listItem.id);
    newListItemElement.querySelector('.check-box').checked = listItem.checked;
    newListItemElement.querySelector('.todo-text').textContent = listItem.text;
    if (listItem.status) {
        newListItemElement.classList.add('done');
    }
    document.getElementById('list-container').appendChild(newListItemElement);
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