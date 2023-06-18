import React from 'react';
import '../../Styles/LocateMeComponent.css';

const BannerUSPComponent = () => {
    return (
        <div>
            <>
                {/* Main Container */}
                <div className='flex jc-sb h-400 ai-c'>
                    {/* 1st USP */}
                    <div className='flex fd-c ai-c'>
                        <img className='h-200 w-a mb-10' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="1st-USP-Image" />
                        <div className='mb-10 fs-r'>No Minimum Order</div>
                        <div className='ta-c fs-r c-g'>
                            Order in for yourself or for the group, <br /> with no restrictions on order value
                        </div>
                    </div>
                    {/* 2nd USP */}
                    <div className='flex fd-c ai-c'>
                        <img className='h-200 w-a mb-10' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="2nd-USP-Image" />
                        <div className='mb-10 fs-r'>Live Order Tracking</div>
                        <div className='ta-c fs-r c-g'>
                            Know where your order is at all times, <br /> from the restaurant to your doorstep
                        </div>
                    </div>
                    {/* 3rd USP */}
                    <div className='flex fd-c ai-c'>
                        <img className='h-200 w-a mb-10' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="3rd-USP-Image" />
                        <div className='mb-10 fs-r'>Lightning-Fast Delivery</div>
                        <div className='ta-c fs-r c-g'>
                            Experience YummmZo's superfast delivery <br /> for food delivered fresh & on time
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default BannerUSPComponent
