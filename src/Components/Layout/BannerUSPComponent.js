import React from 'react';
import '../../Styles/LocateMeComponent.css';

const BannerUSPComponent = () => {
    return (
        <div>
            <>
                {/* Main Container */}
                <div className='flex jc-sa h-400 ai-c'>
                    {/* 1st USP */}
                    <div className='flex fd-c ai-c'>
                        <img className='h-200 w-a mb-10' src="" alt="1st-USP-Image" />
                        <div className='mb-10'>No Minimum Order</div>
                        <div className='ta-c'>
                            Order in for yourself or for the group, <br /> with no restrictions on order value
                        </div>
                    </div>
                    {/* 2nd USP */}
                    <div className='flex fd-c ai-c'>
                        <img className='h-200 w-a mb-10' src="" alt="2nd-USP-Image" />
                        <div className='mb-10'>Live Order Tracking</div>
                        <div className='ta-c'>
                            Know where your order is at all times, <br /> from the restaurant to your doorstep
                        </div>
                    </div>
                    {/* 3rd USP */}
                    <div className='flex fd-c ai-c'>
                        <img className='h-200 w-a mb-10' src="" alt="3rd-USP-Image" />
                        <div className='mb-10'>Lightning-Fast Delivery</div>
                        <div className='ta-c'>
                            Experience Swiggy's superfast delivery <br /> for food delivered fresh & on time
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default BannerUSPComponent
