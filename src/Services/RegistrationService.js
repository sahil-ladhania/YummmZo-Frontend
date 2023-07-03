import axios from 'axios';

const registerUser = (userData) => {
    // Defining API Endpoint.
    const endpoint = "/api/users/register";
    return axios.post(endpoint , userData)
        .then((response) => {
            console.log(response.data.Message);
        })
        .catch((error) => {
            console.log(`Registration Failed !!! , ${error}`);
        })
}

export default registerUser;