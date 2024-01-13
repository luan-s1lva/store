import React from "react";
import * as S from "./styles";

const Background = ({ children }) => {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  );
};

export default Background;
