import React, {createContext , useEffect , useState} from 'react';
import {getRestaurantById} from '../Services/RestaurantService'

// Creating Context.
const RestaurantDetailsContext = createContext();

// Defining Context Provider Component.
const RestaurantDetailsProvider = ({children , restaurantId}) => {
    // Defining States.
    const [restaurantDetails , setRestaurantDetails] = useState({});
    // Fetching All Restaurants From Database.
    useEffect(() => {
        if(restaurantId){
            getRestaurantById(restaurantId)
            .then((data) => {
                console.log("Fetched restaurant details:", data);
                return setRestaurantDetails(data);
            })
            .catch((error) => {
                console.log(`Error Fetching Restaurant Details : ${error}`);
            })
        }
    }, [restaurantId])
    return(
        <RestaurantDetailsContext.Provider value={{restaurantDetails , setRestaurantDetails}}>
            {children}
        </RestaurantDetailsContext.Provider>
    )
}

export {RestaurantDetailsContext , RestaurantDetailsProvider};