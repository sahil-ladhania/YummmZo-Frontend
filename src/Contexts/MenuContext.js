import React, {createContext , useState} from "react";

// Creating Context.
const MenuContext = createContext();

// Defining Context Provider Component.
const MenuContextProvider = ({children}) => {
    // Defining States.
    const [menuItems , setMenuItems] = useState([]);
    return(
        <MenuContext.Provider value={{menuItems , setMenuItems}}>
            {children}
        </MenuContext.Provider>
    )
}

export {MenuContext , MenuContextProvider};