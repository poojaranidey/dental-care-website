import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
const Register = () => {
    return (
        <div className="login-form py-5">
            <div className="login">
                <h2>Register: Create Account</h2>
                <form >
                    <input className="my-3" type="email" name="" placeholder="Your Email" />
                    <br />
                    <input className="my-3" type="password" name="" placeholder="Your Password" />
                    <br />
                    <input className="my-3" type="password" name="" placeholder="Re-enter Password" />
                    <br />
                    <input className="my-3 btn btn-warning" type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;