import styled from "styled-components";

import {
    Button as ButtonMUI, 
    TextField as TextFieldMUI,
} from '@material-ui/core';

import {
    Search as SearchMUI,
} from '@material-ui/icons';

export const Button = styled(ButtonMUI)``;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;

export const TextField = styled(TextFieldMUI)`
    width: 30em;
`;

export const SearchIcon = styled(SearchMUI)``;