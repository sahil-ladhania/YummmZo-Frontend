import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { CiForkAndKnife } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
import { getLocation } from 'current-location-geo';
import ProfileDropdownComponent from './ProfileDropdownComponent';
import EmptyCartComponent from '../Cart/EmptyCartComponent';
import LoaderComponent from '../../Utils/LoaderComponent';

const NavbarComponent = ({currentLocation , setCurrentLocation , auth , setAuth , loading , setLoading}) => {
    const navigate = useNavigate();
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
    const handleHomeLoader = () => {
        console.log("Loader Clicked")
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate("/home");
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    }
    const handleRestaurantLoader = () => {
        console.log("Loader Clicked")
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate("/restaurants");
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    }
    const handleAddRestaurantLoader = () => {
        console.log("Loader Clicked")
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate("/addRestaurant");
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    }
    const handleLoginLoader = () => {
        console.log("Loader Clicked")
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate("/login");
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    }
    const handleCartLoader = () => {
        console.log("Loader Clicked")
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate("/cart");
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    }
    return (
        <div className='max-w-6xl ml-auto mr-auto'>
            <>
                {/* Main Component */}
                <div className='h-28 flex items-center justify-between'>
                    {/* Left Part */}
                    <div className='flex items-center w-5/12'>
                        <div>
                            {
                                loading ? 
                                    <LoaderComponent/>
                                    :
                                    <>
                                        <NavLink onClick={handleHomeLoader} className="mr-5 text-4xl font-semibold font-roboto text-primary">YummmZo</NavLink>
                                    </>
                            }
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
                                {
                                loading ? 
                                    <LoaderComponent/>
                                    :
                                    <>
                                        <NavLink onClick={handleRestaurantLoader}  className="flex items-center py-5 px-2">
                                            <CiForkAndKnife className='text-4xl text-yummmzo-color hover:text-primary'/>
                                            <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'>Restaurants</span>
                                        </NavLink>
                                    </>
                                }
                            </li>
                            <li className=''>
                                {
                                    loading ? 
                                        <LoaderComponent/>
                                        :
                                        <>
                                            <NavLink onClick={handleAddRestaurantLoader} className="flex items-center py-5 px-2">
                                                <CiCirclePlus className='text-4xl text-yummmzo-color hover:text-primary'/>
                                                <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'>Add Restaurant</span>
                                            </NavLink>
                                        </>
                                }
                            </li>
                            <li className=''>
                                {
                                    auth.user ?
                                        <NavLink onMouseEnter={handleProfileDropdownEnter} onMouseLeave={handleProfileDropdownLeave} className="flex items-center py-5 px-2">
                                            <CiUser className='text-4xl text-yummmzo-color hover:text-primary'/>
                                            <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'> {auth.user.firstName}</span>
                                        </NavLink>
                                        :
                                        <>
                                            {
                                                loading ? 
                                                    <LoaderComponent/>
                                                    :
                                                    <>
                                                        <NavLink onClick={handleLoginLoader} onMouseEnter={handleProfileDropdownEnter} onMouseLeave={handleProfileDropdownLeave} className="flex items-cente py-5 px-2" to="/login">
                                                            <CiUser className='text-4xl text-yummmzo-color hover:text-primary'/>
                                                            <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'>Login</span>
                                                        </NavLink>
                                                    </>
                                            }
                                        </>
                                }
                            </li>
                            <li className=''>
                                {
                                    loading ? 
                                        <LoaderComponent/>
                                        :
                                        <>
                                            <NavLink onClick={handleCartLoader} onMouseEnter={handleCartDropdownEnter} onMouseLeave={handleCartDropdownLeave} className="flex items-center py-5 px-2">
                                                <CiShoppingCart className='text-4xl  text-yummmzo-color hover:text-primary'/>
                                                <span className='text-lg pr-2 pl-2 font-roboto text-yummmzo-color hover:text-primary'>Cart</span>
                                            </NavLink>
                                        </>
                                }
                            </li>
                        </ul>
                        {
                            isProfileDropdownVisible ?
                                <ProfileDropdownComponent auth={auth} setAuth={setAuth} loading={loading} setLoading={setLoading}/>
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
