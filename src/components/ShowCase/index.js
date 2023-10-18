import React from "react";
import * as S from "./styles";

const ShowCase = ({ categoriesData, productsByCategory }) => {

  const filterData = async () => {
    // for (let i = 0; i < productsByCategory.length; i++) {
    //   Object.keys(productsByCategory[i]).map((value) => {
    //     console.log(productsByCategory[i][value].image);
    //   })
    // }
    Object.keys(productsByCategory).map((value) => {
      Object.keys(productsByCategory[value]).map((val) => {
        console.log((productsByCategory[value][val].image)); 
      })
    })
  }

  return (
    <>
    {/* <button onClick={() => filterData()}>clique</button> */}
      <S.Container>
        {/* {categoriesData.map((value) => ( */}
          <S.Paper>
            <S.Card>
              {/* <S.Typography>{value}</S.Typography> */}
              {Object.keys(productsByCategory).map((value) => {
                {Object.keys(productsByCategory[value]).map((val) => (
                  <img src={productsByCategory[value][val].image} />
                ))}
              })}
            </S.Card>
          </S.Paper>
        {/* ))} */}
      </S.Container>
    </>
  );
};

export default ShowCase;
