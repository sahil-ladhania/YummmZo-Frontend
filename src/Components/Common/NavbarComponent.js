import React, {useState} from 'react';
import '../../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilInfo } from '@iconscout/react-unicons'
import { UilRestaurant } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'

const NavbarComponent = () => {
    // State Variables
    const [activeLink , setActiveLink] =  useState('restaurants')
    
    // Handler Functions
    const handleRestaurantLink = () => {

    }
    const handleAddRestaurantLink = () => {

    }
    const handleHelpLink = () => {

    }
    const handleLoginLink = () => {

    }
    const handleCartLink = () => {

    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-100 mb-20'>
                    {/* Left Part */}
                    <div className='flex ai-c'>
                        <div>
                            <Link className='mr-20' to="/">YummmZo</Link>
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
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilRestaurant className='h-20 w-a'/>
                                <Link onClick={handleRestaurantLink} className='ml-5 td-n c-b' to="/restaurants">
                                    Restaurants
                                </Link>
                            </li>
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilPlus className='h-20 w-a'/>
                                <Link onClick={handleAddRestaurantLink} className='ml-5 td-n c-b' to="/addRestaurant">
                                    Add Restaurant
                                </Link>
                            </li>
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilInfo className='h-20 w-a'/>
                                <Link onClick={handleHelpLink} className='ml-5 td-n c-b' to="/helpandsupport">
                                    Help
                                </Link>
                            </li>
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilUser className='h-20 w-a'/>
                                <Link onClick={handleLoginLink} className='ml-5 td-n c-b' to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilShoppingBag className='h-20 w-a'/>
                                <Link onClick={handleCartLink} className='ml-5 td-n c-b' to="/cart">
                                    Cart 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default NavbarComponent
