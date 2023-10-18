import React, { useEffect, useState } from "react";
import axios from "axios";
import MainTemplate from "../../templates/MainTemplate";
import * as S from "./styles";

const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [open, setOpen] = useState(true);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories",
      );

      setCategories(response.data);
      setOpen(false);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async () => {
    const categories = await getAllCategories();
    const arr = [];
    const arr2 = [];

    categories.map((value) => {
      arr.push(`https://fakestoreapi.com/products/category/${value}`);
    });

    try {
      axios.all(
        arr.map(async (val) => {
          const response = await axios.get(val)
          
          arr2.push(response.data);
        }),
      );
    } catch (error) {
      console.log(error);
    }

    setProductsByCategory(arr2);
  };

  useEffect(() => {
    getProductsByCategory();
  }, []);

  return (
    <>
      <MainTemplate
        categoriesData={categories}
        productsByCategory={productsByCategory}
      />
      <S.Backdrop open={open}>
        <S.CircularProgress color="inherit" />
      </S.Backdrop>
    </>
  );
};

export default MainPage;
