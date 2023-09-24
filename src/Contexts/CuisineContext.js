import { createContext, useState } from "react";


// Creating Context.
const CuisineContext = createContext();

// Defining Context Provider.
const CuisineContextProvider = ({children}) => {
    // Defining States.
    const [cuisines , setCuisines] = useState([]);
    return(
        <CuisineContext.Provider value={{cuisines , setCuisines}}>
            {children}
        </CuisineContext.Provider>
    )
}

export {CuisineContext , CuisineContextProvider};