import React from 'react'
import StarAndRatingComponent from './StarAndRatingComponent';

const RestaurantNameAddressCuisineRatingComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Name | Cuisine | Address Section */}
                    <div>
                        <div>
                            <p>
                                Subway
                            </p>
                            <p>
                                Salads , Snacks
                            </p>
                            <p>
                                Vasundhra , 3.7km
                            </p>
                        </div>
                    </div>
                    {/* Rating Section */}
                    <div>
                        <StarAndRatingComponent/>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantNameAddressCuisineRatingComponent
