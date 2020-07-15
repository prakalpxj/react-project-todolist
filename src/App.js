import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

export default class App extends Component {
  state = {
    items: [{ id: 1, title: "Make Breakfast" },
    { id: 2, title: "Make Coffee" }],
    id: uuidv4(),
    item: " ",
    editItem: false
  };

  handleChange = (e) => { console.log('handle change') }
  handleSubmit = (e) => { console.log('handle submit') }
  clearList = () => { console.log('clearList') }
  handleDelete = (id) => { console.log(`handle delete $(id)`) }
  handleEdit = (id) => { console.log(`handle Edit $(id)`) }


  render() {
    return (
      <div>
        <div className="container" >
          <div className="row" >
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
              <TodoList items={this.state.items} clearList={this.clearList} handleChange={this.handleDelete} handleEdit={this.handleEdit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

