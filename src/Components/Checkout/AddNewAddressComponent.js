import React from 'react'
import '../../Styles/Main.css'
import { UilTimes } from '@iconscout/react-unicons'

const AddNewAddressComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='w-300 ml-500 b-1-b-s p-10-20'>
                    {/* Heading Section */}
                    <div className='mb-20 flex ai-c'>
                        <UilTimes className='h-20 w-a mr-10'/>
                        <span className='fs-l'>Save Delivery Address</span>
                    </div>
                    {/* Map Section */}
                    <div>

                    </div>
                    {/* Address Section */}
                    <div>

                    </div>
                    {/* Textfeilds Section */}
                    <div className='mb-20'>
                        <input className='h-40 w-260 p-0-10' type="text" placeholder='Door / Flat No.'/>
                        <input className='h-40 w-260 p-0-10' type="text" placeholder='Landmark'/>
                        <div className='flex jc-sb ai-c'>
                            <button className='h-40 w-100'>Home</button>
                            <button className='h-40 w-100'>Work</button>
                            <button className='h-40 w-100'>Other</button>
                        </div>
                    </div>
                    {/* Button Section */}
                    <div>
                        <button className='h-40 w-260'>Save Address & Proceed</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default AddNewAddressComponent
