import React from 'react'

const ImageContentButtonComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Image Section */}
                    <div>
                        <img src="" alt="Empty-Cart-Image" />
                    </div>
                    {/* Content Section */}
                    <div>
                        <div>
                            Your cart is empty
                        </div>
                        <div>
                            You can go to home page to view more restaurants
                        </div>
                    </div>
                    {/* Button Section */}
                    <div>
                        <button>See Restaurant near you</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ImageContentButtonComponent
