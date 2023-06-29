// Importing Components | Modules | Libraries
import React from 'react'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent'
import LogInComponent from '../Auth/LogInComponent'
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

const LogInPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* YummmZo Logo */}
                    <YummmZoLogoComponent/>
                    {/* Log In Form */}
                    <LogInComponent/>
                </div>
            </>
        </div>
    )
}

export default LogInPage
