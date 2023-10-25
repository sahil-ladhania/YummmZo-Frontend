import React, {createContext , useEffect, useState} from 'react'

// Creating Context.
const UserContext = createContext();

// Defining Context Provider.
const UserContextProvider = ({children}) => {
    const initialUser = localStorage.getItem("user_data");
    const initialToken = localStorage.getItem("jwt_token");
    // Defining States.
    const [formData , setFormData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    });
    const [auth , setAuth] = useState({
        user : initialUser ? JSON.parse(initialUser) : null,
        token : initialToken || ''
    });
    useEffect(() => {
        localStorage.setItem("user_data" , JSON.stringify(auth.user));
        localStorage.setItem("jwt_token" , auth.token);
    }, [auth]);
    return(
        <UserContext.Provider value={{formData , setFormData , auth , setAuth}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext , UserContextProvider};