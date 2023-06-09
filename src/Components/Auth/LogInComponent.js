import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UilGoogle } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';
// CSS Files
import '../../Styles/Buttons.css'
import '../../Styles/Input.css'
import '../../Styles/Links.css'
import loginUser from '../../Services/LoginService';

const LogInComponent = () => {
    // Defining State Variables.
    const [formData , setFormData] = useState({
        email : '',
        password : ''
    });
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
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-600'>
                    {/* Log In Form */}
                    <form className='flex fd-c jc-sa ai-c b-1-black-solid h-500 w-500' onSubmit={handleSubmit}>
                        {/* Log In with Google Section */}
                        <div className='flex fd-c ai-c'>
                            <h1 className='mb-10 fs-r'>Log in to YummmZo</h1>
                            <div className='mb-10 fs-r'>Dont have an account yet ? <Link className='fs-r td-n c-b' to="/signup">Sign up for free</Link></div>
                            <button className='flex ai-c jc-c h-40 w-300 b-1-t-s br-5 fs-r'><UilGoogle className='h-20 w-a mr-10'/>Log in with Google</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p>--------------------------Or--------------------------</p>
                        </div>
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
                            <button className='h-40 w-300 b-1-t-s br-5 fs-r' type='submit'>Log in</button>
                        </div>
                    </form>
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
