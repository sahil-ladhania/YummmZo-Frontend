import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { Link  } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { searchInRestaurant } from '../../Services/SearchService';
import SearchResultDropdown from './SearchResultDropdown';

const SearchInRestaurantComponent = () => {
    // Defining State Variables.
    const [searchQuery , setSearchQuery] = useState('');
    const [showSearchResults , setShowSearchResults] = useState(false);
    const [menuItemsResults , setMenuItemsResults] = useState([]);
    // Defining Handler Functions.
    const handleSearch = (e) => {
        const searchInputValue = e.target.value;
        setSearchQuery(searchInputValue);
    }
    const handleShowResults = () => {
        setShowSearchResults(!showSearchResults);
    }
    // useEffect
    useEffect(() => {
        if(searchQuery !== ''){
            searchInRestaurant(searchQuery)
                .then((menuItemsResult) => {
                    console.log(menuItemsResult);
                    setMenuItemsResults(menuItemsResult.results);
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
                <div className='h-680 flex flex-col items-center'>
                    <div className='flex ai-c jc-sb mb-10'>
                        <Link className='td-n c-b mr-20' to="/menu"><FaAngleLeft className="h-20 w-a pointer"/></Link>
                        <input onClick={handleShowResults} onChange={handleSearch} value={searchQuery} className='h-40 w-800 p-0-10 b-1-t-s br-5 bc-ws' type="search" name="" id="" placeholder='Search within menu'/>
                        <span className='ml-10'><BsSearch className="h-20 w-a pointer"/></span>
                    </div>
                    {/* Search Results Component */}
                    <div>
                        {
                            showSearchResults ? 
                                <SearchResultDropdown
                                    menuItemsResults={menuItemsResults}
                                />
                                :
                                null
                        }
                    </div>
                </div>
            </>
        </div>
    )
}

export default SearchInRestaurantComponent
