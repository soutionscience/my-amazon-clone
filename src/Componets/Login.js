import React, { useState } from 'react'
import { Link, useHistory} from "react-router-dom";
import './Login.css'
import { auth } from '../firebase';

function Login() {
    const history = useHistory()
     const [email, setEmail] = useState('')
     const [password, setpassword] = useState('')
    const login = (event)=>{
        // console.log('email', email )
        event.preventDefault() // stop page reload
        // do logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log('singed in successfuly');
            history.push("/")

        }).catch((e)=>{
            alert(e.message)
        })
    }
    const register = event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log('singed in successfuly');
            history.push("/")

        }).catch((e)=>{
            alert(e.message)
        })

    }
    return (
        <div className="login">
               <Link to ="/">
            <img alt="logo" className ="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"></img>
            </Link>

            <div className ="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email}   onChange ={event => setEmail(event.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange = {event => setpassword(event.target.value)} type="password"></input>
                    <button onClick={login} type="submit" className="login_singIn_button">Sing In</button>
                </form>
                
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className="login_create_account">Create your amazon account</button>

            </div>
        </div>
    )
}

export default Login
