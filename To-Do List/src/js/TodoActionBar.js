import { View } from './View.js';

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
        document.dispatchEvent(new CustomEvent('addItem', {detail: todoText}));
    }
};

const selectAllOnClick = function() {
    document.dispatchEvent(new CustomEvent('setChecked'));
};

const deleteSelectedOnClick = function() {
    document.dispatchEvent(new CustomEvent('deleteItem', {detail: 'delete-selected'}));
};

const deleteCompletedOnClick = function() {
    document.dispatchEvent(new CustomEvent('deleteItem', {detail: 'delete-completed'}));
};

export { TodoActionBar };