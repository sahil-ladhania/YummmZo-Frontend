import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import LinkFavSearchComponent from '../Menu/LinkFavSearchComponent';
import RestaurantNameAddressCuisineRatingComponent from '../Menu/RestaurantNameAddressCuisineRatingComponent';
import TimeAndPriceForTwoComponent from '../Menu/TimeAndPriceForTwoComponent';
import CouponsSectionComponent from '../Menu/CouponsSectionComponent';
import VegOnlyToggleComponent from '../Menu/VegOnlyToggleComponent';
import MenuSectionComponent from '../Menu/MenuSectionComponent';
import RestaurantLisenceComponent from '../Menu/RestaurantLisenceComponent';
import FooterComponent from '../Common/FooterComponent';
import ItemCategoryHeadingComponent from '../Menu/ItemCategoryHeadingComponent';

const MenuPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
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
                    {/* Heading Section */}
                    <ItemCategoryHeadingComponent/>
                    {/* Menu Section Component */}
                    <MenuSectionComponent/>
                    <MenuSectionComponent/>
                    <MenuSectionComponent/>
                    <MenuSectionComponent/>
                    <MenuSectionComponent/>
                    {/* Restaurant Lisence Section */}
                    <RestaurantLisenceComponent/>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default MenuPage
