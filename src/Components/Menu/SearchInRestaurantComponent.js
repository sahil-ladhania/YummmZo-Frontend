import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";

const SearchInRestaurantComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-680'>
                    <div className='flex ai-c jc-sb'>
                        <Link className='td-n c-b' to="/menu"><FaAngleLeft className="h-20 w-a pointer"/></Link>
                        <input className='h-40 w-800 p-0-10 b-1-t-s br-5 bc-ws' type="search" name="" id="" placeholder='Search in Restaurant'/>
                        <span><BsSearch className="h-20 w-a pointer"/></span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default SearchInRestaurantComponent
