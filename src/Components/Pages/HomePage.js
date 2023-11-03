// Importing Components | Modules | Libraries
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarComponent from '../Common/NavbarComponent'
import PopularCuisinesComponent from '../Layout/PopularCuisinesComponent'
import FooterComponent from '../Common/FooterComponent';
import { CuisineContext } from '../../Contexts/CuisineContext';
import { getAllCuisines } from '../../Services/CuisineServices';
import TopBrandsComponent from '../Restaurant/TopBrandsComponent';
import GetYummmZoAppComponent from '../Layout/GetYummmZoAppComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';
import { UserContext } from '../../Contexts/UserContext';
import { PageLoaderContext } from '../../Contexts/PageLoaderContext';

const HomePage = () => {
    // Getting ID.
    const { userId , restaurantId } = useParams();
    // Accessing Loading State From The Context.
    const {loading , setLoading} = useContext(PageLoaderContext);
    // Accessing Input States From The Context.
    const {formData , setFormData , auth , setAuth , isAuthenticated , setIsAuthenticated} = useContext(UserContext);
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
        <div className=''>
            <>
                <div className='bg-navbar-gradient'>
                    {/* Navbar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} auth={auth} setAuth={setAuth} loading={loading} setLoading={setLoading}/>
                </div>
                <div>
                    <div className='max-w-5xl ml-auto mr-auto'>
                        {/* Popular Cuisines Component */}
                        <PopularCuisinesComponent cuisines={cuisines}/>
                    </div>
                    <div className='max-w-5xl ml-auto mr-auto'>
                        {/* Top Brands Component */}
                        <TopBrandsComponent/>
                    </div>
                    <div className='bg-banner-gradient'>
                        {/* Get YummmZo Banner Component */}
                        <GetYummmZoAppComponent/>
                    </div>
                </div>
                <div className='bg-footer-black'>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div> 
    )
}

export default HomePage
