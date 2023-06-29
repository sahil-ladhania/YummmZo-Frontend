// Importing Components | Modules | Libraries
import React from 'react'
import NavbarComponent from '../Common/NavbarComponent'
import FooterComponent from '../Common/FooterComponent'
import RegisterRestaurantComponent from '../Restaurant/RegisterRestaurantComponent'
import HowItWorksComponent from '../Restaurant/HowItWorksComponent'
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

const AddRestaurantPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navabar Component */}
                    <NavbarComponent/>
                    {/* Register Restaurant Component */}
                    <RegisterRestaurantComponent/>
                    {/* How It Works Component */}
                    <HowItWorksComponent/>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default AddRestaurantPage
