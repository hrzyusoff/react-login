import React, { Component } from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import '../login/Login.css';

class Home extends Component {

    render() {
        return (
            <div className="main-container">
                <div className="d-flex justify-content-center align-items-center custom-container">
                    <div className="d-flex flex-column bottom-container">
                        <div className="sign-up-btn-container text-center">
                            <button type="submit" className="btn btn-primary">
                                <Link to="/signup" className="btn btn-link text-secondary">
                                </Link>   
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
