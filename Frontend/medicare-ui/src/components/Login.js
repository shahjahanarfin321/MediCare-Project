import React from "react";
import { useState } from "react";

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div class="container-fluid h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <form>
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
                        <h6 className="">Not a member? <a href="#!">Register</a></h6>
                    </div>
                    <div class="text-center">
                        <h6>Admin Login? <a href="#!">Click here</a></h6>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;