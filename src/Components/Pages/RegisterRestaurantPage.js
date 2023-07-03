// Importing Components | Modules | Libraries
import React from 'react'
import AddRestaurantFormComponent from '../Restaurant/AddRestaurantFormComponent';
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
import YummmZoBusinessNavbarComponent from '../Restaurant/YummmZoBusinessNavbarComponent';
import GoBackNextButtonsComponent from '../Restaurant/GoBackNextButtonsComponent';

const RegisterRestaurantPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navbar Component */}
                    <YummmZoBusinessNavbarComponent/>
                    {/* Go Back and Next Button Component */}
                    <GoBackNextButtonsComponent/>
                    {/* Restaurant Form Component */}
                    <AddRestaurantFormComponent/>
                </div>
            </>
        </div>
    )
}

export default RegisterRestaurantPage
