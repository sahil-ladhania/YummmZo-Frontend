import React from 'react';
import '../../Styles/Navbar.css';
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilInfo } from '@iconscout/react-unicons'
import { UilPercentage } from '@iconscout/react-unicons'
import { UilRestaurant } from '@iconscout/react-unicons'

const NavbarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r jc-sb ai-c h-100'>
                    {/* Left Part */}
                    <div className='flex ai-c'>
                        <div>
                            <a className='mr-20' href="#"><img src="" alt="YummmZo-Logo" /></a>
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
                            <li className='ml-20 ls-n flex ai-c fs-r'><UilRestaurant className='h-20 w-a'/><a className='ml-5 td-n c-b' href="#">Restaurants</a></li>
                            <li className='ml-20 ls-n flex ai-c fs-r'><UilPercentage className='h-20 w-a'/><a className='ml-5 td-n c-b' href="#">Offers</a></li>
                            <li className='ml-20 ls-n flex ai-c fs-r'><UilInfo className='h-20 w-a'/><a className='ml-5 td-n c-b' href="#">Help</a></li>
                            <li className='ml-20 ls-n flex ai-c fs-r'><UilUser className='h-20 w-a'/><a className='ml-5 td-n c-b' href="#">Sign In</a></li>
                            <li className='ml-20 ls-n flex ai-c fs-r'><UilShoppingBag className='h-20 w-a'/><a className='ml-5 td-n c-b' href="#">Cart</a></li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default NavbarComponent
