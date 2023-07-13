import axios from "axios";

const getAllRestaurants = () => {
    const endpoint = "http://localhost:81/restaurants";
    return axios.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error Fetching Restaurants Data : ${error}`);
        })
}

export default getAllRestaurants;