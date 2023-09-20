import React, {createContext, useState} from "react";

// Creating Context.
const RestaurantDetailsContext = createContext();

// Defining Context Provider Component.
const RestaurantDetailsProvider = ({children}) => {
    // Defining States.
    const [restaurantDetails , setRestaurantDetails] = useState({});
    return(
        <RestaurantDetailsContext.Provider value={{restaurantDetails , setRestaurantDetails}}>
            {children}
        </RestaurantDetailsContext.Provider>
    )
}

export {RestaurantDetailsContext , RestaurantDetailsProvider};