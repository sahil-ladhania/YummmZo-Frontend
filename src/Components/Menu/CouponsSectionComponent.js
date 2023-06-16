import React from 'react'
import CouponComponent from './CouponComponent';

const CouponsSectionComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex jc-sb mb-20'>
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
