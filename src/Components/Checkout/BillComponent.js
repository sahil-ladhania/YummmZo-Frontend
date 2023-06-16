import React from 'react'
import { UilInfoCircle } from '@iconscout/react-unicons'

const BillComponent = () => {
    return (
        <div className='b-1-b-d'>
            <>
                {/* Main Component */}
                <div className='w-300 p-10-20'>
                    {/* Image and Restaurant Name Section */}
                    <div className='flex ai-c mb-20'>
                        <div>
                            <img className='h-60 mr-10' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/0bf19a82b109b40c2f5c56d00f071a33" alt="Restaurant-Image" />
                        </div>
                        <div>
                            <a href="#">
                                <p>
                                    Subway
                                </p>
                                <p>
                                    Vasundhra
                                </p>
                            </a>
                        </div>
                    </div>
                    {/* Item Section */}
                    <div className='flex fd-r ai-c jc-sb mb-20'>
                        <div>
                            <img className='h-10' src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" alt="Veg-Nonveg-Image" />
                        </div>
                        <div>
                            <p>
                                Paneer Achari
                            </p>
                        </div>
                        <div>
                            <button>- | +</button>
                        </div>
                        <div>
                            <p>
                                Rs.269
                            </p>
                        </div>
                    </div>
                    {/* Suggestion Textfeild */}
                    <div className='mb-20'>
                        <input className='h-40 w-260 p-0-10' type="text" name="" id="" placeholder='Any Suggestion?'/>
                    </div>
                    {/* Bill Details */}
                    <div className='flex fd-c'>
                        <div className='mb-10'>
                            <p>
                                Bill Details
                            </p>
                        </div>
                        <div className='flex jc-sb'>
                            <p>
                                Item Total
                            </p>
                            <p>
                                Rs.269
                            </p>
                        </div>
                        <div className='flex jc-sb mb-10'>
                            <p>
                                Delivery Fee
                            </p>
                            <p>
                                Free
                            </p>
                        </div>
                        <div className='flex jc-sb'>
                            <div className='flex ai-c'>
                                <span>Platform Fee</span>
                                <UilInfoCircle className='h-15 w-a'/>
                            </div>
                            <span>Rs.2</span>
                        </div>
                        <div className='flex jc-sb mb-10'>
                            <div className='flex ai-c'> 
                                <span>GST & Restaurant Charges</span>
                                <UilInfoCircle className='h-15 w-a'/>
                            </div>
                            <span>Rs. 20</span>
                        </div>
                        <hr />
                        <div className='flex jc-sb'>
                            <p>
                                To Pay
                            </p>
                            <p>
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
