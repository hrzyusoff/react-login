import axios from 'axios';
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Mainmenu from './components/mainmenu/Mainmenu';

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser( userObject ) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Getting user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: This user already saved in the server session')
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get User: This user not saved in the server session')
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    console.log()
    return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/login' render={() => <Login updateUser={this.updateUser}/>} />
      <Route path='/signup' render={() => <Signup/>} />
      <Route path='/main' render={() => <Mainmenu/>} />
    </div>
    );
  }
}

export default App;
