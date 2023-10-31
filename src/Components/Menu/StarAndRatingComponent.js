import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";

const StarAndRatingComponent = ({ restaurantDetails }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-20 border border-gray-600 p-1 rounded-sm flex flex-col justify-center'>
                    {/* Icon Section */}
                    <div className='flex items-center ml-3 mb-1'>
                        <span><CiStar className='text-xl mr-1 text-secondary'/></span>
                        <p className='text-xs font-semibold font-roboto text-secondary'>
                            {restaurantDetails.rating}
                        </p>
                    </div>
                    {/* Divider Section */}
                    <div className='font-roboto text-secondary'>
                        <hr />
                    </div>
                    {/* Rating Content Section */}
                    <div className='mt-1'>
                        <p className='text-xs font-roboto text-secondary'>
                            100+ ratings
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default StarAndRatingComponent
