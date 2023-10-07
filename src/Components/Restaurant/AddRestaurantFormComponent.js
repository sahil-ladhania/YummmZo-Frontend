import React from 'react'
import RestaurantPageSidebarComponent from './RestaurantPageSidebarComponent'
import RestaurantInformationComponent from './RestaurantInformationComponent'
import UploadMenuComponent from './UploadMenuComponent'

const AddRestaurantFormComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex justify-between items-start'>
                    <div className='w-5/12'>
                        <RestaurantPageSidebarComponent/>
                    </div>
                    <div className='w-7/12'>
                        <RestaurantInformationComponent/>
                    </div>
                    {/* <UploadMenuComponent/> */}
                </div>
            </>
        </div>
    )
}

export default AddRestaurantFormComponent
