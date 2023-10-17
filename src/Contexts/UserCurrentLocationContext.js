import React, {createContext , useState} from "react";

// Creating Context.
const UserCurrentLocationContext = createContext();

// Defining Context Provider Component.
const UserCurrentLocationContextProvider = ({children}) => {
    // State Variable
    const [currentLocation , setCurrentLocation] = useState('');
    return(
        <UserCurrentLocationContext.Provider value={{currentLocation , setCurrentLocation}}>
            {children}
        </UserCurrentLocationContext.Provider>
    )
}

export {UserCurrentLocationContext , UserCurrentLocationContextProvider};