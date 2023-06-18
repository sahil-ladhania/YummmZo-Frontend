import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import LogInPage from './Components/Pages/LogInPage';
import SignUpPage from './Components/Pages/SignUpPage';
import HomePage from './Components/Pages/HomePage';
import RestaurantsPage from './Components/Pages/RestaurantsPage';
import EmptyCartPage from './Components/Pages/EmptyCartPage';
import CheckoutPage from './Components/Pages/CheckoutPage';
import HelpAndSupportPage from './Components/Pages/HelpAndSupportPage';
import ProfileDropdownComponent from './Components/Common/ProfileDropdownComponent';
import CartComponent from './Components/Cart/CartComponent';
import EmptyCartComponent from './Components/Cart/EmptyCartComponent';
import AddNewAddressComponent from './Components/Checkout/AddNewAddressComponent';
import MenuPage from './Components/Pages/MenuPage';

function App() {
  return (
    <div className="App">
      <>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/restaurants" element={<RestaurantsPage/>}/>
          <Route path="/helpandsupport" element={<HelpAndSupportPage/>}/>
          <Route path="/login" element={<LogInPage/>}/>
          <Route path="/cart" element={<EmptyCartPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/landing" element={<LandingPage/>}/>
        </Routes>
        {/* Landing Page */}
        {/* <LandingPage/> */}
        {/* Sign Up Page */}
        {/* <SignUpPage/> */}
        {/* Log In Page */}
        {/* <LogInPage/> */}
        {/* Home Page */}
        {/* <HomePage/> */}
        {/* Restaurants Page */}
        {/* <RestaurantsPage/> */}
        {/* Empty Cart Page */}
        {/* <EmptyCartPage/> */}
        {/* Checkout Page */}
        {/* <CheckoutPage/> */}
        {/* Help and Support Page */}
        {/* <HelpAndSupportPage/> */}
        {/* Profile Dropdown Component */}
        {/* <ProfileDropdownComponent/> */}
        {/* Cart Dropdown Component */}
        {/* <CartComponent/> */}
        {/* Empty Cart Dropdown Component */}
        {/* <EmptyCartComponent/> */}
        {/* Add New Address Component */}
        {/* <AddNewAddressComponent/> */}
        {/* Menu Page */}
        {/* <MenuPage/> */}
      </>
    </div>
  );
}

export default App;
