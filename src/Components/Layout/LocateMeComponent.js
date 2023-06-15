import React from 'react';
import '../../Styles/LocateMeComponent.css';
import { UilLocationPoint } from '@iconscout/react-unicons'

const LocateMeComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-400'>
                    {/* Landing Page Mini Navbar */}
                    <div className='flex jc-sb ai-c fd-r h-100'>
                        <div>
                            <a href="#"><img src="" alt="YummmZo-Logo-Img" /></a>
                        </div>
                        <div>
                            <button className='mr-10 h-40 w-100'>Login</button>
                            <button className='ml-10 h-40 w-100'>Sign up</button>
                        </div>
                    </div>
                    {/* Changing Heading & Description */}
                    <div className='lh-2'>
                        <h1>Late night at office ?</h1>
                        <h2>Order food from favourite restaurants near you.</h2>
                    </div>
                    {/* Locate Me Section */}
                    <div className='h-80 flex fd-r jc-fs ai-c'>
                        <input className="h-40 w-300 p-0-10" type="text" placeholder='Enter your delivery location'/>
                        <button className='flex ai-c h-40 w-100'><UilLocationPoint className='h-20 w-a'/>Locate Me</button>
                        <button className='h-40 w-100'>Find Food</button>
                    </div>
                    {/* Popular Cities Heading */}
                    <div className='lh-2'>
                        <h3>Popular cities in India</h3>
                    </div>
                    {/* Landing Page Mini Footer */}
                    <div className='h-50 w-500'>
                        <ul className='flex fd-r jc-fs fw-w'>
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
