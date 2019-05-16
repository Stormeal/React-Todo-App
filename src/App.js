import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
    <div class="app">
      <div class="todo-container">
        <div class="todo-item-row">Learn React </div>
        <div class="todo-item-row">Learn Redux </div>
        <div class="todo-item-row">Learn React Native </div>


      </div>
    </div>
*/

const todos = [
  'Learn React',
  'Learn Redux',
  'Learn React Native',
  'Create a brand new Web App!'
]


const renderTodos = todos => {
  return todos.map((todo, i) => (
    <TodoItem key={i}>
      {todo}
    </TodoItem>

  ))
}

/*
  display: flex;
  justify-content: space-between;
  align-items: center;
*/

const TodoItem = ({ children }) => <div style=
  {{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
    
  {children}
</div>

function App() {
  return (
    <div className="app">
      <div className="todo-container">
        <input id="new-todo" />
        <label htmlFor="new-todo">New Todo</label>
        {renderTodos(todos)}
      </div>
    </div>

  )
}

export default App;
