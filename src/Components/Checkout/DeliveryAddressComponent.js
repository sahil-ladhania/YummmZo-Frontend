import React from 'react'
import { UilMapMarkerPlus } from '@iconscout/react-unicons'
import { CiLocationOn } from "react-icons/ci";
import UserAddressComponent from './UserAddressComponent';

const DeliveryAddressComponent = () => {
    return (
        <div className='border-2 border-black p-5 mt-10 w-full rounded-sm'>
            <>
                {/* Main Component */}
                <div className='w-auto'>
                    {/* Heading Component */}
                    <div className='h-20 mb-5 flex flex-col justify-center'>
                        <p className='text-2xl font-medium font-roboto text-yummmzo-color'> 
                            Choose a delivery address
                        </p>
                        <p className='text-md font-medium font-roboto text-yummmzo-color'> 
                            Multiple addresses in this location
                        </p>
                    </div>
                    {/* User Address Component */}
                    <div>
                        <UserAddressComponent/>
                    </div>
                    {/* Address Component */}
                    <div className='h-auto p-2 w-96 outline-1 outline-dashed'>
                        <a className='flex flex-col justify-center' href="#">
                            <div className='mb-5 flex items-center justify-center'>
                                <CiLocationOn className='text-xl mr-2 text-yummmzo-color'/>
                                <span className='text-md font-medium font-roboto text-yummmzo-color'>Add New Address</span>
                            </div>
                            <button className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm font-roboto'>Add New</button>
                        </a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default DeliveryAddressComponent
