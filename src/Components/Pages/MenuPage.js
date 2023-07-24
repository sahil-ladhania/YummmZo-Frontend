// Importing Components | Modules | Libraries
import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantDetailsContext, RestaurantDetailsProvider } from '../../Contexts/RestaurantDetailsContext';
import { MenuItemsContext, MenuItemsProvider } from '../../Contexts/MenuContext';
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
    // Defining Context.
    const restaurantDetails = useContext(RestaurantDetailsContext);
    const menuItems = useContext(MenuItemsContext)
    const {id} = useParams();
    return (
        <div>
            <>
                <RestaurantDetailsProvider id={id}>
                    <MenuItemsProvider restaurantId={id}>
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
                            <RestaurantLisenceComponent/>
                            {/* Footer Component */}
                            <FooterComponent/>
                        </div>
                    </MenuItemsProvider>
                </RestaurantDetailsProvider>
            </>
        </div>
    )
}

export default MenuPage
