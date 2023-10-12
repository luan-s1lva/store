import React from "react";
import Background from "../components/Background";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Main = ({ productsImage, category, description, title, price, rate }) => {
  return (
    <>  
      <Background>
        <SearchBar />
        <Carousel 
          imgSource={productsImage}
          description={description} 
        />
        <Footer />
      </Background>
    </>
  );
};

export default Main;
