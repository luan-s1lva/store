import React, { useCallback, useEffect, useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import { responseAllCategories } from "../../services/categories";
import { responseAllProducts } from "../../services/allProducts";
import * as S from "./styles";
import { responseSingleCategoryProducts } from "../../services/singleProduct";

const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [open, setOpen] = useState(true);

  const onGetAllProductsData = useCallback(
    async () => {
      const getAllProductsData = await responseAllProducts();

      setProductsData(getAllProductsData);
    }, [responseAllProducts]
  );

  const onGetAllCategories = async () => {
    const getAllCategories = await responseAllCategories();

    setCategories(getAllCategories);
  };

  const handleReload = async (newData) => {
    const getProductsByCategory = await responseSingleCategoryProducts(newData);

    setProductsData(getProductsByCategory);
  }

  useEffect(() => {
    onGetAllProductsData();
    onGetAllCategories();
  }, []);

  return (
    <>
      <MainTemplate
        handleReload={handleReload}
        categoriesData={categories}
        productsData={productsData}
      />
      {/* <S.Backdrop open={open}>
        <S.CircularProgress color="inherit" />
      </S.Backdrop> */}
    </>
  );
};

export default MainPage;
