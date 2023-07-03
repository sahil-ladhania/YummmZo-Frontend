import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const YummmZoBusinessNavbarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Navbar Section */}
                    <nav className='flex jc-sb ai-c h-80'>
                        {/* Logo Section */}
                        <div>
                            <a className='flex fd-c td-n c-b' href="#">
                                <span className='fs-xl'>YummmZo</span>
                                <span className='fs-s ml-10'>for business</span>
                            </a>
                        </div>
                        {/* Profile Dropdown Section */}
                        <div>
                            <a className='flex fd-r ai-c td-n c-b' href="#">
                                <FaUserCircle className='mr-10 h-20 w-a'/>
                                <span>Profile</span>
                                <FaAngleDown className='ml-10 h-20 w-a'/>
                            </a>
                        </div>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default YummmZoBusinessNavbarComponent
