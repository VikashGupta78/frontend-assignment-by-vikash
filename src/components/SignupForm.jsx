import React from 'react';
import './LoginForm.css';
import { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function SignupForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        userName: "",
        password: "",
        agreeToTerms: false
    });
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        if (formData.agreeToTerms) {
            // console.log(formData);
            navigate("/postLogin");
            toast.success("Account created");
        } else {
            toast.warning("You must agree to the Terms of Service and Privacy Policy");
        }
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
                    <p className="form-text">User Name<sup className="required">*</sup></p>
                    <input
                        required
                        type="text"
                        name='userName'
                        placeholder='Username'
                        onChange={changeHandler}
                        value={formData.userName}
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
                <label className="checkbox-label">
                    <input
                        required
                        type="checkbox"
                        name="agreeToTerms"
                        onChange={changeHandler}
                        checked={formData.agreeToTerms}
                        className="checkbox-input"
                    />
                    <span>I Agree with <span className='terms'>Terms of Service</span> and <span className='terms'>Privacy Policy</span></span>
                </label>
                <button
                    type="submit"
                    className="submit-button"
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default SignupForm;
