// Importing Components | Modules | Libraries
import React from 'react'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent'
import LogInComponent from '../Auth/LogInComponent'
import LoginMobileComponent from '../Auth/LoginMobileComponent'

const LogInPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    <div className='hidden sm:block'>
                        {/* YummmZo Logo */}
                        <YummmZoLogoComponent/>
                        {/* Log In Form */}
                        <LogInComponent/>
                    </div>
                    <div className='block sm:hidden'>
                        <LoginMobileComponent/>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LogInPage
