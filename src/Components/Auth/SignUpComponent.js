import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';
import 'react-phone-input-2/lib/material.css'
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
                <div className='flex items-center justify-between'>
                    {/* Sign up Form */}
                    <form className='w-5/12 flex flex-col justify-between items-center border-2 border-black p-5 rounded-sm mr-24' onSubmit={handleSubmit}>
                        {/* Form Heading Section */}
                        <div className='h-16 flex flex-col items-center justify-between'>
                            <h1 className='text-2xl font-semibold'>Sign Up</h1>
                            <div className='text-sm font-medium'>Already have an account ? <Link className='' to="/login">Log in</Link></div>
                        </div>
                        {/* Sign up with Number / Email Section */}
                        <div className='flex flex-col h-52 justify-evenly'>
                            {/* First name and Last name */}
                            <input 
                                value={formData.firstName}
                                onChange={handleChange}
                                className='border-2 h-10 outline-none rounded-sm p-2 w-72 ' 
                                type="text" 
                                name="firstName" 
                                required
                                placeholder='First Name'/>
                            <input 
                                value={formData.lastName}
                                onChange={handleChange}
                                className='border-2 h-10 outline-none rounded-sm p-2 w-72 ' 
                                type="text" 
                                name="lastName" 
                                required
                                placeholder='Last Name'/>
                            {/* Email and Password */}
                            <input 
                                value={formData.email}
                                onChange={handleChange}
                                className='border-2 h-10 outline-none rounded-sm p-2 w-72 ' 
                                type="email" 
                                name="email" 
                                required
                                placeholder='Email Address'/>
                            <input 
                                value={formData.password}
                                onChange={handleChange}
                                className='border-2 h-10 outline-none rounded-sm p-2 w-72 ' 
                                type="password" 
                                name="password" 
                                required
                                placeholder='Password'/>
                        </div>
                        {/* Create Account */}
                        <div>
                            <button type='submit' className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm w-72 mb-5'>Register</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div className='mb-5'>
                            <p className=''>-------------------Or-------------------</p>
                        </div>
                        {/* Sign Up With Google Section */}
                        <div className='mb-5'>
                            <GoogleOAuth/>
                        </div>
                        {/* Privacy Policy | Terms & Condition Section */}
                        <div>
                            <p className='text-sm text-center'>
                                By creating an account, I agree with YummmZo's <br /> 
                                <a className='font-semibold' href="#">Privacy Policy</a> and <a className='font-semibold' href="#">Terms and Condition</a>
                            </p>
                        </div>
                    </form>
                    {/* Image */}
                    <div className='w-7/12'>
                            <img className='h-96' src="https://assets.materialup.com/uploads/7d01cb77-d023-499b-b583-e5c17b57ca00/preview.jpg" alt="Image" />
                    </div>
                </div>
            </>
        </div>
    )
}

export default SignUpComponent
