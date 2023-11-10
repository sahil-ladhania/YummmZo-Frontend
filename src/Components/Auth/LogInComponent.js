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
        if(formData.email === '' || formData.password === ''){
            return toast.error("Please Fill All Fields !!!");
        }
        else{
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
                <div className='h-screen flex items-center justify-center'>
                    <div className='flex rounded-lg h-signup-form'>
                        {/* Image */}
                        <div className='w-6/12 overflow-hidden'>
                            <img className='w-full h-full object-cover object-center rounded-l-lg' src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
                        </div>
                        {/* Log In Form */}
                        <div className='w-6/12 flex flex-col justify-between bg-yummmzo-color items-start  p-5 rounded-r-lg py-10 px-20 backdrop-filter backdrop-blur-lg bg-opacity-80'>
                            {/* Form Haeding Section */}
                            <div className='flex flex-col items-start justify-between mb-5'>
                                <h1 className='text-5xl font-semibold font-roboto text-secondary tracking-wide mb-2'>Login</h1>
                                <div className='text-sm font-normal font-roboto text-secondary'>Dont have an account yet ? <Link className='font-roboto font-medium text-secondary underline hover:no-underline' to="/signup">Sign up for free</Link></div>
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
                                <button className='pr-5 pl-5 pt-3 pb-3 bg-banner-gradient rounded-sm w-96 mb-5 font-roboto text-xl hover:animate-glow-light text-white tracking-wide'>Send One Time Password</button>
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
                            <div className='mb-5 flex items-center'>
                                <div className='w-44 h-0.5 bg-secondary'></div>
                                <p className='mx-2 font-roboto text-secondary'>Or</p>
                                <div className='w-44 h-0.5 bg-secondary'></div>
                            </div>
                            <form className='flex items-start flex-col'>
                                {/* Log In with Email & Password Section */}
                                <div className='flex flex-col items-center justify-evenly'>
                                    <div className='my-2'>
                                        <label className='font-roboto font-medium text-secondary text-sm'>Email</label>
                                        <input 
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email : e.target.value})}
                                            className='h-12 outline-none rounded-sm p-2 w-96 font-roboto text-secondary border  focus:border-red-600' 
                                            type="email" 
                                            name="email" 
                                            required
                                        />
                                    </div>
                                    <div className='my-2'>
                                        <label className='font-roboto font-medium text-secondary text-sm'>Password</label>
                                        <input 
                                            value={formData.password}
                                            onChange={(e) => setFormData({...formData, password : e.target.value})}
                                            className='h-12 outline-none rounded-sm p-2 w-96 font-roboto text-secondary border  focus:border-red-600' 
                                            type="password" 
                                            name="password" 
                                            required
                                            />
                                    </div>
                                </div>
                                {/* Forgot Password */}
                                <div className='mb-3'>
                                    <a className='text-sm font-roboto font-semibold underline hover:no-underline text-secondary' href="#">Forgot Password ?</a>
                                </div>
                                {/* Log In */}
                                <div>
                                    <button onClick={handleLogin} className='pr-5 pl-5 pt-3 pb-3 bg-banner-gradient rounded-sm w-96 mb-5 font-roboto text-xl hover:animate-glow-light text-white tracking-wide'>Login</button>
                                </div>
                            </form>
                            {/* ----- or ----- Section */}
                            {/* <div className='mb-5 flex items-center'>
                                <div className='w-44 h-0.5 bg-secondary'></div>
                                <p className='mx-2 font-roboto text-secondary'>Or</p>
                                <div className='w-44 h-0.5 bg-secondary'></div>
                            </div> */}
                            {/* Sign Up With Google Section */}
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LogInComponent
