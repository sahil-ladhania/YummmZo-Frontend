import React from 'react'

const EmptyCartComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='w-300 ml-500 b-1-b-s p-10-20'>
                    {/* Heading Section */}
                    <div className='h-50 flex ai-c fs-xxl fw-b'>
                        Cart Empty
                    </div>
                    {/* Content Section */}
                    <div className='h-80 flex ai-c ta-j'>
                        Good food is always cooking! <br /> Go ahead, order some yummy <br /> items from the menu.
                    </div>
                </div>
            </>
        </div>
    )
}

export default EmptyCartComponent
