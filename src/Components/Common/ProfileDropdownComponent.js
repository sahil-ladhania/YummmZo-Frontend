import React from 'react'

const ProfileDropdownComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Profile Title */}
                    <div>
                        Hello, Sahil!
                    </div>
                    {/* Profile Divider */}
                    <div>

                    </div>
                    {/* Profile Body */}
                    <div>
                        {/* Name and Email Section */}
                        <div>
                            {/* Name Row */}
                            <div>
                                <div>
                                    <div>
                                        Name
                                    </div>
                                    <div>
                                        <a href="#">Edit</a>
                                    </div>
                                </div>
                                <div>
                                    Sahil
                                </div>
                            </div>
                            {/* Email Row */}
                            <div>
                                <div>
                                    Email
                                </div>
                                <div>
                                    sahilladhania5@gmail.com
                                </div>
                            </div>
                        </div>
                        {/* Phone Number Section */}
                        <div>
                            <div>
                                <div>
                                    Phone
                                </div>
                                <div>
                                    <a href="#">Edit</a>
                                </div>
                            </div>
                            <div>
                                What's your phone number?
                            </div>
                        </div>
                        {/* Password Section */}
                        <div>
                            <div>
                                <div>
                                    Password
                                </div>
                                <div>
                                    <a href="#">Edit</a>
                                </div>
                            </div>
                            <div>
                                ********
                            </div>
                        </div>
                        {/* Manage Preference Section */}
                        <div>
                            <div>
                                Manage preferences
                            </div>
                            <div>
                                <p>
                                    We use customer data to improve the experience of our service <br /> and show relevant promotions.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Glovo may share user data (such as hashed emails, phones, <br /> or device identifiers) with Facebook and similar platforms <br /> to personalise and measure ads and content and to create <br /> audiences. You can always opt out of receiving these kinds <br /> of communications by deactivating this toggle.
                                </p>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        Receive special deals and promotions
                                    </p>
                                </div>
                                <div>
                                    <button>Toggle</button>
                                </div>
                            </div>
                        </div>
                        {/* Promo Code Section */}
                        <div>
                            <div>
                                <div>
                                    Promo code
                                </div>
                                <div>
                                    <a href="#">Add</a>
                                </div>
                            </div>
                            <div>
                                -
                            </div>
                        </div>
                        {/* Logout Section */}
                        <div>
                            <div>
                                <a href="#">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ProfileDropdownComponent
