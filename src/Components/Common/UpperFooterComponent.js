import React from 'react';
import '../../Styles/Footer.css';

const UpperFooterComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r ai-fs jc-sa'>
                    {/* First Column */}
                    <div className='flex fd-c ai-fs'>
                        {/* Heading */}
                        <div className='ml-40'>
                            Company
                        </div>
                        <div className=''>
                            <ul className=''>
                                <li className='ls-n lh-1'><a className='' href="#">About us</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Team</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Careers</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">YummmZo Blog</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Bug Bounty</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">YummmZo One</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">YummmZo Corporate</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">YummmZo Instamart</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">YummmZo Genie</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Second Column */}
                    <div className='flex fd-c ai-fs'>
                        {/* Heading */}
                        <div className='ml-40'>
                            Contact
                        </div>
                        <div className=''>
                            <ul className=''>
                                <li className='ls-n lh-1'><a className='' href="#">Help and Support</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Partner with us</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Ride with us</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Third Column */}
                    <div className='flex fd-c ai-fs'>
                        {/* Heading */}
                        <div className='ml-40'>
                            Legal
                        </div>
                        <div className=''>
                            <ul className=''>
                                <li className='ls-n lh-1'><a className='' href="#">Terms & Condition</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Refund & Cancellation</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Privacy Policy</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Cookie Policy</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Offer Terms</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Phishing & Fraud</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Corporate - YummmZo Money Codes Terms and Conditions</a></li>
                                <li className='ls-n lh-1'><a className='' href="#">Corporate - YummmZo Discount Voucher Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Fourth Column */}
                    <div className='flex fd-c'>
                        {/* Image 1 */}
                        <div className='mb-20'>
                            <img className='' src="" alt="Download-on-App-Store" />
                        </div>
                        {/* Image 2 */}
                        <div className='mt-20'>
                            <img className='' src="" alt="Download-on-Play-Store" />
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default UpperFooterComponent
