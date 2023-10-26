import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Components/Pages/LandingPage';
import LogInPage from './Components/Pages/LogInPage';
import SignUpPage from './Components/Pages/SignUpPage';
import HomePage from './Components/Pages/HomePage';
import RestaurantsPage from './Components/Pages/RestaurantsPage';
import EmptyCartPage from './Components/Pages/EmptyCartPage';
import HelpAndSupportPage from './Components/Pages/HelpAndSupportPage';
import MenuPage from './Components/Pages/MenuPage';
import AddRestaurantPage from './Components/Pages/AddRestaurantPage';
import RegisterRestaurantPage from './Components/Pages/RegisterRestaurantPage';
import SearchInRestaurantPage from './Components/Pages/SearchInRestaurantPage';
import FourZeroFourPage from './Components/Pages/FourZeroFourPage';
import { RestaurantProvider } from './Contexts/RestaurantContext';
import CheckoutPage from './Components/Pages/CheckoutPage';
import CartComponent from '../src/Components/Cart/CartComponent';
import ProfileDropdownComponent from './Components/Common/ProfileDropdownComponent';
import { RestaurantDetailsProvider } from './Contexts/RestaurantDetailsContext';
import { MenuContextProvider } from './Contexts/MenuContext';
import CuisineResults from './Components/Restaurant/CuisineResults';
import RestaurantResults from './Components/Restaurant/RestaurantResults';
import MenuItemsResultComponent from './Components/Menu/MenuItemsResultComponent';
import { CuisineContextProvider } from './Contexts/CuisineContext';
import { UserContextProvider } from './Contexts/UserContext';
import { UserCurrentLocationContextProvider } from './Contexts/UserCurrentLocationContext';
import EmptyCartComponent from './Components/Cart/EmptyCartComponent';
import { PageLoaderContextProvider } from './Contexts/PageLoaderContext';

function App() {
  return (
    <div className="App">
      <>
        {/* Routes */}
        <PageLoaderContextProvider>
          <UserCurrentLocationContextProvider>
            <UserContextProvider>
              <CuisineContextProvider>
                  <MenuContextProvider>
                    <RestaurantDetailsProvider>
                      <RestaurantProvider>
                            <Routes>
                              <Route exact path="/" element={<LandingPage/>}/>
                              <Route exact path="/profile" element={<ProfileDropdownComponent/>}/>
                              <Route exact path="/cartComponent" element={<CartComponent/>}/>
                              <Route exact path="/emptyCartComponent" element={<EmptyCartComponent/>}/>
                              <Route path="/home" element={<HomePage/>}/>
                              <Route path="/restaurants" element={<RestaurantsPage/>}/>
                              <Route path="/addRestaurant" element={<AddRestaurantPage/>}/>
                              <Route path="/registerRestaurant" element={<RegisterRestaurantPage/>}/>
                              <Route path="/helpandsupport" element={<HelpAndSupportPage/>}/>
                              <Route path="/login" element={<LogInPage/>}/>
                              <Route path="/cart" element={<EmptyCartPage/>}/>
                              <Route path="/checkout" element={<CheckoutPage/>}/>
                              <Route path="/cartComponent" element={<CartComponent/>}/>
                              <Route path="/signup" element={<SignUpPage/>}/>
                              <Route path="/landing" element={<LandingPage/>}/>
                              <Route path="/menu/:restaurantId" element={<MenuPage/>}/>
                              <Route path="/searchInRestaurant" element={<SearchInRestaurantPage/>}/>
                              <Route path="/profile" element={<ProfileDropdownComponent/>}/>
                              <Route path="/cuisineResult" element={<CuisineResults/>}/>
                              <Route path="/restaurantResult" element={<RestaurantResults/>}/>
                              <Route path="/menuItemResult" element={<MenuItemsResultComponent/>}/>
                              <Route path="*" element={<FourZeroFourPage/>}/>
                            </Routes>
                      </RestaurantProvider>
                      <ToastContainer/>
                    </RestaurantDetailsProvider>
                  </MenuContextProvider>
              </CuisineContextProvider>
            </UserContextProvider>
          </UserCurrentLocationContextProvider>
        </PageLoaderContextProvider>
      </>
    </div>
  );
}

export default App;
