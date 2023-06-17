import React from 'react'
import { UilStar } from '@iconscout/react-unicons'

const StarAndRatingComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='p-10-20 b-1-b-s'>
                    {/* Icon Section */}
                    <div className='flex jc-c ai-c mb-5'>
                        <span><UilStar className='h-20 w-a mr-5'/></span>
                        <p className='fs-r'>
                            3.5
                        </p>
                    </div>
                    {/* Divider Section */}
                    <div>
                        <hr />
                    </div>
                    {/* Rating Content Section */}
                    <div className='mt-5'>
                        <p className='fs-s fs-r'>
                            100+ ratings
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default StarAndRatingComponent
