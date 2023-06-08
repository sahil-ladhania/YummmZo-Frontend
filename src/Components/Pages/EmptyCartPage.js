import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import ImageContentButtonComponent from '../Cart/ImageContentButtonComponent';
import FooterComponent from '../Common/FooterComponent';

const EmptyCartPage = () => {
    return (
        <div>
            <>
                {/* Customised Navbar for this page Section */}
                <NavbarComponent/>
                {/* Image | Content | Button Section */}
                <ImageContentButtonComponent/>
                {/* Footer Section */}
                <FooterComponent/>
            </>
        </div>
    )
}

export default EmptyCartPage
