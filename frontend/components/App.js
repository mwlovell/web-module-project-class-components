import React from 'react'
// import ReactDOM  from 'react-dom'
import TodoList from './TodoList'
import Todo from './Todo'

const Todos = [
  {
    name: 'walk dog',
    id: 123,
    completed: false
  },
  {
    name: 'laundry',
    id: 764,
    completed: false
  },
  {
    name: 'take out trash',
    id: 901,
    completed: false
  },
]

export default class App extends React.Component {


  constructor() {
  super()

  this.state = {
    Todos: Todos
  }

  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          {/* <h1>Todo App</h1> */}
        </div>
        <TodoList
        todo={this.state.todo}/>
        
        <button>Hide Completed</button>
      </div>
    )
  }
}
