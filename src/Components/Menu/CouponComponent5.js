import React from 'react'

const CouponComponent5 = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-24 w-64 flex flex-col justify-evenly rounded-lg bg-navbar-gradient px-3 cursor-pointer'>
                    {/* First Child */}
                    <div className='flex items-center justify-evenly'>
                        <img className='h-5 w-auto mr-5' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart" alt="" />
                        <p className='text-sm font-semibold font-roboto text-secondary'>40% OFF UPTO ₹80</p>
                    </div>
                    {/* Second Child */}
                    <div className='flex items-center justify-evenly'>
                        <p className='text-xs font-medium font-roboto text-logo'>
                            USE TRYNEW
                        </p>
                        <p className='mr-3 ml-3 font-roboto text-secondary'>|</p>
                        <p className='text-xs font-medium font-roboto text-logo'>
                            ON SELECT ITEMS
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CouponComponent5
