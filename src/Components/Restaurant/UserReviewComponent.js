import React from 'react'
import { CiStar } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { TfiCommentAlt } from "react-icons/tfi";

const UserReviewComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='mb-6'>
                    {/* User Profile Photo & User Name */}
                    <div className='flex items-center w-40 justify-between mb-4'>
                        <img className='h-10 border-2 border-black rounded-full' src='https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg' alt='user-profile'/>
                        {/* Name & Reviews Number */}
                        <div className='flex flex-col items-start'>
                            <h2>Sahil Ladhania</h2>
                            <span className='text-sm'>2 reviews</span>
                        </div>
                    </div>
                    {/* Rating */}
                    <div className='flex items-center w-56 justify-between mb-2'>
                        <div>
                            <span className='px-2 py-1 text-center bg-green-600 rounded-lg flex items-center text-sm font-roboto text-white font-medium'><CiStar className='text-sm mr-1 text-center text-white font-sm'/>3.5</span>
                        </div>
                        <span className='uppercase text-xs'>Delivery</span>
                        <span className='text-xs'>8 hours ago</span>
                    </div>
                    {/* Help & Comments Number */}
                    <div className='mb-2'>
                        <span className='text-sm'>0 Votes for helpful, 0 Comments</span>
                    </div>
                    {/* Help & Comment Icon */}
                    <div className='flex items-center justify-between w-52 mb-10'>
                        <div className='flex items-center w-20 justify-between bg-slate-200 h-10 rounded-md px-2 cursor-pointer'>
                            <span><SlLike className='text-sm'/></span>
                            <span className='text-sm'>Helpful</span>
                        </div>
                        <div className='flex items-center w-24 justify-between bg-slate-200 h-10 rounded-md px-2 cursor-pointer'>
                            <span><TfiCommentAlt className='text-sm'/></span>
                            <span className='text-sm'>Comment</span>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default UserReviewComponent
