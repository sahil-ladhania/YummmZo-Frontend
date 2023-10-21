import React from 'react';

const UpperFooterComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex justify-between items-start h-72 mt-10'>
                    {/* First Column */}
                    <div className=''>
                        {/* Heading */}
                        <div className='mb-5 font-semibold uppercase font-roboto text-yummmzo-color'>
                            company
                        </div>
                        <div className=''>
                            <ul className='leading-6'>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">About us</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Team</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Careers</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">YummmZo Blog</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Bug Bounty</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">YummmZo One</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">YummmZo Corporate</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">YummmZo Instamart</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">YummmZo Genie</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Second Column */}
                    <div className=''>
                        {/* Heading */}
                        <div className='mb-5 font-semibold uppercase font-roboto text-yummmzo-color'>
                            contact
                        </div>
                        <div className=''>
                            <ul className='leading-6'>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Help and Support</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Partner with us</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Ride with us</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Third Column */}
                    <div className=''>
                        {/* Heading */}
                        <div className='mb-5 font-semibold uppercase font-roboto text-yummmzo-color'>
                            legal
                        </div>
                        <div className=''>
                            <ul className='leading-6'>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Terms & Condition</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Refund & Cancellation</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Privacy Policy</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Cookie Policy</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Offer Terms</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Phishing & Fraud</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Corporate - YummmZo Money Codes Terms and <br /> Conditions</a></li>
                                <li className=''><a className='text-base font-roboto text-yummmzo-color' href="#">Corporate - YummmZo Discount Voucher Terms and <br /> Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Fourth Column */}
                    <div className='leading-6'>
                        {/* Image 1 fs-r */}
                        <div className='cursor-pointer mb-3'>
                            <img className='' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="Download-on-App-Store" />
                        </div>
                        {/* Image 2 */}
                        <div className='cursor-pointer mt-3'>
                            <img className='' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Download-on-Play-Store" />
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default UpperFooterComponent
