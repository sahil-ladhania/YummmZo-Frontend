import axios from 'axios';

export const getFastDeliveryRestaurants = () => {
    const endpoint = "http://localhost:81/restaurants/sort/fastDelivery";
    return axios.get(endpoint)
        .then((response) => {
            console.log(" Fast Delivery Restaurants:" , response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Fetching Fast Delivery Restaurant Data : ${error}`);
            throw new Error(`Error Fetching Fast Delivery Restaurant Data : ${error}`);
        });
}

export const getHighRatedRestaurants = () => {
    const endpoint = "http://localhost:81/restaurants/sort/byRating";
    return axios.get(endpoint)
        .then((response) => {
            console.log(" High Rated Restaurants:" , response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Fetching High Rated Restaurant Data : ${error}`);
            throw new Error(`Error Fetching High Rated Restaurant Data : ${error}`);
        });
}

export const getCostLTHRestaurants = () => {
    const endpoint = "http://localhost:81/restaurants/sort/byCostLowToHigh";
    return axios.get(endpoint)
        .then((response) => {
            console.log(" CostLTH Restaurants:" , response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Fetching CostLTH Restaurant Data : ${error}`);
            throw new Error(`Error Fetching CostLTH Restaurant Data : ${error}`);
        })
}

export const getCostHTLRestaurants = () => {
    const endpoint = "http://localhost:81/restaurants/sort/byCostHighToLow";
    return axios.get(endpoint)
        .then((response) => {
            console.log(" CostHTL Restaurants:" , response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(`Error Fetching CostHTL Restaurant Data : ${error}`);
            throw new Error(`Error Fetching CostHTL Restaurant Data : ${error}`);
        })
}