import './App.css';
import '@radix-ui/themes/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Components/Pages/LandingPage';
import LogInPage from './Components/Pages/LogInPage';
import SignUpPage from './Components/Pages/SignUpPage';
import HomePage from './Components/Pages/HomePage';
import RestaurantsPage from './Components/Pages/RestaurantsPage';
import EmptyCartPage from './Components/Pages/EmptyCartPage';
import MenuPage from './Components/Pages/MenuPage';
import AddRestaurantPage from './Components/Pages/AddRestaurantPage';
import RegisterRestaurantPage from './Components/Pages/RegisterRestaurantPage';
import SearchInRestaurantPage from './Components/Pages/SearchInRestaurantPage';
import FourZeroFourPage from './Components/Pages/FourZeroFourPage';
import { RestaurantProvider } from './Contexts/RestaurantContext';
import CheckoutPage from './Components/Pages/CheckoutPage';
import { RestaurantDetailsProvider } from './Contexts/RestaurantDetailsContext';
import { MenuContextProvider } from './Contexts/MenuContext';
import { CuisineContextProvider } from './Contexts/CuisineContext';
import { UserContextProvider } from './Contexts/UserContext';
import { UserCurrentLocationContextProvider } from './Contexts/UserCurrentLocationContext';
import { PageLoaderContextProvider } from './Contexts/PageLoaderContext';
import { CartContextProvider } from './Contexts/CartContext';
import ReviewListComponent from './Components/Restaurant/ReviewListComponent';

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
                          <CartContextProvider>
                              <Routes>
                                <Route exact path="/" element={<LandingPage/>}/>
                                <Route path="/login" element={<LogInPage/>}/>
                                <Route path="/signup" element={<SignUpPage/>}/>
                                <Route path="/home" element={<HomePage/>}/>
                                <Route path="/home/userId/:userId" element={<HomePage/>}/>
                                <Route path="/restaurants" element={<RestaurantsPage/>}/>
                                <Route path="/restaurants/:userId" element={<RestaurantsPage/>}/>
                                <Route path="/addRestaurant" element={<AddRestaurantPage/>}/>
                                <Route path="/addRestaurant/:userId" element={<AddRestaurantPage/>}/>
                                <Route path="/registerRestaurant" element={<RegisterRestaurantPage/>}/>
                                <Route path="/registerRestaurant/:userId" element={<RegisterRestaurantPage/>}/>
                                <Route path="/menu/:restaurantId" element={<MenuPage/>}/>
                                <Route path="/menu/:userId/:restaurantId" element={<MenuPage/>}/>
                                <Route path="/searchInRestaurant" element={<SearchInRestaurantPage/>}/>
                                <Route path="/searchInRestaurant/:userId/:restaurantId" element={<SearchInRestaurantPage/>}/>
                                <Route path="/cart/:userId" element={<EmptyCartPage/>}/>
                                <Route path="/userReview" element={<ReviewListComponent/>}/>
                                {/* <Route path="/checkout/:userId" element={<CheckoutPage/>}/> */}
                                <Route path="*" element={<FourZeroFourPage/>}/>
                              </Routes>
                            </CartContextProvider>
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
