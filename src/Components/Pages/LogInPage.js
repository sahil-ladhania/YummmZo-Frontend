import React from 'react'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent'
import LogInComponent from '../Auth/LogInComponent'
import '../../Styles/Fonts.css'

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
