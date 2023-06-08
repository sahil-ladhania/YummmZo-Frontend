import React from 'react'

const NavbarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Left Part */}
                    <div>
                        <div>
                            <a href="#"><img src="" alt="YummmZo-Logo" /></a>
                        </div>
                        <div>
                            <a href="#">
                                Other 
                                <img src="" alt="Down-Arrow-Image" />
                            </a>
                        </div>
                    </div>
                    {/* Right Part */}
                    <div>
                        <ul>
                            <li><a href="#"><img src="" alt="Restaurant-Button-Icon" />Restaurants</a></li>
                            <li><a href="#"><img src="" alt="Offers-Button-Icon" />Offers</a></li>
                            <li><a href="#"><img src="" alt="Help-Button-Icon" />Help</a></li>
                            <li><a href="#"><img src="" alt="SignIn-Button-Icon" />Sign In</a></li>
                            <li><a href="#"><img src="" alt="Cart-Button-Icon" />Cart</a></li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default NavbarComponent
