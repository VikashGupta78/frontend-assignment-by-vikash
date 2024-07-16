import React from 'react'
import './LoginSignupTemplate.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Statusbar from './Statusbar';
import Slider from './slider';


function LoginSignupTemplate({formType, text1, text2, text3, text4}) {
    const navigate = useNavigate();
    function clickHandler(){
        if(formType === "login"){
            navigate("/signup");
        }
        else navigate("/login")
    }
    return (
        <div className='login-template'>
            <Statusbar color='black'></Statusbar>
            <div className="title-description">
                <h2>{text1} </h2>
                <p>{text2} </p>
            </div>
            {formType === "login" ? (
                <LoginForm />
            ) : (
                <SignupForm />
            )}
            <div className="separator">
                <div className="line"></div>
                <div>Or sign in with</div>
                <div className="line"></div>
            </div>
            <button onClick={(e)=>{navigate("/postLogin")}} className="btn">
                <FcGoogle className="google-icon" />
            </button>
            <div onClick={clickHandler} className="register">
                <div>{text3} </div>
                <span>{text4}</span>
            </div>
            <Slider color='black' />
        </div>
    )
}

export default LoginSignupTemplate