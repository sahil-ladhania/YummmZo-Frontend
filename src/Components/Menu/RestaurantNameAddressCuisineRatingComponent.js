import React from 'react'
import StarAndRatingComponent from './StarAndRatingComponent';

const RestaurantNameAddressCuisineRatingComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-100 flex jc-sb ai-c'>
                    {/* Name | Cuisine | Address Section */}
                    <div>
                        <div>
                            <p className='fs-xl mb-5'>
                                Subway
                            </p>
                            <p className='fs-s mb-5'>
                                Salads , Snacks
                            </p>
                            <p className='fs-s'>
                                Vasundhra , 3.7km
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
                        <hr />
                </div>
            </>
        </div>
    )
}

export default RestaurantNameAddressCuisineRatingComponent
