import React, {createContext , useEffect, useState} from 'react'

// Creating Context.
const UserContext = createContext();

// Defining Context Provider.
const UserContextProvider = ({children}) => {
    // Defining States.
    const [formData , setFormData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    });
    const [auth , setAuth] = useState({
        user : null,
        token : ""
    });
    return(
        <UserContext.Provider value={{formData , setFormData , auth , setAuth}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext , UserContextProvider};