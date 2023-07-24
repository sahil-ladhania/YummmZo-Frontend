import axios from "axios";

export const fetchMenuItems = (restaurantId) => {
    const endpoint = `http://localhost:81/restaurants/${restaurantId}/menu`;
    return axios.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error Fetching The Menu Items : ${error}`);
        })
}