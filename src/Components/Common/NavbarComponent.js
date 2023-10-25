import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiForkAndKnife } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
import { getLocation } from 'current-location-geo';
import ProfileDropdownComponent from './ProfileDropdownComponent';
import EmptyCartComponent from '../Cart/EmptyCartComponent';

const NavbarComponent = ({currentLocation , setCurrentLocation , auth , setAuth}) => {
    // State Variables.
    const [isProfileDropdownVisible , setIsProfileDropdownVisible] = useState(false);
    const [isEmptyCartDropdownVisible , setIsEmptyCartDropdownVisible] = useState(false);
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
    };
    const handleProfileDropdownEnter = () => {
        setIsProfileDropdownVisible(!isProfileDropdownVisible);
        console.log("Mouse Enter");
    }
    const handleProfileDropdownLeave = () => {
        setIsProfileDropdownVisible(isProfileDropdownVisible);
        console.log("Mouse Leave");
    }
    const handleCartDropdownEnter = () => {
        setIsEmptyCartDropdownVisible(!isEmptyCartDropdownVisible);
        console.log("Mouse Enter");
    }
    const handleCartDropdownLeave = () => {
        setIsEmptyCartDropdownVisible(isEmptyCartDropdownVisible);
        console.log("Mouse Leave");
    }
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='h-20 flex items-center justify-between '>
                    {/* Left Part */}
                    <div className='flex items-center w-5/12'>
                        <div>
                            <NavLink exact to= "/home" className="mr-5 text-4xl font-semibold font-roboto text-primary">YummmZo</NavLink>
                        </div>
                        <div className=''>
                            <a onClick={handleCurrentLocation} className='flex items-center' href="#">
                                <span className='text-sm font-medium mr-2 font-roboto text-yummmzo-color'>Home</span>
                                <span className='text-sm font-roboto mr-2 text-primary'>{currentLocation.slice(0,25)}</span>
                                <span><CiCircleChevDown className='text-md  text-primary'/></span>
                            </a>
                        </div>
                    </div>
                    {/* Right Part */}
                    <div className='w-7/12'>
                        <ul className='flex justify-between'>
                            <li className=''>
                                <NavLink to="/restaurants" className="flex items-center py-5 px-2">
                                    <CiForkAndKnife className='text-4xl text-yummmzo-color hover:text-primary'/>
                                    <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'>Restaurants</span>
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/addRestaurant" className="flex items-center py-5 px-2">
                                    <CiCirclePlus className='text-4xl text-yummmzo-color hover:text-primary'/>
                                    <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'>Add Restaurant</span>
                                </NavLink>
                            </li>
                            <li className=''>
                                {
                                    auth.user ?
                                        <NavLink onMouseEnter={handleProfileDropdownEnter} onMouseLeave={handleProfileDropdownLeave} className="flex items-center py-5 px-2">
                                            <CiUser className='text-4xl text-yummmzo-color hover:text-primary'/>
                                            <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'> {auth.user.firstName}</span>
                                        </NavLink>
                                        :
                                        <NavLink onMouseEnter={handleProfileDropdownEnter} onMouseLeave={handleProfileDropdownLeave} className="flex items-cente py-5 px-2" to="/login">
                                            <CiUser className='text-4xl text-yummmzo-color hover:text-primary'/>
                                            <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'>Login</span>
                                        </NavLink>
                                }
                            </li>
                            <li className=''>
                                <NavLink onMouseEnter={handleCartDropdownEnter} onMouseLeave={handleCartDropdownLeave} to="/cart" className="flex items-center py-5 px-2">
                                    <CiShoppingCart className='text-4xl  text-yummmzo-color hover:text-primary'/>
                                    <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'>Cart</span>
                                </NavLink>
                            </li>
                        </ul>
                        {
                            isProfileDropdownVisible ?
                                <ProfileDropdownComponent auth={auth} setAuth={setAuth}/>
                                :
                                null
                        }
                        {
                            isEmptyCartDropdownVisible ? 
                                <EmptyCartComponent/>
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
