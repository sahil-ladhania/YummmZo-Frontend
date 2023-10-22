import React from 'react'
import { CiCircleChevDown } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

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
                                <span className='text-2xl font-semibold font-roboto text-primary'>YummmZo</span>
                                <span className='ml-1 text-md font-semibold font-roboto text-primary'>for business</span>
                            </a>
                        </div>
                        {/* Profile Dropdown Section */}
                        <div>
                            <Link className='flex items-center' to="/login">
                                <CiUser className='mr-2 text-2xl w-auto text-yummmzo-color'/>
                                <span className='font-roboto text-yummmzo-color'>Profile</span>
                                <CiCircleChevDown className='ml-2 text-2xl w-auto text-yummmzo-color'/>
                            </Link>
                        </div>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default YummmZoBusinessNavbarComponent
