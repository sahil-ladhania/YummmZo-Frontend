// Importing Components | Modules | Libraries
import React from 'react'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent'
import LogInComponent from '../Auth/LogInComponent'

const LogInPage = () => {
    return (
        <div>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
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
