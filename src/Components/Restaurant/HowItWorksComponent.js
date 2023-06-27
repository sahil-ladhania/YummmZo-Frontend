import React from 'react'
import HowItWorksCardComponent from './HowItWorksCardComponent'

const HowItWorksComponent = () => {
    return (
        <div>
            <>
                <div className='flex fd-c ai-c mb-20'>
                    <div className='fs-r fs-xxl fw-600 mb-20'>
                        How it works ? 
                    </div>
                    <div>
                        <HowItWorksCardComponent/>
                    </div>
                </div>
            </>
        </div>
    )
}

export default HowItWorksComponent
