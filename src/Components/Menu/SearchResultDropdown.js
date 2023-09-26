import React from 'react'
import MenuItemsResultComponent from './MenuItemsResultComponent'

const SearchResultDropdown = ({ menuItemsResults }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-400 w-800  p-2 rounded-md overflow-y-auto'>
                    {menuItemsResults.map((result, index) => (
                        <MenuItemsResultComponent key={index} data={result} />
                    ))}
                </div>
            </>
        </div>
    )
}

export default SearchResultDropdown
