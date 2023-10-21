import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const RestaurantLisenceComponent = ({ restaurantDetails }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='bg-secondary h-60 rounded-sm p-5'>
                    {/* Fssai Image and Lisence Number Section */}
                    <div className='flex items-center h-10 justify-between w-72 mb-10'>
                        <div>
                            <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPJSweek_1fSb_xdYcRW4_jfdPgsU5ur2uAHwko1y_mEKT2ydm56dErbLLbCciHw6zSk&usqp=CAU" alt="Fssai-Image" />
                        </div>
                        <div>
                            <p className='text-sm font-roboto text-yummmzo-color'>
                                License No. 12722052001425
                            </p>
                        </div>
                    </div>
                    {/* Divider Section */}
                    <div className=''>
                        <hr  className='font-roboto text-yummmzo-color'/>
                    </div>
                    {/* Restaurant Name and Outlet Section */}
                    <div className='flex flex-col h-12 justify-between mt-2'>
                        <p className='text-sm font-semibold font-roboto text-yummmzo-color'>
                            {restaurantDetails.restaurantName}
                        </p>
                        <div className='flex items-center'>
                            <span><CiLocationOn className='text-sm mr-1 text-yummmzo-color'/></span>
                            <p className='text-xs font-roboto text-yummmzo-color'>
                            ({restaurantDetails.restaurantCompleteAddress})
                            </p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantLisenceComponent
