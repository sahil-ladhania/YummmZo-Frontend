import React from 'react'

const SearchResults = ({ searchResults }) => {
    return (
        <div>
            <>
            <div className="max-h-80 overflow-y-auto">
                {/* max-h-80 sets a maximum height for the results */}
                {/* overflow-y-auto enables vertical scrolling when needed */}
                <h2 className="mb-4 text-lg font-semibold">Search Results:</h2>
                <ul>
                    {searchResults.map((result, index) => (
                    <li key={index} className="mb-2">{result.name}</li>
                    ))}
                </ul>
            </div>
            </>
        </div>
    )
}

export default SearchResults
