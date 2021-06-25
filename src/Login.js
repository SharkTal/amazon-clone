import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        // firebase login !!!
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();
        // firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/" >
                <img
                    className="login__logo"
                    src="https://th.bing.com/th/id/R2aee22cba25fc9939900ac4e91fa747b?rik=DmyVu7KMukcfAQ&pid=ImgRaw"
                    alt="Amazon Logo" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By sign-in you agree to the AMAZON FAKE CLONE Conditions of USE at your risk.
                </p>

                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
