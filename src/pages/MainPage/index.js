import React, { useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import * as S from "./styles";

const MainPage = ({ handlePageChange, productsData, handleCartMotion, cartProductData }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <MainTemplate
      cartProductData={cartProductData}
        handleCartMotion={handleCartMotion}
        handlePageChange={handlePageChange}
        productsData={productsData}
      />
      {/* <S.Backdrop open={open}>
        <S.CircularProgress color="inherit" />
      </S.Backdrop> */}
    </>
  );
};

export default MainPage;
