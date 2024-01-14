import React from "react";
import Background from "../../components/Background";
import ProductDetailer from "../../components/ProductDetailer";
import * as S from "./styles";

const DescriptionProductTemplate = ({ productId }) => {
  return (
    <>
      <Background>
        <ProductDetailer productId={productId} />
      </Background>
    </>
  );
};

export default DescriptionProductTemplate;
