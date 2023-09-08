import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';
import 'react-phone-input-2/lib/material.css'
// CSS Files
import '../../Styles/Buttons.css'
import '../../Styles/Input.css'
import '../../Styles/Links.css'
import registerUser from '../../Services/RegistrationService';
import { GoogleLogin } from '@react-oauth/google';
import GoogleOAuth from './GoogleOAuth';


const SignUpComponent = () => {
    // Defining State Variables.
    const [formData , setFormData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    });
    const navigate = useNavigate();
    // Handler Functions.
    const handleChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Connecting Frontend With Backend.
        registerUser(formData);
        setFormData({
            firstName : '',
            lastName : '',
            email : '',
            password : ''
        });
        toast.success("Successfully Registered...");
        setTimeout(()=>navigate('/login'), 2000);
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-800'>
                    {/* Sign up Form */}
                    <form className='flex fd-c jc-sa ai-c b-1-black-solid h-700 w-500 br-5' onSubmit={handleSubmit}>
                        {/* Form Heading Section */}
                        <div className='flex fd-c ai-c'>
                            <h1 className='text-3xl mb-10 fs-r c-3d3d3d'>Sign Up</h1>
                            <div className='text-xl mb-10 fs-r c-3d3d3d'>Already have an account ? <Link className='fs-r td-n c-3d3d3d' to="/login">Log in</Link></div>
                        </div>
                        {/* Sign up with Number / Email Section */}
                        <div className='flex fd-c'>
                            <input 
                            value={formData.firstName}
                            onChange={handleChange}
                            className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                            type="text" 
                            name="firstName" 
                            required
                            placeholder='First Name'/>
                            <input 
                            value={formData.lastName}
                            onChange={handleChange}
                            className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                            type="text" 
                            name="lastName" 
                            required
                            placeholder='Last Name'/>
                            <input 
                            value={formData.email}
                            onChange={handleChange}
                            className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                            type="email" 
                            name="email" 
                            required
                            placeholder='Email Address'/>
                            <input 
                            value={formData.password}
                            onChange={handleChange}
                            className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                            type="password" 
                            name="password" 
                            required
                            placeholder='Password'/>
                        </div>
                        {/* Create Account */}
                        <div>
                            <button type='submit' className='h-40 w-300 b-1-t-s br-5 fs-r c-3d3d3d shadow-md bg-slate-300'>Register</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p className='c-3d3d3d'>--------------------------Or--------------------------</p>
                        </div>
                        {/* Sign Up With Google Section */}
                        <GoogleOAuth/>
                        {/* Privacy Policy | Terms & Condition Section */}
                        <div>
                            <p className='fs-r c-3d3d3d'>
                                By creating an account, I agree with YummmZo's <br /> 
                                <a className='ml-30 fs-r td-n c-b c-3d3d3d' href="#">Privacy Policy</a> and <a className='fs-r td-n c-b' href="#">Terms and Condition</a>
                            </p>
                        </div>
                    </form>
                    {/* Image */}
                    <div className='h-300 w-400'>
                            <img src="" alt="Image" />
                    </div>
                </div>
            </>
        </div>
    )
}

export default SignUpComponent
