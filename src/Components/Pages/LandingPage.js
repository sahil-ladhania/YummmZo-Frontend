// Importing Components | Modules | Libraries
import React from 'react'
import FooterComponent from '../Common/FooterComponent';
import BannerUSPComponent from '../Layout/BannerUSPComponent';
import LocateMeComponent from '../Layout/LocateMeComponent';

const LandingPage = () => {
    return (
        <div>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Locate Me | Login | Signup Section */}
                    <LocateMeComponent/>
                    {/* Banner and USP's Section */}
                    <BannerUSPComponent/>
                    {/* Footer Section */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default LandingPage
