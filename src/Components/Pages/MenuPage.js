// Importing Components | Modules | Libraries
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import { RestaurantDetailsContext } from '../../Contexts/RestaurantDetailsContext';
import { getRestaurantById } from "../../Services/RestaurantService";
import { MenuContext } from '../../Contexts/MenuContext';
import { getAllMenuItemsForRestaurant } from '../../Services/MenuService';
import { CartContext } from '../../Contexts/CartContext';
import { getCartDetailsForUser } from '../../Services/CartService';
// Importing CSS Files
import '../../Styles/Links.css'
import '../../Styles/Buttons.css'
import '../../Styles/Card.css'
import '../../Styles/Colors.css'
import '../../Styles/Layout.css'
import '../../Styles/Spacing.css'
import '../../Styles/AnimationAndTransition.css'
import '../../Styles/Text.css'
import '../../Styles/Input.css'
import '../../Styles/Navbar.css'
import '../../Styles/Footer.css'
import '../../Styles/Main.css'

const MenuPage = () => {
    // Accessing restaurantDetails From The Context.
    const { restaurantDetails , setRestaurantDetails } = useContext(RestaurantDetailsContext);
    // Accessing MenuItems From The Context.
    const { menuItems , setMenuItems } = useContext(MenuContext);
    // Getting ID.
    const { restaurantId } = useParams();
    // Fetching Restaurant Details From Database.
    useEffect(() => {
        if(restaurantId){
            // Fetch Restaurant Details Only If restaurantId Is Available.
            getRestaurantById(restaurantId)
                .then((restaurantData) => {
                    setRestaurantDetails(restaurantData);
                })
                .catch((error) => {
                    console.log(`Error Fetching Restaurant Details : ${error}`);
                });
        }
    }, [restaurantId, setRestaurantDetails]);
    // Fetching Menu Items From Database.
    useEffect(() => {
        if(restaurantId){
            // Fetch Menu Items Only If restaurantId Is Available.
            getAllMenuItemsForRestaurant(restaurantId)
                .then((menuItems) => {
                    setMenuItems(menuItems);
                })
                .catch((error) => {
                    console.log(`Error Fetching Menu Items : ${error}`);
                })
        }
    }, [restaurantId , setMenuItems]);
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navbar Section */}
                    <NavbarComponent/>
                    {/* Links | Favourites | Search in Menu Section */}
                    <LinkFavSearchComponent restaurantDetails={restaurantDetails}/>
                    {/* Restaurant Name | Address | Cuisine | Rating Section */}
                    <RestaurantNameAddressCuisineRatingComponent restaurantDetails={restaurantDetails}/>
                    {/* Time and Price for two Section */}
                    <TimeAndPriceForTwoComponent restaurantDetails={restaurantDetails}/>
                    {/* Coupons Section */}
                    <CouponsSectionComponent/>
                    {/* Veg Only Section */}
                    <VegOnlyToggleComponent/>
                    {/* Menu Section*/}
                    {/* Heading Section */}
                    <ItemCategoryHeadingComponent/>
                    {/* Menu Section Component */}
                    <MenuSectionComponent menuItems={menuItems}/>
                    {/* Restaurant Lisence Section */}
                    <RestaurantLisenceComponent restaurantDetails={restaurantDetails}/>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default MenuPage
