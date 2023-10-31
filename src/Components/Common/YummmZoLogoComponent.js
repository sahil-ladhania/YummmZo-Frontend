import React from 'react';
import { Link } from 'react-router-dom';

const YummmZoLogoComponent = () => {
    return (
        <div className='max-w-6xl ml-auto mr-auto'>
            <>
                {/* YummmZo Logo */}
                <div className='h-28 flex items-center mb-5'>
                    <Link className='text-4xl font-semibold font-roboto text-logo' to="/">YUMMMZO</Link>
                </div>
            </>
        </div>
    )
}

export default YummmZoLogoComponent
