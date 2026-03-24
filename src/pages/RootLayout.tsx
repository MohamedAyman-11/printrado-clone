import { Box } from "@mui/material";
import InfoBar from "../components/LargeHeader/InfoBar";
import MainAppBar from "../components/LargeHeader/MainAppBar";
import Navbar from "../components/LargeHeader/Navbar";
import MobileInfoBar from "../components/MobileHeader/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <main>
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <InfoBar />
          <MainAppBar />
          <Navbar />
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              lg: "none",
            },
          }}
        >
          <MobileInfoBar />
        </Box>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
export default RootLayout;
