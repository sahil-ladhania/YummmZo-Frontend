import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import LinkFavSearchComponent from '../Menu/LinkFavSearchComponent';
import RestaurantNameAddressCuisineRatingComponent from '../Menu/RestaurantNameAddressCuisineRatingComponent';
import TimeAndPriceForTwoComponent from '../Menu/TimeAndPriceForTwoComponent';
import CouponsSectionComponent from '../Menu/CouponsSectionComponent';
import VegOnlyToggleComponent from '../Menu/VegOnlyToggleComponent';
import MenuSectionComponent from '../Menu/MenuSectionComponent';
import RestaurantLisenceComponent from '../Menu/RestaurantLisenceComponent';

const MenuPage = () => {
    return (
        <div>
            <>
                {/* Navbar Section */}
                <NavbarComponent/>
                {/* Links | Favourites | Search in Menu Section */}
                <LinkFavSearchComponent/>
                {/* Restaurant Name | Address | Cuisine | Rating Section */}
                <RestaurantNameAddressCuisineRatingComponent/>
                {/* Time and Price for two Section */}
                <TimeAndPriceForTwoComponent/>
                {/* Coupons Section */}
                <CouponsSectionComponent/>
                {/* Veg Only Section */}
                <VegOnlyToggleComponent/>
                {/* Menu Section*/}
                <MenuSectionComponent/>
                {/* Restaurant Lisence Section */}
                <RestaurantLisenceComponent/>
            </>
        </div>
    )
}

export default MenuPage
