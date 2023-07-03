import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Form.css';
import { UilGoogle } from '@iconscout/react-unicons'
import registerUser from '../../Services/RegistrationService';
// CSS Files
import '../../Styles/Buttons.css'
import '../../Styles/Input.css'
import '../../Styles/Links.css'


const SignUpComponent = () => {
    // Defining State Variables.
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    // Handler Functions.
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleRegister = (e) => {
        // Handeling Default Form Submission To Avoid Page Reload.
        e.preventDefault();
        // Checking If User Has Filled All the Feilds Or Not.
        if ( !firstName || !lastName || !email || !password || !confirmPassword ){
            alert("Please Fill all the Feilds !!!");
        }
        // Checking If the Password And Confirm Password Is Same Or Not.
        else if (password !== confirmPassword) {
            alert('Password and Confirm Password should be the same!');
        } 
        else{
            const userData = { firstName , lastName , email , password , confirmPassword };
            registerUser(userData);
        }
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-600'>
                    {/* Sign up Form */}
                    <form className='flex fd-c jc-sa ai-c b-1-black-solid h-500 w-500 br-5' action="">
                        {/* Sign up with Google Section */}
                        <div className='flex fd-c ai-c'>
                            <h1 className='mb-10 fs-r c-3d3d3d'>Create Account</h1>
                            <div className='mb-10 fs-r c-3d3d3d'>Already have an account ? <Link className='fs-r td-n c-3d3d3d' to="/login">Log in</Link></div>
                            <button className='flex ai-c jc-c h-40 w-300 b-1-t-s br-5 fs-r c-3d3d3d'><UilGoogle className='h-20 w-a mr-10 c-3d3d3d'/>Sign up with Google</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p className='c-3d3d3d'>--------------------------Or--------------------------</p>
                        </div>
                        {/* Sign up with Number / Email Section */}
                        <div className='flex fd-c'>
                            <input 
                            value={firstName}
                            onChange={handleFirstName}
                            className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder='First Name'/>
                            <input 
                            value={lastName}
                            onChange={handleLastName}
                            className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder='Last Name'/>
                            <input 
                            value={email}
                            onChange={handleEmail}
                            className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                            type="email" 
                            name="" 
                            id="" 
                            placeholder='Email Address'/>
                            <input 
                            value={password}
                            onChange={handlePassword}
                            className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                            type="password" 
                            name="" 
                            id="" 
                            placeholder='Password'/>
                            <input 
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            className='h-40 w-300 p-0-10 mb-5 b-1-t-s br-5 bc-ws' 
                            type="password" 
                            name="" 
                            id="" 
                            placeholder='Confirm Password'/>
                        </div>
                        {/* Create Account */}
                        <div>
                            <button onClick={handleRegister} type='submit' className='h-40 w-300 b-1-t-s br-5 fs-r c-3d3d3d'>Register</button>
                        </div>
                        {/* Privacy Policy | Terms & Condition Section */}
                        <div>
                            <p className='fs-r c-3d3d3d'>
                                By creating an account, I agree with YummmZo's <br /> 
                                <a className='ml-30 fs-r td-n c-b c-3d3d3d' href="#">Privacy Policy</a> and <a className='fs-r td-n c-b' href="#">Terms and Condition</a>
                            </p>
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

export default SignUpComponent
