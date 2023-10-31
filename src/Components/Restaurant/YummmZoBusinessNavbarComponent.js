import React from 'react'
import { CiCircleChevDown } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

const YummmZoBusinessNavbarComponent = () => {
    return (
        <div className='max-w-6xl ml-auto mr-auto'>
            <>
                {/* Main Component */}
                <div>
                    {/* Navbar Section */}
                    <nav className='flex justify-between items-center h-28'>
                        {/* Logo Section */}
                        <div>
                            <a className='flex flex-col' href="#">
                                <span className='text-2xl font-semibold font-roboto text-logo'>YUMMMZO</span>
                                <span className='ml-1 text-md font-medium font-roboto text-logo'>for business</span>
                            </a>
                        </div>
                        {/* Profile Dropdown Section */}
                        <div>
                            <Link className='flex items-center' to="/login">
                                <CiUser className='mr-2 text-2xl w-auto text-secondary'/>
                                <span className='font-roboto text-secondary'>Profile</span>
                                <CiCircleChevDown className='ml-2 text-2xl w-auto text-secondary'/>
                            </Link>
                        </div>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default YummmZoBusinessNavbarComponent
