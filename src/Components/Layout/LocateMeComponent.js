import React from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";

const LocateMeComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-auto'>
                    {/* Landing Page Mini Navbar */}
                    <div className='h-40 flex items-center justify-between'>
                        <div>
                            <Link className='text-2xl' to="/home">YummmZo</Link>
                        </div>
                        <div className='w-52 flex justify-between items-center'>
                            <Link className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm' to="/login">Login</Link>
                            <Link className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm' to="/signup">Sign Up</Link>
                        </div>
                    </div>
                    {/* Changing Heading & Description */}
                    <div className='h-40 flex flex-col justify-center'>
                        <h1 className='text-4xl font-bold pt-3 pb-3'>Late night at office ?</h1>
                        <h2 className='text-2xl pt-1 pb-1'>Order food from favourite restaurants near you.</h2>
                    </div>
                    {/* Locate Me Section */}
                    <div className='h-20 flex justify-start items-center'>
                        <input className="border-2 w-80 h-10 outline-none rounded-l-sm p-2" type="text" placeholder='Enter your delivery location'/>
                        <div className='flex items-center bg-slate-200 rounded-r-sm h-10 cursor-pointer'>
                            <span className='pr-1 pl-1 text-xl'><CiLocationOn/></span>
                            <span className='pr-3 pl-3 text-sm'>Locate Me</span>
                        </div>
                    </div>
                    {/* Popular Cities Heading */}
                    <div className='h-10 flex items-center'>
                        <h3 className='uppercase text-md'>popular cities in india</h3>
                    </div>
                    {/* Popular Cities List */}
                    <div className='h-20 flex items-center mb-14'>
                        <div>
                            <span className='pr-2 text-sm cursor-pointer'>Ahmedabad</span>
                            <span className='pr-2 text-sm cursor-pointer'>Bangalore</span>
                            <span className='pr-2 text-sm cursor-pointer'>Chennai</span>
                            <span className='pr-2 text-sm cursor-pointer'>Delhi</span>
                            <span className='pr-2 text-sm cursor-pointer'>Gurgaon</span>
                            <span className='pr-2 text-sm cursor-pointer'>Hyderabad</span>
                            <span className='pr-2 text-sm cursor-pointer'>Kolkata</span>
                            <span className='pr-2 text-sm cursor-pointer'>Mumbai</span>
                            <span className='pr-2 text-sm cursor-pointer'>Pune</span>
                            <br />
                            <span className='pr-2 text-sm cursor-pointer'>&</span>
                            <span className='pr-2 text-sm cursor-pointer'>more</span>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LocateMeComponent
