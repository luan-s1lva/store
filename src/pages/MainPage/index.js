import React, { useEffect, useState } from "react";
import axios from "axios";
import MainTemplate from "../../templates/MainTemplate";
import * as S from "./styles";

const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [productData, setProductData] = useState([]);
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
  // const getProductsByCategory = (categories) => {
  //   try {
  //     axios.get(`https://fakestoreapi.com/products/category/${categories}`)
  //     .then((res) => {
  //       setProducts(res.data);
  //       setOpen(false);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getAllCategories();
    getAllProducstsData();
  }, []);

  return (
    <>
      <MainTemplate categoriesData={categories} productsData={productData} />
      <S.Backdrop open={open}>
        <S.CircularProgress color="inherit" />
      </S.Backdrop>
    </>
  );
};

export default MainPage;
