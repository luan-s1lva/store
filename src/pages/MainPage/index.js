import React, { useCallback, useEffect, useState } from "react";
import { responseAllProducts } from "../../services/allProducts";
import MainTemplate from "../../templates/MainTemplate";
import * as S from "./styles";

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

  useEffect(() => {
    onGetAllProductsData();
  }, []);

  return (
    <>
      <MainTemplate
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
