import axios from "axios";

export const getAllMenuItems = (restaurantId) => {
    const endpoint = `http://localhost:81/restaurants/${restaurantId}/menu`;
    console.log("Restaurant ID received:", restaurantId);
    return axios.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error Fetching Restaurant Details : ${error}`);
        });
};