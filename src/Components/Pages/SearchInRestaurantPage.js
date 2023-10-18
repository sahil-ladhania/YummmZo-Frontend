// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import SearchInRestaurantComponent from '../Menu/SearchInRestaurantComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';

const SearchInRestaurantPage = () => {
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    return (
        <div className='bg-slate-800'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Navbar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation}/>
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
