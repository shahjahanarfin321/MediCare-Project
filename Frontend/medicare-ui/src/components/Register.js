import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:9090/users/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
            .then(response => {
                // If the user is registered successfully, show an alert and redirect to the dashboard page
                if (response.status === 200) {
                    alert('User registered successfully!');
                    navigate('/login');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className="App">
            <header className="App-header">
                <div class="container-fluid h-100">
                    <div class="row h-100 justify-content-center align-items-center">
                        <form onSubmit={handleRegisterSubmit}>
                            <h2 className='mb-4'>Register</h2>
                            {/* <!-- First name input --> */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example1">Fist Name</label>
                                <input type="text" id="form2Example1" class="form-control" onChange={e => setFirstName(e.target.value)} />
                            </div>

                            {/* <!-- Last name input --> */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example2">Last Name</label>
                                <input type="text" id="form2Example2" class="form-control" onChange={e => setLastName(e.target.value)} />
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