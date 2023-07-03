import React from 'react'
import RestaurantForm from './RestaurantForm'
import MenuItemForm from './MenuItemForm'
import RestaurantTypeFormComponent from './RestaurantTypeFormComponent'
import RestaurantPageSidebarComponent from './RestaurantPageSidebarComponent'

const AddRestaurantFormComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <RestaurantPageSidebarComponent/>
                    {/* <RestaurantForm/>
                    <RestaurantTypeFormComponent/>
                    <MenuItemForm/> */}
                </div>
            </>
        </div>
    )
}

export default AddRestaurantFormComponent
