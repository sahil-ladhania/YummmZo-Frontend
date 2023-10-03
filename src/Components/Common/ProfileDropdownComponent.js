import React from 'react'

const ProfileDropdownComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='w-400 p-10-20 b-1-b-s bc-w profile-dropdown-container'>
                    {/* Profile Title */}
                    <div className='h-50 fs-r'>
                        Hello, Sahil!
                    </div>
                    {/* Profile Divider */}
                    <div>
                        <hr />
                    </div>
                    {/* Profile Body */}
                    <div>
                        {/* Name and Email Section */}
                        <div className='h-120 mt-20'>
                            {/* Name Row */}
                            <div>
                                <div className='flex jc-sb mb-10'>
                                    <div className='fs-r'>
                                        Name
                                    </div>
                                    <div>
                                        <a className='fs-r td-n c-b' href="#">Edit</a>
                                    </div>
                                </div>
                                <div className='mb-10 fs-r'>
                                    Sahil
                                </div>
                            </div>
                            {/* Email Row */}
                            <div>
                                <div className='mb-10 fs-r'>
                                    Email
                                </div>
                                <div className='fs-r'>
                                    sahilladhania5@gmail.com
                                </div>
                            </div>
                        </div>
                        {/* Profile Divider */}
                        <div>
                            <hr />
                        </div>
                        {/* Phone Number Section */}
                        <div className='h-80 mt-20'>
                            <div className='flex jc-sb mb-10'>
                                <div className='fs-r'>
                                    Phone
                                </div>
                                <div>
                                    <a className='fs-r td-n c-b' href="#">Edit</a>
                                </div>
                            </div>
                            <div className='fs-r'>
                                What's your phone number?
                            </div>
                        </div>
                        {/* Profile Divider */}
                        <div>
                            <hr />
                        </div>
                        {/* Password Section */}
                        <div className='h-80 mt-20'>
                            <div className='flex jc-sb mb-10'>
                                <div className='fs-r'>
                                    Password
                                </div>
                                <div>
                                    <a className='fs-r td-n c-b' href="#">Edit</a>
                                </div>
                            </div>
                            <div className='fs-r'>
                                ********
                            </div>
                        </div>
                        {/* Profile Divider */}
                        <div>
                            <hr />
                        </div>
                        {/* Manage Preference Section */}
                        <div className='mt-20'>
                            <div className='mb-10 fs-r'>
                                Manage preferences
                            </div>
                            <div className='mb-10'>
                                <p className='ta-j fs-s fs-r'>
                                    We use customer data to improve the experience of our service and show relevant promotions.
                                </p>
                            </div>
                            <div>
                                <p className='ta-j fs-s p-10 b-1-b-s mb-10 fs-r'>
                                    YummmZo may share user data (such as hashed emails, phones, or device identifiers) with Facebook and similar platforms to personalise and measure ads and content and to create audiences. You can always opt out of receiving these kinds of communications by deactivating this toggle.
                                </p>
                            </div>
                            <div className='flex jc-sb ai-c h-50 mb-10'>
                                <div>
                                    <p className='fs-r'>
                                        Receive special deals and promotions
                                    </p>
                                </div>
                                <div>
                                    <button className='fs-r'>Toggle</button>
                                </div>
                            </div>
                        </div>
                        {/* Profile Divider */}
                        <div>
                            <hr />
                        </div>
                        {/* Promo Code Section */}
                        <div className='mt-20'>
                            <div className='flex jc-sb ai-c'>
                                <div className='fs-r'>
                                    Promo code
                                </div>
                                <div>
                                    <a className='fs-r td-n c-b' href="#">Add</a>
                                </div>
                            </div>
                            <div className='mb-10 fs-r'>
                                -
                            </div>
                        </div>
                        {/* Profile Divider */}
                        <div>
                            <hr />
                        </div>
                        {/* Logout Section */}
                        <div className='mt-20'>
                            <div className='flex jc-fe'>
                                <a className='fs-r td-n c-b' href="#">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ProfileDropdownComponent
