import React from 'react'
import CouponComponent from './CouponComponent';

const CouponsSectionComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-40 flex items-center justify-between'>
                    {/* Coupen's Section */}
                    <CouponComponent/>
                    <CouponComponent/>
                    <CouponComponent/>
                </div>
            </>
        </div>
    )
}

export default CouponsSectionComponent
