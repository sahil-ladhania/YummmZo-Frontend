import React from 'react';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { PiDotOutlineLight } from "react-icons/pi";

const CustomersCarouselsComponent = () => {
    return (
        <div className='h-80 flex flex-col items-center justify-center  relative bg-card-gradient mb-5 rounded-sm'>
            {/* Left Button */}
            <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                <span className='cursor-pointer'><CiCircleChevLeft className='text-4xl'/></span>
            </div>
            {/* Heading Section */}
            <div>
                <h1 className='text-3xl mb-10 font-roboto'>Our Happy Partners</h1>
            </div>
            {/* Carousel Section */}
            <div className='flex max-w-2xl items-center'>
                {/* Image Section */}
                <div>
                <img className='h-28 w-60 rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1ZAMw2XkttJYi3cOhggQjkn1XnBgxoFOrA&usqp=CAU" alt="" />
                </div>

                {/* Content Section */}
                <div className='ml-5'>
                    <p className='mb-5 font-roboto'>
                        We are immensely satisfied with the marketing push Zomato has provided us. We are now exclusive with Zomato and look forward to more growth in our delivery business through online orders.
                    </p>
                    <div className='flex flex-col'>
                        <span className='text-md font-medium font-roboto'>Aditi Kumari</span>
                        <span className='text-sm font-medium font-roboto'>Owner - Baigan</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-5'>
                <span><PiDotOutlineLight className='text-3xl'/></span>
                <span><PiDotOutlineLight className='text-3xl'/></span>
                <span><PiDotOutlineLight className='text-3xl'/></span>
            </div>
            {/* Right Button */}
            <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                <span className='cursor-pointer'><CiCircleChevRight className='text-4xl'/></span>
            </div>
        </div>
    );
};

export default CustomersCarouselsComponent;
