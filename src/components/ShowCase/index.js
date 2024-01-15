import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const ShowCase = ({ productsData, handlePageChange, handleCartMotion, cartProductData }) => {
  return (
    <>
    <p>{cartProductData.productId}</p>
      <S.Container>
        <S.Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
        >
          {productsData.map((value) => {
            return (
              <>
                <S.Grid item xs={4}>
                  <S.Card onClick={() => handlePageChange(value.id)}>
                    <Link to={`/product/${value.id}`}>
                      <S.Image src={value.image} />
                    </Link>
                    <S.Button onClick={() => handleCartMotion(value.id,1)}>COMPRAR</S.Button>
                  </S.Card>
                </S.Grid>
              </>
            );
          })}
        </S.Grid>
      </S.Container>
    </>
  );
};

export default ShowCase;
