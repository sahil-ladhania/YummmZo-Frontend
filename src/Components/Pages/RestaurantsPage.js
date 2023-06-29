// Importing Components | Modules | Libraries
import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import RestaurantSearchComponent from '../Restaurant/RestaurantSearchComponent';
import TopBrandsComponent from '../Restaurant/TopBrandsComponent';
import RestaurantFilterComponent from '../Restaurant/RestaurantFilterComponent';
import RestaurantListComponent from '../Restaurant/RestaurantListComponent';
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

const RestaurantsPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navbar Component */}
                    <NavbarComponent/>
                    {/* Restaurant Search Bar Component */}
                    <RestaurantSearchComponent/>
                    {/* Top Brands Component */}
                    <TopBrandsComponent/>
                    {/* Filters Component */}
                    <RestaurantFilterComponent/>
                    {/* Restaurant Lists Component */}
                    <RestaurantListComponent/>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default RestaurantsPage
