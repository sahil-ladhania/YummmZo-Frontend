import React from 'react'
import NavbarComponent from '../Common/NavbarComponent'
import PopularCuisinesComponent from '../Layout/PopularCuisinesComponent'
import AnythingDeliveredComponent from '../Layout/AnythingDeliveredComponent'
import StatesDeliveryComponent from '../Layout/StatesDeliveryComponent'
import FooterComponent from '../Common/FooterComponent';

const HomePage = () => {
    return (
        <div>
            <>
                {/* Navbar Component */}
                <NavbarComponent/>
                {/* Popular Cuisines Component */}
                <PopularCuisinesComponent/>
                {/* Anything Delivered Component */}
                <AnythingDeliveredComponent/>
                {/* States where we deliver Component */}
                <StatesDeliveryComponent/>
                {/* Footer Component */}
                <FooterComponent/>
            </>
        </div>
    )
}

export default HomePage
