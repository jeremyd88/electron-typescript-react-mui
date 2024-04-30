import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import CreateTokenForm from "./CreateTokenForm";
import GetBlockHash from "./GetBlockHash";
import GetInfo from "./GetInfo";
import Greetings from "./Greetings";
import React from "react";
import theme from "../theme";

export default function App(): JSX.Element {
  return (
    // Setup theme and css baseline for the Material-UI app
    // https://mui.com/customization/theming/
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
        }}
      >
        <main>
          {/* This is where your app content should go */}
          {/* <Greetings /> */}
          <Router> 
              <Routes> 
                  <Route path="/" 
                      element={<Greetings />} /> 
                  <Route path="/getinfo"
                      element={<GetInfo />} />
                  <Route path="/createtokenform" 
                      element={<CreateTokenForm />} />
                  <Route path="/getblockhash"
                      element={<GetBlockHash />} />
                  <Route path="/greetings" 
                      element={<Greetings />} />
              </Routes> 
          </Router> 
        </main>
      </Box>
    </ThemeProvider>
  );
}
