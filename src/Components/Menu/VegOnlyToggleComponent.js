import React from 'react'

const VegOnlyToggleComponent = () => {
    return (
        <div>
            <>  
                {/* Main Component */}
                <div className='flex ai-c mb-20'>
                    {/* Title Section */}
                    <div>
                        <p className='mr-10 fs-m fs-r fw-500 ls-1'>Veg Only</p>
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
