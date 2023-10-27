// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import NavbarComponent from '../Common/NavbarComponent'
import RegisterRestaurantComponent from '../Restaurant/RegisterRestaurantComponent'
import HowItWorksComponent from '../Restaurant/HowItWorksComponent'
import AddRestaurantBannerComponent from '../Restaurant/AddRestaurantBannerComponent' 
import CustomersCarouselsComponent from '../Restaurant/CustomersCarouselsComponent'
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';
import { UserContext } from '../../Contexts/UserContext';
import { PageLoaderContext } from '../../Contexts/PageLoaderContext';

const AddRestaurantPage = () => {
    // Accessing Loading State From The Context.
    const {loading , setLoading} = useContext(PageLoaderContext);
    // Accessing Input States From The Context.
    const {formData , setFormData , auth , setAuth} = useContext(UserContext);
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    return (
        <div className='bg-gradient-tl-br'>
            <>
                <div className='bg-navbar-gradient'>
                    {/* Navabar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} auth={auth} setAuth={setAuth} loading={loading} setLoading={setLoading}/>
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
