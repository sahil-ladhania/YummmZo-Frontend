import React, {useState} from 'react'

const RestaurantInformationComponent = () => {
    // Defining State Variables.
    // Handler Functions.
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='ml-100 b-1-b-s br-5 p-10-20 flex fd-c ai-c'>
                    {/* Form Heading Section */}
                    <div className='mb-20 fs-xxl'>
                        Restaurant Information
                    </div>
                    {/* Form Section */}
                    <form action="">
                        {/* Restaurant Details */}
                        <div className=''>
                            <div className='mb-20'>
                                <label htmlFor="">Restaurant Details</label>
                                <div className='fs-s'>
                                    Name , cuisine , delivery time , price for two and address
                                </div>
                            </div>
                            <div className='mb-20 flex fd-c'>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="text"
                                name="restaurantName" 
                                id="" 
                                placeholder='Resturant Name'
                                />
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="text" 
                                name="restaurantCuisine" 
                                id="" 
                                placeholder='Restaurant Cuisine'/>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="text" 
                                name="deliveryTime" 
                                id="" 
                                placeholder='Delivery Time'/>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="text" 
                                name="priceForTwo" 
                                id="" 
                                placeholder='Price For Two'/>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="text" 
                                name="imageUrl" 
                                id="" 
                                placeholder='Enter Image URL'/>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="text" 
                                name="restaurantCompleteAddress" 
                                id="" 
                                placeholder='Restaurant Complete Address'/>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="text" 
                                name="rating" 
                                id="" 
                                placeholder='Rating'/>
                            </div>
                        </div>
                        {/* Contact Number At Restaurant */}
                        <div className=''>
                            <div className='mb-20'>
                                <label htmlFor="">Contact Number At Restaurant</label>
                                <div className='fs-s'>
                                    Your customers will call on this number for general enquiries
                                </div>
                            </div>
                            <div className='mb-20'>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="number" 
                                name="mobileNumberAtRestaurant" 
                                id="" 
                                placeholder='Mobile Number At Restaurant'/>
                            </div>
                        </div>
                        {/* Restaurant Owner Details */}
                        <div className=''>
                            <div className='mb-20'>
                                <label htmlFor="">Restaurant Owner Details</label>
                                <div className='fs-s'>
                                    These will be used to share revenue related communications
                                </div>
                            </div>
                            <div className='mb-20 flex fd-c'>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="number" 
                                name="mobileNumberOfOwner" 
                                id="" 
                                placeholder='Mobile Number Of Owner'/>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="text" 
                                name="restaurantOwnerName" 
                                id="" 
                                placeholder='Restaurant Owner Full Name'/>
                                <input 
                                className='h-40 w-500 p-0-10 mb-20 b-1-t-s br-5 bc-ws' 
                                type="email" 
                                name="restaurantOwnerEmailAddress" 
                                id="" 
                                placeholder='Restaurant Owner Email Address'/>
                            </div>
                        </div>
                        <div>
                            <button className='h-40 w-80 b-1-t-s br-5 mb-10 shadow bc-w'>Submit</button>
                        </div>
                    </form>
                    {/* Note Section */}
                    <div className='fs-s ta-j'>
                        YummmZo may disclose the information provided by you, including but not limited to the contact number and email address of the authorised persons, with third party service providers for provision of YummmZo services
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantInformationComponent
