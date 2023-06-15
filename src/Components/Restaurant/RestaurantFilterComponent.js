import React from 'react'
import { UilClock } from '@iconscout/react-unicons'
import { UilStar } from '@iconscout/react-unicons'
import { UilArrowCircleUp } from '@iconscout/react-unicons'
import { UilArrowCircleDown } from '@iconscout/react-unicons'

const RestaurantFilterComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-50 flex jc-sb ai-c'>
                    {/* Left Section */}
                    <div>
                        {/* No of Restaurants */}
                        <span>259 restaurants</span>
                    </div>
                    {/* Right Section */}
                    <div className='flex'>
                        {/* Filter Options Section */}
                        <div className='flex ai-c ml-10'>
                            <UilClock className='h-20 w-a'/>
                            <a href="#">Delivery Time</a>
                        </div>
                        <div className='flex ai-c ml-10'>
                            <UilStar className='h-20 w-a'/>
                            <a href="#">Rating</a>
                        </div>
                        <div className='flex ai-c ml-10'>
                            <UilArrowCircleUp className='h-20 w-a'/>
                            <a href="#">Cost : Low to High</a>
                        </div>
                        <div className='flex ai-c ml-10'>
                            <UilArrowCircleDown className='h-20 w-a'/>
                            <a href="#">Cost : High to Low</a>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantFilterComponent
