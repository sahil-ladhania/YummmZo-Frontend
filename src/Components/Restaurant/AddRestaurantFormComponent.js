import React from 'react'
import RestaurantForm from './RestaurantForm'
import MenuItemForm from './MenuItemForm'
import RestaurantTypeFormComponent from './RestaurantTypeFormComponent'

const AddRestaurantFormComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <RestaurantForm/>
                    <RestaurantTypeFormComponent/>
                    <MenuItemForm/>
                </div>
            </>
        </div>
    )
}

export default AddRestaurantFormComponent
