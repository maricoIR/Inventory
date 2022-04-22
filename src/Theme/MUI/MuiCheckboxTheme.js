import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    root: {
      color: "#3b82f6",
      "&$checked": {
        color: "#3b82f6",
      },
    },
    primary: {
      main: "#3b82f6",
      darker: "#3b82f6",
    },
  },
});

export default theme;
