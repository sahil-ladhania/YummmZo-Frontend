import React, { useEffect, useState  } from 'react'
import { Link  } from 'react-router-dom'
import { CiCircleChevLeft } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
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
                <div className='h-screen flex flex-col items-center w-full mt-10'>
                    <div className='flex items-center justify-between mb-5 w-full'>
                        <Link className='mr-5' to="/home"><CiCircleChevLeft className="text-3xl cursor-pointer"/></Link>
                        <input onClick={handleShowResults} onChange={handleSearch} value={searchQuery} className='h-10 w-full rounded-sm border-b border-black pl-10 outline-none' type="search" name="" id="" placeholder='Search within menu'/>
                        <span className='ml-5'><CiSearch className="text-3xl cursor-pointer"/></span>
                    </div>
                    {/* Search Results Component */}
                    <div className=''>
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
