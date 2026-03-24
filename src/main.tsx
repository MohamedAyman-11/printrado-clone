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
});
createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
