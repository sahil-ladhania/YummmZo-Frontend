import React from 'react'

const CouponComponent = () => {
    return (
        <div>
            <>  
                {/* Main Component */}
                <div className='h-100 w-300 flex fd-c jc-se p-10-20 b-1-dcd8d8-s br-5 shadow pointer'>
                    {/* First Child */}
                    <div className='flex ai-c'>
                        {/* <UilPercentage className='h-20 w-a mr-10'/> */}
                        <img className='h-20 w-a mr-10' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart" alt="" />
                        <p className='fs-m fs-r fw-500 c-3d3d3d'>40% OFF UPTO ₹80</p>
                    </div>
                    {/* Second Child */}
                    <div className='flex'>
                        <p className='fs-s fs-r c-g fw-500'>
                            USE TRYNEW
                        </p>
                        <p className='mr-5 ml-5 fs-s'>|</p>
                        <p className='fs-s fs-r c-g fw-500'>
                            ON SELECT ITEMS
                        </p>
                    </div>
                </div>
            </>
        </div>  
    )
}

export default CouponComponent
