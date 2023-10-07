import React from 'react'
import { CiCircleChevDown } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const YummmZoBusinessNavbarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Navbar Section */}
                    <nav className='flex justify-between items-center h-20'>
                        {/* Logo Section */}
                        <div>
                            <a className='flex flex-col' href="#">
                                <span className='text-2xl font-semibold'>YummmZo</span>
                                <span className='ml-1 text-md font-semibold'>for business</span>
                            </a>
                        </div>
                        {/* Profile Dropdown Section */}
                        <div>
                            <a className='flex items-center' href="#">
                                <CiUser className='mr-2 text-2xl w-auto'/>
                                <span>Profile</span>
                                <CiCircleChevDown className='ml-2 text-2xl w-auto'/>
                            </a>
                        </div>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default YummmZoBusinessNavbarComponent
