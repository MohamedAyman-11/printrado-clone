import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import { Stack } from "@mui/material";
import SearchBox from "../SearchBox";
import { useState } from "react";
import ShoppingCartDrawer from "../ShoppingCartDrawer";
import UserIcons from "../UserIcons";

const MainAppBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", boxShadow: "none" }}
        >
          <Box className="container">
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box
                component={"img"}
                src="/images/logo.webp"
                sx={{
                  maxWidth: "350px",
                  width: "180px",
                  height: "100px",
                }}
              />
              <SearchBox />
              <UserIcons toggleDrawer={toggleDrawer} />
            </Stack>
          </Box>
        </AppBar>
      </Box>
      <ShoppingCartDrawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default MainAppBar;
