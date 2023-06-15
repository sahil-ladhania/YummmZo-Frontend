import React from 'react';
import '../../Styles/Form.css';
import { UilGoogle } from '@iconscout/react-unicons'

const SignUpComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-600'>
                    {/* Sign up Form */}
                    <div className='flex fd-c jc-sa ai-c b-1-black-solid h-450 w-500'>
                        {/* Sign up with Google Section */}
                        <div className='flex fd-c ai-c'>
                            <h1 className='mb-10'>Create Account</h1>
                            <div className='mb-10'>Already have an account ? <a href="#">Log in</a></div>
                            <button className='flex ai-c jc-c h-40 w-300'><UilGoogle className='h-20 w-a mr-10'/>Sign up with Google</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p>--------------------------Or--------------------------</p>
                        </div>
                        {/* Sign up with Number / Email Section */}
                        <div className='flex fd-c'>
                            <input className='h-40 w-300 p-0-10 mb-5' type="number" name="" id="" placeholder='Phone Number'/>
                            <input className='h-40 w-300 p-0-10 mb-5' type="text" name="" id="" placeholder='Name'/>
                            <input className='h-40 w-300 p-0-10 mb-5' type="email" name="" id="" placeholder='Email Address'/>
                        </div>
                        {/* Create Account */}
                        <div>
                            <button className='h-40 w-300'>Create Account</button>
                        </div>
                        {/* Privacy Policy | Terms & Condition Section */}
                        <div>
                            <p>
                                By creating an account, I agree with YummmZo's <br /> 
                                <a className='ml-30' href="#">Privacy Policy</a> and <a href="#">Terms and Condition</a>
                            </p>
                        </div>
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

export default SignUpComponent
