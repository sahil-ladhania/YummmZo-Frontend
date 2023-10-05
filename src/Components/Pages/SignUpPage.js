// Importing Components | Modules | Libraries
import React from 'react'
import SignUpComponent from '../Auth/SignUpComponent'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent';

const SignUpPage = () => {
    return (
        <div>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
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
