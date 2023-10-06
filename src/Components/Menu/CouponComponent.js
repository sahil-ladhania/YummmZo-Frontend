import React from 'react'

const CouponComponent = () => {
    return (
        <div>
            <>  
                {/* Main Component */}
                <div className='h-24 w-auto flex flex-col justify-evenly rounded-lg bg-slate-200 pr-3 pl-3 cursor-pointer'>
                    {/* First Child */}
                    <div className='flex items-center'>
                        {/* <UilPercentage className='h-20 w-a mr-10'/> */}
                        <img className='h-5 w-auto mr-5' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart" alt="" />
                        <p className='text-sm font-semibold'>40% OFF UPTO ₹80</p>
                    </div>
                    {/* Second Child */}
                    <div className='flex items-center'>
                        <p className='text-xs font-medium'>
                            USE TRYNEW
                        </p>
                        <p className='mr-3 ml-3'>|</p>
                        <p className='text-xs font-medium'>
                            ON SELECT ITEMS
                        </p>
                    </div>
                </div>
            </>
        </div>  
    )
}

export default CouponComponent
