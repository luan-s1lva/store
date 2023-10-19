import React, { useEffect, useState } from "react";
import axios from "axios";
import MainTemplate from "../../templates/MainTemplate";
import * as S from "./styles";

const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [open, setOpen] = useState(true);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories",
      );

      if (response.status == 200) {
        setCategories(response.data);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducstsData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      
      if (response.status == 200) {
        setProductsData(response.data);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllProducstsData();
  }, []);

  return (
    <>
      <MainTemplate
        categoriesData={categories}
        productsData={productsData}
      />
      <S.Backdrop open={open}>
        <S.CircularProgress color="inherit" />
      </S.Backdrop>
    </>
  );
};

export default MainPage;
