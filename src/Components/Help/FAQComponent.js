import React from 'react'

const FAQComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Heading Section */}
                    <div className='fs-r'>
                        FAQs
                    </div>
                    {/* Question and Answers Section */}
                    <div>
                        {/* First Question */}
                        <div>
                            <button className='fs-r'>What is YummmZo Customer Care Number?</button>
                            <div>
                                <p className='fs-r'>
                                    We value our customer's time and hence moved away from a single customer care number to a comprehensive chat- <br />based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. <br /> Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be <br /> assigned to you shortly. 
                                </p>
                            </div>
                        </div>
                        {/* Second Question */}
                        <div>
                            <button className='fs-r'>I entered the wrong CVV, why did my transaction still go through?</button>
                            <div>
                                <p className='fs-r'>
                                    The logic of validations of CVV resides with either payment gateways or banks. It is absolutely the choice of banks to have <br /> CVV as a mandatory input field or not. As per RBI guidelines, 2-Factor-Authentication is not mandatory for less than Rs <br /> 2000 rupees transaction. It is not in control of Swiggy. As an organization, we don't store any card information.
                                </p>
                            </div>
                        </div>
                        {/* Third Question */}
                        <div>
                            <button className='fs-r'>Can I edit my order?</button>
                            <div>
                                <p className='fs-r'>
                                    In order to edit your order, please click on "Help" and then "I wantto modify items in my order". We will connect you to a <br /> support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to <br /> confirm your order. Post that, we may not be able to modify your order if food preparation has started.
                                </p>
                            </div>
                        </div>
                        {/* Fourth Question */}
                        <div>
                            <button className='fs-r'>I want to cancel my order</button>
                            <div>
                                <p className='fs-r'>
                                    In order to cancel your order, please click on "Help" and then "I want to cancel my order". Please note that we may charge <br /> you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled <br /> orders.
                                </p>
                            </div>
                        </div>
                        {/* Fifth Question */}
                        <div>
                            <button className='fs-r'>I want an invoice for my order</button>
                            <div>
                                <p className='fs-r'>
                                    Send an e-mail at : yummmzo@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default FAQComponent
