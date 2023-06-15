import React from 'react'
import SignUpComponent from '../Auth/SignUpComponent'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent';

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
