import React from 'react'
import HowItWorksCardComponent from './HowItWorksCardComponent'

const HowItWorksComponent = () => {
    return (
        <div>
            <>
                <div className='flex flex-col items-center mb-10'>
                    <div className='text-4xl font-medium mb-10'>
                        How it works ? 
                    </div>
                    <div className='w-full'>
                        <HowItWorksCardComponent/>
                    </div>
                </div>
            </>
        </div>
    )
}

export default HowItWorksComponent
