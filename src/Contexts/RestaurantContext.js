import React, {createContext , useState} from 'react'

// Creating Context.
const RestaurantContext = createContext();

// Defining Context Provider.
const RestaurantProvider = ({children}) => {
    // Defining States.
    const [restaurants , setRestaurants] = useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = useState(restaurants);
    const [isFastDeliveryActive, setIsFastDeliveryActive] = useState(false);
    const [isRatingActive, setIsRatingActive] = useState(false);
    const [isCostLTHActive, setIsCostLTHActive] = useState(false);
    const [isCostHTLActive, setIsCostHTLActive] = useState(false);
    return(
        <RestaurantContext.Provider value={{
                restaurants, 
                setRestaurants,
                filteredRestaurants,
                setFilteredRestaurants,
                isFastDeliveryActive,
                setIsFastDeliveryActive,
                isRatingActive,
                setIsRatingActive,
                isCostLTHActive,
                setIsCostLTHActive,
                isCostHTLActive,
                setIsCostHTLActive
            }}>
            {children}
        </RestaurantContext.Provider>
    )
}

export {RestaurantContext , RestaurantProvider};
