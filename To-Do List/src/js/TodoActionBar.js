import { View } from './View.js';

function TodoActionBar() { };

TodoActionBar.prototype = Object.create(View.prototype);
TodoActionBar.prototype.constructor = TodoActionBar;

TodoActionBar.prototype.init = function (todoManager) {

    todoManager.textBox.onkeypress = (event) => {
        if (event.keyCode === 13) {     //Add item If enter key pressed
            addItemEventHandler(todoManager);
        }
    };

    todoManager.buttonAdd.onclick = addItemEventHandler.bind(null, todoManager);

    todoManager.buttonSelectAll.onclick = selectAllClickHandler.bind(null, todoManager);

    todoManager.buttonDeleteSelected.onclick = deleteSelectedClickHandler.bind(null, todoManager);

    todoManager.buttonDeleteCompleted.onclick = deleteCompletedClickHandler.bind(null, todoManager);
};

const addItemEventHandler = (todoManager) => {
    let todoText = todoManager.textBox.value;
    todoManager.textBox.value = '';
    if (todoText) {
        todoManager.addItem(todoText);
    }
};

const selectAllClickHandler = (todoManager) => {
    var select_delesect = true,
        firstTodoElement = todoManager.todoList.items[0];

    if (firstTodoElement && firstTodoElement.todoChecked) {
        select_delesect = false;
    }

    for (let item of todoManager.todoList.items) {
        item.todoChecked = select_delesect;
    }
    todoManager.onTodoListChange();
};

const deleteSelectedClickHandler = (todoManager) => {
    todoManager.deleteItem('delete-selected');
};

const deleteCompletedClickHandler = (todoManager) => {
    todoManager.deleteItem('delete-completed');
};

export { TodoActionBar };