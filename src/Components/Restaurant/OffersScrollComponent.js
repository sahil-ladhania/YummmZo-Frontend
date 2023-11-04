import React from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";

const OffersScrollComponent = ({auth , setAuth}) => {
    return (
        <div className='max-w-5xl ml-auto mr-auto'>
            {/* Main Component */}
            <div className='flex flex-col 96 items-start justify-evenly'>
                {/* Heading Section */}
                <div className='flex justify-between w-full mt-10'>
                    {
                        auth.user ?
                            <span className='text-3xl font-medium py-2 mb-2 font-roboto text-secondary'>Best Offer For , {auth.user.firstName}</span>
                            :
                            <span className='text-3xl font-medium py-2 mb-2 font-roboto text-secondary'>Best Offer For You</span>
                    }
                    <div className='flex items-center'>
                        <span><CiCircleChevLeft className='text-2xl text-secondary mx-2 cursor-pointer'/></span>
                        <span><CiCircleChevRight className='text-2xl text-secondary mx-2 cursor-pointer'/></span>
                    </div>
                </div>
                {/* Image Section */}
                <div className='flex overflow-x-auto space-x-5'>
                    <img className='h-52 w-auto cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/5f0307583e206d7deb89686e13428739" alt="" />
                    <img className='h-52 w-auto cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/71a1a892aba05e349d776a8ef9686b39" alt="" />
                    <img className='h-52 w-auto cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/5c0fd6211292bcdd46fffd130f5b1028" alt="" />
                    <img className='h-52 w-auto cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/cacb0f233b0482eb21977609959ca688" alt="" />
                    <img className='h-52 w-auto cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/fe4652c8013a30af8f9ec45d3732d85f" alt="" />
                    <img className='h-52 w-auto cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/70af1a69104a2ace0904bcb9598a3ed1" alt="" />
                </div>
            </div>
        </div>
    )
}

export default OffersScrollComponent
