import './App.css';
import LandingPage from './Components/Pages/LandingPage';
import LogInPage from './Components/Pages/LogInPage';
import SignUpPage from './Components/Pages/SignUpPage';
import HomePage from './Components/Pages/HomePage';
import RestaurantsPage from './Components/Pages/RestaurantsPage';
import EmptyCartPage from './Components/Pages/EmptyCartPage';
import CheckoutPage from './Components/Pages/CheckoutPage';

function App() {
  return (
    <div className="App">
      <>
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
        <CheckoutPage/>
      </>
    </div>
  );
}

export default App;
