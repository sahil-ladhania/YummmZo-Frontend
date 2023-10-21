import React from 'react'

const InspirationForFirstOrderComponent = ({ cuisines }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex flex-col h-72 items-start justify-evenly'>
                    <div>
                        <span className='text-3xl font-roboto text-yummmzo-color'>Inspiration for your first order</span>
                    </div>
                    <div className='flex cursor-pointer w-full bg-secondary'>
                        {cuisines.map((cuisine, index) => (
                            <div key={index} className='h-40 w-36 flex mb-5 mt-5 flex-col items-center justify-center mr-2 ml-2'>
                                <img className='h-16 mb-5 rounded-full' src={cuisine.imageURL} alt="" />
                                <a className='text-sm font-medium font-roboto text-yummmzo-color text-center' href="#">{cuisine.cuisineName}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </div>
    )
}

export default InspirationForFirstOrderComponent
