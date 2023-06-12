import React from 'react';
import '../../Styles/Navbar.css';

const NavbarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sa ai-c'>
                    {/* Left Part */}
                    <div>
                        <div>
                            <a href="#"><img src="" alt="YummmZo-Logo" /></a>
                        </div>
                        <div>
                            <a href="#">
                                Other 
                                {/* <img src="" alt="Down-Arrow-Image" /> */}
                            </a>
                        </div>
                    </div>
                    {/* Right Part */}
                    <div>
                        <ul className='flex fd-r'>
                            <li className='ls-n'><a href="#">Restaurants</a></li>
                            <li className='ls-n'><a href="#">Offers</a></li>
                            <li className='ls-n'><a href="#">Help</a></li>
                            <li className='ls-n'><a href="#">Sign In</a></li>
                            <li className='ls-n'><a href="#">Cart</a></li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default NavbarComponent
