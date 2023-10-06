import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const RestaurantLisenceComponent = ({ restaurantDetails }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='bg-slate-200 h-60 rounded-sm p-5'>
                    {/* Fssai Image and Lisence Number Section */}
                    <div className='flex items-center h-10 justify-between w-72 mb-10'>
                        <div>
                            <img className='h-8' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="Fssai-Image" />
                        </div>
                        <div>
                            <p className='text-sm'>
                                License No. 12722052001425
                            </p>
                        </div>
                    </div>
                    {/* Divider Section */}
                    <div className=''>
                        <hr  className=''/>
                    </div>
                    {/* Restaurant Name and Outlet Section */}
                    <div className='flex flex-col h-12 justify-between'>
                        <p className='text-sm font-semibold'>
                            {restaurantDetails.restaurantName}
                        </p>
                        <div className='flex items-center'>
                            <span><CiLocationOn className='text-sm mr-1'/></span>
                            <p className='text-xs'>
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
