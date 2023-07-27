import React, {createContext , useEffect , useState} from "react";
import { fetchRestaurantDetails } from "../Services/RestaurantService";

// Creating Context.
const RestaurantDetailsContext = createContext();

// Defining Context Provider Component.
const RestaurantDetailsProvider = ({children , restaurantId}) => {
    const [restaurantDetails , setRestaurantDetails] = useState(null);
    // Fetching Restaurant Details From Database.
    useEffect(() => {
        fetchRestaurantDetails(restaurantId)
            .then((data) => {
                setRestaurantDetails(data);
            })
            .catch((error) => {
                console.error(`Error Fetching Restaurant Details: ${error}`);
            })
    }, [restaurantId]);
    return(
        <RestaurantDetailsContext.Provider value={restaurantDetails}>
            {children}
        </RestaurantDetailsContext.Provider>
    )
}

export {RestaurantDetailsContext , RestaurantDetailsProvider};