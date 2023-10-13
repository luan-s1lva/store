import React, { useEffect, useState } from "react";
import axios from "axios";
import MainTemplate from "../../templates/MainTemplate";
import * as S from "./styles";

const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [productData, setProductData] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [open, setOpen] = useState(true);

  const getAllCategories = () => {
    try {
      axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => {
          setCategories(res.data);
          setOpen(false);
        })
        .catch((err) => {
          alert(err);
        });
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

  const getProductsByCategory = () => {
    const arr = [];
    try {
        for (let i = 0; i < categories.length; i++) {
          axios
            .get("https://fakestoreapi.com/products/category/"+categories[i])
            .then((res) => {
              arr.push([res.data]);
              setProductsByCategory(arr);
              setOpen(false);
            })
            .catch((err) => {
              alert(err);
            });
        }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllProducstsData();
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
