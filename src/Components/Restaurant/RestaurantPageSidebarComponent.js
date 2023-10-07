import React from 'react'

const RestaurantPageSidebarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-auto w-72 p-2 border-2 border-black flex justify-evenly flex-col rounded-sm'>
                    {/* Heading Section */}
                    <div className='flex flex-col items-start h-16 justify-center mb-2'>
                        <span className='text-lg font-medium'>1. Create your</span>
                        <span className='text-lg font-medium'>restaurant page</span>
                    </div>
                    {/* Divider Section */}
                    <div className='mb-2'>
                        <hr/>
                    </div>
                    {/* Links Section */}
                    <div className=''>
                        <ul className=''>
                            <li className='h-32'>
                                <a href="#" className='flex items-start mt-10'>
                                    <div className='pr-5'>
                                        1.
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-medium'>Restaurant Information</span>
                                        <span className='text-sm text-justify'>Restaurant name, cuisine, delivery time, price for two, address, contact no., owner details</span>
                                    </div>
                                </a>
                            </li>
                            <li className='h-20'>
                                <a href="#" className='flex flex-start'>
                                    <div className='pr-5'>
                                        2.
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-medium'>Upload Menu</span>
                                        <span className='text-sm '>Menu items and details</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default RestaurantPageSidebarComponent
