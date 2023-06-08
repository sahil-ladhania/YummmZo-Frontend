import React from 'react'

const LocateMeComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Landing Page Mini Navbar */}
                    <div>
                        <div>
                            <a href="#"><img src="" alt="YummmZo-Logo-Img" /></a>
                        </div>
                        <div>
                            <button>Login</button>
                            <button>Sign up</button>
                        </div>
                    </div>
                    {/* Changing Heading & Description */}
                    <div>
                        <h1>Late night at office ?</h1>
                        <h2>Order food from favourite restaurants near you.</h2>
                    </div>
                    {/* Locate Me Section */}
                    <div>
                        <input type="text" />
                        <button><img src="" alt="Locate-Me-Icon" />Locate Me</button>
                        <button>Find Food</button>
                    </div>
                    {/* Landing Page Mini Footer */}
                    <div>
                        <h3>Popular cities in India</h3>
                        <ul>
                            <li><a href="#">Ahmedabad</a></li>
                            <li><a href="#">Bangalore</a></li>
                            <li><a href="#">Chennai</a></li>
                            <li><a href="#">Delhi</a></li>
                            <li><a href="#">Gurgaon</a></li>
                            <li><a href="#">Hyderabad</a></li>
                            <li><a href="#">Kolkata</a></li>
                            <li><a href="#">Mumbai</a></li>
                            <li><a href="#">Pune</a></li>
                            <li><a href="#">& more</a></li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LocateMeComponent
