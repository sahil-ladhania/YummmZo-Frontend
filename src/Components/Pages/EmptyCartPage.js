// Importing Components | Modules | Libraries
import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import ImageContentButtonComponent from '../Cart/ImageContentButtonComponent';

const EmptyCartPage = () => {
    return (
        <div>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Customised Navbar for this page Section */}
                    <NavbarComponent/>
                </div>
                <div className='max-w-4xl ml-auto mr-auto'>
                    {/* Image | Content | Button Section */}
                    <ImageContentButtonComponent/>
                </div>
            </>
        </div>
    )
}

export default EmptyCartPage
