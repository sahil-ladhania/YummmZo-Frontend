import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiForkAndKnife } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
import { getLocation } from 'current-location-geo';

const NavbarComponent = ({currentLocation , setCurrentLocation}) => {
    // Handler Function
    const handleCurrentLocation = () => {
        getLocation((error , position) => {
            if(error){
                console.log(error);
            }
            else{
                console.log(position.address);
                setCurrentLocation(position.address);
            }
        })
    }
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='h-20 flex items-center justify-between '>
                    {/* Left Part */}
                    <div className='flex items-center w-5/12'>
                        <div>
                            <NavLink exact to= "/home" className="mr-5 text-2xl font-semibold font-roboto text-yummmzo-color">YummmZo</NavLink>
                        </div>
                        <div className=''>
                            <a onClick={handleCurrentLocation} className='flex items-center' href="#">
                                <span className='text-sm font-medium mr-2 font-roboto text-yummmzo-color'>Home</span>
                                <span className='text-sm font-roboto text-yummmzo-color'>{currentLocation.slice(0,25)}</span>
                                <span><CiCircleChevDown className='text-md text-yummmzo-color'/></span>
                            </a>
                        </div>
                    </div>
                    {/* Right Part */}
                    <div className='w-7/12'>
                        <ul className='flex justify-between'>
                            <li className=''>
                                <NavLink to="/restaurants" className="flex items-center">
                                    <CiForkAndKnife className='text-3xl text-yummmzo-color'/>
                                    <span className='text-sm pr-2 pl-2 font-roboto text-yummmzo-color'>Restaurants</span>
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/addRestaurant" className="flex items-center">
                                    <CiCirclePlus className='text-3xl text-yummmzo-color'/>
                                    <span className='text-sm pr-2 pl-2 font-roboto text-yummmzo-color'>Add Restaurant</span>
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink className="flex items-center" to="/login">
                                    <CiUser className='text-3xl text-yummmzo-color'/>
                                    <span className='text-sm pr-2 pl-2 font-roboto text-yummmzo-color'>Login</span>
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/cart" className="flex items-center">
                                    <CiShoppingCart className='text-3xl  text-yummmzo-color'/>
                                    <span className='text-sm pr-2 pl-2 font-roboto text-yummmzo-color'>Cart</span>
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
