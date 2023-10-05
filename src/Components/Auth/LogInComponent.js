import React, { useState , useEffect } from 'react';
import { auth } from '../../firebase.config';
import loginUser from '../../Services/LoginService';
import GoogleOAuth from './GoogleOAuth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import OtpInput from 'react-otp-input';
import 'react-phone-input-2/lib/material.css';
import { CgSpinner } from "react-icons/cg";

const LogInComponent = () => {
    // -----Defining State Variables.-----
    // Form State Variable
    const [formData , setFormData] = useState({
        email : '',
        password : ''
    });
    // Phone Number State Variable
    const [phoneNumber , setPhoneNumber] = useState('');
    // Phone Number Visiblity State Variable
    const [isPhoneNumberVisible , setIsPhoneNumberVisible] = useState(true);
    // OTP State Variable
    const [otp , setOtp] = useState('');
    // OTP Visiblity State Variable
    const [isOtpVisible , setIsOtpVisible] = useState(false);
    // Verification State Variable
    const [isVerifying , setIsVerifying] = useState(false);
    const navigate = useNavigate();
    // -----Handler Functions.-----
    // HandleChange Function For Form
    const handleChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value});
    }
    // HandleSubmit Function For Form
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
    // Handler Function For Sending OTP
    const handleSendOTP = () => {
        setIsPhoneNumberVisible(false);
    }
    // // Handler Function For Verifying OTP
    const handleVerifyOTP = () => {
        if(otp === ''){
            toast.error("Enter OTP To Verify !!!");
        }
        else{
            setTimeout(() => {
            navigate('/home')
        }, 1000);
        }
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center justify-between'>
                    {/* Log In Form */}
                    <div className='w-5/12 flex flex-col justify-between items-center border-2 border-black p-5 rounded-sm mr-24' onSubmit={handleSubmit}>
                        {/* Form Haeding Section */}
                        <div className='h-16 flex flex-col items-center justify-between mb-5'>
                            <h1 className='text-2xl font-semibold'>Login</h1>
                            <div className='text-sm font-medium'>Dont have an account yet ? <Link className='' to="/signup">Sign up for free</Link></div>
                        </div>
                        {/* Conditionally Rendering Phone Number Input and OTP Input */}
                        {
                            isPhoneNumberVisible ?
                            <>
                                {/* Login With Number */}
                                <div className='flex flex-col items-center h-40 justify-evenly'>
                                    <PhoneInput
                                        value={phoneNumber}
                                        className="mb-5"
                                        country={'in'}
                                        preferredCountries={['in','us']}
                                        onlyCountries={[ 'in','cu','cw','kz','fr','it','pt','id']}
                                        placeholder='Phone'
                                    />
                                    <button onClick={handleSendOTP} className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm w-72'>Send One Time Password</button>
                                </div>
                            </>
                            :
                            <>
                                {/* Enter Otp Section */}
                                <div className='flex flex-col items-center'>
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        shouldAutoFocus='true'
                                        disabled={false}
                                        renderInput={(props) => <input {...props} />}
                                        containerStyle="flex justify-between items-center mb-10"
                                        inputStyle="w-80 h-10 p-5 text-center border border-black rounded-md text-black m-2"
                                    />
                                    <button onClick={handleVerifyOTP} className='flex items-center justify-center pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm w-72 mb-5'>
                                        <CgSpinner size={30} className='mr-3'/>
                                        <span>Verify OTP</span>
                                    </button>
                                </div>
                            </>
                        }
                        {/* ----- or ----- Section */}
                        <div>
                            <p className=''>-------------------Or-------------------</p>
                        </div>
                        <form className='' onSubmit={handleSubmit}>
                            {/* Log In with Email & Password Section */}
                            <div className='flex flex-col items-center h-28 justify-evenly'>
                                <input 
                                className='border-2 h-10 outline-none rounded-sm p-2 w-72 ' 
                                onChange={handleChange}
                                type="email" 
                                name="email" 
                                value={formData.email}
                                required
                                placeholder='Email'/>
                                <input 
                                className='border-2 h-10 outline-none rounded-sm p-2 w-72 ' 
                                onChange={handleChange}
                                type="password" 
                                name="password" 
                                value={formData.password}
                                required
                                placeholder='Password'/>
                            </div>
                            {/* Forgot Password */}
                            <div className='mb-3'>
                                <a className='text-sm ml-44' href="#">Forgot Password ?</a>
                            </div>
                            {/* Log In */}
                            <div>
                                <button type='submit' className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm w-72 mb-5'>Login</button>
                                {/* <button className='h-40 w-300 b-1-t-s br-5 fs-r' type='submit'>Log in</button> */}
                            </div>
                        </form>
                        {/* ----- or ----- Section */}
                        <div>
                            <p className='mb-5'>-------------------Or-------------------</p>
                        </div>
                        {/* Sign Up With Google Section */}
                        <div className=''>
                            <GoogleOAuth/>
                        </div>
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
