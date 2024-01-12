import apiClient from "../apiClient";

export const responseAllCategories = async () => {
    try {
        const response = await apiClient.get(`https://fakestoreapi.com/products/categories`);

        return response;
    } catch (error) {
        return error;
    }
}