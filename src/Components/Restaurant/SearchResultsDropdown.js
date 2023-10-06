import React from 'react'
import RestaurantResults from './RestaurantResults'
import CuisineResults from './CuisineResults';

const SearchResultsDropdown = ({ restaurantResults , cuisineResults }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-80 w-full p-2 rounded-md overflow-y-auto'>
                {restaurantResults.map((result, index) => (
                    <RestaurantResults key={index} data={result} />
                ))}
                {cuisineResults.map((result, index) => (
                    <CuisineResults key={index} data={result} />
                ))}
                </div>
            </>
        </div>
    )
}

export default SearchResultsDropdown
