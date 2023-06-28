import React, { useState } from 'react';
import '../../Styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilInfo } from '@iconscout/react-unicons'
import { UilRestaurant } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import ProfileDropdownComponent from './ProfileDropdownComponent';

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
                            <NavLink exact to= "/" className="mr-20 td-n c-b">YummmZo</NavLink>
                        </div>
                        <div className=''>
                            <a className='flex ai-c td-n c-b' href="#">
                                <span className='mr-5 fs-r'>HOME</span>
                                <span className='mr-5 fs-r'>G.T.Road, Kailash Park</span>
                                <UilAngleDown/>
                            </a>
                        </div>
                    </div>
                    {/* Right Part */}
                    <div>
                        <ul className='flex fd-r'>
                            <li className='ml-20 ls-n'>
                                <NavLink to="/restaurants" className="mr-20 td-n c-b flex ai-c fs-r">
                                    <UilRestaurant className='h-20 w-a'/>
                                    <span>Restaurants</span>
                                </NavLink>
                            </li>
                            <li className='ml-20 ls-n'>
                                <NavLink to="/addRestaurant" className="mr-20 td-n c-b flex ai-c fs-r">
                                    <UilPlus className='h-20 w-a'/>
                                    <span>Add Restaurant</span>
                                </NavLink>
                            </li>
                            <li className='ml-20 ls-n'>
                                <NavLink to="/helpandsupport" className="mr-20 td-n c-b flex ai-c fs-r">
                                    <UilInfo className='h-20 w-a'/>
                                    <span>Help</span>
                                </NavLink>
                            </li>
                            <li className='ml-20 ls-n'>
                                <NavLink to="/login" className="mr-20 td-n c-b flex ai-c fs-r"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                >
                                    <UilUser className='h-20 w-a'/>
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
                                    <UilShoppingBag className='h-20 w-a'/>
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
