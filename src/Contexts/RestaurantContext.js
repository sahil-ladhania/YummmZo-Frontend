import React, {createContext , useEffect , useState} from 'react'
import getAllRestaurants from '../Services/RestaurantService';

// Creating Context.
const RestaurantContext = createContext();

// Defining Context Provider Component.
const RestaurantProvider = ({children}) => {
    // Defining States.
    const [restaurants , setRestaurants] = useState([]);
    // Fetching All Restaurants From Database.
    useEffect(() => {
        getAllRestaurants()
            .then((data) => {
                setRestaurants(data);
            })
            .catch((error) => {
                console.log(`Error Fetching Restaurants : ${error}`);
            })
    },[]);
    return(
        <RestaurantContext.Provider value={restaurants}>
            {children}
        </RestaurantContext.Provider>
    )
}

export {RestaurantContext , RestaurantProvider};

