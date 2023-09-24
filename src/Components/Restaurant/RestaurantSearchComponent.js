import React, {useState , useEffect} from 'react'
import { BsSearch } from "react-icons/bs";
import { searchCuisines, searchRestaurants } from '../../Services/SearchService';

const RestaurantSearchComponent = () => {
    // Defining State Variables.
    const [searchQuery , setSearchQuery] = useState('');
    // Defining Handler Functions.
    const handleSearch = (e) => {
        const searchInputValue = e.target.value;
        setSearchQuery(searchInputValue);
    }
    // useEffect
    useEffect(() => {
        if(searchQuery === ''){
            searchRestaurants()
                .then((restaurantResult) => {
                    console.log(restaurantResult);
                })
                .catch((error) => {
                    console.error(error);
                })
            searchCuisines()
                .then((cuisineResult) => {
                    console.log(cuisineResult);
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    }, [searchQuery]);
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-50 flex ai-c jc-c mb-20'>
                    <input  onChange={handleSearch} value={searchQuery} className='h-40 w-800 p-0-10 mr-10 b-1-t-s br-5 bc-ws' type="search" placeholder='Search for restaurant and cuisine' />
                    <BsSearch/>
                </div>
            </>
        </div>
    )
}

export default RestaurantSearchComponent
