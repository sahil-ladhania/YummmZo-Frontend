import React from 'react'
import CouponComponent1 from './CouponComponent1';
import CouponComponent2 from './CouponComponent2';
import CouponComponent3 from './CouponComponent3';
import CouponComponent4 from './CouponComponent4';
import CouponComponent5 from './CouponComponent5';

const CouponsSectionComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-40 flex items-center overflow-x-auto space-x-4'>
                    {/* Coupon Components */}
                    <CouponComponent1 />
                    <CouponComponent2 />
                    <CouponComponent3 />
                    <CouponComponent4 />
                    <CouponComponent5 />
                </div>
            </>
        </div>
    )
}

export default CouponsSectionComponent
