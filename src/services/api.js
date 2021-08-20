import axios from "axios";

export let axiosInstanceNotToken = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/posts",
});
export let axiosInstance = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
});
