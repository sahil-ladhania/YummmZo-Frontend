import axios from "axios";

const loginUser = (userData) => {
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

export default loginUser;