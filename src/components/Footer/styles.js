import styled from "styled-components";

import { Typography as TypographyMUI } from "@material-ui/core";

import {
  Email as EmailMUI,
  LinkedIn as LinkedInMUI,
  GitHub as GitHubMUI,
} from "@material-ui/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Email = styled(EmailMUI)`
  margin-bottom: -5px;
`;

export const LinkedIn = styled(LinkedInMUI)`
  margin-bottom: -5px;
`;

export const Github = styled(GitHubMUI)`
  margin-bottom: -5px;
`;

export const Footer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: center;
  bottom: 0;
  position: fixed;
  width: 100%;
  flex-direction: column;
`;

export const Typography = styled(TypographyMUI)`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  padding-top: 18px;
`;

export const P = styled.p`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 15px;
`;

export const A = styled.a``;

export const Small = styled.small`
  display: flex;
  justify-content: center;
`;
