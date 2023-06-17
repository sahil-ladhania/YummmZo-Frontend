import React from 'react'
import UpperFooterComponent from './UpperFooterComponent';
import MiddleFooterComponent from './MiddleFooterComponent';
import LowerFooterComponent from './LowerFooterComponent';
// CSS Files
import '../../Styles/Links.css'

const FooterComponent = () => {
    return (
        <div>
            <>
                <div>
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
