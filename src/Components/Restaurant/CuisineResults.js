import React from 'react'

const CuisineResults = ({ data }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-auto w-full hover:bg-white rounded-sm p-2 flex items-start justify-start cursor-pointer'>
                    {/* Cuisine Image Container */}
                    <div>
                        <img className='h-20 mr-2 rounded-full' src={data.imageURL} alt="" />
                    </div>
                    {/* Cuisine Heading Container */}
                    <div>
                        <p className='font-medium font-roboto'>
                            {data.cuisineName} - Delivery
                        </p>
                        <span className='text-slate-600 font-roboto'>Dish</span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CuisineResults
