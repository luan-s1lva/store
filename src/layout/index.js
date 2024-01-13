import React from "react";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const Layout = ({ content, handleReload, categories }) => {
  return (
    <>
      <SearchBar handleReload={handleReload} categoriesData={categories} />
      {content}
      <Footer />
    </>
  );
};

export default Layout;
