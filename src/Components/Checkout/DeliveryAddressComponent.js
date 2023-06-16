import React from 'react'
import '../../Styles/Main.css'
import { UilMapMarkerPlus } from '@iconscout/react-unicons'

const DeliveryAddressComponent = () => {
    return (
        <div className='b-1-b-s'>
            <>
                {/* Main Component */}
                <div className='w-600 p-10-20'>
                    {/* Heading Component */}
                    <div className=''>
                        <p>
                            Choose a delivery address
                        </p>
                        <p>
                            Multiple addresses in this location
                        </p>
                    </div>
                    {/* Address Component */}
                    <div className='h-100 w-200 mt-100 p-10-20 b-1-b-d'>
                        <a href="#">
                            <div className='mb-20 flex ai-c'>
                                <UilMapMarkerPlus className='h-20 w-a'/>
                                <span>Add New Address</span>
                            </div>
                            <button>Add New</button>
                        </a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default DeliveryAddressComponent
