import React, {useState , useEffect} from 'react'
import { searchCuisines, searchRestaurants } from '../../Services/SearchService';
import SearchResultDropdown from '../Restaurant/SearchResultsDropdown';
import { CiSearch } from "react-icons/ci";

const RestaurantSearchComponent = () => {
    // DsetShowSearchResults
    const [searchQuery , setSearchQuery] = useState('');
    const [showSearchResults , setShowSearchResults] = useState(false);
    const [restaurantResults , setRestaurantResults] = useState([]);
    const [cuisineResults , setCuisineResults] = useState([]);
    // Defining Handler Functions.
    const handleSearch = (e) => {
        const searchInputValue = e.target.value;
        setSearchQuery(searchInputValue);
    }
    const handleShowResults = () => {
        setShowSearchResults(!showSearchResults);
    }
    useEffect(() => {
        if (searchQuery !== '') {
            Promise.all([
                searchRestaurants(searchQuery),
                searchCuisines(searchQuery)
            ])
                .then(([restaurantResult,cuisineResult]) => {
                    console.log(restaurantResult);
                    console.log(cuisineResult);
                    setRestaurantResults(restaurantResult.results);
                    setCuisineResults(cuisineResult.results);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [searchQuery]);
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-auto flex flex-col items-center justify-center mb-10 mt-5'>
                    <div className='flex items-center justify-center mb-10 border-2 border-black w-full'>
                        <input 
                            onClick={handleShowResults}  
                            onChange={handleSearch} 
                            value={searchQuery} 
                            className='w-full h-10 outline-none rounded-sm p-2' 
                            type="search" 
                            placeholder='Search for restaurant and cuisine' 
                            />
                            <span className='pr-3 pl-3 cursor-pointer'>
                                <CiSearch className='h-10 text-xl'/>
                            </span>
                    </div>
                    {/* Search Results Component */}
                    <div className='w-full'>
                        {
                            showSearchResults ? 
                                <SearchResultDropdown
                                    restaurantResults={restaurantResults}
                                    cuisineResults={cuisineResults}
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

export default RestaurantSearchComponent
