import React from 'react'
import './LoginForm.css'
import { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(e) {
        e.preventDefault();
        // console.log(formData);
        navigate("/postLogin");
        toast.success("Successfully logged in");
    }
    return (
        <div>
            <form onSubmit={submitHandler} className="form-container">
                <label className="form-label">
                    <p className="form-text">Email Address <sup className="required">*</sup></p>
                    <input
                        required
                        type="email"
                        name='email'
                        placeholder='Enter Email'
                        onChange={changeHandler}
                        value={formData.email}
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    <p className="form-text">Password<sup className="required">*</sup></p>
                    <div className="input-container">
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder='Password'
                            onChange={changeHandler}
                            value={formData.password}
                            className="form-input"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="toggle-password"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                </label>
                <a href="/home" className="forgot-password">Forgot Password?</a>
                <button
                    type="submit"
                    className="submit-button"
                >
                    Sign in
                </button>
            </form>

        </div>
    )
}

export default LoginForm