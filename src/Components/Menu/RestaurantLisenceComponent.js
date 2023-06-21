import React from 'react'

const RestaurantLisenceComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-200 w-1000 p-10-20 b-1-dcd8d8-s mb-20 mt-20 bc-f1f1f6 '>
                    {/* Fssai Image and Lisence Number Section */}
                    <div className='flex ai-c'>
                        <div>
                            <img className='h-30 w-a mr-10' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="Fssai-Image" />
                        </div>
                        <div>
                            <p className='fs-s fs-r c-g fw-500'>
                                License No. 12722052001425
                            </p>
                        </div>
                    </div>
                    {/* Divider Section */}
                    <div className='mb-20 mt-20'>
                        <hr  className='h-1 b-n bc-g'/>
                    </div>
                    {/* Restaurant Name and Outlet Section */}
                    <div>
                        <p className='mb-10 fs-r c-g'>
                            Subway
                        </p>
                        <p className='fs-s fs-r c-g'>
                            (Outlet:Vasundhara)
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantLisenceComponent
