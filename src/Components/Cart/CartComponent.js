import React from 'react'

const CartComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Image and Restaurant Name Section */}
                    <div>
                        <div>
                            <img src="" alt="Restaurant-Image" />
                        </div>
                        <div>
                            <div>
                                <p>
                                    Subway
                                </p>
                                <p>
                                    Arthala
                                </p>
                            </div>
                            <div>
                                <a href="#">View Full Menu</a>
                            </div>
                        </div>
                    </div>
                    {/* Items and Price Section */}
                    <div>
                        <div>
                            <img src="" alt="Veg-Nonveg-Icon" />
                            <p>
                                Paneer Achari x 1
                            </p>
                        </div>
                        <div>
                            Rs.269
                        </div>
                    </div>
                    {/* Subtotal Section */}
                    <div>
                        <div>
                            <p>
                                Sub total
                            </p>
                            <p>
                                Extra charges may apply
                            </p>
                        </div>
                        <div>
                            Rs.269
                        </div>
                    </div>
                    {/* Checkout Section */}
                    <div>
                        <button>Checkout</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CartComponent
