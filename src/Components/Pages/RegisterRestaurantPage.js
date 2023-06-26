import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';

const RegisterRestaurantPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navbar Component */}
                    <NavbarComponent/>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default RegisterRestaurantPage
