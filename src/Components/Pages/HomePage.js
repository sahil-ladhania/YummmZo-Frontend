// Importing Components | Modules | Libraries
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import NavbarComponent from '../Common/NavbarComponent'
import PopularCuisinesComponent from '../Layout/PopularCuisinesComponent'
import AnythingDeliveredComponent from '../Layout/AnythingDeliveredComponent'
import FooterComponent from '../Common/FooterComponent';
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

const HomePage = () => {
    const [user , setUser] = useState(null);
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const location = useLocation();
    const handleToken = () => {
        const token = new URLSearchParams(location.search).get('token');
        if(token){
            const decoded = jwt_decode(token);
            setUser(decoded);
            setIsAuthenticated(true);
        }
    }
    useEffect(() => {
        handleToken();
    },[]);
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navbar Component */}
                    <NavbarComponent/>
                    {/* Popular Cuisines Component */}
                    <PopularCuisinesComponent/>
                    {/* Anything Delivered Component */}
                    <AnythingDeliveredComponent/>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default HomePage
