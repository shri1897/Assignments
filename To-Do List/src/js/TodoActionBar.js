import { View } from './View.js';
import {broker} from './broker.js';

function TodoActionBar() { };

TodoActionBar.prototype = Object.create(View.prototype);

TodoActionBar.prototype.constructor = TodoActionBar;

TodoActionBar.prototype.init = function () {

    document.getElementById('text-box').onkeypress = function(event) {
        if (event.keyCode === 13) { 
            addItemOnClick();
        }
    };

    document.getElementById('btn-add').onclick = addItemOnClick;

    document.getElementById('btn-select-all').onclick = selectAllOnClick;

    document.getElementById('btn-delete-selected').onclick = deleteSelectedOnClick;

    document.getElementById('btn-delete-completed').onclick = deleteCompletedOnClick;
};

const addItemOnClick = function(){
    let todoText = document.getElementById('text-box').value;
    document.getElementById('text-box').value = '';
    if (todoText) {
        broker.dispatchEvent(new CustomEvent('addItem', {detail: todoText}));
    }
};

const selectAllOnClick = function() {
    broker.dispatchEvent(new CustomEvent('setChecked'));
};

const deleteSelectedOnClick = function() {
    broker.dispatchEvent(new CustomEvent('deleteItem', {detail: 'delete-selected'}));
};

const deleteCompletedOnClick = function() {
    broker.dispatchEvent(new CustomEvent('deleteItem', {detail: 'delete-completed'}));
};

export { TodoActionBar };