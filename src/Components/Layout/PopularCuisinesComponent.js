import React from 'react'

const PopularCuisinesComponent = ({ cuisines }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex flex-col items-center justify-center h-auto'>
                    {/* Heading Section */}
                    <div className='mb-10 mt-10'>
                        <h2 className='text-4xl font-medium font-roboto text-secondary'>Popular Cuisines</h2>
                    </div>
                    {/* Cuisines Section */}
                    <div>
                        <div className='flex justify-center fw-w flex-wrap cursor-pointer'>
                            {cuisines.map((cuisine, index) => (
                                <div key={index} className='flex mb-5 mt-5 flex-col items-center mr-8 ml-8'>
                                    <img className='h-24 mb-5 rounded-full' src={cuisine.imageURL} alt="" />
                                    <a className='text-sm font-medium font-roboto text-secondary' href="#">{cuisine.cuisineName}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default PopularCuisinesComponent
