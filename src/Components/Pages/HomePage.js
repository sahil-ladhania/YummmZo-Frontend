// Importing Components | Modules | Libraries
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import NavbarComponent from '../Common/NavbarComponent'
import PopularCuisinesComponent from '../Layout/PopularCuisinesComponent'
import AnythingDeliveredComponent from '../Layout/AnythingDeliveredComponent'
import FooterComponent from '../Common/FooterComponent';
import { CuisineContext } from '../../Contexts/CuisineContext';
import { getAllCuisines } from '../../Services/CuisineServices';
import MobileBottomNavbar from '../Common/MobileBottomNavbar';
import MobileTopNavbar from '../Common/MobileTopNavbar';
import ViewRestaurantsCardComponent from '../Common/ViewRestaurantsCardComponent';

const HomePage = () => {
    // Accessing Cuisines From The Context.
    const {cuisines , setCuisines} = useContext(CuisineContext);
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
                    <div className='hidden sm:block'>
                        {/* Navbar Component */}
                        <NavbarComponent/>
                        {/* Popular Cuisines Component */}
                        <PopularCuisinesComponent cuisines={cuisines}/>
                        {/* Anything Delivered Component */}
                        <AnythingDeliveredComponent/>
                        {/* Footer Component */}
                        <FooterComponent/>
                    </div>
                    <div className='block sm:hidden'>
                        <div> 
                            <MobileTopNavbar/>
                        </div>
                        <div className='overflow-y-scroll'>
                            <ViewRestaurantsCardComponent/>
                            <ViewRestaurantsCardComponent/>
                            <ViewRestaurantsCardComponent/>
                            <ViewRestaurantsCardComponent/>
                            <ViewRestaurantsCardComponent/>
                        </div>
                        <div>
                            <MobileBottomNavbar/>
                        </div>
                    </div>
                </div>
            </>
        </div> 
    )
}

export default HomePage
