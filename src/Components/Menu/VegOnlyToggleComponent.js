import React from 'react'

const VegOnlyToggleComponent = () => {
    return (
        <div>
            <>  
                {/* Main Component */}
                <div className='flex ai-c mb-20'>
                    {/* Title Section */}
                    <div>
                        <p className='mr-10 fs-s'>Veg Only</p>
                    </div>
                    {/* Toggle Button Section */}
                    <div>
                        <button>Toggle</button>
                    </div>
                </div>
                {/* Divider Section */}
                <div className='mb-20'>
                    <hr />
                </div>
            </>
        </div>
    )
}

export default VegOnlyToggleComponent
