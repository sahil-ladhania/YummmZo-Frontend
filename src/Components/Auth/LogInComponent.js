import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import OtpInput from 'react-otp-input';
import 'react-phone-input-2/lib/material.css';
import { CgSpinner } from "react-icons/cg";
// CSS Files
import '../../Styles/Buttons.css'
import '../../Styles/Input.css'
import '../../Styles/Links.css'
import loginUser from '../../Services/LoginService';
import GoogleOAuth from './GoogleOAuth';

const LogInComponent = () => {
    // Defining State Variables.
    const [formData , setFormData] = useState({
        email : '',
        password : ''
    });
    const [otp , setOtp] = useState('');
    const navigate = useNavigate();
    // Handler Functions.
    const handleChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(formData)
            .then(() => {
                toast.success("Successfully Logged In...");
                setTimeout(()=>navigate('/home'), 2000);
            })
            .catch((error) => {
                toast.error(`Invalid Credentials : ${error}`)
            })
        setFormData({
            email : '',
            password : ''
        });
    };
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-800'>
                    {/* Log In Form */}
                    <div className='flex fd-c jc-sa ai-c b-1-black-solid h-700 w-500' onSubmit={handleSubmit}>
                        {/* Form Haeding Section */}
                        <div className='flex fd-c ai-c'>
                            <h1 className='text-3xl mb-10 fs-r'>Login</h1>
                            <div className='text-xl mb-10 fs-r'>Dont have an account yet ? <Link className='fs-r td-n c-b' to="/signup">Sign up for free</Link></div>
                        </div>
                        {/* Login With Number */}
                        <div className='flex flex-col justify-center items-center'>
                            <PhoneInput
                                className="mb-10"
                                country={'in'}
                                preferredCountries={['in','us']}
                                onlyCountries={[ 'in','cu','cw','kz','fr','it','pt','id']}
                                placeholder='Phone'
                            />
                            <button className='h-40 w-300 b-1-t-s br-5 fs-r c-3d3d3d shadow-md bg-slate-300'>Send One Time Password</button>
                        </div>
                        {/* Enter Otp Section */}
                        <div className='flex flex-col justify-center items-center'>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                shouldAutoFocus='true'
                                disabled={false}
                                renderInput={(props) => <input {...props} />}
                                containerStyle="flex justify-between items-center mb-10"
                                inputStyle="w-80 h-40 p-5 text-center border border-slate-400 rounded-md text-black m-2"
                            />
                            <button className='h-40 w-300 b-1-t-s br-5 fs-r c-3d3d3d shadow-md bg-slate-300 flex items-center justify-center'>
                            <CgSpinner size={30} className='animate-spin mr-3'/>
                            <span>Verify OTP</span>
                            </button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p className='c-3d3d3d'>--------------------------Or--------------------------</p>
                        </div>
                        <form className='flex fd-c jc-sa ai-c h-auto w-500' onSubmit={handleSubmit}>
                            {/* Log In with Email & Password Section */}
                            <div className='flex fd-c'>
                                <input 
                                className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                                onChange={handleChange}
                                type="email" 
                                name="email" 
                                value={formData.email}
                                required
                                placeholder='name@gmail.com'/>
                                <input 
                                className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                                onChange={handleChange}
                                type="password" 
                                name="password" 
                                value={formData.password}
                                required
                                placeholder='Password'/>
                                <a className='ml-180 fs-r td-n c-b' href="#">Forgot Password ?</a>
                            </div>
                            {/* Log In */}
                            <div>
                                <button type='submit' className='h-40 w-300 b-1-t-s br-5 fs-r c-3d3d3d shadow-md bg-slate-300'>Login</button>
                                {/* <button className='h-40 w-300 b-1-t-s br-5 fs-r' type='submit'>Log in</button> */}
                            </div>
                        </form>
                        {/* ----- or ----- Section */}
                        <div>
                            <p className='c-3d3d3d'>--------------------------Or--------------------------</p>
                        </div>
                        {/* Sign Up With Google Section */}
                        <GoogleOAuth/>
                    </div>
                    {/* Image */}
                    <div className='h-300 w-400'>
                        <img src="" alt="Image" />
                    </div>
                </div>
            </>
        </div>
    )
}

export default LogInComponent
