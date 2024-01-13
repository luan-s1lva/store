import React, { useState } from "react";
import * as S from "./styles";

const Input = ({ categoriesData, handleReload }) => {
  const [category, setCategory] = useState([]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const onTrigger = (event) => {
    handleReload(event.target.category.value);
    event.preventDefault();
  };

  return (
    <>
      <S.Container>
        <form onSubmit={onTrigger}>
          <S.Container>
            <S.FormControl>
              <S.InputLabel htmlFor="category-native-helper">
                Categoria
              </S.InputLabel>
              <S.NativeSelect
                value={category}
                onChange={handleChange}
                inputProps={{
                  name: "category",
                  id: "category-native-helper",
                }}
              >
                <option value={null} selected>
                  Selecione
                </option>
                {categoriesData.map((value) => {
                  return (
                    <>
                      <option value={value}>{value}</option>
                    </>
                  );
                })}
              </S.NativeSelect>
              <S.FormHelperText>
                Selecione a categoria que deseja filtrar
              </S.FormHelperText>
            </S.FormControl>
            <S.Button type="submit">
              <S.SearchIcon />
            </S.Button>
          </S.Container>
        </form>
      </S.Container>
    </>
  );
};

export default Input;
