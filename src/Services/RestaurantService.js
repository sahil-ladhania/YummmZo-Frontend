import axios from "axios";

export const getAllRestaurants = () => {
    const endpoint = "http://localhost:81/restaurants";
    return axios.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error Fetching Restaurants Data : ${error}`);
        })
}
export const getRestaurantById = (restaurantId) => {
    const endpoint = `http://localhost:81/restaurants/${restaurantId}`;
    return axios.get(endpoint , restaurantId)
        .then((response) => {
            console.log('Restaurant Data:', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Fetching Restaurant Data : ${error}`);
            throw new Error(`Error Fetching Restaurant Data : ${error}`);
        })
}
