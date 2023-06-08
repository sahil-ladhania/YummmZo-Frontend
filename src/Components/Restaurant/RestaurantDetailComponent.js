import React from 'react'

const RestaurantDetailComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <a href="#">
                        {/* Restaurant Image Box Section */}
                        <div>
                            <img src="" alt="Restaurant-Image" />
                            <div>
                                <a href="#">50% OFF up to 100</a>
                                <p>21 min</p>
                            </div>
                        </div>
                        {/* Restaurant Detail Section */}
                        <div>
                            <div>
                                <h4>Empire Restaurant</h4>
                                <p>4.1 <img src="" alt="Star-Icon" /></p>
                            </div>
                            <div>
                                <p>
                                    South Indian, North Indian...
                                </p>
                                <p>
                                    ₹100 for one
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </>
        </div>
    )
}

export default RestaurantDetailComponent
