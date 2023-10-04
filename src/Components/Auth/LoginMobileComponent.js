import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import PhoneInput from 'react-phone-input-2';

const LoginMobileComponent = () => {
    // Defining State Variables
    const [phoneNumber , setPhoneNumber] = useState('');
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex flex-col justify-start p-5 w-auto'>
                    {/* Left Arrow Component */}
                    <Link className='text-xl font-bold h-10 mb-10' to="/"><BiArrowBack/></Link>
                    {/* Heading Component */}
                    <div className='mb-16'>
                        <h1 className='text-lg uppercase font-bold'>Login</h1>
                        <span className='text-xs'>Enter your phone number to continue</span>
                    </div>
                    {/* Phone Number Input Component */}
                    <div className='w-full sm:w-1/2'>
                        <PhoneInput
                            inputStyle={{ color: 'black' , width: '320px'}}
                            value={phoneNumber}
                            className="mb-5"
                            country={'in'}
                            preferredCountries={['in', 'us']}
                            onlyCountries={['in', 'cu', 'cw', 'kz', 'fr', 'it', 'pt', 'id']}
                            placeholder='Phone'
                        />
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <button className='h-12 w-full sm:w-72 border-2 border-black mb-2 rounded-sm'>Continue</button>
                    </div>
                    <div className='w-auto'>
                        <p className='text-xs'> 
                            By clicking, I accept <span className='font-semibold'>Terms & Conditions</span> & <span className='font-semibold'>Privacy Policy</span> 
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LoginMobileComponent
