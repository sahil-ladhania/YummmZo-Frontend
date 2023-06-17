import React from 'react'
import '../../Styles/Main.css'

const LinksListComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Links List Section */}
                    <div className='h-150 flex ai-c b-1-b-s w-300'>
                        <ul >
                            <li className='ls-n m-20-0 p-0-50 fs-r'><a className='td-n c-b' href="#">General Issues</a></li>
                            <li className='ls-n m-20-0 p-0-50 fs-r'><a className='td-n c-b' href="#">Legal , Terms & Conditions</a></li>
                            <li className='ls-n m-20-0 p-0-50 fs-r'><a className='td-n c-b' href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LinksListComponent
