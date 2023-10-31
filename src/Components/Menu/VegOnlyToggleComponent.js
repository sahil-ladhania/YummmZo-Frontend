import React from 'react'

const VegOnlyToggleComponent = () => {
    return (
        <div>
            <>  
                {/* Main Component */}
                <div className='h-20 flex items-center'>
                    {/* Title Section */}
                    <div>
                        <p className='mr-5 text-sm font-semibold font-roboto text-secondary'>Veg Only</p>
                    </div>
                    {/* Toggle Button Section */}
                    <label className="toggle">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                    </label>
                {/* Divider Section */}
                <div className='mb-20'>
                    <hr />
                </div>
                </div>
            </>
        </div>
    )
}

export default VegOnlyToggleComponent
