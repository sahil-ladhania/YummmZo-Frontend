import React from 'react'
import HeadingComponent from '../Help/HeadingComponent'
import OptionsComponent from '../Help/OptionsComponent'
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';

const HelpAndSupportPage = () => {
    return (
        <div>
            <>
                {/* Navbar Component */}
                <NavbarComponent/>
                {/* Heading Component */}
                <HeadingComponent/>
                {/* Options Component */}
                <OptionsComponent/>
                {/* Footer Component */}
                <FooterComponent/>
            </>
        </div>
    )
}

export default HelpAndSupportPage
