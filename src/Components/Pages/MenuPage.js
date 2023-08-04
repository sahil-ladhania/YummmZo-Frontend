// Importing Components | Modules | Libraries
import React, {useContext} from 'react';
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
    const { restaurantId } = useParams(); 
    const restaurantDetails = useContext(RestaurantDetailsContext);
    console.log("Restaurant details from context:", restaurantDetails); 
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navbar Section */}
                    <NavbarComponent/>
                    {/* Links | Favourites | Search in Menu Section */}
                    <LinkFavSearchComponent {...restaurantDetails}/>
                    {/* Restaurant Name | Address | Cuisine | Rating Section */}
                    <RestaurantNameAddressCuisineRatingComponent {...restaurantDetails}/>
                    {/* Time and Price for two Section */}
                    <TimeAndPriceForTwoComponent {...restaurantDetails}/>
                    {/* Coupons Section */}
                    <CouponsSectionComponent/>
                    {/* Veg Only Section */}
                    <VegOnlyToggleComponent/>
                    {/* Menu Section*/}
                    {/* Heading Section */}
                    <ItemCategoryHeadingComponent/>
                    {/* Menu Section Component */}
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
