import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles.js";

const Carousel = ({ productsData }) => {
  return (
    <>
      {productsData ? (
        <S.Container>
          {Object.keys(productsData).map((value) => {
            return (
              <>
                <S.Paper>
                  <S.Card>
                    <S.Image src={productsData[value].image} />
                    <br />
                  </S.Card>
                </S.Paper>
              </>
            );
          })}
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

Carousel.propTypes = {
  productsData: PropTypes.object.isRequired,
};

export default Carousel;
