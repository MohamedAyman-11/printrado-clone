import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ed9c4b",
    },
    customColor: {
      main: "#3A748A",
      light: "#e0eaf0",
    },
    text: {
      primary: "#777777",
      secondary: "#333333",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
