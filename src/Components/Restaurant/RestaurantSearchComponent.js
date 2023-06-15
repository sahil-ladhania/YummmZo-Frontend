import React from 'react'
import '../../Styles/Main.css'
import { UilSearch } from '@iconscout/react-unicons'

const RestaurantSearchComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-50 flex ai-c jc-c mb-20'>
                    <input className='h-40 w-800 p-0-10 mr-10' type="search" placeholder='Search for restaurant , cuisine or a dish'/>
                    <UilSearch/>
                </div>
            </>
        </div>
    )
}

export default RestaurantSearchComponent
