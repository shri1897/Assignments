var TODOLIST = (function toDoListInit() {

    var listOfItemObjects = [],
        listContainer = document.getElementById("list-container"), //Most reused element.
        templateItem = document.querySelector(".template-list-item"), //Used for creating new List element.
        textBox = document.getElementById("text-box"); //Used for creating new list element.

    function ListItemConstructor(todoID, todoText) {
        this.todoID = todoID;
        this.todoText = todoText;
        this.todoStatus = false;
        this.todoChecked = false;
    };

    ListItemConstructor.prototype.setStatus = function (status) {
        var listItemReference;
        listItemReference = listContainer.querySelector(`[todo-id="${this.todoID}"]`);
        this.todoStatus = false;
        if (status || status === "true") {
            listItemReference.classList.add("done-class");
            this.todoStatus = true;
        }
    };

    ListItemConstructor.prototype.setText = function (text) {
        var listItemReference;
        listItemReference = listContainer.querySelector(`[todo-id="${this.todoID}"]`);
        listItemReference.querySelector(`[todo-type="text-holder"]`).textContent = text;
        this.todoText = text;
    };

    ListItemConstructor.prototype.changeID = function (newID) {
        var listItemReference;
        listItemReference = listContainer.querySelector(`[todo-id="${this.todoID}"]`);
        listItemReference.setAttribute("todo-id", `${newID}`);
        this.todoID = newID;
    };

    ListItemConstructor.prototype.setChecked = function (value) {
        var listItemReference;
        listItemReference = listContainer.querySelector(`[todo-id="${this.todoID}"]`);
        if(!value){
            value = false;
        }
        listItemReference.querySelector(`[todo-type="check"]`).checked = value;
        this.todoChecked = value;
    };

    ListItemConstructor.prototype.removeObject = function () {
        var listItemReference;
        listItemReference = listContainer.querySelector(`[todo-id="${this.todoID}"]`);
        listItemReference.remove();
        listOfItemObjects.splice(this.todoID, 1);
        for (i = 0; i < listOfItemObjects.length; i += 1) {
            listItemReference = listContainer.querySelector(`[todo-id="${listOfItemObjects[i].todoID}"]`);
            listItemReference.setAttribute("todo-id", `${i}`);
            listOfItemObjects[i].todoID = i;
        }
    };

    textBox.addEventListener("keypress", function textBoxOnEnterKeyPressed(event) {
        if (event.keyCode === 13) { //Add item If enter key pressed
            addItem();
        }
    });

    document.getElementById('btn-add').addEventListener('click', function buttonAddOnClickListener() {
        addItem();
    });

    document.getElementById('btn-delete-selected').addEventListener('click', function deleteSelectedOnClick(event) { //delete all selected elements
        var i;
        for (i = listOfItemObjects.length - 1; i >= 0; i -= 1) {
            if (listOfItemObjects[i].todoChecked) {
                listOfItemObjects[i].removeObject();
            }
        }
        saveToLocalStorage();
    });

    document.getElementById('btn-delete-completed').addEventListener('click', function deleteCompletedOnClick(event) { // Delete all completed elements
        var i;
        for (i = listOfItemObjects.length - 1; i >= 0; i -= 1) {
            if (listOfItemObjects[i].todoStatus) {
                listOfItemObjects[i].removeObject();
            }
        }
        saveToLocalStorage();
    });

    document.getElementById('btn-select-all').addEventListener('click', function selectAllOnClick(event) { //Select-Deselect All
        var i, check_uncheck = true;
        if (listOfItemObjects.length > 0 && listOfItemObjects[0].todoChecked) {
            check_uncheck = false;
        }
        for (i = 0; i < listOfItemObjects.length; i += 1) {
            listOfItemObjects[i].setChecked(check_uncheck);
        }
        saveToLocalStorage();
    });

    listContainer.addEventListener("click", function listContainerOnClickListener(event) { //Using Event-bubbling to find the target.
        var index, clickedListItem;
        clickedListItem = event.target.parentElement;
        index = clickedListItem.getAttribute("todo-id");
        switch (event.target.getAttribute("todo-type")) {
            case "check":
                {
                    listOfItemObjects[index].setChecked(event.target.checked);
                    break;
                }
            case "btn-done":
                {
                    listOfItemObjects[index].setStatus(true);
                    break;
                }
            case "btn-x":
                {
                    listOfItemObjects[index].removeObject();
                    break;
                }
        }
        saveToLocalStorage();
        event.stopPropagation();
    });

    function addItem(text, status, checked) { //Adding List Item using cloning and pushing Item to allElementsArray Array.
        var newItem, textvalue, latestIndex;
        textvalue = text || textBox.value;
        textBox.value = "";
        if (textvalue) {
            newItem = templateItem.cloneNode(true);
            newItem.querySelector(`[todo-type="text-holder"]`).textContent = textvalue;
            newItem.classList.remove("template-list-item");
            listContainer.appendChild(newItem);

            latestIndex = listOfItemObjects.length;
            newItem.setAttribute("todo-id", `${latestIndex}`);
            listOfItemObjects[latestIndex] = new ListItemConstructor(latestIndex, textvalue);
            listOfItemObjects[latestIndex].setStatus(status);
            listOfItemObjects[latestIndex].setChecked(checked);
        }
        saveToLocalStorage();
    };

    function saveToLocalStorage() {
        localStorage.setItem("com.todo-list-Domain/listOfItemObjects", JSON.stringify(listOfItemObjects));
    };

    function reloadFromLocalStorage() {
        var i, retrievedObject, temp;
        retrievedObject = JSON.parse(localStorage.getItem("com.todo-list-Domain/listOfItemObjects"));
        for (i = 0; i < retrievedObject.length; i += 1) {
            temp = retrievedObject[i];
            addItem(temp.todoText, temp.todoStatus, temp.todoChecked);
        }
    };

    reloadFromLocalStorage();
})();