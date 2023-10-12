import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles.js";

const Carousel = ({ imgSource, description }) => {
  const [images, setImages] = useState([]);

  const filterData = () => {
    Object.values(imgSource).map((value) => {
      Object.keys(value).map((val) => {
        if (val == "image") {
          setImages(value[val]);
        }
      })
    })
  }

  return (
    <>
      {imgSource ? (
        <S.Container>
          <S.Paper>
            <S.Card>
              {Object.keys(imgSource).map((value) => {
                return(
                  <>
                  <S.Image src={imgSource[value].image} />
                  <S.Typography>{imgSource[value].description}</S.Typography>
                  <br />
                  </>
                );
              })}
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
