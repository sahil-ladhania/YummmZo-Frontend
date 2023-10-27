import React from 'react'
import { Link } from 'react-router-dom'

const CartComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='w-3/12 h-auto p-5 m-auto mt-20 mb-20 bg-secondary rounded-md'>
                    {/* Image and Restaurant Name Section */}
                    <div className='flex items-center py-5'>
                        <div className=''>
                            <img className='h-20 w-auto rounded-md mr-5' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_132,h_132,c_fill/0bf19a82b109b40c2f5c56d00f071a33" alt="Restaurant-Image" />
                        </div>
                        <div>
                            <div className='mb-2'>
                                <p className='font-roboto text-yummmzo-color text-xl font-semibold'>
                                    Subway
                                </p>
                                <p className='font-roboto text-yummmzo-color text-xs'>
                                    Arthala
                                </p>
                            </div>
                            <div>
                                <a className='font-roboto text-primary text-sm' href="#">VIEW FULL MENU</a>
                            </div>
                        </div>
                    </div>
                    {/* Section Divider */}
                    <div>
                        <hr />
                    </div>
                    {/* Items and Price Section */}
                    <div className='py-5 flex items-center justify-between'>
                        <div className='flex items-center justify-start'>
                            <img className='h-4 w-auto mr-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png" alt="Veg-Nonveg-Icon" />
                            <p className='font-roboto text-yummmzo-color'>
                                Paneer Achari x 1
                            </p>
                        </div>
                        <div className='font-roboto text-yummmzo-color'>
                            Rs.269
                        </div>
                    </div>
                    {/* Section Divider */}
                    <div>
                        <hr />
                    </div>
                    {/* Subtotal Section */}
                    <div className='py-5'>
                        <div className='flex items-center justify-between'>
                            <p className='font-roboto text-yummmzo-color text-lg font-semibold'>
                                Sub total
                            </p>
                            <p className='font-roboto text-yummmzo-color text-lg font-semibold'>
                                Rs.269
                            </p>
                        </div>
                        <div className='font-roboto text-yummmzo-color text-sm'>
                            Extra charges may apply
                        </div>
                    </div>
                    {/* Checkout Section */}
                    <div className='py-5 flex items-center justify-center'> 
                        <Link className='pr-28 pl-28 pt-3 pb-3 bg-slate-200 rounded-sm font-roboto hover:animate-glow-light' to="/checkout">CHECKOUT</Link>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CartComponent
