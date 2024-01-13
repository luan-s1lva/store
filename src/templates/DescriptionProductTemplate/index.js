import React from "react";
import Background from "../../components/Background";
import ProductDetailer from "../../components/ProductDetailer";
import * as S from "./styles";

const DescriptionProductTemplate = ({ productData }) => {
  return (
    <>
      <Background>
        <ProductDetailer productData={productData} />
      </Background>
    </>
  );
};

export default DescriptionProductTemplate;
