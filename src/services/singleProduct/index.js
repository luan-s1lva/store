import apiClient from "../apiClient";

export const responseSingleCategoryProducts = async (keyword) => {
    try {
        const response = await apiClient.get(`https://fakestoreapi.com/products/category/${keyword}`);

        return response;
    } catch (error) {
        return error;
    }
}