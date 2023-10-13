import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../templates";
import * as S from "./styles";

const Request = () => {
  const [productData, setProductData] = useState([]);
  const [open, setOpen] = useState(true);

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

  useEffect(() => {
    getAllProducstsData();
  }, []);

  return (
    <>
      <Main productsData={productData} />
      <S.Backdrop open={open}>
        <S.CircularProgress color="inherit" />
      </S.Backdrop>
    </>
  );
};

export default Request;
