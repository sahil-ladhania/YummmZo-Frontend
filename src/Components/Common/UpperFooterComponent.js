import React from 'react';
import '../../Styles/Footer.css';

const UpperFooterComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r ai-fs jc-sb mb-20'>
                    {/* First Column */}
                    <div className='flex fd-c ai-fs'>
                        {/* Heading */}
                        <div className='mb-10 fs-r c-g ls-1 fw-500'>
                            COMPANY
                        </div>
                        <div className=''>
                            <ul className=''>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">About us</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Team</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Careers</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">YummmZo Blog</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Bug Bounty</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">YummmZo One</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">YummmZo Corporate</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">YummmZo Instamart</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">YummmZo Genie</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Second Column */}
                    <div className='flex fd-c ai-fs'>
                        {/* Heading */}
                        <div className='mb-10 fs-r c-g ls-1 fw-500'>
                            CONTACT
                        </div>
                        <div className=''>
                            <ul className=''>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Help and Support</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Partner with us</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Ride with us</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Third Column */}
                    <div className='flex fd-c ai-fs'>
                        {/* Heading */}
                        <div className='mb-10 fs-r c-g ls-1 fw-500'>
                            LEGAL
                        </div>
                        <div className=''>
                            <ul className=''>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Terms & Condition</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Refund & Cancellation</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Privacy Policy</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Cookie Policy</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Offer Terms</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Phishing & Fraud</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Corporate - YummmZo Money Codes Terms and <br /> Conditions</a></li>
                                <li className='ls-n lh-1 fs-r'><a className='td-n c-b' href="#">Corporate - YummmZo Discount Voucher Terms and <br /> Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Fourth Column */}
                    <div className='flex fd-c'>
                        {/* Image 1 fs-r */}
                        <div className='mb-20'>
                            <img className='' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="Download-on-App-Store" />
                        </div>
                        {/* Image 2 */}
                        <div className='mt-20'>
                            <img className='' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Download-on-Play-Store" />
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default UpperFooterComponent
