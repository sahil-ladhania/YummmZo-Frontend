// Importing Components | Modules | Libraries
import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import ImageContentButtonComponent from '../Cart/ImageContentButtonComponent';
import FooterComponent from '../Common/FooterComponent';

const EmptyCartPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Customised Navbar for this page Section */}
                    <NavbarComponent/>
                    {/* Image | Content | Button Section */}
                    <ImageContentButtonComponent/>
                    {/* Footer Section */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default EmptyCartPage
