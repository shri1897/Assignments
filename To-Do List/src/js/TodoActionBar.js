import { View } from './View.js'
function TodoActionBar() { };

TodoActionBar.prototype = Object.create(View.prototype);
TodoActionBar.prototype.constructor = TodoActionBar;

TodoActionBar.prototype.init = function (todoManagerProps) {

    todoManagerProps.textBox.onkeypress = (event) => {
        if (event.keyCode === 13) {     //Add item If enter key pressed
            addItemEventHandler(todoManagerProps);
        }
    };

    todoManagerProps.buttonAdd.onclick = addItemEventHandler.bind(null, todoManagerProps);

    todoManagerProps.buttonSelectAll.onclick = selectAllClickHandler.bind(null, todoManagerProps);

    todoManagerProps.buttonDeleteSelected.onclick = deleteSelectedClickHandler.bind(null, todoManagerProps);

    todoManagerProps.buttonDeleteCompleted.onclick = deleteCompletedClickHandler.bind(null, todoManagerProps);
};

const addItemEventHandler = (todoManagerProps) => {
    let textValue = todoManagerProps.textBox.value;
    todoManagerProps.textBox.value = '';
    if (textValue) {
        todoManagerProps.addItem(textValue);
    }
}

const selectAllClickHandler = (todoManagerProps) => {
    var select_delesect = true,
        firstTodoElement = todoManagerProps.todoList.items[0];

    if (firstTodoElement && firstTodoElement.todoChecked) {
        select_delesect = false;
    }

    for (let item of todoManagerProps.todoList.items) {
        item.todoChecked = select_delesect;
    }
    todoManagerProps.onTodoListChange();
}

const deleteSelectedClickHandler = (todoManagerProps) => {
    todoManagerProps.deleteItem('delete-selected');
}

const deleteCompletedClickHandler = (todoManagerProps) => {
    todoManagerProps.deleteItem('delete-completed');
}

export { TodoActionBar };