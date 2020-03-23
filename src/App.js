import React, { Component } from 'react';
import Header from './components/Header'
import Messages from './components/Messages'
import FormMessage from './components/FormMessage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
      return (
        <div id="app">
          <Header />
          <Messages />
          <FormMessage />
        </div>
      )
    }
}

export default App;
