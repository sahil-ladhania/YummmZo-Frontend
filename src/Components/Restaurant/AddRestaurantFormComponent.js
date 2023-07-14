import React from 'react'
import RestaurantPageSidebarComponent from './RestaurantPageSidebarComponent'
import RestaurantInformationComponent from './RestaurantInformationComponent'
import UploadMenuComponent from './UploadMenuComponent'

const AddRestaurantFormComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex fd-r'>
                    <RestaurantPageSidebarComponent/>
                    <RestaurantInformationComponent/>
                    {/* <UploadMenuComponent/> */}
                </div>
            </>
        </div>
    )
}

export default AddRestaurantFormComponent
