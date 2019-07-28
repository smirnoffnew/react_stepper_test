import React from "react";
import {
  MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
  Container,
} from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { deepPurple, indigo, grey } from "@material-ui/core/colors";
import { StyledPaper } from "./styles";
import Start from './components/Start';
import Stepper from './components/Stepper';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: deepPurple[500],
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
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="md">
            <StyledPaper component="div" elevation={2}>
            <Route exact path="/" component={Start} />
            <Route  path='/step/:id' component={Stepper} />
            </StyledPaper>
          </Container>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider> 

  );
}

export default App;
