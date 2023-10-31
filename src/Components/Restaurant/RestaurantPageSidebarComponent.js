import React from 'react'

const RestaurantPageSidebarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='bg-secondary h-auto w-72 p-2 flex justify-evenly flex-col rounded-sm'>
                    {/* Heading Section */}
                    <div className='flex flex-col items-start h-16 justify-center mb-2'>
                        <span className='text-lg font-medium font-roboto text-yummmzo-color'>1. Create your</span>
                        <span className='text-lg font-medium font-roboto text-yummmzo-color'>restaurant page</span>
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
                                    <div className='pr-5 font-roboto text-yummmzo-color'>
                                        1.
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-medium font-roboto text-yummmzo-color'>Restaurant Information</span>
                                        <span className='text-sm text-justify font-roboto text-yummmzo-color'>Restaurant name, cuisine, delivery time, price for two, address, contact no., owner details</span>
                                    </div>
                                </a>
                            </li>
                            <li className='h-20'>
                                <a href="#" className='flex flex-start'>
                                    <div className='pr-5 font-roboto text-yummmzo-color'>
                                        2.
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-medium font-roboto text-yummmzo-color'>Upload Menu</span>
                                        <span className='text-sm font-roboto text-yummmzo-color'>Menu items and details</span>
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
