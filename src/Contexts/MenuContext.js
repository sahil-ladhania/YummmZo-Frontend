import React, {createContext , useEffect , useState} from "react";
import { fetchMenuItems } from '../Services/MenuService';

// Creating Context.
const MenuItemsContext = createContext();

// Defining Context Provider Component.
const MenuItemsProvider = ({children}) => {
    const [menuItems , setMenuItems] = useState(null);
    // Fetching Menu Items From Database.
    useEffect(() => {
        fetchMenuItems()
            .then((data) => {
                setMenuItems(data);
            })
            .catch((error) => {
                console.error(`Error Fetching Menu Items : ${error}`);
            })
    }, [])
    return(
        <MenuItemsContext.Provider value={menuItems}>
            { children }
        </MenuItemsContext.Provider>
    )
}

export {MenuItemsContext , MenuItemsProvider};