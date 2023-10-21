import React from 'react'
import { IoTime } from "react-icons/io5";
import { HiCurrencyRupee } from "react-icons/hi2";
import { CiClock2 } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

const TimeAndPriceForTwoComponent = ({ restaurantDetails }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex h-10 w-44 items-center justify-between'>
                    {/* Time Section */}
                    <div className='flex items-center'>
                        <CiClock2 className='text-xl mr-1 text-yummmzo-color'/>
                        <p className='text-sm font-bold font-roboto text-yummmzo-color'>{restaurantDetails.deliveryTime} MINS</p>
                    </div>
                    {/* Price Section */}
                    <div className='flex items-center'>   
                        <CiMoneyBill className='text-xl mr-1 text-yummmzo-color'/>
                        <p className='text-sm font-bold font-roboto text-yummmzo-color'>{restaurantDetails.priceForTwo}RS</p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default TimeAndPriceForTwoComponent
