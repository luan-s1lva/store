import React, { useEffect } from "react";
import PropTypes from "prop-types";
import * as S from "./styles.js";

const Carousel = ({ imgSource }) => {
  return (
    <>
      {imgSource ? (
        <S.Container>
          <S.Paper>
            <S.Card>
              {Object.values(imgSource).map((value) => (
                Object.keys(value).map((index) => {
                  return(<h1>{index}</h1>);
                })
              ))}
            </S.Card>
          </S.Paper>
        </S.Container>
      ) : (
        <S.Container>
          <S.Paper>
            <S.Card>
              <S.Typography variant="h3">
                Erro, Não há dados para mostrar
              </S.Typography>
            </S.Card>
          </S.Paper>
        </S.Container>
      )}
    </>
  );
};

// Carousel.propTypes = {
//   imgSource: PropTypes.string,
// };

export default Carousel;
