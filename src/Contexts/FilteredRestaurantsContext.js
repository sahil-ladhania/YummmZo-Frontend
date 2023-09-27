import React, { createContext, useState } from "react";

// Creating Context.
const FilteredRestaurantsContext = createContext();

// Defining Context Provider Component.
const FilteredRestaurantsProvider = ({ children }) => {
    // Defining States.
    const [isFastDeliveryActive, setIsFastDeliveryActive] = useState(false);
    const [fastDeliveryRestaurants, setFastDeliveryRestaurants] = useState([]);
    const [isRatingActive, setIsRatingActive] = useState(false);
    const [highRatedRestaurants, setHighRatedRestaurants] = useState([]);
    const [isCostLTHActive, setIsCostLTHActive] = useState(false);
    const [costLTHRestaurants, setCostLTHRestaurants] = useState([]);
    const [isCostHTLActive, setIsCostHTLActive] = useState(false);
    const [costHTLRestaurants, setCostHTLRestaurants] = useState([]);
    return (
        <FilteredRestaurantsContext.Provider value={{
            isFastDeliveryActive,
            setIsFastDeliveryActive,
            fastDeliveryRestaurants,
            setFastDeliveryRestaurants,
            isRatingActive,
            setIsRatingActive,
            highRatedRestaurants,
            setHighRatedRestaurants,
            isCostLTHActive,
            setIsCostLTHActive,
            costLTHRestaurants,
            setCostLTHRestaurants,
            isCostHTLActive,
            setIsCostHTLActive,
            costHTLRestaurants,
            setCostHTLRestaurants,
        }}>
            {children}
        </FilteredRestaurantsContext.Provider>
    );
};

export { FilteredRestaurantsContext, FilteredRestaurantsProvider };
