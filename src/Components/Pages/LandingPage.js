// Importing Components | Modules | Libraries
import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import FooterComponent from '../Common/FooterComponent';
import LocateMeComponent from '../Layout/LocateMeComponent';
import BannerComponent from '../Layout/BannerComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';
import { PageLoaderContext } from '../../Contexts/PageLoaderContext';

const LandingPage = () => {
    const navigate = useNavigate();
    // Accessing Loading State From The Context.
    const {loading , setLoading} = useContext(PageLoaderContext);
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    useEffect(() => {
        console.log("Loader Clicked")
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate("/");
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    }, [navigate])
    return (
        <div className='bg-gradient-tl-br'>
            <>
                <div>
                    <div className='max-w-6xl ml-auto mr-auto'>
                        {/* Locate Me | Login | Signup Section */}
                        <LocateMeComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} loading={loading} setLoading={setLoading}/>
                    </div>
                    <div className='bg-banner-gradient'>
                        {/* Banner Section */}
                        <BannerComponent/>
                    </div>
                    <div className='bg-footer-black'>
                        {/* Footer Section */}
                        <FooterComponent/>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LandingPage
