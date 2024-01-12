import styled from "styled-components";

import {
  Button as ButtonMUI,
  TextField as TextFieldMUI,
  InputLabel as InputLabelMUI,
  FormHelperText as FormHelperTextMUI,
  NativeSelect as NativeSelectMUI,
  FormControl as FormControlMUI,
} from "@material-ui/core";

import { Search as SearchMUI } from "@material-ui/icons";

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

export const InputLabel = styled(InputLabelMUI)``;

export const FormHelperText = styled(FormHelperTextMUI)``;

export const NativeSelect = styled(NativeSelectMUI)``;

export const FormControl = styled(FormControlMUI)``;