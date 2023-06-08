import React from 'react'
import RestaurantDetailComponent from './RestaurantDetailComponent';

const RestaurantListComponent = () => {
    return (
        <div>
            <>
                {/* Restaurant Detail Component */}
                <div>
                    <ul>
                        <li><RestaurantDetailComponent/></li>
                        <li><RestaurantDetailComponent/></li>
                        <li><RestaurantDetailComponent/></li>
                        <li><RestaurantDetailComponent/></li>
                        <li><RestaurantDetailComponent/></li>
                        <li><RestaurantDetailComponent/></li>
                    </ul>
                </div>
            </>
        </div>
    )
}

export default RestaurantListComponent
