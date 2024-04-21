import * as React from 'react';

import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import CreateTokenForm from './CreateTokenForm';
import theme from "../theme";

function GetBlockHash() {


  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
        <Box sx={{ backgroundColor: (theme) => theme.palette.background.default }} > 
            <CreateTokenForm />
         </Box>
    </ThemeProvider>
  );
}

export default GetBlockHash;
