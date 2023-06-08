import React from 'react'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent'
import LogInComponent from '../Auth/LogInComponent'

const LogInPage = () => {
    return (
        <div>
            <>
                {/* YummmZo Logo */}
                <YummmZoLogoComponent/>
                {/* Log In Form */}
                <LogInComponent/>
            </>
        </div>
    )
}

export default LogInPage
