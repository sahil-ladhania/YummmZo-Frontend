import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { IoHelpBuoySharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import CartComponent from '../Cart/CartComponent';

const NavbarComponent = () => {
    // State Management.
    const [isCartVisible , setIsCartVisible] = useState(false);
    // Handler Function.
    const handleCartLinkHover = () => {
        setIsCartVisible(!isCartVisible);
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
                                <NavLink to="/login" className="mr-20 td-n c-b flex ai-c fs-r">
                                    <FaUserCircle className='h-20 w-a'/>
                                    <span>Login</span>
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
