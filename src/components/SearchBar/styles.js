import styled from "styled-components";

import {
    Button as ButtonMUI, 
    TextField as TextFieldMUI,
} from '@material-ui/core';

import {
    Search as SearchMUI,
    ShoppingCart as ShoppingCartMUI,
} from '@material-ui/icons';

export const Button = styled(ButtonMUI)``;

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
`;

export const Link = styled.a``;

export const TextField = styled(TextFieldMUI)``;

export const SearchIcon = styled(SearchMUI)``;

export const ShoppingCartIcon = styled(ShoppingCartMUI)``;