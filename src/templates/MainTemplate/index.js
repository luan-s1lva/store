import React from "react";
import ShowCase from "../../components/ShowCase";
import Footer from "../../components/Footer";
import Background from "../../components/Background";

const MainTemplate = ({ productsData, handleProductId }) => {
  return (
    <>
      <Background>
        <ShowCase
          handleProductId={handleProductId}
          productsData={productsData}
        />
        <Footer />
      </Background>
    </>
  );
};

export default MainTemplate;
