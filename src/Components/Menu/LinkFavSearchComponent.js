import React from 'react'
import { UilHeart } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'

const LinkFavSearchComponent = () => {
    return (
        <div>
            <>      
                {/* Main Component */}
                <div className='h-80 flex jc-sb ai-c'>
                    {/* Link's Section */}
                    <div className='flex'>
                        <a className='mr-10 fs-xxs' href="#">Home</a>
                        <span className='fs-xxs'>/</span>
                        <a className='ml-10 fs-xxs' href="#">Subway</a>
                    </div>
                    {/* Icon's Section */}
                    <div>
                        <span className='flex ai-c'>
                            <UilHeart className='h-20 w-a mr-10 pointer'/>
                            <UilSearch className='h-20 w-a ml-10 pointer'/>
                        </span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LinkFavSearchComponent
