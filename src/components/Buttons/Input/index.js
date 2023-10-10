import React from "react";
import * as S from "./styles";

const Input = () => {
  return (
    <>
      <S.Container>
        <S.TextField variant="outlined" />
        <S.Button>
          <S.SearchIcon />
        </S.Button>
      </S.Container>
    </>
  );
};

export default Input;
