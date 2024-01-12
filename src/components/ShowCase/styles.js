import styled from "styled-components";

import {
  Button as ButtonMUI,
  Card as CardMUI,
  CardMedia as CardMediaMUI,
  Grid as GridMUI,
  Paper as PaperMUI,
  TextField as TextFieldMUI,
  Typography as TypographyMUI,  
} from "@material-ui/core";

import {
  Search as SearchMUI,
  ShoppingCart as ShoppingCartMUI,
} from "@material-ui/icons";

export const Button = styled(ButtonMUI)``;

export const Card = styled(CardMUI)``;

export const CardMedia = styled(CardMediaMUI)``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 15px;
`;

export const Grid = styled(GridMUI)`
  
`;

export const Image = styled.img`
  height: 150px;
  margin: auto;
  display: flex;
`;

export const Paper = styled(PaperMUI)`
  variant: outlined;
  margin: auto;
  width: 180px;
`;

export const Link = styled.a``;

export const TextField = styled(TextFieldMUI)``;

export const Typography = styled(TypographyMUI)`
  display: flex;
  justify-content: center;
`;

export const SearchIcon = styled(SearchMUI)``;

export const ShoppingCartIcon = styled(ShoppingCartMUI)``;
