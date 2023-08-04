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
export const registerRestaurant = (restaurantData) => {
    const endpoint = "http://localhost:81/restaurants";
    return axios.post(endpoint, restaurantData)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            if (error.response) {
                console.log("Registration Error:", error.response.data);
            }
            throw new Error(`Error Registering Restaurant: ${error}`);
    });
};
export const getRestaurantById = (restaurantId) => {
    const endpoint = `http://localhost:81/restaurants/${restaurantId}`;
    console.log("Restaurant ID received:", restaurantId);
    return axios.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error Fetching Restaurant Details : ${error}`);
        })
}
