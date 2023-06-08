import './App.css';
import ProfileDropdownComponent from './Components/Common/ProfileDropdownComponent';
import HomePage from './Components/Pages/HomePage';
import LandingPage from './Components/Pages/LandingPage';
import LogInPage from './Components/Pages/LogInPage';
import RestaurantsPage from './Components/Pages/RestaurantsPage';
import SignUpPage from './Components/Pages/SignUpPage';

function App() {
  return (
    <div className="App">
      <>
        {/* -----Landing Page----- */}
        {/* <LandingPage/> */}
        {/* -----Sign Up Page----- */}
        {/* <SignUpPage/> */}
        {/* -----Log In Page----- */}
        {/* <LogInPage/> */}
        {/* -----Home Page----- */}
        {/* <HomePage/> */}
        {/* -----Profile Dropdown----- */}
        {/* <ProfileDropdownComponent/> */}
        {/* -----Restaurants Page----- */}
        <RestaurantsPage/>
      </>
    </div>
  );
}

export default App;
