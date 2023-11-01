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
import DeliveryAddressComponent from '../Checkout/DeliveryAddressComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';
import { UserContext } from '../../Contexts/UserContext';
import { PageLoaderContext } from '../../Contexts/PageLoaderContext';
import { CartContext } from '../../Contexts/CartContext';

const RestaurantsPage = () => {
    // Accessing Cart State From The Context.
    const {cartState , cartDispatch} = useContext(CartContext);
    // Accessing Loading State From The Context.
    const {loading , setLoading} = useContext(PageLoaderContext);
    // Accessing Input States From The Context.
    const {formData , setFormData , auth , setAuth} = useContext(UserContext);
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
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
        <div className=''>
            <>
                <div className='bg-navbar-gradient'>
                    {/* Navbar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} auth={auth} setAuth={setAuth} loading={loading} setLoading={setLoading}/>
                </div>
                <div className='max-w-5xl ml-auto mr-auto'>
                    {/* Restaurant Search Bar Component */}
                    <RestaurantSearchComponent/>
                    {/* Inspiration Component */}
                    <InspirationForFirstOrderComponent cuisines={cuisines} auth={auth} setAuth={setAuth} loading={loading} setLoading={setLoading}/>
                    {/* Filters Component */}
                    <RestaurantFilterComponent restaurants={restaurants} setRestaurants={setRestaurants} filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} isFastDeliveryActive={isFastDeliveryActive} setIsFastDeliveryActive={setIsFastDeliveryActive} isRatingActive={isRatingActive} setIsRatingActive={setIsRatingActive} isCostLTHActive={isCostLTHActive} setIsCostLTHActive={setIsCostLTHActive} isCostHTLActive={isCostHTLActive} setIsCostHTLActive={setIsCostHTLActive}/>
                    {/* Restaurant Lists Component */}
                    <RestaurantListComponent restaurants={restaurants} setRestaurants={setRestaurants} filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} isFastDeliveryActive={isFastDeliveryActive} setIsFastDeliveryActive={setIsFastDeliveryActive} isRatingActive={isRatingActive} setIsRatingActive={setIsRatingActive} isCostLTHActive={isCostLTHActive} setIsCostLTHActive={setIsCostLTHActive} isCostHTLActive={isCostHTLActive} setIsCostHTLActive={setIsCostHTLActive} loading={loading} setLoading={setLoading} cartState={cartState} cartDispatch={cartDispatch}/>
                </div>
                <div className='bg-footer-black'>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default RestaurantsPage
