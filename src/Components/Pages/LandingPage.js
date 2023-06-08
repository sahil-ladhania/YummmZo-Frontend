import React from 'react'
import FooterComponent from '../Common/FooterComponent';
import BannerUSPComponent from '../Layout/BannerUSPComponent';
import LocateMeComponent from '../Layout/LocateMeComponent';

const LandingPage = () => {
    return (
        <div>
            <>
                {/* Locate Me | Login | Signup Section */}
                <LocateMeComponent/>
                {/* Banner and USP's Section */}
                <BannerUSPComponent/>
                {/* Footer Section */}
                <FooterComponent/>
            </>
        </div>
    )
}

export default LandingPage
