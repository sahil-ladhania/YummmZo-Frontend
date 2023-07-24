import React, {createContext , useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantDetails } from "../Services/RestaurantService";

// Creating Context.
const RestaurantDetailsContext = createContext();

// Defining Context Provider Component.
const RestaurantDetailsProvider = ({children}) => {
    const [restaurantDetails , setRestaurantDetails] = useState(null);
    const { id } = useParams(); 
    // Fetching Restaurant Details From Database.
    useEffect(() => {
        fetchRestaurantDetails(id)
            .then((data) => {
                setRestaurantDetails(data);
            })
            .catch((error) => {
                console.error(`Error Fetching Restaurant Details: ${error}`);
            })
    }, [id]);
    return(
        <RestaurantDetailsContext.Provider value={restaurantDetails}>
            {children}
        </RestaurantDetailsContext.Provider>
    )
}

export {RestaurantDetailsContext , RestaurantDetailsProvider};