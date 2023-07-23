import React, {createContext , useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantDetails } from "../Services/RestaurantService";

// Creating Context.
const RestaurantDetailsContext = createContext();

// Defining Context Provider Component.
const RestaurantDetailsProvider = ({children}) => {
    const [restaurantDetails , setRestaurantDetails] = useState(null);
    const [mounted , setMounted] = useState(false);
    const { id } = useParams();
    console.log('ID from URL:', id);
    // Fetching Restaurant Details From Database.
    useEffect(() => {
        console.log('useEffect in RestaurantDetailsContext triggered');
        if(id && !mounted){
            console.log('Fetching restaurant details for ID:', id);
            fetchRestaurantDetails(id)
            .then((data) => {
                console.log('Restaurant Details fetched:', data);
                setRestaurantDetails(data);
                setMounted(true);
            }) 
            .catch((error) => {
                console.error(`Error Fetching Restaurant Details: ${error}`);
            });
        }
    }, [id , mounted]);
    console.log('Restaurant Details in Provider:', restaurantDetails);
    return(
        <RestaurantDetailsContext.Provider value={restaurantDetails}>
            {children}
        </RestaurantDetailsContext.Provider>
    )
}

export {RestaurantDetailsContext , RestaurantDetailsProvider};