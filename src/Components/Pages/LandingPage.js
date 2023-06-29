// Importing Components | Modules | Libraries
import React from 'react'
import FooterComponent from '../Common/FooterComponent';
import BannerUSPComponent from '../Layout/BannerUSPComponent';
import LocateMeComponent from '../Layout/LocateMeComponent';
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

const LandingPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Locate Me | Login | Signup Section */}
                    <LocateMeComponent/>
                    {/* Banner and USP's Section */}
                    <BannerUSPComponent/>
                    {/* Footer Section */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default LandingPage
