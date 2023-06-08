import React from 'react'

const RestaurantFilterComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Left Section */}
                    <div>
                        {/* No of Restaurants */}
                        <div>
                            259 restaurants
                        </div>
                    </div>
                    {/* Right Section */}
                    <div>
                        {/* Filter Options Section */}
                        <div>
                            <a href="#">Delivery Time</a>
                        </div>
                        <div>
                            <a href="#">Rating</a>
                        </div>
                        <div>
                            <a href="#">Cost : Low to High</a>
                        </div>
                        <div>
                            <a href="#">Cost : High to Low</a>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantFilterComponent
