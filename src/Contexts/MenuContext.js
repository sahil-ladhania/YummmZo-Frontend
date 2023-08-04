import React, {createContext , useEffect , useState} from 'react';
import { getAllMenuItems } from '../Services/MenuService';

// Creating Context.
const MenuItemsContext = createContext();

// Defining Context Provider Component.
const MenuItemsProvider = ({children , restaurantId}) => {
    // Defining States.
    const [menuItems , setMenuItems] = useState([]);
    // Fetching All MenuItems For A Restaurant From Database.
    useEffect(() => {
        if(restaurantId){
            getAllMenuItems(restaurantId)
                .then((data) => {
                    console.log("Fetched MenuItems:", data);
                    return setMenuItems(data);
                })
                .catch((error) => {
                    console.log(`Error Fetching MenuItems : ${error}`);
                })
        }
    }, [restaurantId]);
    return(
        <MenuItemsContext.Provider value={{menuItems , setMenuItems}}>
            {children}
        </MenuItemsContext.Provider>
    )
}

export {MenuItemsContext , MenuItemsProvider};