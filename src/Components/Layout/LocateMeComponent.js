import React from 'react';
import '../../Styles/LocateMeComponent.css';
import { UilLocationPoint } from '@iconscout/react-unicons'
import '../../Styles/Buttons.css'
import '../../Styles/Input.css'

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
                            <button className='mr-10 h-40 p-0-30 b-1-t-s br-5 fs-r'>Login</button>
                            <button className='ml-10 h-40 p-0-30 b-1-t-s br-5 fs-r'>Sign up</button>
                        </div>
                    </div>
                    {/* Changing Heading & Description */}
                    <div className='lh-2'>
                        <h1 className='fs-r'>Late night at office ?</h1>
                        <h2 className='fs-r'>Order food from favourite restaurants near you.</h2>
                    </div>
                    {/* Locate Me Section */}
                    <div className='h-80 flex fd-r jc-fs ai-c'>
                        <input className="h-40 w-300 p-0-10 b-1-t-s br-5 bc-ws mr-5" type="text" placeholder='Enter your delivery location'/>
                        <button className='flex ai-c h-40 p-0-30 b-1-t-s br-5 mr-5 fs-r'><UilLocationPoint className='h-20 w-a'/>Locate Me</button>
                        <button className='h-40 p-0-30 b-1-t-s br-5 fs-r'>Find Food</button>
                    </div>
                    {/* Popular Cities Heading */}
                    <div className='lh-2'>
                        <h3 className='fs-r'>Popular cities in India</h3>
                    </div>
                    {/* Landing Page Mini Footer */}
                    <div className='h-50 w-500'>
                        <ul className='flex fd-r jc-fs fw-w'>
                            <li className='ls-n mr-5 fs-r'><a href="#">Ahmedabad</a></li>
                            <li className='ls-n mr-5 fs-r'><a href="#">Bangalore</a></li>
                            <li className='ls-n mr-5 fs-r'><a href="#">Chennai</a></li>
                            <li className='ls-n mr-5 fs-r'><a href="#">Delhi</a></li>
                            <li className='ls-n mr-5 fs-r'><a href="#">Gurgaon</a></li>
                            <li className='ls-n mr-5 fs-r'><a href="#">Hyderabad</a></li>
                            <li className='ls-n mr-5 fs-r'><a href="#">Kolkata</a></li>
                            <li className='ls-n mr-5 fs-r'><a href="#">Mumbai</a></li>
                            <li className='ls-n mr-5 fs-r'><a href="#">Pune</a></li>
                            <li className='ls-n mr-5 fs-r'><a href="#">& more</a></li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LocateMeComponent
