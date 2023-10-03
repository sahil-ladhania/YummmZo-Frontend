// Importing Components | Modules | Libraries
import React from 'react'
import HeadingComponent from '../Help/HeadingComponent'
import OptionsComponent from '../Help/OptionsComponent'
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';

const HelpAndSupportPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navbar Component */}
                    <NavbarComponent/>
                    {/* Heading Component */}
                    <HeadingComponent/>
                    {/* Options Component */}
                    <OptionsComponent/>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default HelpAndSupportPage
