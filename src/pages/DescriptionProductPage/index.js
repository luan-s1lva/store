import React from "react";
import DescriptionProductTemplate from "../../templates/DescriptionProductTemplate";

const DescriptionProductPage = ({ productData }) => {
  return (
    <>
      <DescriptionProductTemplate productData={productData} />
    </>
  );
};

export default DescriptionProductPage;
