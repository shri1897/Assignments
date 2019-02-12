import {
    TodoListItems
} from './TodoListItems.js';

const TodoActionBar = function () {};

TodoActionBar.prototype.init = function (listOfItemObjects, renderList) {
    
    const addItem = function(){
        let textvalue;
        textvalue = document.getElementById("text-box").value;
        document.getElementById("text-box").value = "";
        if (textvalue) {
            let timeStamp = new Date().getTime();
            listOfItemObjects.set(timeStamp, new TodoListItems(timeStamp, textvalue));
        }
        renderList(listOfItemObjects);
    }

    document.getElementById("text-box").addEventListener('keypress', function textBoxEnterKeyListener(event) {
        if (event.keyCode === 13) { //Add item If enter key pressed
            addItem();
        }
    });

    document.getElementById('btn-add').addEventListener('click', function buttonAddClickListener() {
        addItem();
    });

    document.getElementById('btn-select-all').addEventListener('click', function selectAllClickListener(event) { //Select-Deselect All
        var check_uncheck = true;
        if (listOfItemObjects.values().next().value && listOfItemObjects.values().next().value.todoChecked) {
            check_uncheck = false;
        }
        for (var item of listOfItemObjects.values()) {
            item.setChecked(check_uncheck);
        }
        renderList(listOfItemObjects);
    });

    document.getElementById('btn-delete-selected').addEventListener('click', function deleteSelectedClickListener(event) { //delete all selected elements
        listOfItemObjects.forEach((value, key) => {
            if (value.todoChecked) {
                listOfItemObjects.delete(key);
            }
        });
        renderList(listOfItemObjects);
    });

    document.getElementById('btn-delete-completed').addEventListener('click', function deleteCompletedClickListener(event) { // Delete all completed elements
        listOfItemObjects.forEach((value, key) => {
            if (value.todoStatus) {
                listOfItemObjects.delete(key);
            }
        });
        renderList(listOfItemObjects);
    });
};

export {
    TodoActionBar
};