import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div class="main-container">
                <div class="container-fluid d-flex justify-content-center align-items-center custom-container">
                    <div class="d-flex card card-custom">
                        <div class="card-body">
                            <h3 class="card-body-title text-center">Sign Up</h3>
                            <div class="form-group">
                                <label for="username" class="input-label">USERNAME</label>
                                <input type="text" class="form-control" id="username"/>
                            </div>
                            <div class="form-group">
                                <label for="usermail" class="input-label">EMAIL</label>
                                <input type="email" class="form-control" id="usermail"/>
                            </div>
                            <div class="form-group">
                                <label for="userpassword" class="input-label">PASSWORD</label>
                                <input type="password" class="form-control" id="userpassword"/>
                            </div>
                            <div class="d-flex flex-column bottom-container">
                                <div class="sign-up-btn-container text-center">
                                    <button type="submit" class="btn btn-primary">SIGN UP</button>
                                </div>
                                {/* <div class="social-media-desc text-center">
                                    <label for="social-media-items"> or try with </label>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <div class="d-flex flex-row social-media-items">
                                        <div class="p-2"><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></div>
                                        <div class="p-2"><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></div>
                                        <div class="p-2"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>                 
        );
    }
}

export default Login;
