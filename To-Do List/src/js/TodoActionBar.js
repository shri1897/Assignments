import {View} from './View.js'
import { TodoListItems } from './TodoListItems.js';

class TodoActionBar extends View{

    constructor() {
        super();
    }

    init(listOfItemObjects, renderCallBack) {

        const textBox = document.getElementById("text-box");
        const buttonAdd = document.getElementById("btn-add");
        const buttonSelectAll = document.getElementById("btn-select-all");
        const buttonDeleteSelected = document.getElementById("btn-delete-selected");
        const buttonDeleteCompleted = document.getElementById("btn-delete-completed");

        const addItem = () => {
            let textvalue;
            textvalue = document.getElementById("text-box").value;
            document.getElementById("text-box").value = "";
            if (textvalue) {
                let timeStamp = new Date().getTime();
                listOfItemObjects.set(timeStamp, new TodoListItems(timeStamp, textvalue));
            }
            renderCallBack(listOfItemObjects);
        }

        textBox.onkeypress =  function textBoxEnterKeyListener(event) {
            if (event.keyCode === 13) { //Add item If enter key pressed
                addItem();
            }
        };

        buttonAdd.onclick = function buttonAddClickListener() {
            addItem();
        };

        buttonSelectAll.onclick = function selectAllClickListener(event) { 
            var check_uncheck = true;
            if (listOfItemObjects.values().next().value && listOfItemObjects.values().next().value.todoChecked) {
                check_uncheck = false;
            }
            for (var item of listOfItemObjects.values()) {
                item.setChecked(check_uncheck);
            }
            renderCallBack(listOfItemObjects);
        };

        buttonDeleteSelected.onclick =  function deleteSelectedClickListener(event) { 
            listOfItemObjects.forEach((value, key) => {
                if (value.todoChecked) {
                    listOfItemObjects.delete(key);
                }
            });
            renderCallBack(listOfItemObjects);
        };

        buttonDeleteCompleted.onclick = (event) => { 
            listOfItemObjects.forEach((value, key) => {
                if (value.todoStatus) {
                    listOfItemObjects.delete(key);
                }
            });
            renderCallBack(listOfItemObjects);
        };
    }
}

export { TodoActionBar };