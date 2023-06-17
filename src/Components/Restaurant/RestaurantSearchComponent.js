import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
// CSS Files
import '../../Styles/Input.css'
import '../../Styles/Main.css'

const RestaurantSearchComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-50 flex ai-c jc-c mb-20'>
                    <input className='h-40 w-800 p-0-10 mr-10 b-1-t-s br-5 bc-ws' type="search" placeholder='Search for restaurant , cuisine or a dish'/>
                    <UilSearch/>
                </div>
            </>
        </div>
    )
}

export default RestaurantSearchComponent
