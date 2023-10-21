import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";

const StarAndRatingComponent = ({ restaurantDetails }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-20 border-2 border-yummmzo-color p-1 rounded-sm flex flex-col justify-center'>
                    {/* Icon Section */}
                    <div className='flex items-center ml-3 mb-1'>
                        <span><CiStar className='text-xl mr-1 text-yummmzo-color'/></span>
                        <p className='text-xs font-semibold font-roboto text-yummmzo-color'>
                            {restaurantDetails.rating}
                        </p>
                    </div>
                    {/* Divider Section */}
                    <div className='font-roboto text-yummmzo-color'>
                        <hr />
                    </div>
                    {/* Rating Content Section */}
                    <div className='mt-1'>
                        <p className='text-xs font-roboto text-yummmzo-color'>
                            100+ ratings
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default StarAndRatingComponent
