import React from "react";
import ShowCase from "../../components/ShowCase";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import Background from "../../components/Background";

const MainTemplate = ({ categoriesData,productsData,productsByCategory,handleReload }) => {
  return (
    <>
      <Background>
        <SearchBar 
          handleReload={handleReload}
          categoriesData={categoriesData}
        />
        <ShowCase
          categoriesData={categoriesData}
          productsData={productsData}
        />
        <Footer />
      </Background>
    </>
  );
};

export default MainTemplate;
