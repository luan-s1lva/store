import React from "react";
import Background from "../components/Background";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Main = ({ productsData }) => {
  return (
    <>
      <Background>
        <SearchBar />
        <Carousel productsData={productsData} />
        <Footer />
      </Background>
    </>
  );
};

export default Main;
