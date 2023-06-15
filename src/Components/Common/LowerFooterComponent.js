import React from 'react'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'

const LowerFooterComponent = () => {
    return (
        <div>
        <>
            {/* Main Component */}
            <div className='flex jc-sb ai-c fd-r h-100'>
                {/* Logo Container */}
                <div className=''>
                    <img src="" alt="YummmZo-Logo" />
                </div>
                {/* Trademark Container */}
                <div className=''>
                    © 2023 YummmZo
                </div>
                {/* Social Media Handles Container */}
                <div className=''>
                    {/* <a href="#"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" alt="Facebook" /></a> */}
                    <a href="#"><UilFacebookF className="c-blue mr-10"/></a>
                    <a href="#"><UilInstagram className="c-purple mr-10"/></a>
                    <a href="#"><UilTwitter className="c-0ac3ff mr-10"/></a>
                    <a href="#"><UilLinkedin className="c-4343ff mr-10"/></a>
                </div>
            </div>
        </>
        </div>
    )
}

export default LowerFooterComponent
