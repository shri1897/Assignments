import React, { Component } from 'react';
import classes from './App.css';
import ListTemplate from './ListTemplate/ListTemplate.js';

class App extends Component {

  state = {
    listOfObjects: JSON.parse(localStorage.getItem('com.react.todolist'))
  }

  addItem = () => {
    let textBox = document.getElementById("text-box");
    if (textBox.value) {
      let newObject = this.state.listOfObjects.slice();
      let newElement = { id: newObject.length, text: textBox.value, status: false, checked: false };
      newObject.push(newElement);
      this.setState({ listOfObjects: newObject });
      textBox.value = "";
    }
  }

  addbuttonClickHandler = () => {
    this.addItem();
  }

  textBoxOnEnterKeyHandler = (event) => {
    if (event.which === 13) {
      this.addItem();
    }
  }

  deleteCompletedbuttonClickHandler = () => {
    let newObject = this.state.listOfObjects.filter((el) => {
      if (!el.status) {
        return true;
      }
    });
    this.setState({ listOfObjects: newObject });
  }

  deleteSelectedbuttonClickHandler = () => {
    let newObject = this.state.listOfObjects.filter((el) => {
      if (!el.checked) {
        return true;
      }
    });
    this.setState({ listOfObjects: newObject });
  }

  selectAllbuttonClickHandler = () => {
    let newCheckValue = true;
    if (this.state.listOfObjects[0] && this.state.listOfObjects[0].checked) {
      newCheckValue = false;
    }
    this.state.listOfObjects.map((el) => {
      el.checked = newCheckValue;
      return true;
    });
    this.setState(this.state);
  }

  buttonCloseClickHandler = (event) => {
    let id = event.target.parentElement.getAttribute('todo-id');
    this.state.listOfObjects.splice(id, 1);
    this.setState(this.state);
  }

  buttonDoneClickHandler = (event) => {
    let id = event.target.parentElement.getAttribute('todo-id');
    this.state.listOfObjects[id].status = true;
    this.setState(this.state);
  }

  checkBoxClickHandler = (event) => {
    let id = event.target.parentElement.getAttribute('todo-id');
    let newChecked = event.target.checked;
    this.state.listOfObjects[id].checked = newChecked;
    this.setState(this.state);
  }

  render() {
    localStorage.setItem('com.react.todolist', JSON.stringify(this.state.listOfObjects));
    let listOfItems = this.state.listOfObjects[0] ? this.state.listOfObjects.map(el => {
      return <ListTemplate
        key={this.state.listOfObjects.indexOf(el)}
        id={this.state.listOfObjects.indexOf(el)}
        text={el.text}
        status={el.status}
        isChecked={el.checked}
        checkBoxHandler={this.checkBoxClickHandler.bind(this)}
        buttonDoneHandler={this.buttonDoneClickHandler.bind(this)}
        buttonCloseHandler={this.buttonCloseClickHandler.bind(this)}></ListTemplate>
    }) : null;

    return (
      <div className={classes.App}>

        <div id="text-input" className={classes['text-input']}>
          <input type="text" id="text-box" className={classes['text-box']} placeholder="Write something to add" onKeyPress={this.textBoxOnEnterKeyHandler}></input>
          <button id="btn-add" className={classes['btn-add']} onClick={this.addbuttonClickHandler}>ADD</button>
          <button id="btn-select-all" className={classes['btn-select-all']} onClick={this.selectAllbuttonClickHandler}>SELECT/DESELECT ALL</button>
          <button id="btn-delete-selected" className={classes['btn-delete-selected']} onClick={this.deleteSelectedbuttonClickHandler}>DELETE SELECTED</button>
          <button id="btn-delete-completed" className={classes['btn-delete-completed']} onClick={this.deleteCompletedbuttonClickHandler}>DELETE COMPLETED</button>
        </div>
        
        <div id="list-container" className={classes['list-container']}>
          {listOfItems}
        </div>

      </div>
    );
  }
}

export default App;