// Importing Components | Modules | Libraries
import React, {useContext , useEffect} from 'react';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import RestaurantSearchComponent from '../Restaurant/RestaurantSearchComponent';
import TopBrandsComponent from '../Restaurant/TopBrandsComponent';
import RestaurantFilterComponent from '../Restaurant/RestaurantFilterComponent';
import RestaurantListComponent from '../Restaurant/RestaurantListComponent';
import { RestaurantContext } from '../../Contexts/RestaurantContext';
import { getAllRestaurants } from '../../Services/RestaurantService';
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

const RestaurantsPage = () => {
    const { restaurants , setRestaurants , filteredRestaurants , setFilteredRestaurants , isFastDeliveryActive , setIsFastDeliveryActive , isRatingActive , setIsRatingActive , isCostLTHActive , setIsCostLTHActive , isCostHTLActive , setIsCostHTLActive  } = useContext(RestaurantContext);
    // Fetching All Restaurants From Database.
    useEffect(() => {
        getAllRestaurants()
            .then((restaurantsList) => {
                setRestaurants(restaurantsList);
                setFilteredRestaurants(restaurantsList);
            })
            .catch((error) => {
                console.log(`Error Fetching Restaurants : ${error}`);
            });
    }, []);
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navbar Component */}
                    <NavbarComponent/>
                    {/* Restaurant Search Bar Component */}
                    <RestaurantSearchComponent/>
                    {/* Top Brands Component */}
                    <TopBrandsComponent/>
                    {/* Filters Component */}
                    <RestaurantFilterComponent restaurants={restaurants} setRestaurants={setRestaurants} filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} isFastDeliveryActive={isFastDeliveryActive} setIsFastDeliveryActive={setIsFastDeliveryActive} isRatingActive={isRatingActive} setIsRatingActive={setIsRatingActive} isCostLTHActive={isCostLTHActive} setIsCostLTHActive={setIsCostLTHActive} isCostHTLActive={isCostHTLActive} setIsCostHTLActive={setIsCostHTLActive}/>
                    {/* Restaurant Lists Component */}
                    <RestaurantListComponent restaurants={restaurants} setRestaurants={setRestaurants} filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} isFastDeliveryActive={isFastDeliveryActive} setIsFastDeliveryActive={setIsFastDeliveryActive} isRatingActive={isRatingActive} setIsRatingActive={setIsRatingActive} isCostLTHActive={isCostLTHActive} setIsCostLTHActive={setIsCostLTHActive} isCostHTLActive={isCostHTLActive} setIsCostHTLActive={setIsCostHTLActive}/>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default RestaurantsPage
