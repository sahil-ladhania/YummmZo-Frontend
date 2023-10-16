import React, {createContext , useState} from 'react'

// Creating Context.
const UserContext = createContext();

// Defining Context Provider.
const UserContextProvider = ({children}) => {
    // Defining States.
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    return(
        <UserContext.Provider value={{
            firstName , setFirstName,
            lastName , setLastName,
            email , setEmail,
            password , setPassword
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext , UserContextProvider};