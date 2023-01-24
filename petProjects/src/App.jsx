import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './projects/todoList/Todo'
import TodoList from './projects/todoList/TodoList'
import TodoForm from './projects/todoList/TodoForm'
import BasicAPI from './projects/BasicAPI/BasicAPI'

function App() {
  

  return (
    <div className="App">
      {/* <TodoForm/>
      <TodoList /> */}
      <BasicAPI />
    </div>
  )
}

export default App
