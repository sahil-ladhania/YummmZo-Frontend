import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-phone-input-2/lib/material.css'
import registerUser from '../../Services/RegistrationService.js';
import LoaderComponent from '../../Utils/LoaderComponent';


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
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center justify-between'>
                    {/* Sign up Form */}
                    <form className='w-5/12 flex flex-col justify-between bg-secondary items-center  p-5 rounded-sm mr-24'>
                        {/* Form Heading Section */}
                        <div className='h-16 flex flex-col items-center justify-between'>
                            <h1 className='text-2xl font-semibold font-roboto text-yummmzo-color'>Sign Up</h1>
                            {
                                loading ? 
                                    <LoaderComponent/>
                                    :
                                    <>
                                        <div className='text-sm font-medium font-roboto text-yummmzo-color'>Already have an account ? <Link onClick={handleLoginLoader}className='font-roboto text-yummmzo-color'>Log in</Link></div>
                                    </>
                            }
                        </div>
                        {/* Sign up with Number / Email Section */}
                        <div className='flex flex-col h-52 justify-evenly'>
                            {/* First name and Last name */}
                            <input 
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData , firstName : e.target.value})}
                                className='h-10 outline-none rounded-sm p-2 w-72 font-roboto text-secondary' 
                                type="text" 
                                name="firstName" 
                                required
                                placeholder='First Name'/>
                            <input 
                                value={formData.lastName}  
                                onChange={(e) => setFormData({...formData , lastName : e.target.value})}
                                className='h-10 outline-none rounded-sm p-2 w-72 font-roboto text-secondary' 
                                type="text" 
                                name="lastName" 
                                required
                                placeholder='Last Name'/>
                            {/* Email and Password */}
                            <input 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData , email : e.target.value})}
                                className='h-10 outline-none rounded-sm p-2 w-72 font-roboto text-secondary' 
                                type="email" 
                                name="email" 
                                required
                                placeholder='Email Address'/>
                            <input 
                                value={formData.password}
                                onChange={(e) => setFormData({...formData , password : e.target.value})}
                                className='h-10 outline-none rounded-sm p-2 w-72 font-roboto text-secondary' 
                                type="password" 
                                name="password" 
                                required
                                placeholder='Password'/>
                        </div>
                        {/* Create Account */}
                        <div>
                            <button onClick={handleRegister} className='pr-5 pl-5 pt-3 pb-3 bg-button-color rounded-sm w-72 mb-5 font-roboto hover:animate-glow-light'>Register</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div className='mb-5'>
                            <p className='font-roboto text-yummmzo-color'>-------------------Or-------------------</p>
                        </div>
                        {/* Sign Up With Google Section */}
                        {/* Privacy Policy | Terms & Condition Section */}
                        <div>
                            <p className='text-sm text-center font-roboto text-yummmzo-color'>
                                By creating an account, I agree with YummmZo's <br /> 
                                <a className='font-semibold font-roboto text-yummmzo-color' href="#">Privacy Policy</a> and <a className='font-semibold font-roboto text-yummmzo-color' href="#">Terms and Condition</a>
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
