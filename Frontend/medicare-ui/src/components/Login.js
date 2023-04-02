import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        axios.get('http://localhost:9090/users/login?email=' + email + '&password=' + password)
            .then(response => {
                // If the user is logged in, redirect to the dashboard page
                if (response.data) {
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('email', response.data.email);
                    navigate('/medicine');
                    // window.location.href="/medicine";
                }
            })
            .catch(error => {
                console.log(error);
            });
    }



    return (
        <div className="App">
            <div className="App-header">
                <div class="container-fluid h-100">
                    <div class="row h-100 justify-content-center align-items-center">
                        <form onSubmit={handleLoginSubmit}>
                            <h2 className='mb-4'>Login</h2>
                            {/* <!-- Email input --> */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example1">Email</label>
                                <input type="email" id="form2Example1" class="form-control" onChange={e => setEmail(e.target.value)} />

                            </div>

                            {/* <!-- Password input --> */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example2">Password</label>
                                <input type="password" id="form2Example2" class="form-control" onChange={e => setPassword(e.target.value)} />

                            </div>

                            {/* <!-- Submit button --> */}
                            <button type="submit" class="btn btn-primary btn-block mb-4" >Sign in</button>

                            {/* <!-- Register buttons --> */}
                            <div class="text-center">
                                <h6 className="">Not a member?
                                    <NavLink to='/register' className="ml-1">Register</NavLink>
                                </h6>
                            </div>
                            <div class="text-center">
                                <h6>Admin Login? <NavLink to='/admin-login' className="ml-1">click here</NavLink></h6>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;