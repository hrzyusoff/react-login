import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Route path='/login' render={() => <Login/>}/>
      <Route path='/home' component={Home}/>
    </div>
      // <Router>
      //   <Route path={'login'} component={Login}/>
      //   <Route path={'home'} component={Home}/>
      // </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
