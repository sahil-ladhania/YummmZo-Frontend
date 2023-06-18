import React from 'react';
import '../../Styles/LocateMeComponent.css';
import { UilLocationPoint } from '@iconscout/react-unicons'
// CSS Files
import '../../Styles/Buttons.css'
import '../../Styles/Input.css'
import '../../Styles/Links.css'

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
                            <button className='mr-10 h-40 p-0-30 b-1-t-s br-5 fs-r fs-s fw-500'>Login</button>
                            <button className='ml-10 h-40 p-0-30 b-1-t-s br-5 fs-r fs-s fw-500'>Sign up</button>
                        </div>
                    </div>
                    {/* Changing Heading & Description */}
                    <div className='lh-2'>
                        <h1 className='fs-r c-3d3d3d ls-1'>Late night at office ?</h1>
                        <h2 className='fs-r c-g fw-400 ls-1'>Order food from favourite restaurants near you.</h2>
                    </div>
                    {/* Locate Me Section */}
                    <div className='h-80 flex fd-r jc-fs ai-c'>
                        <input className="h-40 w-300 p-0-10 b-1-t-s br-5 bc-ws mr-5" type="text" placeholder='Enter your delivery location'/>
                        <button className='flex ai-c h-40 p-0-30 b-1-t-s br-5 mr-5 fs-r fs-s fw-500'><UilLocationPoint className='h-20 w-a'/>Locate Me</button>
                        <button className='h-40 p-0-30 b-1-t-s br-5 fs-r fs-s fw-500'>FIND FOOD</button>
                    </div>
                    {/* Popular Cities Heading */}
                    <div className='lh-2'>
                        <h3 className='fs-r fs-s fw-400 ls-1 c-g'>POPULAR CITIES IN INDIA</h3>
                    </div>
                    {/* Landing Page Mini Footer */}
                    <div className='h-50 w-500'>
                        <ul className='flex fd-r jc-fs fw-w'>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-575757 ls-1' href="#">Ahmedabad</a></li>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-g ls-1' href="#">Bangalore</a></li>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-575757 ls-1' href="#">Chennai</a></li>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-g ls-1' href="#">Delhi</a></li>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-575757 ls-1' href="#">Gurgaon</a></li>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-g ls-1' href="#">Hyderabad</a></li>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-575757 ls-1' href="#">Kolkata</a></li>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-g ls-1' href="#">Mumbai</a></li>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-575757 ls-1' href="#">Pune</a></li>
                            <li className='ls-n mr-5 fs-r'><a className='td-n c-b fs-s fw-500 c-g ls-1' href="#">& more</a></li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LocateMeComponent
