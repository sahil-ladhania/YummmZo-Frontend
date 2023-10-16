import axios from 'axios';

const registerUser = (userData) => {
    // Defining API Endpoint.
    const endpoint = "http://localhost:81/api/users/register";
    return axios.post(endpoint , userData)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log(`Registration Failed !!! : ${error}`);
        })
}

export default registerUser;