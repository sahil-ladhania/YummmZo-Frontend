import React from 'react'
import RestaurantDetailComponent from './RestaurantDetailComponent';

const RestaurantListComponent = () => {
    return (
        <div>
            <>
                {/* Restaurant Detail Component */}
                <div className='flex fw-w jc-sb'> 
                    <RestaurantDetailComponent/>
                </div>
            </>
        </div>
    )
}

export default RestaurantListComponent
