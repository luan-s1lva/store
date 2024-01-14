import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, redirect, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DescriptionProductPage from "../pages/DescriptionProductPage";
import Layout from "../layout";
import { responseSingleCategoryProducts } from "../services/singleProductCategory";
import { responseAllCategories } from "../services/categories";
import { responseAllProducts } from "../services/allProducts";
import { responseSingleProduct } from "../services/singleProduct";

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

  const handlePageChange = async (id) => {
    setProductId(id);
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
                    handlePageChange={handlePageChange}
                  />
                }
                categories={categories}
                handleReload={handleReload}
              />
            }
          />
          <Route
            path={"/product/:id"}
            element={
              <Layout
                content={<DescriptionProductPage productId={productId} />}
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
