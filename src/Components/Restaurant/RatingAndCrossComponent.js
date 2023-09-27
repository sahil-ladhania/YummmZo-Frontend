import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const RatingAndCrossComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='p-10 b-1-d8d8d8-s br-5 flex items-center bg-orange-300 ml-10 animate-pulse'>
                    <div className='flex ai-c ml-10'>
                        <AiFillStar className='h-15 w-a c-3d3d3d'/>
                        <a className='fs-r td-n c-3d3d3d fs-s ml-5' href="#">Rating</a>
                    </div>
                    <span className='ml-10 cursor-pointer'><RxCross2/></span>
                </div>
            </>
        </div>
    )
}

export default RatingAndCrossComponent
