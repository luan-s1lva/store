import React from "react";
import * as S from "./styles";

const ShowCase = ({ productsData, handleProductId }) => {
  return (
    <>
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
                  <S.Card>
                    <S.Image src={value.image} />
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
