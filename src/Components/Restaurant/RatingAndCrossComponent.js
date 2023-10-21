import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { CiStar } from "react-icons/ci";

const RatingAndCrossComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center h-10 border-2 border-black pr-3 pl-3 pt-2 pb-2 rounded-sm animate-pulse cursor-pointer'>
                    <div className='flex items-center'>
                        <CiStar className='text-xl mr-1 ml-1 text-yummmzo-color'/>
                        <a className='text-sm font-roboto text-yummmzo-color' href="#">Rating</a>
                    </div>
                    <span className='text-xl mr-1 ml-1 text-yummmzo-color'><RxCross2/></span>
                </div>
            </>
        </div>
    )
}

export default RatingAndCrossComponent
