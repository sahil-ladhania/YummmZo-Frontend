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

const HomePage = () => {
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
        <div className='bg-slate-800'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Navbar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation}/>
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
