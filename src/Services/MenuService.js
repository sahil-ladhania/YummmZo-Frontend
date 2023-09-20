import axios from "axios";

export const getAllMenuItemsForRestaurant = (restaurantId) => {
    const endpoint = `http://localhost:81/restaurants/${restaurantId}/menu`;
    return axios.get(endpoint , restaurantId)
        .then((response) => {
            console.log('Menu Items :-', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Fetching Menu Items : ${error}`);
            throw new Error(`Error Fetching Menu Items : ${error}`);
        })
}