import React, {createContext , useState} from 'react'

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
    return(
        <UserContext.Provider value={{formData , setFormData}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext , UserContextProvider};