import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoaderComponent from '../../Utils/LoaderComponent';

const ProfileDropdownComponent = ({auth , setAuth , loading , setLoading}) => {
    const navigate = useNavigate();
    // Handler Functions.
    const handleLogout = () => {
        setAuth({
            user : null,
        })
        localStorage.clear("user_data");
        localStorage.clear("jwt_token");
        console.log("Loader Clicked")
        setLoading(true);
        setTimeout(() => {
            navigate("/");
            setLoading(false);
            document.body.classList.remove('blur-background')
        }, 2000);
    };
    return (
        <div className=''>
            <>
                {
                    auth.user ? 
                    <>
                        {/* Main Component */}
                        <div className='w-4/12 h-profile-dropdown overflow-y-auto p-5 bg-secondary rounded-md absolute top-10 right-0 mt-10 ml-52'>
                            {/* Profile Title */}
                            {
                                auth.user ?
                                    <div className='font-roboto text-yummmzo-color text-2xl font-semibold py-5'>
                                        Hello, {auth.user.firstName}!
                                    </div>
                                    :
                                    <div className='font-roboto text-yummmzo-color text-2xl font-semibold py-5'>
                                        Hello, User!
                                    </div>
                            }
                            {/* Profile Divider */}
                            <div>
                                <hr />
                            </div>
                            {/* Profile Body */}
                            <div>
                                {/* Name and Email Section */}
                                <div className='py-5'>
                                    {/* Name Row */}
                                    <div className='mb-2'>
                                        <div className='flex items-center justify-between'>
                                            <div className='font-roboto text-yummmzo-color'>
                                                Name
                                            </div>
                                            <div>
                                                <a className='font-roboto text-logo' href="#">Edit</a>
                                            </div>
                                        </div>
                                        {
                                            auth.user ? 
                                                <div className='font-roboto text-yummmzo-color font-medium'>
                                                    {auth.user.firstName}
                                                </div>
                                                :
                                                <div className='font-roboto text-yummmzo-color font-medium'>
                                                    User
                                                </div>
                                        }
                                    </div>
                                    {/* Email Row */}
                                    <div className=''>
                                        <div className='font-roboto text-yummmzo-color'>
                                            Email
                                        </div>
                                        {
                                            auth.user ? 
                                                <div className='font-roboto text-yummmzo-color font-medium'>
                                                    {auth.user.email}
                                                </div>
                                                :
                                                <div className='font-roboto text-yummmzo-color font-medium'>
                                                    user@gmail.com
                                                </div>
                                        }
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Phone Number Section */}
                                <div className='py-5'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div className='font-roboto text-yummmzo-color'>
                                            Phone
                                        </div>
                                        <div>
                                            <a className='font-roboto text-logo' href="#">Edit</a>
                                        </div>
                                    </div>
                                    <div className='font-roboto text-logo text-sm'>
                                        What's your phone number?
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Password Section */}
                                <div className='py-5'>
                                    <div className='flex items-center justify-between'>
                                        <div className='font-roboto text-yummmzo-color mb-2'>
                                            Password
                                        </div>
                                        <div>
                                            <a className='font-roboto text-logo' href="#">Edit</a>
                                        </div>
                                    </div>
                                    <div className='font-roboto text-yummmzo-color'>
                                        ********
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Manage Preference Section */}
                                <div className='py-5'>
                                    <div className='font-roboto text-yummmzo-color mb-2'>
                                        Manage preferences
                                    </div>
                                    <div className='mb-2'>
                                        <p className='font-roboto text-yummmzo-color text-sm'>
                                            We use customer data to improve the experience of our service and show relevant promotions.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='font-roboto text-secondary border-transparent bg-yummmzo-color rounded-md p-3 text-sm mb-2'>
                                            YummmZo may share user data (such as hashed emails, phones, or device identifiers) with Facebook and similar platforms to personalise and measure ads and content and to create audiences. You can always opt out of receiving these kinds of communications by deactivating this toggle.
                                        </p>
                                    </div>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div>
                                            <p className='font-roboto text-yummmzo-color text-sm'>
                                                Receive special deals and promotions
                                            </p>
                                        </div>
                                        <div>
                                            <button className='font-roboto text-logo'>Toggle</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Promo Code Section */}
                                <div className='py-5'>
                                    <div className='flex items-center justify-between'>
                                        <div className='font-roboto text-yummmzo-color'>
                                            Promo code
                                        </div>
                                        <div>
                                            <a className='font-roboto text-logo' href="#">Add</a>
                                        </div>
                                    </div>
                                    <div className='font-roboto text-yummmzo-color'>
                                        -
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Logout Section */}
                                <div className='py-5'>
                                    <div className='flex items-center justify-end'>
                                        <a onClick={handleLogout} className='font-roboto text-logo' href="#">Log out</a>
                                    </div>
                                    {
                                    
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        {/* Main Component */}
                        <div className='w-4/12 h-profile-dropdown overflow-y-auto p-5 bg-secondary rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 ml-52'>
                            {/* Profile Title */}
                            <div className='font-roboto text-yummmzo-color text-2xl font-semibold py-5'>
                                Hello, User!
                            </div>
                            {/* Profile Divider */}
                            <div>
                                <hr />
                            </div>
                            {/* Profile Body */}
                            <div>
                                {/* Name and Email Section */}
                                <div className='py-5'>
                                    {/* Name Row */}
                                    <div className='mb-2'>
                                        <div className='flex items-center justify-between'>
                                            <div className='font-roboto text-yummmzo-color'>
                                                Name
                                            </div>
                                            <div>
                                                <a className='font-roboto text-logo' href="#">Edit</a>
                                            </div>
                                        </div>
                                        <div className='font-roboto text-yummmzo-color font-medium'>
                                            user
                                        </div>
                                    </div>
                                    {/* Email Row */}
                                    <div className=''>
                                        <div className='font-roboto text-yummmzo-color'>
                                            Email
                                        </div>
                                        <div className='font-roboto text-yummmzo-color font-medium'>
                                            name@gmail.com
                                        </div>
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Phone Number Section */}
                                <div className='py-5'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div className='font-roboto text-yummmzo-color'>
                                            Phone
                                        </div>
                                        <div>
                                            <a className='font-roboto text-logo' href="#">Edit</a>
                                        </div>
                                    </div>
                                    <div className='font-roboto text-logo text-sm'>
                                        What's your phone number?
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Password Section */}
                                <div className='py-5'>
                                    <div className='flex items-center justify-between'>
                                        <div className='font-roboto text-yummmzo-color mb-2'>
                                            Password
                                        </div>
                                        <div>
                                            <a className='font-roboto text-logo' href="#">Edit</a>
                                        </div>
                                    </div>
                                    <div className='font-roboto text-yummmzo-color'>
                                        ********
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Manage Preference Section */}
                                <div className='py-5'>
                                    <div className='font-roboto text-yummmzo-color mb-2'>
                                        Manage preferences
                                    </div>
                                    <div className='mb-2'>
                                        <p className='font-roboto text-yummmzo-color text-sm'>
                                            We use customer data to improve the experience of our service and show relevant promotions.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='font-roboto text-secondary border-transparent bg-yummmzo-color rounded-md p-3 text-sm mb-2'>
                                            YummmZo may share user data (such as hashed emails, phones, or device identifiers) with Facebook and similar platforms to personalise and measure ads and content and to create audiences. You can always opt out of receiving these kinds of communications by deactivating this toggle.
                                        </p>
                                    </div>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div>
                                            <p className='font-roboto text-yummmzo-color text-sm'>
                                                Receive special deals and promotions
                                            </p>
                                        </div>
                                        <div>
                                            <button className='font-roboto text-logo'>Toggle</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Promo Code Section */}
                                <div className='py-5'>
                                    <div className='flex items-center justify-between'>
                                        <div className='font-roboto text-yummmzo-color'>
                                            Promo code
                                        </div>
                                        <div>
                                            <a className='font-roboto text-logo' href="#">Add</a>
                                        </div>
                                    </div>
                                    <div className='font-roboto text-yummmzo-color'>
                                        -
                                    </div>
                                </div>
                                {/* Profile Divider */}
                                <div>
                                    <hr />
                                </div>
                                {/* Logout Section */}
                                <div className='py-5'>
                                    {
                                        loading ?
                                            <LoaderComponent/>
                                            :
                                            <>
                                                {
                                                    auth.user ?
                                                        <div className='flex items-center justify-end'>
                                                            <a onClick={handleLogout} className='font-roboto text-logo' href="#">Log out</a>
                                                        </div>
                                                        :
                                                        <div className='flex items-center justify-end'>
                                                            <Link to="/login" className='font-roboto text-logo'>Login</Link>
                                                        </div>
                                                }
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                }
            </>
        </div>
    )
}

export default ProfileDropdownComponent
