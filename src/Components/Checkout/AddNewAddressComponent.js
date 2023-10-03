import React from 'react'
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
                        <span className='fs-l fs-r'>Save Delivery Address</span>
                    </div>
                    {/* Map Section */}
                    <div>

                    </div>
                    {/* Address Section */}
                    <div>

                    </div>
                    {/* Textfeilds Section */}
                    <div className='mb-20'>
                        <input className='h-40 w-260 p-0-10 b-1-t-s br-5 bc-ws mb-5' type="text" placeholder='Door / Flat No.'/>
                        <input className='h-40 w-260 p-0-10 b-1-t-s br-5 bc-ws mb-5' type="text" placeholder='Landmark'/>
                        <div className='flex jc-sb ai-c'>
                            <button className='h-40 w-100 b-1-t-s fs-r'>Home</button>
                            <button className='h-40 w-100 b-1-t-s fs-r'>Work</button>
                            <button className='h-40 w-100 b-1-t-s fs-r'>Other</button>
                        </div>
                    </div>
                    {/* Button Section */}
                    <div>
                        <button className='h-40 w-260 b-1-t-s br-5 fs-r'>Save Address & Proceed</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default AddNewAddressComponent
