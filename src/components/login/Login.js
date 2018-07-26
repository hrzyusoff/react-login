import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="d-flex justify-content-center align-items-center custom-container">
                    <div className="d-flex card card-custom">
                        <div className="card-body">
                            <h3 className="card-body-title text-center">LOGIN</h3>
                            <div className="form-group">
                                <label for="usermail" className="input-label">Email</label>
                                <input type="email" className="form-control" id="usermail"/>
                            </div>
                            <div class="form-group">
                                <label for="userpassword" className="input-label">Password</label>
                                <input type="password" className="form-control" id="userpassword"/>
                            </div>
                            <div className="d-flex flex-column bottom-container">
                                <div className="sign-up-btn-container text-center">
                                    <button type="submit" className="btn btn-primary">LOGIN</button>
                                    <Link to="/signup" className="btn btn-link text-secondary">
                                        Not a member ? Sign up <span className="text-secondary">here</span>
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

export default Login;
