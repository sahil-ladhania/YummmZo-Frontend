import React from 'react'

const CouponComponent2 = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-24 w-64 flex flex-col justify-evenly rounded-lg bg-navbar-gradient px-3 cursor-pointer'>
                    {/* First Child */}
                    <div className='flex items-center justify-evenly'>
                        <img className='h-5 w-auto mr-5' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12" alt="" />
                        <p className='text-sm font-semibold font-roboto text-secondary'>FLAT ₹75 OFF</p>
                    </div>
                    {/* Second Child */}
                    <div className='flex items-center justify-evenly'>
                        <p className='text-xs font-medium font-roboto text-logo'>
                            NO CODE REQUIRED
                        </p>
                        <p className='mr-3 ml-3 font-roboto text-secondary'>|</p>
                        <p className='text-xs font-medium font-roboto text-logo'>
                            ABOVE ₹600
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CouponComponent2
