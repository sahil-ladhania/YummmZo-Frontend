import React from 'react'
import SignUpComponent from '../Auth/SignUpComponent'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent';

const SignUpPage = () => {
    return (
        <div>
            <>
                {/* YummmZo Logo */}
                <YummmZoLogoComponent/>
                {/* Sign Up Form */}
                <SignUpComponent/>
            </>
        </div>
    )
}

export default SignUpPage
