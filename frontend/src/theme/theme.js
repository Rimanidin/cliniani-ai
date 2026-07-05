/**
 * --------------------------------------------------------
 * File Name : theme.js
 * Project   : CLINIANI AI
 * Purpose   : Global Material UI Theme
 * --------------------------------------------------------
 */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {

    primary: {
      main: "#1565C0",
    },

    secondary: {
      main: "#26A69A",
    },

    background: {
      default: "#F5F7FA",
    },

  },

  typography: {

    fontFamily: "Roboto, Arial, sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

  },

  shape: {

    borderRadius: 10,

  },

});

export default theme;