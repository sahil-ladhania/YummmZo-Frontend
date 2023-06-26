import React from 'react'

const RegisterRestaurantComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-300 flex fd-c jc-sb mb-20'>
                    <div className='fs-xxl fs-r fw-600'>
                        Partner with YummmZo <br /> at 0% commission for the 1st month!
                    </div>
                    <div className='fs-r fs-l'>
                        And get ads worth INR 1500. Valid for new restaurant partners in select cities.
                    </div>
                    <div>
                        <a className='h-40 td-n br-5 fs-r p-10 shadow b-1-d8d8d8-s c-3d3d3d' href="#">Register Your Restaurant</a>
                    </div>
                    <div>
                        <span className='fs-r'>Need help? Please email us at </span>
                        <a className='fs-r td-n c-3d3d3d fw-500' href="mailto:">merchantonboarding@yummmzo.com</a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RegisterRestaurantComponent
