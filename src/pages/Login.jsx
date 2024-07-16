import React from 'react'
import LoginSignupTemplate from '../components/LoginSignupTemplate'

function Login() {
  return (
    <LoginSignupTemplate
      formType="login"
      text1="Login to your account"
      text2="Please sign in to your account"
      text3="Don't have an account? "
      text4="Register"
    ></LoginSignupTemplate>
  )
}

export default Login