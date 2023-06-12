import React from 'react';
import '../../Styles/LocateMeComponent.css';

const LocateMeComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-400'>
                    {/* Landing Page Mini Navbar */}
                    <div className='flex jc-sa ai-c fd-r'>
                        <div>
                            <a href="#"><img src="" alt="YummmZo-Logo-Img" /></a>
                        </div>
                        <div>
                            <button>Login</button>
                            <button>Sign up</button>
                        </div>
                    </div>
                    {/* Changing Heading & Description */}
                    <div className='ml-280'>
                        <h1>Late night at office ?</h1>
                        <h2>Order food from favourite restaurants near you.</h2>
                    </div>
                    {/* Locate Me Section */}
                    <div className='ml-280'>
                        <input className="w-200" type="text" placeholder='Enter your delivery location'/>
                        <button><img src="" alt="Locate-Me-Icon" />Locate Me</button>
                        <button>Find Food</button>
                    </div>
                    {/* Popular Cities Heading */}
                    <div className='ml-280'>
                        <h3>Popular cities in India</h3>
                    </div>
                    {/* Landing Page Mini Footer */}
                    <div className='ml-240'>
                        <ul className='flex fd-r jc-fs'>
                            <li className='ls-n mr-5'><a href="#">Ahmedabad</a></li>
                            <li className='ls-n mr-5'><a href="#">Bangalore</a></li>
                            <li className='ls-n mr-5'><a href="#">Chennai</a></li>
                            <li className='ls-n mr-5'><a href="#">Delhi</a></li>
                            <li className='ls-n mr-5'><a href="#">Gurgaon</a></li>
                            <li className='ls-n mr-5'><a href="#">Hyderabad</a></li>
                            <li className='ls-n mr-5'><a href="#">Kolkata</a></li>
                            <li className='ls-n mr-5'><a href="#">Mumbai</a></li>
                            <li className='ls-n mr-5'><a href="#">Pune</a></li>
                            <li className='ls-n mr-5'><a href="#">& more</a></li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LocateMeComponent
