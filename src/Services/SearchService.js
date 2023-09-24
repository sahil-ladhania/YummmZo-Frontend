import axios from "axios";

export const searchRestaurants = (query) => {
    const endpoint = `http://localhost:81/api/search/restaurants/${query}`;
    return axios.get(endpoint , query)
        .then((response) => {
            console.log('Restaurant You Search :', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Searching Restaurants : ${error}`);
            throw new Error(`Error Searching Restaurants : ${error}`);
        })
}

export const searchCuisines = (query) => {
    const endpoint = `http://localhost:81/api/search/cuisines/${query}`;
    return axios.get(endpoint , query)
        .then((response) => {
            console.log('Cuisine You Search :', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Searching Cuisines : ${error}`);
            throw new Error(`Error Searching Cuisines : ${error}`);
        })
}

export const searchInRestaurant = (query) => {
    const endpoint = `http://localhost:81/api/search/menuitems/${query}`;
    return axios.get(endpoint , query)
        .then((response) => {
            console.log('MenuItems You Search :', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Searching In Menu : ${error}`);
            throw new Error(`Error Searching In Menu : ${error}`);
        })
}