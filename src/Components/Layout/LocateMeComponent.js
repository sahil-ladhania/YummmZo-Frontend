import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link className='td-n c-b pr-5 pb-5 pt-5 text-xl' to="/home">YummmZo</Link>
                        </div>
                        <div>
                            <Link className='mr-10 h-40 p-0-30 b-1-t-s br-5 fw-500 td-n c-b' to="/login">Login</Link>
                            <Link className='mr-10 h-40 p-0-30 b-1-t-s br-5 fw-500 td-n c-b' to="/signup">Sign Up</Link>
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
                        <button className='flex ai-c h-40 p-0-30 b-1-t-s br-5 mr-5 fs-r fs-s fw-500 shadow pointer'><UilLocationPoint className='h-20 w-a'/>Locate Me</button>
                        <button className='h-40 p-0-30 b-1-t-s br-5 fs-r fs-s fw-500 shadow pointer'>FIND FOOD</button>
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
