import React, {useState , useEffect} from 'react'
import { searchCuisines, searchRestaurants } from '../../Services/SearchService';
import SearchResultDropdown from '../Restaurant/SearchResultsDropdown';

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
                <div className='h-auto flex flex-col ai-c jc-c mb-20'>
                    <div className='flex items-center justify-center mb-10'>
                        <input onClick={handleShowResults}  onChange={handleSearch} value={searchQuery} className='h-40 w-800 p-0-10 mr-10 b-1-t-s br-5 bc-ws' type="search" placeholder='Search for restaurant and cuisine' />
                    </div>
                    {/* Search Results Component */}
                    <div>
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
