import React, { useState } from 'react';
import ProfileDropdownComponent from './ProfileDropdownComponent';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { IoHelpBuoySharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const NavbarComponent = () => {
    // State Variables
    const [isDropdownVisible , setIsDropdownVisible] = useState(false);
    // Handler Functions
    const handleMouseEnter = () => {
        console.log("You Just Hovered on the Link...");
        setIsDropdownVisible(!isDropdownVisible)
    }
    const handleMouseLeave = () => {
        console.log("You Just Left Hovering on the Link...");
        setIsDropdownVisible(false);
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
                    <div>
                        <ul className='flex fd-r'>
                            <li className='ml-20 ls-n'>
                                <NavLink to="/restaurants" className="mr-20 td-n c-b flex ai-c fs-r">
                                    {/* <UilRestaurant className='h-20 w-a'/> */}
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
                                <NavLink to="/login" className="mr-20 td-n c-b flex ai-c fs-r"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                >
                                    <FaUserCircle className='h-20 w-a'/>
                                    <span>Login</span>
                                </NavLink>
                                {
                                    isDropdownVisible ? 
                                        <ProfileDropdownComponent/>
                                        :
                                        null
                                }
                            </li>
                            <li className='ml-20 ls-n'>
                                <NavLink to="/cart" className="mr-20 td-n c-b flex ai-c fs-r">
                                    <FaCartShopping className='h-20 w-a'/>
                                    <span>Cart</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default NavbarComponent
