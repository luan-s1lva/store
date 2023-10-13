import React from "react";
import * as S from "./styles";

const ShowCase = ({ categoriesData, productsData }) => {
  return (
    <>
      <S.Container>
        {categoriesData.map((value) => (
          <S.Paper>
            <S.Card>
              <S.Typography>{value}</S.Typography>
              {Object.keys(productsData).map((val) => {
                if (productsData[val].category === value) {
                  return (
                    <>
                      <S.Image src={productsData[val].image} />
                      <br />
                    </>
                  );
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
