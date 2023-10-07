import React from 'react'
import { CiCircleAlert } from "react-icons/ci";

const BillComponent = () => {
    return (
        <div className='border-2 border-black mt-10 p-5 w-full rounded-sm'>
            <>
                {/* Main Component */}
                <div className='w- full'>
                    {/* Image and Restaurant Name Section */}
                    <div className='flex items-center mb-5'>
                        <div>
                            <img className='h-20 mr-5' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" alt="Restaurant-Image" />
                        </div>
                        <div>
                            <a className='' href="#">
                                <p className='text-lg font-semibold'>
                                    Burger King
                                </p>
                                <p className='text-sm'>
                                    Raj Nagar
                                </p>
                            </a>
                        </div>
                    </div>
                    {/* Item Section */}
                    <div className='flex items-center justify-between mb-5'>
                        <div>
                            <img className='h-3' src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" alt="Veg-Nonveg-Image" />
                        </div>
                        <div>
                            <p className='text-sm font-medium'>
                                Veg Woopher
                            </p>
                        </div>
                        <div className='h-10 flex items-center justify-between'>
                            <button className='h-8 pr-3 pl-3 bg-slate-200 rounded-sm'>-</button>
                            <input className='h-8 pr-3 pl-3' type="button" placeholder='1'/>
                            <button className='h-8 pr-3 pl-3 bg-slate-200 rounded-sm'>+</button>
                        </div>
                        <div>
                            <p className='text-sm'>
                                Rs.269
                            </p>
                        </div>
                    </div>
                    {/* Suggestion Textfeild */}
                    <div className='mb-5'>
                        <input className='text-sm border-2 w-full h-10 outline-none rounded-sm p-2' type="text" name="" id="" placeholder=' Any Suggestion? We will pass it on...'/>
                    </div>
                    {/* Bill Details */}
                    <div className='flex flex-col'>
                        <div className=''>
                            <p className='text-sm font-bold'>
                                Bill Details
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-sm font-medium'>
                                Item Total
                            </p>
                            <p className='text-sm'>
                                Rs.269
                            </p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <div className='flex items-center'>
                                <span className='text-sm font-medium'>Delivery Fee</span>
                                <CiCircleAlert className='text-lg ml-1'/>
                            </div>
                            <p className='text-sm'>
                                Free
                            </p>
                        </div>
                        <div className='mb-2'>
                            <hr />  
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <span className='text-sm font-medium'>Platform Fee</span>
                                <CiCircleAlert className='text-lg ml-1'/>
                            </div>
                            <span className='text-sm'>Rs.2</span>
                        </div>
                        <div className='flex justify-between mb-10'>
                            <div className='flex items-center'> 
                                <span className='text-sm font-medium'>GST & Restaurant Charges</span>
                                <CiCircleAlert className='text-lg ml-1'/>
                            </div>
                            <span className='text-sm'>Rs. 20</span>
                        </div>
                        <div className='mb-4'>
                            <hr />  
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-bold'>
                                To Pay
                            </p>
                            <p className='text-xl font-bold'>
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
