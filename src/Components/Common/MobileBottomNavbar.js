import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const MobileBottomNavbar = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='fixed bottom-0 w-full border-t-2 border-slate-100'>
                    <nav>
                        <ul className='flex items-center justify-between p-3'>
                            <li>
                                <Link className='flex flex-col items-center' to="/home">
                                    <span className='text-md font-semibold'>YummmZo</span>
                                </Link> 
                            </li>
                            <li>
                                <Link className='flex flex-col items-center' to="/searchInRestaurant">
                                    <span className='text-2xl p-1'><CiSearch/></span>
                                    <span className='text-xs'>Search</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='flex flex-col items-center' to="/cart">
                                    <span className='text-2xl p-1'><CiShoppingCart/></span>
                                    <span className='text-xs'>Cart</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='flex flex-col items-center'>
                                    <span className='text-2xl p-1'><CiUser/></span>
                                    <span className='text-xs'>Account</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default MobileBottomNavbar
