import React, { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { loginUser } from '../../Services/LoginService.js';
import { getLocation } from 'current-location-geo';
import LoaderComponent from '../../Utils/LoaderComponent.js';

const LogInComponent = ({formData , setFormData , currentLocation , setCurrentLocation , auth , setAuth , loading , setLoading}) => {
    const navigate = useNavigate();
    // Handler Functions.
    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(formData)
            .then((userData) => {
                if(userData){
                    const {user ,jwt_token} = userData;
                    console.log('Default auth State :- ' , auth);
                    setAuth({
                        ...auth,
                        user : user,
                        token : jwt_token
                    });
                    setTimeout(() => {
                        toast.success("Login Successfull ...");
                        getLocation((error , position) => {
                            if(error){
                                console.log(error);
                            }
                            else{
                                console.log(position.address);
                                setCurrentLocation(position.address);
                            }
                        })
                        navigate('/home');
                    },1000);
                    setFormData({
                        email: '',
                        password: ''
                    });
                }
                else{
                    toast.error("Invalid Credentials !!!");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const handleSignupLoader = () => {
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate("/signup");
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    }
    useEffect(() => {
        console.log('auth After State:', auth);
    }, [auth]);
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center justify-between'>
                    {/* Image */}
                    <div className='w-7/12'>
                        <img className='h-96' src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
                    </div>
                    {/* Log In Form */}
                    <div className='w-5/12 flex flex-col justify-between items-center bg-secondary p-5 rounded-sm mr-24'>
                        {/* Form Haeding Section */}
                        <div className='h-16 flex flex-col items-center justify-between mb-5'>
                            <h1 className='text-2xl font-semibold font-roboto text-yummmzo-color'>Login</h1>
                            {
                                loading ? 
                                    <LoaderComponent/>
                                    :
                                    <>
                                        <div className='text-sm font-medium font-roboto text-yummmzo-color'>Dont have an account yet ? <Link onClick={handleSignupLoader}className=''>Sign up for free</Link></div>
                                    </>
                            }
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
                            <button className='pr-5 pl-5 pt-3 pb-3 bg-button-color rounded-sm w-72 font-roboto hover:animate-glow-light'>Send One Time Password</button>
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
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email : e.target.value})}
                                className='h-10 outline-none rounded-sm p-2 w-72 font-roboto text-secondary' 
                                type="email" 
                                name="email" 
                                required
                                placeholder='Email'/>
                                <input 
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password : e.target.value})}
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
                                <button onClick={handleLogin} className='pr-5 pl-5 pt-3 pb-3 bg-button-color rounded-sm w-72 mb-5 font-roboto hover:animate-glow-light'>Login</button>
                            </div>
                        </form>
                        {/* ----- or ----- Section */}
                        <div>
                            <p className='mb-5 font-roboto text-yummmzo-color'>-------------------Or-------------------</p>
                        </div>
                        {/* Sign Up With Google Section */}
                    </div>
                </div>
            </>
        </div>
    )
}

export default LogInComponent
