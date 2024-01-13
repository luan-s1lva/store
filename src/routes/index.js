import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DescriptionProductPage from "../pages/DescriptionProductPage";
import Layout from "../layout";
import { responseSingleCategoryProducts } from "../services/singleProduct";
import { responseAllCategories } from "../services/categories";
import { responseAllProducts } from "../services/allProducts";

const Router = () => {
  const [productId, setProductId] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);

  const onGetAllCategories = async () => {
    const getAllCategories = await responseAllCategories();

    setCategories(getAllCategories);
  };

  const onGetAllProductsData = async () => {
    const getAllProductsData = await responseAllProducts();

    setProductsData(getAllProductsData);
  };

  const handleProductId = (event) => {
    setProductId(event.target.value);
  };

  const handleReload = async (newData) => {
    const getProductsByCategory = await responseSingleCategoryProducts(newData);

    setProductsData(getProductsByCategory);
  };

  useEffect(() => {
    onGetAllCategories();
    onGetAllProductsData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout
                content={
                  <MainPage
                    productsData={productsData}
                    handleProductId={handleProductId}
                  />
                }
                categories={categories}
                handleReload={handleReload}
              />
            }
          />
          <Route 
            path={`/product`} 
            element={
              <Layout
                content={
                  <DescriptionProductPage />
                }
                categories={categories}
                handleReload={handleReload}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
