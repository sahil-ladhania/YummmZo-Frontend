import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-phone-input-2/lib/material.css'
import registerUser from '../../Services/RegistrationService.js';
import LoaderComponent from '../../Utils/LoaderComponent';
import DeliveryAddressComponent from '../Checkout/DeliveryAddressComponent';


const SignUpComponent = ({formData , setFormData , loading , setLoading}) => {
    const navigate = useNavigate();
    // Handler Functions.
    const handleRegister = (e) => {
        e.preventDefault();
        registerUser(formData)
            .then((userData) => {
                if(userData){
                    console.log(userData);
                    setTimeout(() => {
                        toast.success("Registration Successfull ...");
                        navigate('/login');
                    },1000);
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
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
    const handleLoginLoader = () => {
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate("/login");
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    }
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='h-screen flex items-center justify-center'>
                    <div className='flex rounded-lg h-signup-form'>
                        {/* Image */}
                        <div className='w-6/12 overflow-hidden'>
                                <img className='w-full h-full object-cover object-center rounded-l-lg' src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
                        </div>
                        {/* Sign up Form */}
                        <form className='w-6/12 flex flex-col justify-between bg-yummmzo-color items-start  p-5 rounded-r-lg py-10 px-20 backdrop-filter backdrop-blur-lg bg-opacity-80'>
                            {/* Form Heading Section */}
                            <div className='flex flex-col items-start justify-between mb-5'>
                                <h1 className='text-5xl font-semibold font-roboto text-secondary tracking-wide mb-2'>Sign Up</h1>
                                <div className='text-sm font-normal font-roboto text-secondary'>Already have an account ? <Link className='font-roboto font-medium text-secondary' to="/login">Log in</Link></div>
                            </div>
                            {/* Sign up with Number / Email Section */}
                            <div className='flex flex-col justify-evenly'>
                                {/* First name and Last name */}
                                <div className='my-2'>
                                    <label className='font-roboto font-medium text-secondary text-sm'>First Name</label>
                                    <input 
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({...formData , firstName : e.target.value})}
                                        className='h-12 outline-none rounded-sm p-2 w-96 font-roboto text-secondary border  focus:border-red-600' 
                                        type="text" 
                                        name="firstName" 
                                        required
                                        />
                                </div>
                                <div className='my-2'>
                                    <label className='font-roboto font-medium text-secondary text-sm'>Last Name</label>
                                    <input 
                                        value={formData.lastName}  
                                        onChange={(e) => setFormData({...formData , lastName : e.target.value})}
                                        className='h-12 outline-none rounded-sm p-2 w-96 font-roboto text-secondary border  focus:border-red-600' 
                                        type="text" 
                                        name="lastName" 
                                        required
                                        />
                                </div>
                                {/* Email and Password */}
                                <div className='my-2'>
                                    <label className='font-roboto font-medium text-secondary text-sm'>Email</label>
                                    <input 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData , email : e.target.value})}
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
                                        onChange={(e) => setFormData({...formData , password : e.target.value})}
                                        className='h-12 outline-none rounded-sm p-2 w-96 font-roboto text-secondary border  focus:border-red-600' 
                                        type="password" 
                                        name="password" 
                                        required
                                        />
                                </div>
                            </div>
                            {/* Create Account */}
                            <div className='my-2'>
                                <button onClick={handleRegister} className='pr-5 pl-5 pt-3 pb-3 bg-banner-gradient rounded-sm w-96 mb-5 font-roboto text-xl hover:animate-glow-button text-white tracking-wide'>Sign Up</button>
                            </div>
                            {/* ----- or ----- Section */}
                            <div className='mb-5 flex items-center'>
                                <div className='w-44 h-0.5 bg-secondary'></div>
                                <p className='mx-2 font-roboto text-secondary'>Or</p>
                                <div className='w-44 h-0.5 bg-secondary'></div>
                            </div>
                            {/* Sign Up With Google Section */}
                            {/* Privacy Policy | Terms & Condition Section */}
                            <div className='ml-10'>
                                <p className='text-sm text-center font-roboto text-secondary'>
                                    By creating an account, I agree with YummmZo's <br /> 
                                    <a className='font-semibold font-roboto text-secondary' href="#">Privacy Policy</a> and <a className='font-semibold font-roboto text-secondary' href="#">Terms and Condition</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </div>
    )
}

export default SignUpComponent
