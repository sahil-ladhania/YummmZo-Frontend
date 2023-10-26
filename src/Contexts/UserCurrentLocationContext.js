import React, {createContext , useEffect, useState} from "react";

// Creating Context.
const UserCurrentLocationContext = createContext();

// Defining Context Provider Component.
const UserCurrentLocationContextProvider = ({children}) => {
    // State Variable
    const [currentLocation , setCurrentLocation] = useState(() => {
        const storedCurrentLocation = localStorage.getItem("user_current_location");
        return storedCurrentLocation ? JSON.parse(storedCurrentLocation) : "";
    });
    useEffect(() => {
        localStorage.setItem("user_current_location" , JSON.stringify(currentLocation));
    }, [currentLocation]);
    return(
        <UserCurrentLocationContext.Provider value={{currentLocation , setCurrentLocation}}>
            {children}
        </UserCurrentLocationContext.Provider>
    )
}

export {UserCurrentLocationContext , UserCurrentLocationContextProvider};