import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store.ts";
import { HelmetProvider } from "react-helmet-async";
const theme = createTheme({
  typography: {
    fontFamily: "Urbanist, Roboto, Helvetica, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#f59a57",
      light: "#df8c4f",
    },
    customColor: {
      main: "#3A748A",
      light: "#e0eaf0",
    },
    text: {
      primary: "#ed9c4b",
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
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </HelmetProvider>,
);
