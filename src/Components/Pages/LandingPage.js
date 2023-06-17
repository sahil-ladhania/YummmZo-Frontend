import React from 'react'
import FooterComponent from '../Common/FooterComponent';
import BannerUSPComponent from '../Layout/BannerUSPComponent';
import LocateMeComponent from '../Layout/LocateMeComponent';
import '../../Styles/Footer.css';
import '../../Styles/Fonts.css'

const LandingPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
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
