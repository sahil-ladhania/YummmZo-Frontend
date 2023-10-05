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
            <div className='flex justify-between items-center h-20'>
                {/* Logo Container */}
                <div className=''>
                    <img src="" alt="YummmZo-Logo" />
                </div>
                {/* Trademark Container */}
                <div className=''>
                    <span>©</span>
                    <span>2023 YummmZo</span>
                </div>
                {/* Social Media Handles Container */}
                <div className='flex items-center w-52 justify-between'>
                    <span className='cursor-pointer'>
                        <UilFacebookF className=""/>
                    </span>
                    <span className='cursor-pointer'>
                        <UilInstagram className=""/>
                    </span>
                    <span className='cursor-pointer'>
                        <UilTwitter className=""/>
                    </span>
                    <span className='cursor-pointer'>
                        <UilLinkedin className=""/>
                    </span>
                </div>
            </div>
        </>
        </div>
    )
}

export default LowerFooterComponent
