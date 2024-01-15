import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DescriptionProductPage from "../pages/DescriptionProductPage";
import Layout from "../layout";
import { responseSingleCategoryProducts } from "../services/singleProductCategory";
import { responseAllCategories } from "../services/categories";
import { responseAllProducts } from "../services/allProducts";
import { responseSingleProduct } from "../services/singleProduct";
import CartPage from "../pages/CartPage";

const Router = () => {
  const [productId, setProductId] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [cartProductData, setCartProductData] = useState({});
  const [categories, setCategories] = useState([]);
  var arr = [];  

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

  const handleCartMotion = (productId,quantity) => {
    setCartProductData({"productId": productId, "quantity": quantity});
    arr.push({"productId": productId, "quantity": quantity});

    console.log(arr);
  }

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
                    cartProductData={cartProductData}
                    productsData={productsData}
                    handlePageChange={handlePageChange}
                    handleCartMotion={handleCartMotion}
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
              />
            }
          />
          <Route path={"/cart"} element={<Layout content={<CartPage />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
