import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiForkAndKnife } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";

const NavbarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-20 flex items-center justify-between'>
                    {/* Left Part */}
                    <div className='flex items-center w-5/12'>
                        <div>
                            <NavLink exact to= "/home" className="mr-5 text-2xl font-semibold">YummmZo</NavLink>
                        </div>
                        <div className=''>
                            <a className='flex items-center' href="#">
                                <span className='text-sm font-medium mr-2'>Home</span>
                                <span className='text-sm'>Kailash Park...</span>
                                <CiCircleChevDown className='text-md'/>
                            </a>
                        </div>
                    </div>
                    {/* Right Part */}
                    <div className='w-7/12'>
                        <ul className='flex justify-between'>
                            <li className=''>
                                <NavLink to="/restaurants" className="flex items-center">
                                    <CiForkAndKnife className='text-3xl'/>
                                    <span className='text-sm pr-2 pl-2'>Restaurants</span>
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/addRestaurant" className="flex items-center">
                                    <CiCirclePlus className='text-3xl'/>
                                    <span className='text-sm pr-2 pl-2'>Add Restaurant</span>
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink className="flex items-center">
                                    <CiUser className='text-3xl'/>
                                    <span className='text-sm pr-2 pl-2'>Login</span>
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/cart" className="flex items-center">
                                    <CiShoppingCart className='text-3xl'/>
                                    <span className='text-sm pr-2 pl-2'>Cart</span>
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
