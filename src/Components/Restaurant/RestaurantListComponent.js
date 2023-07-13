import React from 'react'
import BiryaniRestaurantsComponent from './CuisineRestaurant/BiryaniRestaurantsComponent';

const RestaurantListComponent = ({restaurants}) => {
    return (
        <div>
            <>
                <div className='flex fw-w jc-sb'> 
                    {
                        restaurants.map((restaurant , index) => (
                            <BiryaniRestaurantsComponent
                                key={restaurant.id}
                                restaurant={restaurant}
                            />
                        ))
                    }
                </div>
            </>
        </div>
    )
}

export default RestaurantListComponent
