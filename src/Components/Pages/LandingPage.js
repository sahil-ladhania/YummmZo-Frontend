import React from 'react'
import FooterComponent from '../Common/FooterComponent';
import BannerUSPComponent from '../Layout/BannerUSPComponent';
import LocateMeComponent from '../Layout/LocateMeComponent';
import '../../Styles/Footer.css';

const LandingPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1300 minw-1300 ml-a mr-a'>
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
