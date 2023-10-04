import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";

const MobileTopNavbar = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='fixed top-0 w-full border-b-2 border-slate-100'>
                    <nav>
                        <ul className='flex items-center justify-between p-3'>
                            <li className='w-3/4'>
                                <div className='flex items-center justify-start'> 
                                    <span className='text-xl mr-1 p-1'><CiLocationOn/></span>
                                    <span className='text-lg font-bold'>Mohan Nagar</span>
                                </div>
                                <div>
                                    <span className='text-xs ml-2'>Khasra No 1074, Arthala</span>
                                </div>
                            </li>
                            <li className='w-1/4'>
                                <div className='flex items-center'>
                                    <span className='text-3xl p-1'><CiDiscount1/></span>
                                    <span className='text-sm font-bold'>Offers</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default MobileTopNavbar
