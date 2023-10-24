import React, {createContext , useContext , useEffect, useState} from 'react'

// Creating Context.
const AuthContext = createContext();

// Defining Context Provider.
const AuthContextProvider = ({children}) => {
    // Defining States.
    const [auth , setAuth] = useState({
        user : null,
        token : ""
    });
    return(
        <AuthContext.Provider value={[auth , setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
// custom hook
const useAuth = () => useContext(AuthContext);

export {useAuth , AuthContextProvider};