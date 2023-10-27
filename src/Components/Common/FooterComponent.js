import React from 'react'
import UpperFooterComponent from './UpperFooterComponent';
import MiddleFooterComponent from './MiddleFooterComponent';
import LowerFooterComponent from './LowerFooterComponent';

const FooterComponent = () => {
    return (
        <div className='max-w-6xl ml-auto mr-auto'>
            <>
                <div className='h-auto'>
                    {/* Upper Footer Section */}
                    <UpperFooterComponent/>
                    {/* Middle Footer Section */}
                    <MiddleFooterComponent/>
                    {/* Lower Footer Section */}
                    <LowerFooterComponent/>
                </div>
            </>
        </div>
    )
}

export default FooterComponent
