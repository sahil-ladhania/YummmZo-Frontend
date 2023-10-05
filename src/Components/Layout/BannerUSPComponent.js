import React from 'react';

const BannerUSPComponent = () => {
    return (
        <div>
            <>
                {/* Main Container */}
                <div className='h-96 flex items-start justify-between'>
                    {/* 1st USP */}
                    <div className='text-center'>
                        <img className='h-48 w-auto mb-3' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="1st-USP-Image" />
                        <div className=' text-xl font-bold mb-2'>No Minimum Order</div>
                        <div className=' text-sm mb-2'>
                            Order in for yourself or for the group, <br /> with no restrictions on order value
                        </div>
                    </div>
                    {/* 2nd USP */}
                    <div className='text-center'>
                        <img className='h-48 w-auto mb-3' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="2nd-USP-Image" />
                        <div className=' text-xl font-bold mb-2'>Live Order Tracking</div>
                        <div className=' text-sm mb-2'>
                            Know where your order is at all times, <br /> from the restaurant to your doorstep
                        </div>
                    </div>
                    {/* 3rd USP */}
                    <div className='text-center'>
                        <img className='h-48 w-auto mb-3' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="3rd-USP-Image" />
                        <div className=' text-xl font-bold mb-2'>Lightning-Fast Delivery</div>
                        <div className='text-sm mb-2'>
                            Experience YummmZo's superfast delivery <br /> for food delivered fresh & on time
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default BannerUSPComponent
