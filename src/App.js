import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Checkbox, Button } from 'semantic-ui-react';


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


const TodoItem = ({ children }) => (
  <Table.Row>
    <Table.Cell>
      <Checkbox />
    </Table.Cell>

    <Table.Cell>
      {children}
      <Button color="red" icon="trash" floated="right" compact size="small" />
    </Table.Cell>
  </Table.Row>
)


function App() {
  return (
    <div className="app">
      <div className="todo-container">
        <input id="new-todo" className="new-todo" placeholder="What needs to be done?" autoFocus />
        <label htmlFor="new-todo" style={{ display: 'none' }}>New Todo</label>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <Checkbox />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {renderTodos(todos)}
          </Table.Body>
        </Table>
      </div>
    </div>

  )
}

export default App;
