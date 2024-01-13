import React from "react";
import ShowCase from "../../components/ShowCase";
import Background from "../../components/Background";

const MainTemplate = ({ productsData, handleProductId }) => {
  return (
    <>
      <Background>
        <ShowCase
          handleProductId={handleProductId}
          productsData={productsData}
        />
      </Background>
    </>
  );
};

export default MainTemplate;
