import React from "react";
import * as S from "./styles";
import Input from "../Buttons/Input";

const SearchBar = ({ categoriesData, handleReload }) => {
  return (
    <>
      <S.Container>
        <S.Link>
          <S.Button>Fazer Login</S.Button>
        </S.Link>
        {categoriesData && (
          <Input handleReload={handleReload} categoriesData={categoriesData} />
        )}
        <S.Button>
          <S.ShoppingCartIcon />
        </S.Button>
      </S.Container>
    </>
  );
};

export default SearchBar;
