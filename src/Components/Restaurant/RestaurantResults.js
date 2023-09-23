import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const RestaurantResults = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Restaurant Image Container */}
                    <div>
                        <img src="https://b.zmtcdn.com/data/pictures/chains/8/310078/6352f382ab83cd6c458c3ad6c6fd1d60_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A" alt="" />
                    </div>
                    {/* Restaurant Details Container */}
                    <div>
                        {/* Restaurant Heading Container */}
                        <div>
                            <p>
                                Burger King
                            </p>
                        </div>
                        {/* Restaurant Rating Container */}
                        <div>
                            <div>
                                <span>
                                    4.1
                                </span>
                                <span>
                                    <AiFillStar/>
                                </span>
                            </div>
                            <div>
                                <span>Dining</span>
                            </div>
                        </div>
                        {/* Restaurant Address Container */}
                        <div>
                            <p>
                                Rajendar Nagar, Ghaziabad
                            </p>
                        </div>
                        {/* Order Now Button */}
                        <div>
                            <span>
                                Order Now
                            </span>
                            <span>
                                <BiChevronRight/>
                            </span>
                        </div>
                        {/* Restaurant Delivery Time Container */}
                        <div>
                            <span>Order in 36 min</span>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantResults
