import React from 'react'
import '../../Styles/Main.css'
import { UilMapMarkerPlus } from '@iconscout/react-unicons'
import '../../Styles/Buttons.css'

const DeliveryAddressComponent = () => {
    return (
        <div className='b-1-b-s'>
            <>
                {/* Main Component */}
                <div className='w-600 p-10-20'>
                    {/* Heading Component */}
                    <div className=''>
                        <p className='fs-r'> 
                            Choose a delivery address
                        </p>
                        <p className='fs-r'> 
                            Multiple addresses in this location
                        </p>
                    </div>
                    {/* Address Component */}
                    <div className='h-100 w-200 mt-100 p-10-20 b-1-b-d'>
                        <a href="#">
                            <div className='mb-20 flex ai-c'>
                                <UilMapMarkerPlus className='h-20 w-a'/>
                                <span className='fs-r'>Add New Address</span>
                            </div>
                            <button className='h-40 p-0-30 b-1-t-s br-5 fs-r'>Add New</button>
                        </a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default DeliveryAddressComponent
