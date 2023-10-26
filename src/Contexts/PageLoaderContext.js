import React, {createContext , useState} from 'react'

// Creating Context.
const PageLoaderContext = createContext();

// Defining Context Provider.
const PageLoaderContextProvider = ({children}) => {
    // State Variables.
    const [loading , setLoading] = useState(false);
    return(
        <PageLoaderContext.Provider value={{loading , setLoading}}>
            {children}
        </PageLoaderContext.Provider>
    )
}

export {PageLoaderContext , PageLoaderContextProvider};