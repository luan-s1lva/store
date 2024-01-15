import React from "react";
import ShowCase from "../../components/ShowCase";
import Background from "../../components/Background";

const MainTemplate = ({ productsData, handlePageChange, handleCartMotion, cartProductData }) => {
  return (
    <>
      <Background>
        <ShowCase
        cartProductData={cartProductData}
          handleCartMotion={handleCartMotion}
          handlePageChange={handlePageChange}
          productsData={productsData}
        />
      </Background>
    </>
  );
};

export default MainTemplate;
