import React from 'react'

const BillComponent = () => {
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
                    <div>
                        <div>
                            <img src="" alt="Veg-Nonveg-Image" />
                        </div>
                        <div>
                            <p>
                                Paneer Achari
                            </p>
                        </div>
                        <div>
                            <button>Increment / Decrement</button>
                        </div>
                        <div>
                            <p>
                                Rs.269
                            </p>
                        </div>
                    </div>
                    {/* Suggestion Textfeild */}
                    <div>
                        <input type="text" name="" id="" placeholder='Any Suggestion?'/>
                    </div>
                    {/* Bill Details */}
                    <div>
                        <div>
                            <p>
                                Bill Details
                            </p>
                        </div>
                        <div>
                            <p>
                                Item Total
                            </p>
                            <p>
                                Rs.269
                            </p>
                        </div>
                        <div>
                            <p>
                                Delivery Fee
                            </p>
                            <p>
                                Free
                            </p>
                        </div>
                        <div>
                            <p>
                                Platform Fee
                            </p>
                            <p>
                                Rs.2
                            </p>
                        </div>
                        <div>
                            <p>
                                GST & Restaurant Charges
                            </p>
                            <p>
                                Rs. 20
                            </p>
                        </div>
                        <div>
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
