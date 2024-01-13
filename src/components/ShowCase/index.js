import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

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
                  {/* <Link to="/product"> */}
                  <S.Card onClick={() => handleProductId(value)}>
                    <S.Image src={value.image} />
                  </S.Card>
                  {/* </Link> */}
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
