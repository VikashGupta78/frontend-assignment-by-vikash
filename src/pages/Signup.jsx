import React from 'react'
import LoginSignupTemplate from '../components/LoginSignupTemplate'

function Signup() {
  return (
    <LoginSignupTemplate
      formType="signup"
      text1="Create your new account"
      text2="Create an account to start looking for the food you like"
      text3="Have an account? "
      text4="Sign In"
    ></LoginSignupTemplate>
  )
}

export default Signup