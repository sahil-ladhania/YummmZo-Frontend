import React from 'react'
import '../Styles/Main.css'

const LoaderComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='loader-container'>
                    <div className='loader'>
                        <div className='loader-line'></div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LoaderComponent
