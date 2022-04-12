import React from 'react'

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: ''
      
    }
  }
  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      todoText: e.target.value
    })
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todoText)
    this.setState({
      todoText: ''
    })
  }
  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
      {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
      <input 
        type="text" 
        name="todo"
        value={this.state.todoText}
        onChange={this.handleChanges}
         />
      <button>Add</button>
    </form>
    )
  }
}
