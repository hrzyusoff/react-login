import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Route path='/login' render={() => <Login/>}/>
      <Route exact path='/' component={Home}/>
      <Route path='/signup' render={() => <Signup/>} />      
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
