import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { searchInRestaurant } from '../../Services/SearchService';

const SearchInRestaurantComponent = () => {
    // Defining State Variables.
    const [searchQuery , setSearchQuery] = useState('');
    // Defining Handler Functions.
    const handleSearch = (e) => {
        const searchInputValue = e.target.value;
        setSearchQuery(searchInputValue);
    }
    // useEffect
    useEffect(() => {
        if(searchQuery !== ''){
            searchInRestaurant(searchQuery)
                .then((menuItemsResult) => {
                    console.log(menuItemsResult);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [searchQuery]);
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-680'>
                    <div className='flex ai-c jc-sb'>
                        <Link className='td-n c-b' to="/menu"><FaAngleLeft className="h-20 w-a pointer"/></Link>
                        <input onChange={handleSearch} value={searchQuery} className='h-40 w-800 p-0-10 b-1-t-s br-5 bc-ws' type="search" name="" id="" placeholder='Search within menu'/>
                        <span><BsSearch className="h-20 w-a pointer"/></span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default SearchInRestaurantComponent
