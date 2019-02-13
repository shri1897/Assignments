import {View} from './View.js'
import {TodoListItems} from './TodoListItems.js';
import {TodoActionBar} from './TodoActionBar.js';

class TodoManager extends View {
    constructor() {
        super();
        this.listOfItemObjects = new Map();
    }

    init() {
        this.listOfItemObjects = reloadFromLocalStorage();
        this.todoListItems = new TodoListItems();
        this.todoActionBar = new TodoActionBar();
        this.todoActionBar.init(this.listOfItemObjects, this.render);
        this.todoListItems.init(this.listOfItemObjects, this.render);
        this.render(this.listOfItemObjects);
    }

    render(listOfItemObjects) {
        let newItem, newJSONFromMap = [];
        let templateListItem = document.querySelector('.template-list-item');
        let listContainer = document.getElementById('list-container');
        listContainer.innerHTML = "";

        listOfItemObjects.forEach((value, key) => {
            newItem = templateListItem.cloneNode(true);
            newItem.querySelector(`[todo-type="text-holder"]`).textContent = value.todoText;
            newItem.classList.remove("template-list-item");
            newItem.setAttribute("todo-id", `${key}`);
            if (value.todoStatus) {
                newItem.classList.add('done-class');
            }
            newItem.querySelector(`[todo-type="check"]`).checked = value.todoChecked;
            listContainer.appendChild(newItem);
            newJSONFromMap.push(value);
        });

        console.log(newJSONFromMap);
        localStorage.setItem("com.modular.todolist", JSON.stringify(newJSONFromMap));
    }
}

const reloadFromLocalStorage = () => {
    let retrivedList = JSON.parse(localStorage.getItem("com.modular.todolist"));
    console.log(retrivedList);
    if (retrivedList) {
        let listOfObjects = new Map();
        for (let i = 0; i < retrivedList.length; i += 1) {
            listOfObjects.set(retrivedList[i].todoID, new TodoListItems(retrivedList[i].todoID, retrivedList[i].todoText, retrivedList[i].todoStatus, retrivedList[i].todoChecked));
        }
        return listOfObjects;
    } else {
        return new Map();
    }
}
/**------------------------------------------------------------------------------------------------------------------------- */
export {
    TodoManager
};