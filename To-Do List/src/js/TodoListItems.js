const TodoListItems = function (todoID, todoText, todoStatus, todoChecked) {
    this.todoID = todoID;
    this.todoText = todoText;
    this.todoStatus = todoStatus===true? true:false;
    this.todoChecked = todoChecked===true? true:false;
};

TodoListItems.prototype.setStatus = function (status) {
    this.todoStatus = false;
    if (status && status !== "false") {
        this.todoStatus = true;
    }
};

TodoListItems.prototype.setChecked = function (value) {
    if (!value) {
        value = false;
    }
    this.todoChecked = value;
};

TodoListItems.prototype.setText = function (newText) {
    this.todoText = newText;
}

export {
    TodoListItems
};