import { Box } from "@mui/material";
import InfoBar from "../components/Layout/LargeHeader/InfoBar";
import MainAppBar from "../components/Layout/LargeHeader/MainAppBar";
import Navbar from "../components/Layout/LargeHeader/Navbar";
import MobileInfoBar from "../components/Layout/MobileHeader/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Layout/Footer";
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
        <Toaster position="top-center" reverseOrder={true} />
      </main>
    </>
  );
};
export default RootLayout;
