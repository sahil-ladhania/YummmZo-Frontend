import React from 'react';
import '../../Styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilInfo } from '@iconscout/react-unicons'
import { UilRestaurant } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'

const NavbarComponent = () => {
    
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-100 mb-20'>
                    {/* Left Part */}
                    <div className='flex ai-c'>
                        <div>
                            {/* <Link className='mr-20 td-n c-b' to="/">YummmZo</Link> */}
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
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilRestaurant className='h-20 w-a'/>
                                <NavLink to="/restaurants" className="mr-20 td-n c-b">Restaurants</NavLink>
                                {/* <Link className='ml-5 td-n c-b' to="/restaurants">
                                    Restaurants
                                </Link> */}
                            </li>
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilPlus className='h-20 w-a'/>
                                <NavLink to="/addRestaurant" className="mr-20 td-n c-b">Add Restaurant</NavLink>
                                {/* <Link className='ml-5 td-n c-b' to="/addRestaurant">
                                    Add Restaurant
                                </Link> */}
                            </li>
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilInfo className='h-20 w-a'/>
                                <NavLink to="/helpandsupport" className="mr-20 td-n c-b">Help</NavLink>
                                {/* <Link className='ml-5 td-n c-b' to="/helpandsupport">
                                    Help
                                </Link> */}
                            </li>
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilUser className='h-20 w-a'/>
                                <NavLink to="/login" className="mr-20 td-n c-b">Login</NavLink>
                                {/* <Link className='ml-5 td-n c-b' to="/login">
                                    Login
                                </Link> */}
                            </li>
                            <li className='ml-20 ls-n flex ai-c fs-r'>
                                <UilShoppingBag className='h-20 w-a'/>
                                <NavLink to="/cart" className="mr-20 td-n c-b">Cart</NavLink>
                                {/* <Link className='ml-5 td-n c-b' to="/cart">
                                    Cart 
                                </Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default NavbarComponent
