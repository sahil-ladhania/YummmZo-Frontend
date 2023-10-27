import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { getLocation } from 'current-location-geo';
import LoaderComponent from '../../Utils/LoaderComponent';
import CostLowToHighAndCrossComponent from '../Restaurant/CostLowToHighAndCrossComponent';
import { headings } from '../../Utils/HeadingsData';

const LocateMeComponent = ({currentLocation , setCurrentLocation , loading , setLoading}) => {
    const navigate = useNavigate();
    const animatingHeadings = headings;
    // State Variables
    const [currentHeadingIndex , setCurrentHeadingIndex] = useState(0);
    // Handler Function
    const handleCurrentLocation = () => {
        setLoading(true);
        document.body.classList.add('blur-background');
        getLocation((error , position) => {
            if(error){
                console.log(error);
            }
            else{
                console.log(position.address);
                setCurrentLocation(position.address);
                localStorage.setItem("user_current_location" , JSON.stringify(position.address));
                setTimeout(() => {
                    navigate("/home");
                    setLoading(false);
                    document.body.classList.remove('blur-background')
                },1000);
            }
        })
    }
    const handleSignupLoader = () => {
        console.log("Loader Clicked")
        setLoading(true);
        document.body.classList.add('blur-background');
        setTimeout(() => {
            navigate("/signup");
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
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % animatingHeadings.length);
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div>
            <>  
                {
                    loading ? 
                        <LoaderComponent/>
                        :
                        <>
                            {/* Main Component */}
                            <div className='h-auto'>
                                {/* Landing Page Mini Navbar */}
                                <div className='h-40 flex items-center justify-between'>
                                    <div>
                                        {
                                            loading ? 
                                                <LoaderComponent/>
                                                :
                                                <>
                                                    <Link onClick={handleHomeLoader} className='text-4xl font-semibold font-roboto text-primary tracking-wider' >YummmZo</Link>
                                                </>
                                        }
                                    </div>
                                    <div className='w-52 flex justify-between items-center'>
                                        {
                                            loading ? 
                                                <LoaderComponent/>
                                                :
                                                <>
                                                    <Link onClick={handleLoginLoader} className='pr-5 pl-5 pt-3 pb-3 bg-button-color rounded-sm font-roboto hover:animate-glow-light'>Login</Link>
                                                </>
                                        }
                                        {
                                            loading ? 
                                                <LoaderComponent/>
                                                :
                                                <>
                                                    <Link onClick={handleSignupLoader} className='pr-5 pl-5 pt-3 pb-3 bg-button-color rounded-sm font-roboto hover:animate-glow-light'>Sign Up</Link>
                                                </>
                                        }
                                    </div>
                                </div>
                                {/* Changing Heading & Description */}
                                <div className='h-40 flex flex-col justify-center'>
                                    <h1 className={`text-4xl font-bold pt-3 pb-3 font-roboto text-yummmzo-color tracking-wider heading-animation`}>{animatingHeadings[currentHeadingIndex]}</h1>
                                    <h2 className='text-2xl pt-1 pb-1 font-roboto text-yummmzo-color tracking-wider'>Order food from favourite restaurants near you.</h2>
                                </div>
                                {/* Locate Me Section */}
                                <div className='h-20 flex justify-start items-center'>
                                    <input className="w-80 h-10 outline-none rounded-l-sm p-2 font-roboto text-secondary" type="text" placeholder='Enter your delivery location'/>
                                    <div onClick={handleCurrentLocation} className='flex items-center bg-button-color rounded-r-sm h-10 cursor-pointer hover:animate-glow-light'>
                                        <span className='pr-1 pl-1 text-xl'><CiLocationOn/></span>
                                        <span className='pr-3 pl-3 text-sm font-roboto'>Locate Me</span>
                                    </div>
                                </div>
                                {/* Popular Cities Heading */}
                                <div className='h-10 flex items-center'>
                                    <h3 className='uppercase text-md font-roboto text-yummmzo-color tracking-wider'>popular cities in india</h3>
                                </div>
                                {/* Popular Cities List */}
                                <div className='h-20 flex items-center py-2'>
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
                }
            </>
        </div>
    )
}

export default LocateMeComponent
