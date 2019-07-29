import styled from "styled-components";
import { Paper, Button } from "@material-ui/core";
import tick from "../images/tick.png";

export const StyledPaper = styled(Paper)`
  height: auto;
  margin-top: 2rem;
  marginbottom: 2rem;
  padding: 10%;
`;

export const PageTurnWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const PageTurnButton = styled(Button)`
  padding: 0.5rem !important;
  margin-left: 0.5rem !important;
  text-transform: none !important;
  width: 7rem !important;
  position: relative !important;
`;

export const ButtonListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-item: flex-start;

  flex-wrap: wrap;
  box-sizing: content-box;
`;

export const StyledGenreButton = styled(Button)`
  width: 9rem !important;
  text-transform: none !important;
  margin-bottom: 4% !important;
  margin-right: 2% !important;
  margin-left: 2% !important;
  cursor: pointer !important;
  padding: 0.5rem 0 0.5rem 0 !important;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const CompletionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CompletionImage = styled.div`
background-image: url(${tick});
width: 23rem;
height: 10rem;
background-position: center;
background-size: 38%;
background-repeat: no-repeat;
`;

