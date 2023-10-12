import styled from "styled-components";

import {
  Button as ButtonMUI,
  TextField as TextFieldMUI,
  Typography as TypographyMUI,
  Paper as PaperMUI,
  Card as CardMUI,
  CardMedia as CardMediaMUI,
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
  margin-top: 15px;
`;

export const Image = styled.img`
  height: 200px;
  margin: auto;
  display: flex;
`;

export const Paper = styled(PaperMUI)`
  variant: outlined;
`;

export const Link = styled.a``;

export const TextField = styled(TextFieldMUI)``;

export const Typography = styled(TypographyMUI)``;

export const SearchIcon = styled(SearchMUI)``;

export const ShoppingCartIcon = styled(ShoppingCartMUI)``;
