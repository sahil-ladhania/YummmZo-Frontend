// Importing Components | Modules | Libraries
import React from 'react'
import SignUpComponent from '../Auth/SignUpComponent'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent';
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

const SignUpPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* YummmZo Logo */}
                    <YummmZoLogoComponent/>
                    {/* Sign Up Form */}
                    <SignUpComponent/>
                </div>
            </>
        </div>
    )
}

export default SignUpPage
