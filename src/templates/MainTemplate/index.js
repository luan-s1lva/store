import React from "react";
import ShowCase from "../../components/ShowCase";
import Background from "../../components/Background";

const MainTemplate = ({ productsData, handlePageChange }) => {
  return (
    <>
      <Background>
        <ShowCase
          handlePageChange={handlePageChange}
          productsData={productsData}
        />
      </Background>
    </>
  );
};

export default MainTemplate;
