import React from 'react'

const ImageContentButtonComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-800 flex fd-c ai-c'>
                    {/* Image Section */}
                    <div>
                        <img className='h-550 w-a' src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=" alt="Empty-Cart-Image" />
                    </div>
                    {/* Content Section */}
                    <div className='flex fd-c ai-c mb-20'>
                        <div className='fs-xxl'>
                            Your cart is empty
                        </div>
                        <div>
                            You can go to home page to view more restaurants
                        </div>
                    </div>
                    {/* Button Section */}
                    <div>
                        <button className='h-40 p-0-10'>See Restaurants near you</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ImageContentButtonComponent
