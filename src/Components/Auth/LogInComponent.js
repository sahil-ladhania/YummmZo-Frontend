import React from 'react'
import { UilGoogle } from '@iconscout/react-unicons'
// CSS Files
import '../../Styles/Buttons.css'
import '../../Styles/Input.css'
import '../../Styles/Links.css'

const LogInComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-600'>
                    {/* Log In Form */}
                    <div className='flex fd-c jc-sa ai-c b-1-black-solid h-500 w-500'>
                        {/* Log In with Google Section */}
                        <div className='flex fd-c ai-c'>
                            <h1 className='mb-10 fs-r'>Log in to YummmZo</h1>
                            <div className='mb-10 fs-r'>Dont have an account yet ? <a className='fs-r td-n c-b' href="#">Sign up for free</a></div>
                            <button className='flex ai-c jc-c h-40 w-300 b-1-t-s br-5 fs-r'><UilGoogle className='h-20 w-a mr-10'/>Log in with Google</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p>--------------------------Or--------------------------</p>
                        </div>
                        {/* Log In with Email & Password Section */}
                        <div className='flex fd-c'>
                            <input className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' type="email" name="" id="" placeholder='name@gmail.com'/>
                            <input className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' type="password" name="" id="" placeholder='Password'/>
                            <a className='ml-180 fs-r td-n c-b' href="#">Forgot Password ?</a>
                        </div>
                        {/* Log In */}
                        <div>
                            <button className='h-40 w-300 b-1-t-s br-5 fs-r'>Log in</button>
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

export default LogInComponent
