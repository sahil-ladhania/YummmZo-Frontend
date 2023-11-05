import axios from "axios";

export const loginUser = (userData) => {
    const endpoint = "http://localhost:81/api/users/login";
    return axios.post(endpoint , userData)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Invalid Credentials: ${error}`);
        })
}

export const getUserById = (userId) => {
    const endpoint = `http://localhost:81/api/users/${userId}`;
    return axios.get(endpoint , userId)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Error Fetching User Data : ${error}`);
        })
}