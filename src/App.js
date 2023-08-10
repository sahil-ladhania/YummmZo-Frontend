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
import { RestaurantDetailsProvider } from './Contexts/RestaurantDetailsContext';
import { MenuItemsProvider } from './Contexts/MenuContext';
import ProfileDropdownComponent from './Components/Common/ProfileDropdownComponent';

function App() {
  return (
    <div className="App">
      <>
        {/* Routes */}
        <RestaurantProvider>
          <RestaurantDetailsProvider>
            <MenuItemsProvider>
              <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
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
                <Route path="*" element={<FourZeroFourPage/>}/>
              </Routes>
            </MenuItemsProvider>
          </RestaurantDetailsProvider>
        </RestaurantProvider>
        <ToastContainer/>
      </>
    </div>
  );
}

export default App;
