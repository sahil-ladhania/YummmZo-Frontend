import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Form.css';
import { UilGoogle } from '@iconscout/react-unicons'
// CSS Files
import '../../Styles/Buttons.css'
import '../../Styles/Input.css'
import '../../Styles/Links.css'


const SignUpComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-600'>
                    {/* Sign up Form */}
                    <div className='flex fd-c jc-sa ai-c b-1-black-solid h-500 w-500 br-5'>
                        {/* Sign up with Google Section */}
                        <div className='flex fd-c ai-c'>
                            <h1 className='mb-10 fs-r'>Create Account</h1>
                            <div className='mb-10 fs-r'>Already have an account ? <Link className='fs-r td-n c-b' to="/login">Log in</Link></div>
                            <button className='flex ai-c jc-c h-40 w-300 b-1-t-s br-5 fs-r'><UilGoogle className='h-20 w-a mr-10'/>Sign up with Google</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p>--------------------------Or--------------------------</p>
                        </div>
                        {/* Sign up with Number / Email Section */}
                        <div className='flex fd-c'>
                            <input className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' type="number" name="" id="" placeholder='Phone Number'/>
                            <input className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' type="text" name="" id="" placeholder='Name'/>
                            <input className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' type="email" name="" id="" placeholder='Email Address'/>
                        </div>
                        {/* Create Account */}
                        <div>
                            <button className='h-40 w-300 b-1-t-s br-5 fs-r'>Create Account</button>
                        </div>
                        {/* Privacy Policy | Terms & Condition Section */}
                        <div>
                            <p className='fs-r'>
                                By creating an account, I agree with YummmZo's <br /> 
                                <a className='ml-30 fs-r td-n c-b' href="#">Privacy Policy</a> and <a className='fs-r td-n c-b' href="#">Terms and Condition</a>
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
