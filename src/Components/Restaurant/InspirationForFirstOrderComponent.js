import React from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";

const InspirationForFirstOrderComponent = ({ cuisines , auth , setAuth , loading , setLoading }) => {
    return (
        <div className='max-w-5xl ml-auto mr-auto'>
            <>
                {/* Main Component */}
                <div className='flex flex-col h-72 items-start justify-evenly'>
                    <div className='flex justify-between w-full mt-10'>
                        <span className='text-4xl font-medium py-2 mb-2 font-roboto text-secondary'>
                            What's on your mind ?
                        </span>
                        <div className='flex items-center'>
                            <span><CiCircleChevLeft className='text-2xl text-secondary mx-2 cursor-pointer'/></span>
                            <span><CiCircleChevRight className='text-2xl text-secondary mx-2 cursor-pointer'/></span>
                        </div>
                    </div>
                    <div className='flex cursor-pointer w-full bg-light-white drop-shadow'>
                        <div className='flex overflow-x-auto'>
                            {cuisines.map((cuisine, index) => (
                                <div key={index} className='h-40 w-auto flex  mx-10 flex-col items-center justify-center'>
                                    <img className='rounded-full mb-2' src={cuisine.imageURL} alt="" />
                                    <a className='text-sm font-medium font-roboto text-secondary text-center' href="#">{cuisine.cuisineName}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default InspirationForFirstOrderComponent
