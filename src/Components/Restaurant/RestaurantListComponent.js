import React, {useContext} from 'react'
import RestaurantComponent from './CuisineRestaurant/RestaurantComponent';
import { RestaurantContext } from '../../Contexts/RestaurantContext';

const RestaurantListComponent = ({ restaurants }) => {
    const { filteredRestaurants } = useContext(RestaurantContext);
    return (
        <div>
            <>
                <div className='flex flex-wrap justify-between'> 
                    {
                        filteredRestaurants.map((restaurant , index) => (
                            <RestaurantComponent
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
