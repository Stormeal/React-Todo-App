import React, { Component } from 'react';
import { Table, Checkbox, Button } from 'semantic-ui-react';

import './App.css';
import TodoApp from './components/TodoApp'



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
