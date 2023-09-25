import React from 'react'

const CuisineResults = ({ data }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-auto w-780 hover:bg-slate-50 rounded-sm p-2 flex items-start justify-start cursor-pointer'>
                    {/* Cuisine Image Container */}
                    <div>
                        <img className='h-60 mr-2 rounded-full' src={data.imageURL} alt="" />
                    </div>
                    {/* Cuisine Heading Container */}
                    <div>
                        <p className='font-medium'>
                            {data.cuisineName} - Delivery
                        </p>
                        <span className='text-slate-500'>Dish</span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CuisineResults
