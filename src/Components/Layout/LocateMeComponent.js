import React from 'react';
import { Link } from 'react-router-dom';
import { UilLocationPoint } from '@iconscout/react-unicons'

const LocateMeComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-auto'>
                    {/* Landing Page Mini Navbar */}
                    <div className=''>
                        <div>
                            <Link className='' to="/home">YummmZo</Link>
                        </div>
                        <div>
                            <Link className='' to="/login">Login</Link>
                            <Link className='' to="/signup">Sign Up</Link>
                        </div>
                    </div>
                    {/* Changing Heading & Description */}
                    <div className=''>
                        <h1 className=''>Late night at office ?</h1>
                        <h2 className=''>Order food from favourite restaurants near you.</h2>
                    </div>
                    {/* Locate Me Section */}
                    <div className=''>
                        <input className="" type="text" placeholder='Enter your delivery location'/>
                        <button className=''><UilLocationPoint className=''/>Locate Me</button>
                        <button className=''>FIND FOOD</button>
                    </div>
                    {/* Popular Cities Heading */}
                    <div className=''>
                        <h3 className=''>POPULAR CITIES IN INDIA</h3>
                    </div>
                    {/* Landing Page Mini Footer */}
                    <div className=''>
                        <ul className=''>
                            <li className=''><a className='' href="#">Ahmedabad</a></li>
                            <li className=''><a className='' href="#">Bangalore</a></li>
                            <li className=''><a className='' href="#">Chennai</a></li>
                            <li className=''><a className='' href="#">Delhi</a></li>
                            <li className=''><a className='' href="#">Gurgaon</a></li>
                            <li className=''><a className='' href="#">Hyderabad</a></li>
                            <li className=''><a className='' href="#">Kolkata</a></li>
                            <li className=''><a className='' href="#">Mumbai</a></li>
                            <li className=''><a className='' href="#">Pune</a></li>
                            <li className=''><a className='' href="#">& more</a></li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LocateMeComponent
