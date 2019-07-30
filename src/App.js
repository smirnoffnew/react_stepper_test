import React from "react";
import {
  MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
  Container,
} from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { pink, indigo, grey } from "@material-ui/core/colors";
import { StyledPaper } from "./styles";
import Start from './components/Start';
import Stepper from './components/Stepper';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: pink[600],
    },
    background: {
      paper: "#fff",
      default: grey[100],
    },
  },
  "@global": {
    "html, body, #root": {
      width: "100%",
    },
  },
});


function App() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="md">
            <StyledPaper component="div" elevation={2}>
            <Route exact path="/" component={Start} />
            <Route  path={`/stepper`} component={Stepper} />
            </StyledPaper>
          </Container>
        </MuiThemeProvider>
      </BrowserRouter>
  );
}

export default App;
