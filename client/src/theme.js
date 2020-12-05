import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f57c00",
      main: "#f57c00",
      dark: "#bb4d00",
      contrastText: "#fff",
    },
    secondary: {
      light: "#819ca9",
      main: "#546e7a",
      dark: "#29434e",
      contrastText: "#fff",
    },
  },
});

export default theme;
