import React from 'react'
import NavbarComponent from '../Common/NavbarComponent'
import PopularCuisinesComponent from '../Layout/PopularCuisinesComponent'
import AnythingDeliveredComponent from '../Layout/AnythingDeliveredComponent'
import StatesDeliveryComponent from '../Layout/StatesDeliveryComponent'
import FooterComponent from '../Common/FooterComponent';
import '../../Styles/Main.css'

const HomePage = () => {
    return (
        <div>
            <>
                <div className='maxw-1300 minw-1300 ml-a mr-a'>
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
                </div>
            </>
        </div>
    )
}

export default HomePage
