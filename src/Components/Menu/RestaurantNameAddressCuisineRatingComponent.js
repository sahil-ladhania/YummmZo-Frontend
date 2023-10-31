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
                            <p className='text-xl font-semibold font-roboto text-secondary'>
                                {restaurantDetails.restaurantName}
                            </p>
                            <p className='text-xs font-roboto text-secondary'>
                                {restaurantDetails.cuisine}
                            </p>
                            <p className='text-xs font-roboto text-secondary'>
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
                <div className='font-roboto text-secondary'>
                        <hr className='dashed'/>
                </div>
            </>
        </div>
    )
}

export default RestaurantNameAddressCuisineRatingComponent
