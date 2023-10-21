import React from 'react'
import { Link } from 'react-router-dom'

const ImageContentButtonComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex flex-col items-center h-screen justify-center'>
                    {/* Image Section */}
                    <div>
                        <img className='h-96' src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="Empty-Cart-Image" />
                    </div>
                    {/* Content Section */}
                    <div className='flex flex-col items-center h-36 justify-center'>
                        <div className='text-2xl font-semibold h-10 font-roboto text-yummmzo-color'>
                            Your cart is empty
                        </div>
                        <div className='text-sm h-10 font-roboto text-yummmzo-color'>
                            You can go to home page to view more restaurants
                        </div>
                    </div>
                    {/* Button Section */}
                    <div>
                        <Link className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm font-roboto' to="/restaurants">See Restaurants near you</Link>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ImageContentButtonComponent
