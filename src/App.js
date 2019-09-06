import React, { Component } from 'react'
import './App.css';
import uuid from 'uuid';
 import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       items:[],
      id:uuid(),
      item:'',
      editItem:false,
    }
  }
  handleChange=(e)=>{
   // console.log("handle change");
   this.setState({
     item:e.target.value
   })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title:this.state.item
    }
    const updateItem = [...this.state.item,newItem]
    this.setState({
      items:updateItem,
      item:"",
      id:uuid(),
      editItem:false
    },()=>console.log(this.state))
  } 
  clearList=(e)=>{
    console.log("handle clear list");
  }
  handleDelete=(id)=>{
    console.log(`handle id ${id}`);
  }
  handleEdit=(id)=>{
    console.log(`handle delete ${id}`);
  }
  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 max-auto col-md-8 mt-5">
            <h3 className="text-uppercase text-center font-weight-bold">todo Input</h3>
            <TodoInput item={this.state.item}  
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}/>

            <TodoList items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
  
