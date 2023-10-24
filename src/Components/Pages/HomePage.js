// Importing Components | Modules | Libraries
import React, { useContext, useEffect, useState } from 'react';
import NavbarComponent from '../Common/NavbarComponent'
import PopularCuisinesComponent from '../Layout/PopularCuisinesComponent'
import FooterComponent from '../Common/FooterComponent';
import { CuisineContext } from '../../Contexts/CuisineContext';
import { getAllCuisines } from '../../Services/CuisineServices';
import TopBrandsComponent from '../Restaurant/TopBrandsComponent';
import GetYummmZoAppComponent from '../Layout/GetYummmZoAppComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';
import { UserContext } from '../../Contexts/UserContext';

const HomePage = () => {
    // Accessing Input States From The Context.
    const {formData , setFormData , auth , setAuth} = useContext(UserContext);
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    // Accessing Cuisines From The Context.
    const {cuisines , setCuisines} = useContext(CuisineContext);
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
        <div className='bg-page-background'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Navbar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} auth={auth} setAuth={setAuth}/>
                </div>
                <div className='max-w-5xl ml-auto mr-auto'>
                    {/* Popular Cuisines Component */}
                    <PopularCuisinesComponent cuisines={cuisines}/>
                    {/* Top Brands Component */}
                    <TopBrandsComponent/>
                    {/* Get YummmZo Banner Component */}
                    <GetYummmZoAppComponent/>
                </div>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div> 
    )
}

export default HomePage
