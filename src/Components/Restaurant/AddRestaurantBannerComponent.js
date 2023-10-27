import React from 'react';
import { Link } from 'react-router-dom';
import { CiCircleChevRight } from "react-icons/ci";

const AddRestaurantBannerComponent = () => {
    return (
        <div className="relative pb-10">
            {/* Image */}
            <img
                src="https://www.zomato.com/partner-with-us/static/media/StartJourney.7cfaaf0a.jpg"
                alt=""
                className="w-full h-auto rounded-lg"
            />
            {/* Text Overlay */}
            <div className="absolute flex flex-col top-0 left-0 p-4 text-white">
                <span className='text-3xl h-10 mb-5 mt-5'>Start your journey with YummmZo</span>
                <span className='text-md h-6'>Create your restaurant page and register for online ordering</span>
            </div>
            <Link to="/registerRestaurant" className='absolute flex items-center justify-center bottom-5 ml-5 mb-10 left-0  pt-2 pb-2 w-32 bg-white text-black rounded-sm hover:animate-glow-light'>
                <span className='mr-2'>Start now</span>
                <span><CiCircleChevRight className='text-xl'/></span>
            </Link>
        </div>
    );
};

export default AddRestaurantBannerComponent;
