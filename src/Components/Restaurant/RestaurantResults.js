import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const RestaurantResults = ({ data  }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <Link to={`/menu/${data._id}`}>
                    <div className='h-auto w-full hover:bg-slate-50 rounded-sm p-2 flex items-start justify-start cursor-pointer'>
                        {/* Restaurant Image Container */}
                        <div className='mr-10'>
                            <img className='rounded-md h-28 w-32 mt-1' src={data.imageURL} alt="" />
                        </div>
                        {/* Restaurant Details Container */}
                        <div>
                            {/* Restaurant Heading Container */}
                            <div className='mb-1'>
                                <p className='font-medium'>
                                    {data.restaurantName}
                                </p>
                            </div>
                            {/* Restaurant Rating Container */}
                            <div className='flex items-center'>
                                <div className='flex items-center pr-2 pl-2 pt-1 pb-1 bg-green-800 rounded-md mr-2'>
                                    <span className='text-white text-xs mr-1'>
                                        {data.rating}
                                    </span>
                                    <span className='text-white text-xs'>
                                        <AiFillStar/>
                                    </span>
                                </div>
                                <div>
                                    <span className='uppercase text-sm'>Dining</span>
                                </div>
                            </div>
                            {/* Restaurant Address Container */}
                            <div>
                                <p className='text-md'>
                                    {data.restaurantCompleteAddress}
                                </p>
                            </div>
                            {/* Order Now Button */}
                            <div className='flex items-center cursor-pointer'>
                                <span className='text-red-500 text-sm'>
                                    Order Now
                                </span>
                                <span className='text-red-500 text-sm'>
                                    <BiChevronRight/>
                                </span>
                            </div>
                            {/* Restaurant Delivery Time Container */}
                            <div>
                                <span className='text-sm text-slate-600'>Order in {data.deliveryTime} min</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        </div>
    )
}

export default RestaurantResults
