import React from 'react'
import { UilStar } from '@iconscout/react-unicons'

const StarAndRatingComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='p-10 b-1-dcd8d8-s br-5 shadow'>
                    {/* Icon Section */}
                    <div className='flex jc-c ai-c mb-5'>
                        <span><UilStar className='h-20 w-a mr-5 c-3d9b6d fw-700'/></span>
                        <p className='fs-r c-3d9b6d fw-700'>
                            3.5
                        </p>
                    </div>
                    {/* Divider Section */}
                    <div>
                        <hr />
                    </div>
                    {/* Rating Content Section */}
                    <div className='mt-5'>
                        <p className='fs-s fs-r c-g fw-700'>
                            100+ ratings
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default StarAndRatingComponent
