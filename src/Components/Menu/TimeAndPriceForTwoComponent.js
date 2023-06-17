import React from 'react'
import { UilClock } from '@iconscout/react-unicons'
import { UilRupeeSign } from '@iconscout/react-unicons'
import '../../Styles/Main.css'

const TimeAndPriceForTwoComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-80 flex ai-c'>
                    {/* Time Section */}
                    <div className='flex ai-c mr-20'>
                        <UilClock className='h-20 w-a mr-10'/>
                        <p className='fs-r'>25 Mins</p>
                    </div>
                    {/* Price Section */}
                    <div className='flex ai-c ml-20'>   
                        <UilRupeeSign className='h-20 w-a mr-10'/>
                        <p className='fs-r'>350 for two</p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default TimeAndPriceForTwoComponent
