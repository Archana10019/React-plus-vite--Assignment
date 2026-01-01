import axios from'axios';
const axioInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});
export default axioInstance;