import React from "react";
import * as S from "./styles";
import Input from "../Buttons/Input";

const SearchBar = () => {
    return(
        <>
        <S.Container>
            <S.Link><S.Button>Fazer Login</S.Button></S.Link>
            <Input />
            <S.Button><S.ShoppingCartIcon /></S.Button>
        </S.Container>
        </>
    );
}

export default SearchBar;