import React from "react";
import * as S from "./styles";

const ShowCase = ({ categoriesData, productsData }) => {
  return (
    <>
      <S.Container>
        {categoriesData.map((valueCategory) => (
          <S.Paper>
            <S.Card>
              <S.Typography>{valueCategory}</S.Typography>
              {productsData.map((value) => {
                if (value.category == valueCategory) {
                  return(
                    <>
                    <S.Image src={value.image} />
                    </>
                  )
                }
              })}
            </S.Card>
          </S.Paper>
        ))}
      </S.Container>
    </>
  );
};

export default ShowCase;
