import React from "react";
import * as S from "./styles";

const ShowCase = ({ categoriesData, productsData, productsByCategory }) => {
  return (
    <>
      {Object.keys(productsByCategory).map((val) => {
        console.log(productsByCategory[val].image);
        return (
          <>
            <S.Image src={productsByCategory[val].image} />
          </>
        );
      })}
      <S.Container>
        {categoriesData.map((value) => (
          <S.Paper>
            <S.Card>
              <S.Typography>{value}</S.Typography>
              {/* {Object.keys(productsData).map((val) => {
                if (productsData[val].category === value) {
                  return (
                    <>
                      <S.Image src={productsData[val].image} />
                      <br />
                    </>
                  );
                }
              })} */}
            </S.Card>
          </S.Paper>
        ))}
      </S.Container>
    </>
  );
};

export default ShowCase;
