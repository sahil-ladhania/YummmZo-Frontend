import React from 'react'
import { UilPercentage } from '@iconscout/react-unicons'

const CouponComponent = () => {
    return (
        <div>
            <>  
                {/* Main Component */}
                <div className='h-100 w-300 flex fd-c jc-se p-10-20 b-1-b-s'>
                    {/* First Child */}
                    <div className='flex'>
                        <UilPercentage className='h-20 w-a mr-10'/>
                        <p className='fs-s'>40% OFF UPTO ₹80</p>
                    </div>
                    {/* Second Child */}
                    <div className='flex'>
                        <p className='fs-s'>
                            USE TRYNEW
                        </p>
                        <p className='mr-5 ml-5 fs-s'>|</p>
                        <p className='fs-s'>
                            ON SELECT ITEMS
                        </p>
                    </div>
                </div>
            </>
        </div>  
    )
}

export default CouponComponent
