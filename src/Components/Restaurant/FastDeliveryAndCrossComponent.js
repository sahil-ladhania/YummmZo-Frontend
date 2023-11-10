import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";

const FastDeliveryAndCrossComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center h-10 bg-signup-gradient pr-3 pl-3 pt-2 pb-2 rounded-sm animate-pulse cursor-pointer'>
                    <div className='flex items-center'>
                        <CiClock2 className='text-xl mr-1 ml-1 text-white'/>
                        <a className='text-sm font-roboto text-white' href="#">Fast Delivery</a>
                    </div>
                    <span className='text-xl mr-1 ml-1 text-white'><RxCross2/></span>
                </div>
            </>
        </div>
    )
}

export default FastDeliveryAndCrossComponent
