import React, { Component } from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
// import '../login/Login.css';
// import '../allcomponents.css';
import './Mainmenu.css';

class Home extends Component {
    constructor() {
        super()
    }

    render(username) {
        return (
            <div className="main-container">
                <div className="d-flex justify-content-center align-items-center custom-container">
                    <div className="">
                        <h3>`Welcome $username to React Social Apps`</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
