import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
});

apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return error.response;
    }
);

export default apiClient;