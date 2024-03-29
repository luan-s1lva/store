import apiClient from "../apiClient";

export const responseSingleProduct = async (id) => {
  try {
    const response = await apiClient.get(
      `https://fakestoreapi.com/products/${id}`,
    );

    return response;
  } catch (error) {
    return error;
  }
};
