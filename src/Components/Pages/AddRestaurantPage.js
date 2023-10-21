// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import NavbarComponent from '../Common/NavbarComponent'
import RegisterRestaurantComponent from '../Restaurant/RegisterRestaurantComponent'
import HowItWorksComponent from '../Restaurant/HowItWorksComponent'
import AddRestaurantBannerComponent from '../Restaurant/AddRestaurantBannerComponent' 
import CustomersCarouselsComponent from '../Restaurant/CustomersCarouselsComponent'
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';

const AddRestaurantPage = () => {
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    return (
        <div className='bg-page-background'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Navabar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation}/>
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
