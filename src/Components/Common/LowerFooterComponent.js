import React from 'react'

const LowerFooterComponent = () => {
    return (
        <div>
        <>
            {/* Main Component */}
            <div className='flex jc-sa ai-c fd-r'>
                {/* Logo Container */}
                <div className='ml-30'>
                    <img src="" alt="YummmZo-Logo" />
                </div>
                {/* Trademark Container */}
                <div className=''>
                    © 2023 YummmZo
                </div>
                {/* Social Media Handles Container */}
                <div className=''>
                    <a href="#"><img src="" alt="Facebook" /></a>
                    <a href="#"><img src="" alt="Pintrest" /></a>
                    <a href="#"><img src="" alt="Instagram" /></a>
                    <a href="#"><img src="" alt="Twitter" /></a>
                </div>
            </div>
        </>
        </div>
    )
}

export default LowerFooterComponent
