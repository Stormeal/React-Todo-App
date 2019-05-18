import React, { Component } from 'react';
import { Table, Checkbox, Button } from 'semantic-ui-react';

import './App.css';
import TodoApp from './components/TodoApp'




class Counter extends Component {
  state = {
    counter: 0
  }

  render() {
    const { counter } = this.state
    return (
      <Button onClick={() => {
        this.setState({ counter: counter + 1 })
      }}>You have clicked {counter} times!</Button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoApp />
      </div>

    )
  }

}

export default App;
