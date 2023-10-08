import React from "react";
import * as S from "./styles";

const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.Typography>Author: Luan Silva</S.Typography>
        <S.Typography>
          Powered by
        </S.Typography>
        <S.Container>
          <S.P>
            <S.A
              href="https://www.linkedin.com/in/luan-silva-25303821a/"
              target="_blank"
            >
              <S.LinkedIn />
            </S.A>
          </S.P>
          <S.P>
            <S.A href="https://github.com/luan-s1lva/" target="_blank">
              <S.Github />
            </S.A>
          </S.P>
          <S.P>
            <S.A href="mailto:l.carmmo141@gmail.com">
              <S.Email />
            </S.A>
          </S.P>
        </S.Container>
      </S.Footer>
    </>
  );
};

export default Footer;
