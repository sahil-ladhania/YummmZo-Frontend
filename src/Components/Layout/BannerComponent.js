import React from 'react'

const BannerComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center justify-between'>
                    {/* Content Section */}
                    <div className=''>
                        <p className='text-4xl font-bold h-24 w-64 font-roboto text-yummmzo-color'>Restaurants in your pocket</p>
                        <p className='h-24 w-96 text-lg font-roboto text-yummmzo-color'>
                            Order from your favorite restaurants & track on the go, with the all-new YummmZo app.
                        </p>
                        <div className='flex items-center justify-between'>
                            <img className='h-10 cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" />
                            <img className='h-10 cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" />
                        </div>
                    </div>
                    {/* Image Section */}
                    <div>
                        <img className='h-96' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="" />
                    </div>
                </div>
            </>
        </div>
    )
}

export default BannerComponent
