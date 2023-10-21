import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import loginUser from '../../Services/LoginService.js';

const LogInComponent = ({email , setEmail , password , setPassword}) => {
    // Handler Functions.
    const handleLogin = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        };
        loginUser(userData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(email);
        console.log(password);
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center justify-between'>
                    {/* Log In Form */}
                    <div className='w-5/12 flex flex-col justify-between items-center bg-secondary p-5 rounded-sm mr-24'>
                        {/* Form Haeding Section */}
                        <div className='h-16 flex flex-col items-center justify-between mb-5'>
                            <h1 className='text-2xl font-semibold font-roboto text-yummmzo-color'>Login</h1>
                            <div className='text-sm font-medium font-roboto text-yummmzo-color'>Dont have an account yet ? <Link className='' to="/signup">Sign up for free</Link></div>
                        </div>
                        {/* Conditionally Rendering Phone Number Input and OTP Input */}
                        {/* Login With Number */}
                        <div className='flex flex-col items-center h-40 justify-evenly'>
                            <PhoneInput
                                className="mb-5"
                                country={'in'}
                                preferredCountries={['in','us']}
                                onlyCountries={[ 'in','cu','cw','kz','fr','it','pt','id']}
                                placeholder='Phone'
                            />
                            <button className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm w-72 font-roboto'>Send One Time Password</button>
                        </div>
                                {/* Enter Otp Section
                                <div className='flex flex-col items-center'>
                                    <OtpInput
                                        numInputs={6}
                                        shouldAutoFocus='true'
                                        disabled={false}
                                        renderInput={(props) => <input {...props} />}
                                        containerStyle="flex justify-between items-center mb-10"
                                        inputStyle="w-80 h-10 p-5 text-center border border-black rounded-md text-black m-2"
                                    />
                                    <button className='flex items-center justify-center pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm w-72 mb-5'>
                                        <CgSpinner size={30} className='mr-3'/>
                                        <span>Verify OTP</span>
                                    </button>
                                </div> */}
                        {/* ----- or ----- Section */}
                        <div>
                            <p className='font-roboto text-yummmzo-color'>-------------------Or-------------------</p>
                        </div>
                        <form className=''>
                            {/* Log In with Email & Password Section */}
                            <div className='flex flex-col items-center h-28 justify-evenly'>
                                <input 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='h-10 outline-none rounded-sm p-2 w-72 font-roboto text-secondary' 
                                type="email" 
                                name="email" 
                                required
                                placeholder='Email'/>
                                <input 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='h-10 outline-none rounded-sm p-2 w-72 font-roboto text-secondary' 
                                type="password" 
                                name="password" 
                                required
                                placeholder='Password'/>
                            </div>
                            {/* Forgot Password */}
                            <div className='mb-3'>
                                <a className='text-sm ml-44 font-roboto text-yummmzo-color' href="#">Forgot Password ?</a>
                            </div>
                            {/* Log In */}
                            <div>
                                <button onClick={handleLogin} className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm w-72 mb-5 font-roboto'>Login</button>
                                {/* <button className='h-40 w-300 b-1-t-s br-5 fs-r' type='submit'>Log in</button> */}
                            </div>
                        </form>
                        {/* ----- or ----- Section */}
                        <div>
                            <p className='mb-5 font-roboto text-yummmzo-color'>-------------------Or-------------------</p>
                        </div>
                        {/* Sign Up With Google Section */}
                    </div>
                    {/* Image */}
                    <div className='w-7/12'>
                        <img className='h-96' src="https://assets.materialup.com/uploads/7d01cb77-d023-499b-b583-e5c17b57ca00/preview.jpg" alt="Image" />
                    </div>
                </div>
            </>
        </div>
    )
}

export default LogInComponent
