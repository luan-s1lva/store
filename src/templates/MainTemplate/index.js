import React from "react";
import ShowCase from "../../components/ShowCase";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import Background from "../../components/Background";

const MainTemplate = ({ categoriesData, productsByCategory }) => {
  return (
    <>
      <Background>
        <SearchBar />
        <ShowCase
          categoriesData={categoriesData}
          productsByCategory={productsByCategory}
        />
        <Footer />
      </Background>
    </>
  );
};

export default MainTemplate;
