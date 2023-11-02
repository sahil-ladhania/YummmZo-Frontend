// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import SearchInRestaurantComponent from '../Menu/SearchInRestaurantComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';
import { UserContext } from '../../Contexts/UserContext';

const SearchInRestaurantPage = () => {
    // Accessing Input States From The Context.
    const {formData , setFormData , auth , setAuth} = useContext(UserContext);
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    return (
        <div className=''>
            <>
                <div className='bg-navbar-gradient'>
                    {/* Navbar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} auth={auth} setAuth={setAuth}/>
                </div>
                <div className='max-w-4xl ml-auto mr-auto'>
                    {/* Search Bar */}
                    <SearchInRestaurantComponent/>
                </div>
            </>
        </div>
    )
}

export default SearchInRestaurantPage
