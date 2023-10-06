// Importing Components | Modules | Libraries
import React, {useContext , useEffect} from 'react';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import RestaurantSearchComponent from '../Restaurant/RestaurantSearchComponent';
import RestaurantFilterComponent from '../Restaurant/RestaurantFilterComponent';
import RestaurantListComponent from '../Restaurant/RestaurantListComponent';
import { RestaurantContext } from '../../Contexts/RestaurantContext';
import { getAllRestaurants } from '../../Services/RestaurantService';
import { CuisineContext } from '../../Contexts/CuisineContext';
import InspirationForFirstOrderComponent from '../Restaurant/InspirationForFirstOrderComponent';
import { getAllCuisines } from '../../Services/CuisineServices';

const RestaurantsPage = () => {
    // Accessing Cuisines From The Context.
    const {cuisines , setCuisines} = useContext(CuisineContext);
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
    // Fetching Cuisines From Database.
    useEffect(() => {
        getAllCuisines()
            .then((cuisineList) => {
                setCuisines(cuisineList);
            })
            .catch((error) => {
                console.log(`Error Fetching Cuisines : ${error}`);
            });
    }, []);
    return (
        <div>
            <>
                <div className='max-w-5xl ml-auto mr-auto'>
                    {/* Navbar Component */}
                    <NavbarComponent/>
                    {/* Restaurant Search Bar Component */}
                    <RestaurantSearchComponent/>
                    {/* Inspiration Component */}
                    <InspirationForFirstOrderComponent cuisines={cuisines}/>
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
