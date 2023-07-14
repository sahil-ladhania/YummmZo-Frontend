import React from 'react'

const RestaurantPageSidebarComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-200 w-300 b-1-b-s flex jc-se fd-c br-5'>
                    {/* Heading Section */}
                    <div className='ml-20 w-250 fs-l'>
                        Create your<br />restaurant page
                    </div>
                    {/* Divider Section */}
                    <div>
                        <hr />
                    </div>
                    {/* Links Section */}
                    <div className='ml-20 w-250'>
                        <ul>
                            <li className='ls-n mb-10'>
                                <a href="#" className='td-n c-b flex fd-r ai-fs'>
                                    <div className='mr-20'>
                                        1.
                                    </div>
                                    <div className='flex fd-c '>
                                        <span>Restaurant Information</span>
                                        <span className='fs-s'>Restaurant name, cuisine, delivery time, price for two, address, contact no., owner details</span>
                                    </div>
                                </a>
                            </li>
                            <li className='ls-n mb-10'>
                                <a href="#" className='td-n c-b flex fd-r ai-fs'>
                                    <div className='mr-20'>
                                        2.
                                    </div>
                                    <div className='flex fd-c'>
                                        <span>Upload Menu</span>
                                        <span className='fs-s'>Menu items and details</span>
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
