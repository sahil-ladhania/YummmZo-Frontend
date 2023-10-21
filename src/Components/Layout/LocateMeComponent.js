import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { getLocation } from 'current-location-geo';

const LocateMeComponent = ({currentLocation , setCurrentLocation}) => {
    const navigate = useNavigate();
    // Handler Function
    const handleCurrentLocation = () => {
        getLocation((error , position) => {
            if(error){
                console.log(error);
            }
            else{
                console.log(position.address);
                setCurrentLocation(position.address);
                setTimeout(() => {
                    navigate("/home");
                },1000);
            }
        })
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-auto'>
                    {/* Landing Page Mini Navbar */}
                    <div className='h-40 flex items-center justify-between'>
                        <div>
                            <Link className='text-4xl font-semibold font-roboto text-primary' to="/home">YummmZo</Link>
                        </div>
                        <div className='w-52 flex justify-between items-center'>
                            <Link className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm font-roboto' to="/login">Login</Link>
                            <Link className='pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm font-roboto' to="/signup">Sign Up</Link>
                        </div>
                    </div>
                    {/* Changing Heading & Description */}
                    <div className='h-40 flex flex-col justify-center'>
                        <h1 className='text-4xl font-bold pt-3 pb-3 font-roboto text-yummmzo-color'>Late night at office ?</h1>
                        <h2 className='text-2xl pt-1 pb-1 font-roboto text-yummmzo-color'>Order food from favourite restaurants near you.</h2>
                    </div>
                    {/* Locate Me Section */}
                    <div className='h-20 flex justify-start items-center'>
                        <input className="w-80 h-10 outline-none rounded-l-sm p-2 font-roboto text-secondary" type="text" placeholder='Enter your delivery location'/>
                        <div onClick={handleCurrentLocation} className='flex items-center bg-slate-200 rounded-r-sm h-10 cursor-pointer'>
                            <span className='pr-1 pl-1 text-xl'><CiLocationOn/></span>
                            <span className='pr-3 pl-3 text-sm font-roboto '>Locate Me</span>
                        </div>
                    </div>
                    {/* Popular Cities Heading */}
                    <div className='h-10 flex items-center'>
                        <h3 className='uppercase text-md font-roboto text-yummmzo-color'>popular cities in india</h3>
                    </div>
                    {/* Popular Cities List */}
                    <div className='h-20 flex items-center mb-14'>
                        <div>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>Ahmedabad</span>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>Bangalore</span>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>Chennai</span>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>Delhi</span>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>Gurgaon</span>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>Hyderabad</span>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>Kolkata</span>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>Mumbai</span>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>Pune</span>
                            <br />
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>&</span>
                            <span className='pr-2 text-sm cursor-pointer font-roboto text-yummmzo-color'>more</span>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LocateMeComponent
