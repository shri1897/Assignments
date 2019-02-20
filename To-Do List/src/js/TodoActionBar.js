import { View } from './View.js';
import { brokerTodoManager } from './broker-todo-manager.js';

function TodoActionBar() { };

TodoActionBar.prototype = Object.create(View.prototype);

TodoActionBar.prototype.constructor = TodoActionBar;

TodoActionBar.prototype.init = function () {

    document.getElementById('text-box').onkeypress = function (event) {
        if (event.keyCode === 13) {
            addItemOnEvent();
        }
    };

    document.getElementById('btn-add').onclick = addItemOnEvent;

    document.getElementById('btn-select-all').onclick = selectAllOnClick;

    document.getElementById('btn-delete-selected').onclick = deleteSelectedOnClick;

    document.getElementById('btn-delete-completed').onclick = deleteCompletedOnClick;
};

const addItemOnEvent = function () {
    var todoText = document.getElementById('text-box').value;
    document.getElementById('text-box').value = '';
    if (todoText) {
        brokerTodoManager.dispatchEvent(new CustomEvent('addItem', { detail: todoText }));
    }
};

const selectAllOnClick = function () {
    brokerTodoManager.dispatchEvent(new CustomEvent('setChecked'));
};

const deleteSelectedOnClick = function () {
    brokerTodoManager.dispatchEvent(new CustomEvent('deleteMultipleItems', { detail: 'delete-selected' }));
};

const deleteCompletedOnClick = function () {
    brokerTodoManager.dispatchEvent(new CustomEvent('deleteMultipleItems', { detail: 'delete-completed' }));
};

export { TodoActionBar };