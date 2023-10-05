import React from 'react'
import UpperFooterComponent from './UpperFooterComponent';
import MiddleFooterComponent from './MiddleFooterComponent';
import LowerFooterComponent from './LowerFooterComponent';

const FooterComponent = () => {
    return (
        <div>
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
