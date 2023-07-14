import React from 'react'
import RestaurantPageSidebarComponent from './RestaurantPageSidebarComponent'
import RestaurantInformationComponent from './RestaurantInformationComponent'

const AddRestaurantFormComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r'>
                    <RestaurantPageSidebarComponent/>
                    <RestaurantInformationComponent/>
                </div>
            </>
        </div>
    )
}

export default AddRestaurantFormComponent
