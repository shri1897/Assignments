import {
    TodoListItems
} from './TodoListItems.js';

import {
    TodoActionBar
} from './TodoActionBar.js';

const reloadFromLocalStorage = () => {
    let retrivedList = JSON.parse(localStorage.getItem("com.modular.todolist"));
    console.log(retrivedList);
    if(retrivedList) {
        let listOfObjects = new Map();
        for(let i=0 ;i< retrivedList.length; i +=1) {
            listOfObjects.set(retrivedList[i].todoID, new TodoListItems(retrivedList[i].todoID, retrivedList[i].todoText, retrivedList[i].todoStatus,retrivedList[i].todoChecked));
        }
        return listOfObjects;
    }else {
        return new Map();
    }
}

const TodoManager = function () {
    this.listOfItemObjects = reloadFromLocalStorage();
};

TodoManager.prototype.init = function () {
    this.todoListItems = new TodoListItems();
    this.todoActionBar = new TodoActionBar();

    this.todoActionBar.init(this.listOfItemObjects, this.renderList);

    document.getElementById("list-container").addEventListener("click", (event) =>  { //Using Event-bubbling to find the target.
        let key, clickedListItem;
        clickedListItem = event.target.parentElement;
        key = parseInt(clickedListItem.getAttribute("todo-id"));
        switch (event.target.getAttribute("todo-type")) {
            case "check":
                {
                    this.listOfItemObjects.get(key).setChecked(event.target.checked);
                    this.renderList(this.listOfItemObjects);
                    break;
                }
            case "btn-done":
                {
                    this.listOfItemObjects.get(key).setStatus(true);
                    this.renderList(this.listOfItemObjects);
                    break;
                }
            case "btn-x":
                {
                    this.listOfItemObjects.delete(key);
                    this.renderList(this.listOfItemObjects);
                    break;
                }
        }
        event.stopPropagation();
    });
    this.renderList(this.listOfItemObjects);
};

TodoManager.prototype.renderList = function (listOfItemObjects) {
    let newItem, newJSON = [];
    let templateItem = document.querySelector('.template-list-item');
    let listContainer = document.getElementById('list-container');
    listContainer.innerHTML = "";
    listOfItemObjects.forEach((value, key) => {
        newItem = templateItem.cloneNode(true);
        newItem.querySelector(`[todo-type="text-holder"]`).textContent = value.todoText;
        newItem.classList.remove("template-list-item");
        newItem.setAttribute("todo-id", `${key}`);
        if(value.todoStatus) {
            newItem.classList.add('done-class');
        }
        newItem.querySelector(`[todo-type="check"]`).checked = value.todoChecked;
        listContainer.appendChild(newItem);

        newJSON.push(value);
    });
    console.log(newJSON);
    localStorage.setItem("com.modular.todolist", JSON.stringify(newJSON));
};
/**------------------------------------------------------------------------------------------------------------------------- */
export {
    TodoManager
};