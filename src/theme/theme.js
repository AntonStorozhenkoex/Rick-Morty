import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    cardBgColor: "#0C7D85",
    cardBorderColor: "#CAE26A",
  },
  components: {
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        standard: {
          background: "#407772",
          borderRadius: 7,
          border: "none",
          color: "white",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: {
          background: "#407772",
          borderRadius: 7,
          color: "white",
        },
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});
