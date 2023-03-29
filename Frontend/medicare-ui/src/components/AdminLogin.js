import React from "react";
import { useState } from "react";
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="App">
            <div className="App-header">
                <div class="container-fluid h-100">
                    <div class="row h-100 justify-content-center align-items-center">
                        <form>
                            <h2 className='mb-4'>Admin Login</h2>
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

                            <div class="text-center">
                                <h6>User Login? <NavLink to='/login' className="ml-1">click here</NavLink></h6>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminLogin;