import React from 'react'
import UpperFooterComponent from './UpperFooterComponent';
import MiddleFooterComponent from './MiddleFooterComponent';
import LowerFooterComponent from './LowerFooterComponent';

const FooterComponent = () => {
    return (
        <div>
            <>
                {/* Upper Footer Section */}
                <UpperFooterComponent/>
                {/* Middle Footer Section */}
                <MiddleFooterComponent/>
                {/* Lower Footer Section */}
                <LowerFooterComponent/>
            </>
        </div>
    )
}

export default FooterComponent
