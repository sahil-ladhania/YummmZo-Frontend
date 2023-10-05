// Importing Components | Modules | Libraries
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import NavbarComponent from '../Common/NavbarComponent'
import PopularCuisinesComponent from '../Layout/PopularCuisinesComponent'
import FooterComponent from '../Common/FooterComponent';
import { CuisineContext } from '../../Contexts/CuisineContext';
import { getAllCuisines } from '../../Services/CuisineServices';
import TopBrandsComponent from '../Restaurant/TopBrandsComponent';

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
                    {/* Navbar Component */}
                    <NavbarComponent/>
                    {/* Popular Cuisines Component */}
                    <PopularCuisinesComponent cuisines={cuisines}/>
                    {/* Top Brands Component */}
                    <TopBrandsComponent/>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div> 
    )
}

export default HomePage
