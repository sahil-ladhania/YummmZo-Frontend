import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const LowerFooterComponent = () => {
    return (
        <div>
        <>
            {/* Main Component */}
            <div className='flex justify-between items-center h-auto py-5'>
                {/* Logo Container */}
                <div className=''>
                    <span className='text-lg font-bold text-logo'>YUMMMZO</span>
                </div>
                {/* Trademark Container */}
                <div className=''>
                    <span className='font-roboto text-yummmzo-color'>©</span>
                    <span className='text-sm font-medium font-roboto text-yummmzo-color'>2023 YummmZo</span>
                </div>
                {/* Social Media Handles Container */}
                <div className='flex items-center w-52 justify-between'>
                    <span className='cursor-pointer'>
                        <CiFacebook className="text-3xl text-yummmzo-color hover:text-logo"/>
                    </span>
                    <span className='cursor-pointer'>
                        <CiInstagram className="text-3xl text-yummmzo-color hover:text-logo"/>
                    </span>
                    <span className='cursor-pointer'>
                        <CiTwitter className="text-3xl text-yummmzo-color hover:text-logo"/>
                    </span>
                    <span className='cursor-pointer'>
                        <CiLinkedin className="text-3xl text-yummmzo-color hover:text-logo"/>
                    </span>
                </div>
            </div>
        </>
        </div>
    )
}

export default LowerFooterComponent
