import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../templates";
import * as S from "./styles";

const Request = () => {
  const [productData, setProductData] = useState([]);
  const [productsImage, setProductsImage] = useState([]);
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState([]);
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [rate, setRate] = useState([]);
  const [open, setOpen] = useState(true);

  const getProducstsData = () => {
    try {
        axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProductData(res.data);
        filterData();
        setOpen(false);
      })
      .then((err) => {
        alert(err);
      });
    } catch (error) {
        alert(error);
    }
  };

  const filterData = () => {
    productData.map((value) => {
      setProductsImage(value.image);
      setCategory(value.category);
      setDescription(value.description);
      setTitle(value.title);
      setPrice(value.price);
      setRate(value.rate);
    });
  };

  useEffect(() => {
    getProducstsData();
  }, []);

  return (
    <>
      <Main
        productsImage={productsImage}
        category={category}
        description={description}
        title={title}
        price={price}
        rate={rate}
      />
      <S.Backdrop open={open}>
        <S.CircularProgress color="inherit" />
      </S.Backdrop>
    </>
  );
};

export default Request;
