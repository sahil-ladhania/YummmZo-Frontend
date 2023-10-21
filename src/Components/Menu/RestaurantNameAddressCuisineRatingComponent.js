import React from 'react'
import StarAndRatingComponent from './StarAndRatingComponent';

const RestaurantNameAddressCuisineRatingComponent = ({ restaurantDetails }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex items-center justify-between mb-5'>
                    {/* Name | Cuisine | Address Section */}
                    <div>
                        <div>
                            <p className='text-xl font-semibold font-roboto text-yummmzo-color'>
                                {restaurantDetails.restaurantName}
                            </p>
                            <p className='text-xs font-roboto text-yummmzo-color'>
                                {restaurantDetails.cuisine}
                            </p>
                            <p className='text-xs font-roboto text-yummmzo-color'>
                                {restaurantDetails.restaurantCompleteAddress}
                            </p>
                        </div>
                    </div>
                    {/* Rating Section */}
                    <div>
                        <StarAndRatingComponent restaurantDetails={restaurantDetails}/>
                    </div>
                </div>
                {/* Divider Section */}
                <div className='font-roboto text-yummmzo-color'>
                        <hr className='dashed'/>
                </div>
            </>
        </div>
    )
}

export default RestaurantNameAddressCuisineRatingComponent
