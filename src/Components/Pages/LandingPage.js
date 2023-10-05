// Importing Components | Modules | Libraries
import React from 'react'
import FooterComponent from '../Common/FooterComponent';
import LocateMeComponent from '../Layout/LocateMeComponent';
import BannerComponent from '../Layout/BannerComponent';

const LandingPage = () => {
    return (
        <div>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Locate Me | Login | Signup Section */}
                    <LocateMeComponent/>
                    {/* Banner Section */}
                    <BannerComponent/>
                    {/* Footer Section */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default LandingPage
