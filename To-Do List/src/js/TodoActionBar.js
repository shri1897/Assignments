import { View } from './View.js';
import { broker } from './broker.js';

function TodoActionBar() { };

TodoActionBar.prototype = Object.create(View.prototype);

TodoActionBar.prototype.constructor = TodoActionBar;

TodoActionBar.prototype.init = function () {
    
    document.getElementById('btn-add').onclick = addItemOnEvent;

    document.getElementById('btn-select-all').onclick = selectAllOnClick;

    document.getElementById('btn-delete-selected').onclick = deleteSelectedOnClick;

    document.getElementById('btn-delete-completed').onclick = deleteCompletedOnClick;

    document.getElementById('text-box').onkeypress = function (event) {
        if (event.keyCode === 13) {
            addItemOnEvent();
        }
    };
};

const addItemOnEvent = function () {
    var todoText = document.getElementById('text-box').value;
    document.getElementById('text-box').value = '';

    if (todoText) {
        let addItemEvent = new CustomEvent('TodoManager::addItem', { detail: { todoText: todoText} });
        broker.dispatchEvent(addItemEvent);
    }
};

const selectAllOnClick = function () { // rename to selectDeselectAll
    broker.dispatchEvent(new CustomEvent('TodoManager::selectAll'));
};

const deleteSelectedOnClick = function () {
    var deleteSelectedEvent = new CustomEvent('TodoManager::deleteSelected');
    broker.dispatchEvent(deleteSelectedEvent);
};

const deleteCompletedOnClick = function () {
    var deleteCompletedEvent = new CustomEvent('TodoManager::deleteCompleted');
    broker.dispatchEvent(deleteCompletedEvent);
};

export { TodoActionBar };