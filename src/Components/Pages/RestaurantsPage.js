import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import RestaurantSearchComponent from '../Restaurant/RestaurantSearchComponent';
import TopBrandsComponent from '../Restaurant/TopBrandsComponent';
import RestaurantFilterComponent from '../Restaurant/RestaurantFilterComponent';
import RestaurantListComponent from '../Restaurant/RestaurantListComponent';

const RestaurantsPage = () => {
    return (
        <div>
            <>
                {/* Navbar Component */}
                <NavbarComponent/>
                {/* Restaurant Search Bar Component */}
                <RestaurantSearchComponent/>
                {/* Top Brands Component */}
                <TopBrandsComponent/>
                {/* Filters Component */}
                <RestaurantFilterComponent/>
                {/* Restaurant Lists Component */}
                <RestaurantListComponent/>
                {/* Footer Component */}
                <FooterComponent/>
            </>
        </div>
    )
}

export default RestaurantsPage
