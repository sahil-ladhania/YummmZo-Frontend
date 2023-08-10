import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { IoHelpBuoySharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import CartComponent from '../Cart/CartComponent';
import ProfileDropdownComponent from './ProfileDropdownComponent';

const NavbarComponent = () => {
    // State Management.
    const [isCartVisible , setIsCartVisible] = useState(false);
    const [isProfileDropdownVisible , setIsProfileDropdownVisible] = useState(false);
    // Handler Function.
    const handleCartLinkHover = () => {
        setIsCartVisible(!isCartVisible);
    }
    const handleProfileLinkHover = () => {
        setIsProfileDropdownVisible(!isProfileDropdownVisible);
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-100 mb-20'>
                    {/* Left Part */}
                    <div className='flex ai-c'>
                        <div>
                            <NavLink exact to= "/home" className="mr-20 td-n c-b">YummmZo</NavLink>
                        </div>
                        <div className=''>
                            <a className='flex ai-c td-n c-b' href="#">
                                <span className='mr-5 fs-r'>HOME</span>
                                <span className='mr-5 fs-r'>G.T.Road, Kailash Park</span>
                                <FaAngleDown/>
                            </a>
                        </div>
                    </div>
                    {/* Right Part */}
                    <div className='relative'>
                        <ul className='flex fd-r'>
                            <li className='ml-20 ls-n'>
                                <NavLink to="/restaurants" className="mr-20 td-n c-b flex ai-c fs-r">
                                    <IoRestaurant className='h-20 w-a'/>
                                    <span>Restaurants</span>
                                </NavLink>
                            </li>
                            <li className='ml-20 ls-n'>
                                <NavLink to="/addRestaurant" className="mr-20 td-n c-b flex ai-c fs-r">
                                    <IoAddCircle className='h-20 w-a'/>
                                    <span>Add Restaurant</span>
                                </NavLink>
                            </li>
                            <li className='ml-20 ls-n'>
                                <NavLink to="/helpandsupport" className="mr-20 td-n c-b flex ai-c fs-r">
                                    <IoHelpBuoySharp className='h-20 w-a'/>
                                    <span>Help</span>
                                </NavLink>
                            </li>
                            <li className='ml-20 ls-n'>
                                <NavLink 
                                className="mr-20 td-n c-b flex ai-c fs-r"
                                onMouseEnter={handleProfileLinkHover}
                                >
                                    <FaUserCircle className='h-20 w-a'/>
                                    <span>Profile</span>
                                </NavLink>
                            </li>
                            <li className='ml-20 ls-n'>
                                <NavLink 
                                to="/cart" 
                                className="mr-20 td-n c-b flex ai-c fs-r"
                                onMouseEnter={handleCartLinkHover}
                                >
                                    <FaCartShopping className='h-20 w-a'/>
                                    <span>Cart</span>
                                </NavLink>
                            </li>
                        </ul>
                        {/* Conditionally Rendering Profile Dropdown Component */}
                        {
                            isProfileDropdownVisible ? 
                                <div className='absolute right-0 top-10'>
                                    <ProfileDropdownComponent/>
                                </div>
                                :
                                null
                        }
                        {/* Conditionally Rendering Cart Dropdown Component */}
                        {
                                isCartVisible ? 
                                    <div className='absolute right-0 top-10'>
                                        <CartComponent/>
                                    </div>
                                    :
                                    null
                            }
                    </div>
                </div>
            </>
        </div>
    )
}

export default NavbarComponent
