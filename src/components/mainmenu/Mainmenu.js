import React, { Component } from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './Mainmenu.css';

class Home extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('Logging user out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status == 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error !')
        })
    }

    render() {

        const loggedIn = this.props.loggedIn
        // console.log(this.props)

        return (
            <div className="main-container">
                <div className="d-flex justify-content-center align-items-center custom-container">
                    <div className="main-title">
                        <h3>You are logged in React Social Apps</h3>
                        <div className="sign-up-btn-container text-center">
                            <button type="submit" className="btn btn-primary" onClick={this.logout}>
                                <Link to="#">
                                    LOGOUT
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
