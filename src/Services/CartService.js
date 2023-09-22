import axios from "axios";

export const getCartDetailsForUser = (userId) => {
    const endpoint = `http://localhost:81/api/cart/${userId}`;
    return axios.get(endpoint , userId)
        .then((response) => {
            console.log('Cart Details :-', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Fetching Cart Details For User : ${error}`);
            throw new Error(`Error Fetching Cart Details For User : ${error}`);
        })
}