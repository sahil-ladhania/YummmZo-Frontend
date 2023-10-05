import React from 'react';
import { Link } from 'react-router-dom';

const YummmZoLogoComponent = () => {
    return (
        <div>
            <>
                {/* YummmZo Logo */}
                <div className='h-40 flex items-center'>
                    <Link className='text-2xl font-semibold' to="/">YummmZo</Link>
                </div>
            </>
        </div>
    )
}

export default YummmZoLogoComponent
