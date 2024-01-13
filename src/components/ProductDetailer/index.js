import React from "react";
import * as S from "./styles";

const ProductDetailer = ({ productData }) => {
  const show = () => {
    alert(productData);
  };

  return (
    <>
      <button onClick={show}>Click</button>
      <S.Container>
        <S.Card variant="outlined">
          <S.Grid container spacing={3}>
            <S.Grid item xs={6}>
              {/* <S.Image src={id}/> */}
            </S.Grid>

            <S.Grid item xs={6}>
              {/* aqui vai o texto e as informação do produto */}
            </S.Grid>
          </S.Grid>
        </S.Card>
      </S.Container>
    </>
  );
};

export default ProductDetailer;
