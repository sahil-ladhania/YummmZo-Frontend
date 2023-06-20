import React from 'react'
import '../../Styles/Buttons.css'
import '../../Styles/Main.css'
import { Link } from 'react-router-dom'

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
                        <div className='fs-xxl fs-r'>
                            Your cart is empty
                        </div>
                        <div className='fs-r'>
                            You can go to home page to view more restaurants
                        </div>
                    </div>
                    {/* Button Section */}
                    <div>
                        <Link className='fs-r td-n c-3d3d3d p-10 b-1-d8d8d8-s br-5 shadow' to="/restaurants">See Restaurants near you</Link>
                        {/* <button className='h-40 w-300 b-1-t-s br-5 fs-r'>See Restaurants near you</button> */}
                    </div>
                </div>
            </>
        </div>
    )
}

export default ImageContentButtonComponent
