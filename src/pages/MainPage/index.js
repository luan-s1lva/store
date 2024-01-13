import React, { useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import * as S from "./styles";

const MainPage = ({ handleProductId, productsData }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <MainTemplate
        handleProductId={handleProductId}
        productsData={productsData}
      />
      {/* <S.Backdrop open={open}>
        <S.CircularProgress color="inherit" />
      </S.Backdrop> */}
    </>
  );
};

export default MainPage;
