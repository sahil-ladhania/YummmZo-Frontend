import React from 'react'

const InspirationForFirstOrderComponent = ({ cuisines }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex flex-col h-72 items-start justify-evenly'>
                    <div>
                        <span className='text-3xl'>Inspiration for your first order</span>
                    </div>
                    <div className='flex cursor-pointer'>
                        {cuisines.map((cuisine, index) => (
                            <div key={index} className='flex mb-5 mt-5 flex-col items-center mr-2 ml-2'>
                                <img className='h-20 mb-5 rounded-full' src={cuisine.imageURL} alt="" />
                                <a className='text-sm font-medium' href="#">{cuisine.cuisineName}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </div>
    )
}

export default InspirationForFirstOrderComponent
