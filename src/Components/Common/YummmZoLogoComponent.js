import React from 'react';
import { Link } from 'react-router-dom';

const YummmZoLogoComponent = () => {
    return (
        <div>
            <>
                {/* YummmZo Logo */}
                <div className='h-100 flex ai-c'>
                    <Link className='td-n c-b' to="/">YummmZo</Link>
                </div>
            </>
        </div>
    )
}

export default YummmZoLogoComponent
