import React, { Component } from 'react';
import './App.css';

import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button primary>Olá </Button>
      </div>
    );
  }
}

export default App;
