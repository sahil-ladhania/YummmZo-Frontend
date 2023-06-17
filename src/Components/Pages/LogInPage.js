import React from 'react'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent'
import LogInComponent from '../Auth/LogInComponent'
// CSS Files
import '../../Styles/Fonts.css'
import '../../Styles/Links.css'

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
