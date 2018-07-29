import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../allcomponents.css';

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then( response => {
                console.log('Login response: ')
                console.log(response)
                if ( response.status === 200 ) {
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    this.setState({
                        redirectTo: '/main'
                    })
                }
            }).catch(error => {
                console.log('Login Error: ')
                console.log(error)
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="main-container">
                    <div className="d-flex justify-content-center align-items-center custom-container">
                        <div className="d-flex card card-custom">
                            <div className="card-body">
                                <h3 className="card-body-title text-center">LOGIN</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="input-label">Email</label>
                                    <input type="text" 
                                        className="form-control" 
                                        id="username" 
                                        name="username" 
                                        placeholder="Enter your email" 
                                        value={this.state.username} 
                                        onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userpassword" className="input-label">Password</label>
                                    <input type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={this.state.password}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="d-flex flex-column bottom-container">
                                    <div className="sign-up-btn-container text-center">
                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>LOGIN</button>
                                        <Link to="/signup" className="btn btn-link text-secondary">
                                            Still not a member ? Sign up <span className="text-secondary">here</span>
                                        </Link>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                 
            );
        }
    }
}

export default Login;
