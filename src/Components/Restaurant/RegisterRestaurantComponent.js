import React from 'react'
import { Link } from 'react-router-dom'

const RegisterRestaurantComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-96 flex flex-col justify-evenly'>
                    <div className='text-4xl font-roboto text-yummmzo-color'>
                        Partner with YummmZo <br /> at 0% commission for the 1st month!
                    </div>
                    <div className='text-md font-medium font-roboto text-yummmzo-color'>
                        And get ads worth INR 1500. Valid for new restaurant partners in select cities.
                    </div>
                    <div>
                        <Link className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm font-roboto hover:animate-glow-light' to="/registerRestaurant">Register Your Restaurant</Link>
                    </div>
                    <div>
                        <span className='text-sm font-roboto text-yummmzo-color'>Need help? Please email us at </span>
                        <a className='text-sm font-bold font-roboto text-yummmzo-color' href="mailto:">merchantonboarding@yummmzo.com</a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RegisterRestaurantComponent
