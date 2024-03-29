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
import ItemCategoryHeadingComponent from '../Menu/ItemCategoryHeadingComponent';
import { RestaurantDetailsContext } from '../../Contexts/RestaurantDetailsContext';
import { getRestaurantById } from "../../Services/RestaurantService";
import { MenuContext } from '../../Contexts/MenuContext';
import { getAllMenuItemsForRestaurant } from '../../Services/MenuService';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';
import { UserContext } from '../../Contexts/UserContext';
import { PageLoaderContext } from '../../Contexts/PageLoaderContext';
import { CartContext } from '../../Contexts/CartContext';
import ReviewButtonComponent from '../Restaurant/ReviewButtonComponent';
import MenuButtonComponent from '../Restaurant/MenuButtonComponent';

const MenuPage = () => {
    // Getting ID.
    const { userId , restaurantId } = useParams();
    // Accessing Cart State From The Context.
    const {cartState , cartDispatch} = useContext(CartContext);
    // Accessing Loading State From The Context.
    const {loading , setLoading} = useContext(PageLoaderContext);
    // Accessing Input States From The Context.
    const {formData , setFormData , auth , setAuth} = useContext(UserContext);
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    // Accessing restaurantDetails From The Context.
    const { restaurantDetails , setRestaurantDetails } = useContext(RestaurantDetailsContext);
    // Accessing MenuItems From The Context.
    const { menuItems , setMenuItems } = useContext(MenuContext);
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
        <div className=''>
            <>
                <div className='bg-navbar-gradient'>
                    {/* Navbar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} auth={auth} setAuth={setAuth} loading={loading} setLoading={setLoading}/>
                </div>
                <div className='max-w-4xl ml-auto mr-auto'>
                    {/* Links | Favourites | Search in Menu Section */}
                    <LinkFavSearchComponent restaurantDetails={restaurantDetails} auth={auth} setAuth={setAuth}/>
                    {/* Restaurant Name | Address | Cuisine | Rating Section */}
                    <RestaurantNameAddressCuisineRatingComponent restaurantDetails={restaurantDetails}/>
                    {/* Time and Price for two Section */}
                    <TimeAndPriceForTwoComponent restaurantDetails={restaurantDetails}/>
                    {/* Coupons Section */}
                    <CouponsSectionComponent/>
                    <div className='flex items-center'>
                        {/* Veg Only Section */}
                        <VegOnlyToggleComponent/>
                        <div className='flex w-60 justify-around'>
                            {/* Reviews Section */}
                            <ReviewButtonComponent/>
                            {/* Menu Items Section */}
                            <MenuButtonComponent/>
                        </div>
                    </div>
                    {/* -----Menu Section-----*/}
                    {/* Heading Section */}
                    <ItemCategoryHeadingComponent/>
                    {/* Menu Section Component */}
                    <MenuSectionComponent menuItems={menuItems} cartState={cartState} cartDispatch={cartDispatch}/>
                    {/* Restaurant Lisence Section */}
                    <RestaurantLisenceComponent restaurantDetails={restaurantDetails}/>
                </div>
            </>
        </div>
    )
}

export default MenuPage
