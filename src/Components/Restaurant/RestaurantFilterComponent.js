import React from 'react'
import { UilClock } from '@iconscout/react-unicons'
import { UilStar } from '@iconscout/react-unicons'
import { UilArrowCircleUp } from '@iconscout/react-unicons'
import { UilArrowCircleDown } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'

const RestaurantFilterComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-50 flex jc-sb ai-c'>
                    {/* Left Section */}
                    <div>
                        {/* No of Restaurants */}
                        <span className='fs-r fs-xl fw-500'>259 restaurants</span>
                    </div>
                    {/* Right Section */}
                    <div className='flex'>
                        {/* Filter Options Section */}
                        <div className='flex ai-c ml-10 p-10 b-1-d8d8d8-s br-5'>
                            <UilHeart className='h-15 w-a c-3d3d3d'/>
                            <a className='fs-r td-n c-3d3d3d fs-s' href="#">Favourites</a>
                        </div>
                        <div className='flex ai-c ml-10 p-10 b-1-d8d8d8-s br-5'>
                            <UilClock className='h-15 w-a c-3d3d3d'/>
                            <a className='fs-r td-n c-3d3d3d fs-s' href="#">Delivery Time</a>
                        </div>
                        <div className='flex ai-c ml-10 p-10 b-1-d8d8d8-s br-5'>
                            <UilStar className='h-15 w-a c-3d3d3d'/>
                            <a className='fs-r td-n c-3d3d3d fs-s' href="#">Rating</a>
                        </div>
                        <div className='flex ai-c ml-10 p-10 b-1-d8d8d8-s br-5'>
                            <UilArrowCircleUp className='h-15 w-a c-3d3d3d'/>
                            <a className='fs-r td-n c-3d3d3d fs-s' href="#">Cost : Low to High</a>
                        </div>
                        <div className='flex ai-c ml-10 p-10 b-1-d8d8d8-s br-5'>
                            <UilArrowCircleDown className='h-15 w-a c-3d3d3d'/>
                            <a className='fs-r td-n c-3d3d3d fs-s' href="#">Cost : High to Low</a>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantFilterComponent
