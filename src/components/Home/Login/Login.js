import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import "./Login.css";
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form py-5">
            <div className="login">
                <h2>Login</h2>
                <form>
                    <input className="my-3" type="email" name="" placeholder="Your Email" />
                    <br />
                    <input className="mb-3" type="password" placeholder="enter password" />
                    <br />
                    <input className="btn btn-warning" type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn btn-warning"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;