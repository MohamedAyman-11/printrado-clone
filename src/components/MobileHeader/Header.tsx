import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Badge, badgeClasses, IconButton, Stack, styled } from "@mui/material";
import {
  FavoriteBorderOutlined,
  Menu,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import LinksDrawer from "./Drawer";
import SearchBox from "../SearchBox";
import ShoppingCartDrawer from "../ShoppingCartDrawer";
import UserIcons from "./UserIcons";

const MobileInfoBar = () => {
  const [openLinkDrawer, setOpenLinkDrawer] = useState(false);

  const toggleLinkDrawer = (newOpen: boolean) => () => {
    setOpenLinkDrawer(newOpen);
  };
  const [openShoppingDrawer, setOpenShoppingDrawer] = useState(false);

  const toggleLShoppingDrawer = (newOpen: boolean) => () => {
    setOpenShoppingDrawer(newOpen);
  };
  return (
    <>
      <Box>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#fbfaf7",
            boxShadow: "none",
          }}
        >
          <Box className="container">
            <Stack
              py={"6pLinksDrawerx"}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <IconButton
                onClick={toggleLinkDrawer(true)}
                disableRipple
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  transition: "all 0.3s ease",
                  mr: 2,
                  backgroundColor: "transparent",
                  borderRadius: "10px",
                  "& :hover": {
                    color: "#999",
                  },
                }}
              >
                <Menu
                  sx={{
                    transition: "all 0.3s ease",
                    fontSize: "28px",
                    color: "#333",
                    background: "transparent",
                  }}
                />
              </IconButton>
              <Box
                component={"img"}
                src="/images/logo.webp"
                sx={{
                  maxWidth: "80px",
                  width: "80px",
                  height: "40px",
                }}
              />
              <UserIcons toggleLShoppingDrawer={toggleLShoppingDrawer} />
            </Stack>
          </Box>
        </AppBar>
      </Box>
      <Box className={"container"} mt={"10px"}>
        <SearchBox />
      </Box>
      <LinksDrawer open={openLinkDrawer} toggleDrawer={toggleLinkDrawer} />
      <ShoppingCartDrawer
        open={openShoppingDrawer}
        toggleDrawer={toggleLShoppingDrawer}
      />
    </>
  );
};
export default MobileInfoBar;
