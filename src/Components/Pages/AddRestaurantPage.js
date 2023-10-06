// Importing Components | Modules | Libraries
import React from 'react'
import NavbarComponent from '../Common/NavbarComponent'
import RegisterRestaurantComponent from '../Restaurant/RegisterRestaurantComponent'
import HowItWorksComponent from '../Restaurant/HowItWorksComponent'
import AddRestaurantBannerComponent from '../Restaurant/AddRestaurantBannerComponent' 
import CustomersCarouselsComponent from '../Restaurant/CustomersCarouselsComponent'

const AddRestaurantPage = () => {
    return (
        <div>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Navabar Component */}
                    <NavbarComponent/>
                </div>
                <div className='max-w-4xl ml-auto mr-auto'>
                    {/* Register Restaurant Component */}
                    <RegisterRestaurantComponent/>
                    {/* Customers Carousels Component */}
                    <CustomersCarouselsComponent/>
                    {/* How It Works Component */}
                    <HowItWorksComponent/>
                    {/* Banner Section */}
                    <AddRestaurantBannerComponent/>
                </div>
            </>
        </div>
    )
}

export default AddRestaurantPage
