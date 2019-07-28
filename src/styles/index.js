import styled from "styled-components";
import { Paper, Button } from "@material-ui/core";


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