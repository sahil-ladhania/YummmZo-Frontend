import React from 'react';
import '../../Styles/Form.css';

const SignUpComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-fs ai-c ml-80'>
                    {/* Sign up Form */}
                    <div className='flex fd-c ai-c b-1-black-solid mr-200'>
                        {/* Sign up with Google Section */}
                        <div>
                            <h1>Create Account</h1>
                            <div>Already have an account ? <a href="#">Log in</a></div>
                            <button><img src="" alt="Google-Icon" />Sign up with Google</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p>----------Or----------</p>
                        </div>
                        {/* Sign up with Number / Email Section */}
                        <div className='flex fd-c'>
                            <input className='w-200' type="number" name="" id="" placeholder='Phone Number'/>
                            <input className='w-200' type="text" name="" id="" placeholder='Name'/>
                            <input className='w-200' type="email" name="" id="" placeholder='Email Address'/>
                        </div>
                        {/* Create Account */}
                        <div>
                            <button className='w-200'>Create Account</button>
                        </div>
                        {/* Privacy Policy | Terms & Condition Section */}
                        <div>
                            <p>
                                By creating an account, I agree with YummmZo's <br /> 
                                <a href="#">Privacy Policy</a> and <a href="#">Terms and Condition</a>
                            </p>
                        </div>
                    </div>
                    {/* Image */}
                    <div>
                        <img src="" alt="Image" />
                    </div>
                </div>
            </>
        </div>
    )
}

export default SignUpComponent
