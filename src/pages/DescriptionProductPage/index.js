import React from "react";
import DescriptionProductTemplate from "../../templates/DescriptionProductTemplate";

const DescriptionProductPage = ({ productId }) => {
  return (
    <>
      <DescriptionProductTemplate productId={productId} />
    </>
  );
};

export default DescriptionProductPage;
