import React from 'react'

const InspirationForFirstOrderComponent = ({ cuisines }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex flex-col h-72 items-start justify-evenly'>
                    <div>
                        <span className='text-4xl font-medium py-2 mb-2 font-roboto text-secondary'>Inspiration for your first order</span>
                    </div>
                    <div className='flex cursor-pointer w-full bg-card-gradient'>
                        {cuisines.map((cuisine, index) => (
                            <div key={index} className='h-40 w-36 flex mb-5 mt-5 flex-col items-center justify-center mr-2 ml-2'>
                                <img className='h-16 mb-5 rounded-full' src={cuisine.imageURL} alt="" />
                                <a className='text-sm font-medium font-roboto text-secondary text-center' href="#">{cuisine.cuisineName}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </div>
    )
}

export default InspirationForFirstOrderComponent
