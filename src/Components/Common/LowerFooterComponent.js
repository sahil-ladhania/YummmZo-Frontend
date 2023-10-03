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
                <div className='fs-r flex ai-c'>
                    <span>©</span>
                    <span>2023 YummmZo</span>
                </div>
                {/* Social Media Handles Container */}
                <div className='flex '>
                    <a href="#"><UilFacebookF className="mr-10"/></a>
                    <a href="#"><UilInstagram className="mr-10"/></a>
                    <a href="#"><UilTwitter className="mr-10"/></a>
                    <a href="#"><UilLinkedin className="mr-10"/></a>
                </div>
            </div>
        </>
        </div>
    )
}

export default LowerFooterComponent
