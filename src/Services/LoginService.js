import axios from "axios";

const loginUser = () => {
    const endpoint = "http://localhost:81/api/users/login";
    return axios.post(endpoint)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Invalid Credentials: ${error}`);
        })
}

export default loginUser;