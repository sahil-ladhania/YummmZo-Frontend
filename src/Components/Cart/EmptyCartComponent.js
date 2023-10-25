import React from 'react'

const EmptyCartComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='w-3/12 h-auto p-5 bg-secondary rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {/* Heading Section */}
                    <div className='font-roboto text-yummmzo-color text-3xl font-bold py-5 '>
                        Cart Empty
                    </div>
                    {/* Content Section */}
                    <div className='font-roboto text-yummmzo-color text-md py-5'>
                        Good food is always cooking! <br /> Go ahead, order some yummy <br /> items from the menu.
                    </div>
                </div>
            </>
        </div>
    )
}

export default EmptyCartComponent
