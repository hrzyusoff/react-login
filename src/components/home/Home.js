import React, { Component } from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
// import '../login/Login.css';
// import '../allcomponents.css';
import './Home.css';

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="main-container">
                <div className="d-flex justify-content-center align-items-center custom-container">
                    <div className="">
                        <h3>Welcome to React Social Apps</h3>
                        <div className="d-flex flex-column bottom-container">
                            <div className="sign-up-btn-container text-center">
                                <button type="submit" className="btn btn-primary">
                                    <Link to="/login">
                                        LOGIN
                                    </Link>
                                </button>
                                <Link to="/signup" className="btn btn-link text-secondary">
                                    Not a member ? Sign up <span className="text-secondary">here</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )    
    }
}

export default Home;
