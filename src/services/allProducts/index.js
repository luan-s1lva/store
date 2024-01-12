import apiClient from "../apiClient";

export const responseAllProducts = async () => {
    try {
        const response = await apiClient.get(`https://fakestoreapi.com/products`);

        return response;
    } catch (error) {
        return error;
    }
}