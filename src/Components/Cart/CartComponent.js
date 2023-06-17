import React from 'react'
import '../../Styles/Buttons.css'
// CSS Files
import '../../Styles/Links.css'

const CartComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='w-300 ml-500 p-10-20 b-1-b-s'>
                    {/* Image and Restaurant Name Section */}
                    <div className='flex ai-c mb-20'>
                        <div className='mr-10'>
                            <img className='h-80 w-a' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_132,h_132,c_fill/0bf19a82b109b40c2f5c56d00f071a33" alt="Restaurant-Image" />
                        </div>
                        <div>
                            <div className='mb-10'>
                                <p className='fs-r'>
                                    Subway
                                </p>
                                <p className='fs-r'>
                                    Arthala
                                </p>
                            </div>
                            <div>
                                <a className='fs-r td-n c-b' href="#">VIEW FULL MENU</a>
                            </div>
                        </div>
                    </div>
                    {/* Section Divider */}
                    <div>
                        <hr />
                    </div>
                    {/* Items and Price Section */}
                    <div className='flex ai-c jc-sb mt-20 mb-20'>
                        <div className='flex ai-c'>
                            <img className='h-15 w-a mr-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png" alt="Veg-Nonveg-Icon" />
                            <p className='fs-s fs-r'>
                                Paneer Achari x 1
                            </p>
                        </div>
                        <div className='fs-s fs-r'>
                            Rs.269
                        </div>
                    </div>
                    {/* Section Divider */}
                    <div>
                        <hr />
                    </div>
                    {/* Subtotal Section */}
                    <div className='mt-20 mb-20'>
                        <div className='flex jc-sb ai-c'>
                            <p className='fs-r'>
                                Sub total
                            </p>
                            <p className='fs-r'>
                                Rs.269
                            </p>
                        </div>
                        <div className='fs-s fs-r'>
                            Extra charges may apply
                        </div>
                    </div>
                    {/* Checkout Section */}
                    <div>
                        <button className='h-40 w-260 b-1-t-s br-5 fs-r'>CHECKOUT</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CartComponent
