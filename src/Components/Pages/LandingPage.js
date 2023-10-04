// Importing Components | Modules | Libraries
import React from 'react'
import FooterComponent from '../Common/FooterComponent';
import BannerUSPComponent from '../Layout/BannerUSPComponent';
import LocateMeComponent from '../Layout/LocateMeComponent';
import CarouselsComponent from '../Layout/CarouselsComponent';

const LandingPage = () => {
    return (
        <div>
            <>
                <div className='max-w-5xl ml-auto mr-auto'>
                    <div className='hidden sm:block'>
                        {/* Locate Me | Login | Signup Section */}
                        <LocateMeComponent/>
                        {/* Banner and USP's Section */}
                        <BannerUSPComponent/>
                        {/* Footer Section */}
                        <FooterComponent/>
                    </div>
                    <div className='block sm:hidden'>
                        <CarouselsComponent/>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LandingPage
