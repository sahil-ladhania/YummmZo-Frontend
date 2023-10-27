import axios from "axios";

export const addItem = (userId , restaurantId , menuItemId) => {
    const endpoint = `http://localhost:81/api/cart/addItem/${userId}/${restaurantId}/${menuItemId}`;
    return axios.post(endpoint , userId , restaurantId , menuItemId)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error During Adding Item To Cart : ${error}`);
        });
};

export const incrementItem = (userId , restaurantId , menuItemId) => {
    const endpoint = `http://localhost:81/api/cart/incrementQuantity/${userId}/${restaurantId}/${menuItemId}`;
    return axios.post(endpoint , userId , restaurantId , menuItemId)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error During Incrementing Item To Cart : ${error}`);
        });
};

export const decrementItem = (userId , restaurantId , menuItemId) => {
    const endpoint = `http://localhost:81/api/cart/decrementQuantity/${userId}/${restaurantId}/${menuItemId}`;
    return axios.post(endpoint , userId , restaurantId , menuItemId)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error During Decrementing Item To Cart : ${error}`);
        });
};

export const fetchCartItems = (userId) => {
    const endpoint = `localhost:81/api/cart/${userId}`;
    return axios.get(endpoint , userId)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error During Fetching Items From Cart : ${error}`);
        });
};