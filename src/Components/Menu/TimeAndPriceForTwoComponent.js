import React from 'react'
import '../../Styles/Main.css'
import { IoTime } from "react-icons/io5";
import { HiCurrencyRupee } from "react-icons/hi2";

const TimeAndPriceForTwoComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-80 flex ai-c'>
                    {/* Time Section */}
                    <div className='flex ai-c mr-20'>
                        <IoTime className='h-20 w-a mr-10 fw-700'/>
                        <p className='fs-r fw-700'>30 MINS</p>
                    </div>
                    {/* Price Section */}
                    <div className='flex ai-c ml-20'>   
                        <HiCurrencyRupee className='h-20 w-a mr-10 fw-700'/>
                        <p className='fs-r fw-700'>450.RS</p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default TimeAndPriceForTwoComponent
