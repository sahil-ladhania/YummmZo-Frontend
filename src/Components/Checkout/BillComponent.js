import React from 'react'
import { CiCircleAlert } from "react-icons/ci";

const BillComponent = () => {
    return (
        <div className='bg-card-gradient mt-10 p-5 w-full rounded-sm'>
            <>
                {/* Main Component */}
                <div className='w- full'>
                    {/* Image and Restaurant Name Section */}
                    <div className='flex items-center mb-5'>
                        <div>
                            <img className='h-20 mr-5 font-roboto text-secondary' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" alt="Restaurant-Image" />
                        </div>
                        <div>
                            <a className='' href="#">
                                <p className='text-lg font-semibold font-roboto text-secondary'>
                                    Burger King
                                </p>
                                <p className='text-sm font-roboto text-secondary'>
                                    Raj Nagar
                                </p>
                            </a>
                        </div>
                    </div>
                    {/* Item Section */}
                    <div className='flex items-center justify-between mb-5'>
                        <div>
                            <img className='h-3 font-roboto text-secondary' src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" alt="Veg-Nonveg-Image" />
                        </div>
                        <div>
                            <p className='text-sm font-medium font-roboto text-secondary'>
                                Veg Woopher
                            </p>
                        </div>
                        <div className='h-10 flex items-center justify-between'>
                            <button className='h-8 pr-3 pl-3 bg-button-color rounded-sm font-roboto hover:animate-glow-light'>-</button>
                            <input className='h-8 pr-3 pl-3 font-roboto ' type="button" placeholder='1'/>
                            <button className='h-8 pr-3 pl-3 bg-button-color rounded-sm font-roboto hover:animate-glow-light'>+</button>
                        </div>
                        <div>
                            <p className='text-sm font-roboto text-secondary'>
                                Rs.269
                            </p>
                        </div>
                    </div>
                    {/* Suggestion Textfeild */}
                    <div className='mb-5'>
                        <input className='text-sm w-full h-10 outline-none rounded-sm p-2' type="text" name="" id="" placeholder=' Any Suggestion? We will pass it on...'/>
                    </div>
                    {/* Bill Details */}
                    <div className='flex flex-col'>
                        <div className=''>
                            <p className='text-sm font-bold font-roboto text-secondary'>
                                Bill Details
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-sm font-medium font-roboto text-secondary'>
                                Item Total
                            </p>
                            <p className='text-sm font-roboto text-secondary'>
                                Rs.269
                            </p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <div className='flex items-center'>
                                <span className='text-sm font-medium font-roboto text-secondary'>Delivery Fee</span>
                                <CiCircleAlert className='text-lg ml-1 text-secondary'/>
                            </div>
                            <p className='text-sm font-roboto text-secondary'>
                                Free
                            </p>
                        </div>
                        <div className='mb-2 font-roboto text-secondary'>
                            <hr />  
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <span className='text-sm font-medium font-roboto text-secondary'>Platform Fee</span>
                                <CiCircleAlert className='text-lg ml-1 text-secondary'/>
                            </div>
                            <span className='text-sm font-roboto text-secondary'>Rs.2</span>
                        </div>
                        <div className='flex justify-between mb-10'>
                            <div className='flex items-center'> 
                                <span className='text-sm font-medium font-roboto text-secondary'>GST & Restaurant Charges</span>
                                <CiCircleAlert className='text-lg ml-1 text-secondary'/>
                            </div>
                            <span className='text-sm font-roboto text-secondary'>Rs. 20</span>
                        </div>
                        <div className='mb-4'>
                            <hr />  
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-bold font-roboto text-secondary'>
                                To Pay
                            </p>
                            <p className='text-xl font-bold font-roboto text-secondary'>
                                Rs.294
                            </p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default BillComponent
