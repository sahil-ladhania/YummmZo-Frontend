import React, {useState} from 'react'

const RestaurantInformationComponent = () => {
    // Defining State Variables.
    // Handler Functions.
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='border-2 border-black rounded-sm p-2 flex flex-col items-center'>
                    {/* Form Heading Section */}
                    <div className='text-3xl mt-5 mb-5'>
                        Restaurant Information
                    </div>
                    {/* Form Section */}
                    <form action="">
                        {/* Restaurant Details */}
                        <div className=''>
                            <div className='h-20 flex flex-col items-start justify-center'>
                                <span className='text-lg font-medium'>Restaurant Details</span>
                                <div className='text-sm font-medium'>
                                    Name , cuisine , delivery time , price for two and address
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="text"
                                name="restaurantName" 
                                id="" 
                                placeholder='Resturant Name'
                                />
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="text" 
                                name="restaurantCuisine" 
                                id="" 
                                placeholder='Restaurant Cuisine'/>
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="text" 
                                name="deliveryTime" 
                                id="" 
                                placeholder='Delivery Time'/>
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="text" 
                                name="priceForTwo" 
                                id="" 
                                placeholder='Price For Two'/>
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="text" 
                                name="imageUrl" 
                                id="" 
                                placeholder='Enter Image URL'/>
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="text" 
                                name="restaurantCompleteAddress" 
                                id="" 
                                placeholder='Restaurant Complete Address'/>
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="text" 
                                name="rating" 
                                id="" 
                                placeholder='Rating'/>
                            </div>
                        </div>
                        {/* Contact Number At Restaurant */}
                        <div className=''>
                            <div className='h-20 flex flex-col items-start justify-center'>
                                <span className='text-lg font-medium'>Contact Number At Restaurant</span>
                                <div className='text-sm font-medium'>
                                    Your customers will call on this number for general enquiries
                                </div>
                            </div>
                            <div className=''>
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="number" 
                                name="mobileNumberAtRestaurant" 
                                id="" 
                                placeholder='Mobile Number At Restaurant'/>
                            </div>
                        </div>
                        {/* Restaurant Owner Details */}
                        <div className=''>
                            <div className='h-20 flex flex-col items-start justify-center'>
                                <span className='text-lg font-medium'>Restaurant Owner Details</span>
                                <div className='text-sm font-medium'>
                                    These will be used to share revenue related communications
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="number" 
                                name="mobileNumberOfOwner" 
                                id="" 
                                placeholder='Mobile Number Of Owner'/>
                                <input  
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="text" 
                                name="restaurantOwnerName" 
                                id="" 
                                placeholder='Restaurant Owner Full Name'/>
                                <input 
                                className='border-2 w-full h-10 outline-none rounded-sm p-2 mb-5' 
                                type="email" 
                                name="restaurantOwnerEmailAddress" 
                                id="" 
                                placeholder='Restaurant Owner Email Address'/>
                            </div>
                        </div>
                        <div>
                            <button className='pr-5 pl-5 pt-3 pb-3 w-full bg-slate-200 rounded-sm mb-5'>Submit</button>
                        </div>
                    </form>
                </div>
                {/* Note Section */}
                <div className='mt-5 mb-5'>
                    <p className='text-xs text-justify leading-4'>
                        YummmZo may disclose the information provided by you, including but not limited to the contact number and email address of the authorised persons, with third party service providers for provision of YummmZo services.
                    </p>
                </div>
            </>
        </div>
    )
}

export default RestaurantInformationComponent
