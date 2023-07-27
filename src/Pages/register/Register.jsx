import React, { useRef } from 'react';
import "./register.scss";
import { useState } from 'react';
const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const emailRef=useRef();

    const passwordRef=useRef();

    const handleStart=()=>{
        setEmail(emailRef.current.value);
    }

    const handleFinish=()=>{
         setPassword(passwordRef.current.value);
    }
    return (
       <div className="register">
        <div className="top">
           
           <div className="wrapper">
           <img className='logo' src="logo.png" alt="" />
            <button className="loginbutton">Sign In </button>
           </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, Tv shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart membership.
            </p>
          
          {!email ? (
            <div className="input">
                <input type="email" placeholder='enter your email' ref={emailRef} />
                <button className='registerButton' onClick={handleStart} >Get Started</button>
            </div>
          ):(
            <div className="input">
                <input type="password" placeholder='enter your password' ref={passwordRef} />
                <button className='registerButton' onClick={handleFinish} >Start</button>
            </div>
          )}
           
        </div>
       </div>
    );
}

export default Register;
