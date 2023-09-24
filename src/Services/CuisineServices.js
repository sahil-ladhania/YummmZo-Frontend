import axios from "axios";

export const getAllCuisines = () => {
    const endpoint = 'http://localhost:81/cuisines';
    return axios.get(endpoint)
        .then((response) => {
            console.log('Cuisines :-', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Fetching Cuisines : ${error}`);
            throw new Error(`Error Fetching Cuisines : ${error}`);
        })
};