import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="App">
            <header className="App-header">
                <div class="container-fluid h-100">
                    <div class="row h-100 justify-content-center align-items-center">
                        <form>
                            <h2 className='mb-4'>Register</h2>
                            {/* <!-- First name input --> */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example1">Fist Name</label>
                                <input type="email" id="form2Example1" class="form-control" onChange={e => setFirstName(e.target.value)} />
                            </div>

                            {/* <!-- Last name input --> */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example2">Last Name</label>
                                <input type="email" id="form2Example2" class="form-control" onChange={e => setLastName(e.target.value)} />
                            </div>

                            {/* <!-- Email input --> */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example3">Email</label>
                                <input type="email" id="form2Example3" class="form-control" onChange={e => setEmail(e.target.value)} />

                            </div>

                            {/* <!-- Password input --> */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example4">Password</label>
                                <input type="password" id="form2Example4" class="form-control" onChange={e => setPassword(e.target.value)} />

                            </div>

                            {/* <!-- Register button --> */}
                            <button type="submit" class="btn btn-primary btn-block mb-4" >Register</button>

                            {/* <!-- Register buttons --> */}
                            <div class="text-center">
                                <h6 className="">Alredy a member? <NavLink to='/login' className="ml-1">Login</NavLink></h6>
                            </div>
                            <div class="text-center">
                                <h6>Admin Login? <NavLink to='/admin-login' className="ml-1">click here</NavLink></h6>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Register;