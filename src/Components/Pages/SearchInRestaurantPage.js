// Importing Components | Modules | Libraries
import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import SearchInRestaurantComponent from '../Menu/SearchInRestaurantComponent';

const SearchInRestaurantPage = () => {
    return (
        <div>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Navbar Component */}
                    <NavbarComponent/>
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
