import React from 'react'
import StarAndRatingComponent from './StarAndRatingComponent';

const RestaurantNameAddressCuisineRatingComponent = ({restaurantDetails}) => {
    const {restaurantName , cuisine , restaurantCompleteAddress} = restaurantDetails;
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-100 flex jc-sb ai-c'>
                    {/* Name | Cuisine | Address Section */}
                    <div>
                        <div>
                            <p className='fs-xl mb-5 fs-r fw-500 ls-1'>
                                {restaurantName}
                            </p>
                            <p className='fs-s mb-5 fs-r c-g'>
                                {cuisine}
                            </p>
                            <p className='fs-s fs-r c-g'>
                                {restaurantCompleteAddress}
                            </p>
                        </div>
                    </div>
                    {/* Rating Section */}
                    <div>
                        <StarAndRatingComponent/>
                    </div>
                </div>
                {/* Divider Section */}
                <div className='mb-20'>
                        <hr className='dashed'/>
                </div>
            </>
        </div>
    )
}

export default RestaurantNameAddressCuisineRatingComponent
