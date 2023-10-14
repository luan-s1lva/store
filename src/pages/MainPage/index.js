import React, { useEffect, useState } from "react";
import axios from "axios";
import MainTemplate from "../../templates/MainTemplate";
import * as S from "./styles";

const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [productData, setProductData] = useState([]);
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

  const getAllProducstsData = () => {
    try {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setProductData(res.data);
          setOpen(false);
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async () => {
    const categories = await getAllCategories();
    const arr = [];
    categories.map((value) => {
      arr.push(`https://fakestoreapi.com/products/category/${value}`);
    });

    try {
      axios.all(
        arr.map(async (val) => {
          const response = await axios.get(val);

          setProductsByCategory(response.data);
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getAllCategories();
    getProductsByCategory();
  }, []);

  return (
    <>
      <MainTemplate
        categoriesData={categories}
        productsData={productData}
        productsByCategory={productsByCategory}
      />
      <S.Backdrop open={open}>
        <S.CircularProgress color="inherit" />
      </S.Backdrop>
    </>
  );
};

export default MainPage;
