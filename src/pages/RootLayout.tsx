import { Box } from "@mui/material";
import InfoBar from "../components/InfoBar";
import MainAppBar from "../components/MainAppBar";

const RootLayout = () => {
  return (
    <>
      <Box>
        <InfoBar />
        <MainAppBar />
      </Box>
    </>
  );
};
export default RootLayout;
